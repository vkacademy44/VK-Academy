import type { SanityImage } from './achiever'

export type StudentLifeCategory = 'Fun' | 'Achievement' | 'Workshop' | 'Seminar' | 'Celebration'
export type StudentLifeMediaType = 'image' | 'youtube'

export interface StudentLife {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  description: string
  category: StudentLifeCategory
  mediaType: StudentLifeMediaType
  image?: SanityImage
  youtubeUrl?: string
  customThumbnail?: SanityImage
  featured: boolean
  displayOrder: number
  active: boolean
}

