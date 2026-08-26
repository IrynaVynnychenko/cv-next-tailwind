import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('website-development', 'fr')

export default function WebsiteDevelopmentPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="website-development" lang="fr" />
      <SetLanguageClient lang="fr" />
      <ServiceLanding id="website-development" />
    </SiteFrame>
  )
}
