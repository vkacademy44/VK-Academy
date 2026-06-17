import { defineField, defineType } from 'sanity'
import { CommentIcon } from '@sanity/icons'

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

export const testimonialSchema = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: CommentIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'homepage', title: 'Homepage' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'general',
      description: 'The name of the parent, student, or community member (e.g. "Mrs. Sunita Sharma")',
      validation: (Rule) => Rule.required().error('Name is required.'),
    }),
    defineField({
      name: 'designation',
      title: 'Designation / Role',
      type: 'string',
      group: 'general',
      description: 'Identify the reviewer role (e.g. "Parent of 12th Student", "SSC Topper")',
      validation: (Rule) => Rule.required().error('Designation is required.'),
    }),
    defineField({
      name: 'reviewText',
      title: 'Review Text',
      type: 'text',
      group: 'general',
      rows: 4,
      description: 'The text of the testimonial (max 500 chars)',
      validation: (Rule) =>
        Rule.required()
          .max(500)
          .error('Review text is required and must be max 500 characters.'),
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      group: 'general',
      description: 'Enter rating score from 1 to 5 stars',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .integer()
          .error('Rating must be an integer between 1 and 5.'),
      initialValue: 5,
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      group: 'homepage',
      description: 'Check to display this review in the scrolling marquee on the homepage',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      description: 'Lower displays first. Control review display sequence.',
      validation: (Rule) => Rule.required().integer().min(1),
      initialValue: 99,
    }),
    defineField({
      name: 'photo',
      title: 'Photo (Optional)',
      type: 'image',
      group: 'media',
      description: 'Reviewer photo. Recommended: 500×500 square image. JPG/JPEG/PNG only.',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      validation: (Rule) => imageExtensionRule(Rule),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'homepage',
      description: 'Toggle visibility. Inactive reviews will not appear on the website.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'photo',
      rating: 'rating',
      active: 'active',
    },
    prepare({ title, subtitle, media, rating, active }) {
      return {
        title: title ?? 'Unnamed Reviewer',
        subtitle: `${subtitle ?? ''} (${rating} Stars) · ${active ? 'Active' : 'Inactive'}`,
        media,
      }
    },
  },
})

