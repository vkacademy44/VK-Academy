import { type SchemaTypeDefinition } from 'sanity'
import { achieverSchema } from './achiever'
import { siteSettingsSchema } from './siteSettings'
import { heroSlideSchema } from './heroSlide'
import { testimonialSchema } from './testimonial'
import { divisionSchema } from './division'
import { batchSchema } from './batch'
import { facultySchema } from './faculty'
import { studentLifeSchema } from './studentLife'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettingsSchema,
    heroSlideSchema,
    achieverSchema,
    testimonialSchema,
    divisionSchema,
    batchSchema,
    facultySchema,
    studentLifeSchema,
  ],
}


