import type { SanityImage } from './achiever'

export interface SiteSettings {
  _id: string
  _createdAt: string
  _updatedAt: string
  instituteName: string
  tagline?: string
  phone: string
  whatsapp: string
  email: string
  address: string
  googleMapsEmbedUrl: string
  googleMapsCtaUrl: string
  facebookUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  youtubeUrl?: string
  copyrightText: string
  logo: SanityImage
  favicon: SanityImage
  footerDescription: string
  studentsEnrolled: string
  successRate: string
  googleRating: string
  metaTitle: string
  metaDescription: string
  ogImage: SanityImage
}

