import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ExperienceView from '@/components/ExperienceView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getExperienceMetadata } from '@/lib/experience-page'

export const metadata: Metadata = getExperienceMetadata('es')

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <SetLanguageClient lang="es" />
      <ExperienceView />
    </SiteFrame>
  )
}
