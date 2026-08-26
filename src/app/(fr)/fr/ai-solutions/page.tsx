import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('ai-solutions', 'fr')

export default function AiSolutionsPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="ai-solutions" lang="fr" />
      <SetLanguageClient lang="fr" />
      <ServiceLanding id="ai-solutions" />
    </SiteFrame>
  )
}
