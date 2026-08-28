import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ContactsView from '@/components/ContactsView'
import { ContactPageSchema } from '@/components/SchemaMarkup'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getContactsMetadata } from '@/lib/contacts-page'

export const metadata: Metadata = getContactsMetadata('es')

export default function ContactsPage() {
  return (
    <SiteFrame>
      <SetLanguageClient lang="es" />
      <ContactPageSchema lang="es" />
      <ContactsView />
    </SiteFrame>
  )
}
