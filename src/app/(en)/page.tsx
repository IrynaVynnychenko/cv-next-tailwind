import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import HomeView from '@/components/HomeView'
import { WebSiteSchema, ProfilePageSchema } from '@/components/SchemaMarkup'
import { getPageAlternates } from '@/lib/seo'

export const metadata: Metadata = {
  alternates: getPageAlternates('/', 'en'),
}

export default function Home() {
  return (
    <SiteFrame>
      <WebSiteSchema lang="en" />
      <ProfilePageSchema lang="en" />
      <HomeView />
    </SiteFrame>
  )
}
