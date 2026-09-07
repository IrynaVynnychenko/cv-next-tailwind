import type { Metadata } from 'next'
import { getServiceMetadata } from '@/lib/service-pages'
import { createServicePage } from '@/lib/page-factories'

export const metadata: Metadata = getServiceMetadata('website-development', 'fr')

export default createServicePage('website-development', 'fr')
