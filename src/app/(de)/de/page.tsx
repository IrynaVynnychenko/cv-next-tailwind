import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'de'),
}

export default function DeHome() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="de" />
      <ProfilePageSchema lang="de" />
      <SetLanguageClient lang="de" />
      <HomeView />
    </SiteFrame>
  )
}
