import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'ua'),
}

export default function UaHome() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="ua" />
      <ProfilePageSchema lang="ua" />
      <SetLanguageClient lang="ua" />
      <HomeView />
    </SiteFrame>
  )
}
