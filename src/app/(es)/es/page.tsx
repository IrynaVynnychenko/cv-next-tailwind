import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'es'),
}

export default function EsHome() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="es" />
      <ProfilePageSchema lang="es" />
      <SetLanguageClient lang="es" />
      <HomeView />
    </SiteFrame>
  )
}
