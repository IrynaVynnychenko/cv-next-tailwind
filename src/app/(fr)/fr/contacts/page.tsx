import type { Metadata } from 'next'
import { getContactsMetadata } from '@/lib/contacts-page'
import { createContactsPage } from '@/lib/page-factories'

export const metadata: Metadata = getContactsMetadata('fr')

export default createContactsPage('fr')
