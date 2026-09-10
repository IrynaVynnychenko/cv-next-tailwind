import { readFileSync } from 'node:fs'

// Key file lives at public/<KEY>.txt so it's copied to the static export root and is reachable
// at https://vynnychenko.dev/<KEY>.txt - IndexNow checks that file to verify we own the host.
const HOST = 'vynnychenko.dev'
const KEY = '652a61dc338bc95a57ae1a0f236a6319'
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`
const SITEMAP_PATH = '.next-build/sitemap.xml'
const ENDPOINT = 'https://api.indexnow.org/indexnow'

function extractLocs(xml) {
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
  return [...new Set(urls)]
}

/**
 * Reads the sitemap from the local build output when it exists (e.g. running this by hand
 * right after `npm run build`), otherwise falls back to fetching the live sitemap - the case
 * in CI, where this runs from the deploy job *after* Pages has published, so the IndexNow key
 * file is already reachable at KEY_LOCATION by the time IndexNow tries to verify it.
 */
async function getSitemapUrls() {
  try {
    return extractLocs(readFileSync(SITEMAP_PATH, 'utf-8'))
  } catch {
    const res = await fetch(`https://${HOST}/sitemap.xml`)
    if (!res.ok) throw new Error(`fetching live sitemap failed with status ${res.status}`)
    return extractLocs(await res.text())
  }
}

async function main() {
  let urlList
  try {
    urlList = await getSitemapUrls()
  } catch (err) {
    console.warn('submit-indexnow: could not read the sitemap, skipping submission.', err.message)
    return
  }

  if (urlList.length === 0) {
    console.warn('submit-indexnow: sitemap had no URLs, skipping submission.')
    return
  }

  // IndexNow accepts up to 10,000 URLs per request - the whole site fits in one call, so we
  // just resubmit every URL on each production deploy rather than tracking a diff since the
  // last run. That's an explicitly supported use of the protocol, and far simpler than trying
  // to persist "what changed" state across CI runs for a static-export site with no database.
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body,
    })

    if (res.ok) {
      console.log(`submit-indexnow: submitted ${urlList.length} URLs to IndexNow (status ${res.status}).`)
    } else {
      const text = await res.text().catch(() => '')
      console.warn(`submit-indexnow: IndexNow responded with ${res.status}. ${text}`.trim())
    }
  } catch (err) {
    // Never fail the deploy over an IndexNow hiccup - it's a crawl-speed nicety, not a
    // build-blocking requirement.
    console.warn('submit-indexnow: request failed, skipping.', err.message)
  }
}

await main()
