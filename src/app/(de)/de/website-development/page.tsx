import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('website-development', 'de')

export default function WebsiteDevelopmentPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="website-development" lang="de" />
      <SetLanguageClient lang="de" />
      <ServiceLanding id="website-development" />
    </SiteFrame>
  )
}
