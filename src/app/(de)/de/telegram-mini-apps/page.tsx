import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ServiceLanding from '@/components/ServiceLanding'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { ServicePageSchema } from '@/components/SchemaMarkup'
import { getServiceMetadata } from '@/lib/service-pages'

export const metadata: Metadata = getServiceMetadata('telegram-mini-apps', 'de')

export default function TelegramMiniAppsPage() {
  return (
    <SiteFrame>
      <ServicePageSchema id="telegram-mini-apps" lang="de" />
      <SetLanguageClient lang="de" />
      <ServiceLanding id="telegram-mini-apps" />
    </SiteFrame>
  )
}
