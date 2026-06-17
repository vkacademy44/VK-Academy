import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import type { Achiever } from '@/types/achiever'
import type { SiteSettings } from '@/types/siteSettings'
import type { HeroSlide } from '@/types/heroSlide'
import type { Testimonial } from '@/types/testimonial'
import type { Division } from '@/types/division'
import type { Batch } from '@/types/batch'
import type { Faculty } from '@/types/faculty'
import type { StudentLife } from '@/types/studentLife'

// ── GROQ Fragments ────────────────────────────────────────────────────────────

/** Shared image projection used in all queries */
const IMAGE_PROJECTION = groq`{
  asset,
  hotspot,
  crop,
  alt
}`

/** Full achiever field projection */
const ACHIEVER_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  studentName,
  percentage,
  board,
  standard,
  year,
  rank,
  featured,
  displayOrder,
  shortDescription,
  "studentPhoto": studentPhoto ${IMAGE_PROJECTION},
  "resultPoster": resultPoster ${IMAGE_PROJECTION}
}`

// ── Queries ───────────────────────────────────────────────────────────────────

/**
 * All achievers ordered by year desc then displayOrder asc.
 * Used on the Wall of Fame page.
 */
export const ALL_ACHIEVERS_QUERY = groq`
  *[_type == "achiever"] | order(year desc, displayOrder asc, percentage desc)
  ${ACHIEVER_PROJECTION}
`

/**
 * Featured achievers only (homepage "Shining Stars" section).
 * Limited to the first 4 cards.
 */
export const FEATURED_ACHIEVERS_QUERY = groq`
  *[_type == "achiever" && featured == true]
  | order(displayOrder asc, year desc, percentage desc)
  [0...4]
  ${ACHIEVER_PROJECTION}
`

/**
 * Achievers filtered by year — used for year-based tabs on Wall of Fame.
 */
export const ACHIEVERS_BY_YEAR_QUERY = groq`
  *[_type == "achiever" && year == $year]
  | order(displayOrder asc, percentage desc)
  ${ACHIEVER_PROJECTION}
`

/**
 * Achievers filtered by board.
 */
export const ACHIEVERS_BY_BOARD_QUERY = groq`
  *[_type == "achiever" && board == $board]
  | order(year desc, percentage desc)
  ${ACHIEVER_PROJECTION}
`

/**
 * Returns all distinct years for which achiever records exist.
 * Used to populate year-filter tabs.
 */
export const ACHIEVER_YEARS_QUERY = groq`
  array::unique(*[_type == "achiever"].year) | order(@ desc)
`

// ── Fetchers ──────────────────────────────────────────────────────────────────

/** Fetch all achievers (Wall of Fame) */
export async function getAllAchievers(): Promise<Achiever[]> {
  return client.fetch<Achiever[]>(ALL_ACHIEVERS_QUERY, {}, { next: { revalidate: 60 } })
}

/** Fetch featured achievers (Homepage) */
export async function getFeaturedAchievers(): Promise<Achiever[]> {
  return client.fetch<Achiever[]>(FEATURED_ACHIEVERS_QUERY, {}, { next: { revalidate: 60 } })
}

/** Fetch achievers by year */
export async function getAchieversByYear(year: number): Promise<Achiever[]> {
  return client.fetch<Achiever[]>(
    ACHIEVERS_BY_YEAR_QUERY,
    { year },
    { next: { revalidate: 60 } }
  )
}

/** Fetch all distinct years */
export async function getAchieverYears(): Promise<number[]> {
  return client.fetch<number[]>(ACHIEVER_YEARS_QUERY, {}, { next: { revalidate: 60 } })
}

// ── New Projections ──────────────────────────────────────────────────────────

const SITE_SETTINGS_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  instituteName,
  tagline,
  phone,
  whatsapp,
  email,
  address,
  googleMapsEmbedUrl,
  googleMapsCtaUrl,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  youtubeUrl,
  copyrightText,
  "logo": logo ${IMAGE_PROJECTION},
  "favicon": favicon ${IMAGE_PROJECTION},
  footerDescription,
  studentsEnrolled,
  successRate,
  googleRating,
  metaTitle,
  metaDescription,
  "ogImage": ogImage ${IMAGE_PROJECTION}
}`

const HERO_SLIDE_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  titleLine1,
  titleLine2,
  description,
  admissionBadgeText,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  "heroImage": heroImage ${IMAGE_PROJECTION},
  displayOrder,
  active
}`

const TESTIMONIAL_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  name,
  designation,
  reviewText,
  rating,
  featured,
  displayOrder,
  "photo": photo ${IMAGE_PROJECTION},
  active
}`

const DIVISION_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  title,
  sectionType,
  description,
  "image": image ${IMAGE_PROJECTION},
  bulletPoints,
  displayOrder,
  active
}`

const BATCH_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  title,
  category,
  batchType,
  status,
  startDate,
  schedule,
  venue,
  buttonText,
  buttonLink,
  enquiryWhatsapp,
  displayOrder,
  active
}`

const FACULTY_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  name,
  designation,
  subject,
  experience,
  description,
  section,
  "photo": photo ${IMAGE_PROJECTION},
  featured,
  displayOrder,
  active
}`

const STUDENT_LIFE_PROJECTION = groq`{
  _id,
  _createdAt,
  _updatedAt,
  title,
  description,
  category,
  mediaType,
  "image": image ${IMAGE_PROJECTION},
  youtubeUrl,
  "customThumbnail": customThumbnail ${IMAGE_PROJECTION},
  featured,
  displayOrder,
  active
}`

// ── New Queries ─────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0]
  ${SITE_SETTINGS_PROJECTION}
`

export const ACTIVE_HERO_SLIDES_QUERY = groq`
  *[_type == "heroSlide" && active == true] | order(displayOrder asc)
  ${HERO_SLIDE_PROJECTION}
`

export const TESTIMONIALS_QUERY = groq`
  *[_type == "testimonial" && active == true && featured == true] | order(displayOrder asc)
  ${TESTIMONIAL_PROJECTION}
`

export const DIVISIONS_QUERY = groq`
  *[_type == "division" && active == true] | order(displayOrder asc)
  ${DIVISION_PROJECTION}
`

export const BATCHES_QUERY = groq`
  *[_type == "batch" && active == true] | order(displayOrder asc)
  ${BATCH_PROJECTION}
`

export const FACULTY_QUERY = groq`
  *[_type == "faculty" && active == true] | order(displayOrder asc)
  ${FACULTY_PROJECTION}
`

export const STUDENT_LIFE_QUERY = groq`
  *[_type == "studentLife" && active == true] | order(displayOrder asc)
  ${STUDENT_LIFE_PROJECTION}
`

// ── New Fetchers ────────────────────────────────────────────────────────────

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getActiveHeroSlides(): Promise<HeroSlide[]> {
  return client.fetch<HeroSlide[]>(ACTIVE_HERO_SLIDES_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch<Testimonial[]>(TESTIMONIALS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getDivisions(): Promise<Division[]> {
  return client.fetch<Division[]>(DIVISIONS_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getBatches(): Promise<Batch[]> {
  return client.fetch<Batch[]>(BATCHES_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getFaculty(): Promise<Faculty[]> {
  return client.fetch<Faculty[]>(FACULTY_QUERY, {}, { next: { revalidate: 60 } })
}

export async function getStudentLifeItems(): Promise<StudentLife[]> {
  return client.fetch<StudentLife[]>(STUDENT_LIFE_QUERY, {}, { next: { revalidate: 60 } })
}

