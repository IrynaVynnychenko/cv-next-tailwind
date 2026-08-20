import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'it'),
}

export default function ItHome() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="it" />
      <ProfilePageSchema lang="it" />
      <SetLanguageClient lang="it" />
      <HomeView />
    </SiteFrame>
  )
}
