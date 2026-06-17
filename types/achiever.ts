import type { SanityImageSource } from '@sanity/image-url'

/**
 * Sanity image field shape returned by GROQ queries.
 */
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
}

export type Board = 'SSC' | 'HSC' | 'CBSE' | 'ICSE'
export type Standard = '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'

/**
 * Full Achiever document shape returned from Sanity.
 */
export interface Achiever {
  _id: string
  _createdAt: string
  _updatedAt: string
  studentName: string
  percentage: number
  board: Board
  standard: Standard
  year: number
  rank?: string
  featured: boolean
  displayOrder: number
  studentPhoto?: SanityImage
  resultPoster?: SanityImage
  shortDescription?: string
}
