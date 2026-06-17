import type { SanityImage } from './achiever'

export type SectionType = 'school' | 'college'

export interface Division {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  sectionType: SectionType
  description: string
  image: SanityImage
  bulletPoints: string[]
  displayOrder: number
  active: boolean
}
