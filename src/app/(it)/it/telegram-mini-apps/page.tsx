import type { Metadata } from 'next'
import { getServiceMetadata } from '@/lib/service-pages'
import { createServicePage } from '@/lib/page-factories'

export const metadata: Metadata = getServiceMetadata('telegram-mini-apps', 'it')

export default createServicePage('telegram-mini-apps', 'it')
