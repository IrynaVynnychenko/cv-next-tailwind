import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('ai-solutions', 'it')

export default function AiSolutionsPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="ai-solutions" lang="it" />
      <SetLanguageClient lang="it" />
      <ServiceLanding id="ai-solutions" />
    </SiteFrame>
  )
}
