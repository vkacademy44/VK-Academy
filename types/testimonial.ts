import type { SanityImage } from './achiever'

export interface Testimonial {
  _id: string
  _createdAt: string
  _updatedAt: string
  name: string
  designation: string
  reviewText: string
  rating: number
  featured: boolean
  displayOrder: number
  photo?: SanityImage
  active: boolean
}

