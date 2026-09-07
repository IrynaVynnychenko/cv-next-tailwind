import type { Metadata } from 'next'
import { getServiceMetadata } from '@/lib/service-pages'
import { createServicePage } from '@/lib/page-factories'

export const metadata: Metadata = getServiceMetadata('web-apps', 'en')

export default createServicePage('web-apps', 'en')
