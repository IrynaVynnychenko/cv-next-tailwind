import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('website-development', 'en')

export default function WebsiteDevelopmentPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="website-development" lang="en" />
      <ServiceLanding id="website-development" />
    </SiteFrame>
  )
}
