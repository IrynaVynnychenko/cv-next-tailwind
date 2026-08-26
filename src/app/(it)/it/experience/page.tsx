import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ExperienceView from '@/components/ExperienceView'
import { SetLanguageClient } from '@/components/SetLanguageClient'
import { getExperienceMetadata } from '@/lib/experience-page'

export const metadata: Metadata = getExperienceMetadata('it')

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <SetLanguageClient lang="it" />
      <ExperienceView />
    </SiteFrame>
  )
}
