import type { Metadata } from 'next'
import { getExperienceMetadata } from '@/lib/experience-page'
import { createExperiencePage } from '@/lib/page-factories'

export const metadata: Metadata = getExperienceMetadata('ua')

export default createExperiencePage('ua')
