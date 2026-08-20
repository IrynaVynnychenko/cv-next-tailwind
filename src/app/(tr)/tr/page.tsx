import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'tr'),
}

export default function TrHome() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="tr" />
      <ProfilePageSchema lang="tr" />
      <SetLanguageClient lang="tr" />
      <HomeView />
    </SiteFrame>
  )
}
