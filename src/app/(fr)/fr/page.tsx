import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'fr'),
}

export default function FrHome() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="fr" />
      <ProfilePageSchema lang="fr" />
      <SetLanguageClient lang="fr" />
      <HomeView />
    </SiteFrame>
  )
}
