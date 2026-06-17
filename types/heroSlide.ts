import type { SanityImage } from './achiever'

export interface HeroSlide {
  _id: string
  _createdAt: string
  _updatedAt: string
  titleLine1: string
  titleLine2: string
  description: string
  admissionBadgeText: string
  primaryButtonText: string
  primaryButtonLink: string
  secondaryButtonText: string
  secondaryButtonLink: string
  heroImage: SanityImage
  displayOrder: number
  active: boolean
}

