import type { Metadata } from 'next'
import SiteFrame from '@/components/SiteFrame'
import ExperienceView from '@/components/ExperienceView'
import { getExperienceMetadata } from '@/lib/experience-page'

export const metadata: Metadata = getExperienceMetadata('en')

export default function ExperiencePage() {
  return (
    <SiteFrame>
      <ExperienceView />
    </SiteFrame>
  )
}
