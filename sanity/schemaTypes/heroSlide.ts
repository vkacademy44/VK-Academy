import { defineField, defineType } from 'sanity'
import { ImagesIcon } from '@sanity/icons'

// Custom image extension validator
const imageExtensionRule = (Rule: any) =>
  Rule.custom((value: any) => {
    if (!value || !value.asset || !value.asset._ref) return true
    const ref = value.asset._ref
    const extension = ref.split('-').pop()?.toLowerCase()
    if (extension && ['jpg', 'jpeg', 'png'].includes(extension)) {
      return true
    }
    return 'Only JPG, JPEG, or PNG images are allowed.'
  })

// Custom image size validator (max 5MB)
const imageSizeRule = (Rule: any) =>
  Rule.custom(async (value: any, context: any) => {
    if (!value || !value.asset || !value.asset._ref) return true
    const client = context.client
    try {
      const asset = await client.getDocument(value.asset._ref)
      if (asset && typeof asset.size === 'number' && asset.size > 5 * 1024 * 1024) {
        return 'Image file size must be less than 5MB.'
      }
    } catch (err) {
      // Gracefully fall back if document cannot be retrieved
    }
    return true
  })

export const heroSlideSchema = defineType({
  name: 'heroSlide',
  title: 'Hero Slide',
  type: 'document',
  icon: ImagesIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'homepage', title: 'Homepage' },
  ],
  fields: [
    defineField({
      name: 'titleLine1',
      title: 'Title Line 1',
      type: 'string',
      group: 'general',
      description: 'First line of the main hero heading (e.g. "Dare to Dream,")',
      validation: (Rule) =>
        Rule.required()
          .max(80)
          .error('Title Line 1 is required and must be max 80 characters.'),
    }),
    defineField({
      name: 'titleLine2',
      title: 'Title Line 2',
      type: 'string',
      group: 'general',
      description: 'Second line of the main hero heading (e.g. "Learn to Excel")',
      validation: (Rule) =>
        Rule.required()
          .max(80)
          .error('Title Line 2 is required and must be max 80 characters.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'general',
      rows: 3,
      description: 'Hero body copy text (max 300 characters)',
      validation: (Rule) =>
        Rule.required()
          .max(300)
          .error('Description is required and must be max 300 characters.'),
    }),
    defineField({
      name: 'admissionBadgeText',
      title: 'Admission Badge Text',
      type: 'string',
      group: 'general',
      description: 'Text shown in the badge above the title (e.g. "Admissions Open 2026-27")',
      validation: (Rule) =>
        Rule.required()
          .max(80)
          .error('Admission badge text is required and must be max 80 characters.'),
    }),
    defineField({
      name: 'primaryButtonText',
      title: 'Primary Button Text',
      type: 'string',
      group: 'general',
      description: 'E.g. "Enroll Now"',
      validation: (Rule) => Rule.required().error('Primary button text is required.'),
    }),
    defineField({
      name: 'primaryButtonLink',
      title: 'Primary Button Link',
      type: 'string',
      group: 'general',
      description: 'The URL the primary button points to (e.g. "/contact")',
      validation: (Rule) => Rule.required().error('Primary button link is required.'),
    }),
    defineField({
      name: 'secondaryButtonText',
      title: 'Secondary Button Text',
      type: 'string',
      group: 'general',
      description: 'E.g. "Call Now"',
      validation: (Rule) => Rule.required().error('Secondary button text is required.'),
    }),
    defineField({
      name: 'secondaryButtonLink',
      title: 'Secondary Button Link',
      type: 'string',
      group: 'general',
      description: 'The URL the secondary button points to (e.g. "tel:8356992905")',
      validation: (Rule) => Rule.required().error('Secondary button link is required.'),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: 'media',
      description: 'Recommended size: 1080 × 1350 (Portrait), max 5MB. JPG/JPEG/PNG only.',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      validation: (Rule) => [
        Rule.required().error('Hero Image is required.'),
        imageExtensionRule(Rule),
        imageSizeRule(Rule),
      ],
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Alt text is required.'),
        }),
      ],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      description: 'Lower numbers display first in the slider',
      validation: (Rule) => Rule.required().integer().min(1),
      initialValue: 1,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'homepage',
      description: 'Uncheck to hide this slide from the homepage carousel',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'titleLine1',
      title2: 'titleLine2',
      media: 'heroImage',
      active: 'active',
    },
    prepare({ title, title2, media, active }) {
      const fullTitle = [title, title2].filter(Boolean).join(' ')
      return {
        title: fullTitle || 'Unnamed Hero Slide',
        subtitle: active ? 'Active' : 'Inactive',
        media,
      }
    },
  },
})

