import type { SanityImage } from './achiever'

export type FacultySection = 'school' | 'college'

export interface Faculty {
  _id: string
  _createdAt: string
  _updatedAt: string
  name: string
  designation: string
  subject: string
  experience: string
  description: string
  section: FacultySection
  photo?: SanityImage
  featured: boolean
  displayOrder: number
  active: boolean
}

