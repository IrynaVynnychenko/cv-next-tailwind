import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('web-apps', 'es')

export default function WebAppsPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="web-apps" lang="es" />
      <SetLanguageClient lang="es" />
      <ServiceLanding id="web-apps" />
    </SiteFrame>
  )
}
