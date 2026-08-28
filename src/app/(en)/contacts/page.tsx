import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ContactsView from '@/components/ContactsView'
import { ContactPageSchema } from '@/components/SchemaMarkup'
import { getContactsMetadata } from '@/lib/contacts-page'

export const metadata: Metadata = getContactsMetadata('en')

export default function ContactsPage() {
  return (
    <SiteFrame>
      <ContactPageSchema lang="en" />
      <ContactsView />
    </SiteFrame>
  )
}
