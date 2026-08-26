import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('ai-solutions', 'en')

export default function AiSolutionsPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="ai-solutions" lang="en" />
      <ServiceLanding id="ai-solutions" />
    </SiteFrame>
  )
}
