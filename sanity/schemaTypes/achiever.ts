import { defineField, defineType } from 'sanity'
import { StarFilledIcon } from '@sanity/icons'

export const achieverSchema = defineType({
  name: 'achiever',
  title: 'Achiever',
  type: 'document',
  icon: StarFilledIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'homepage', title: 'Homepage' },
  ],
  fields: [
    // ── STUDENT INFO ──────────────────────────────────────────────────────────
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
      group: 'general',
      description: 'Full name of the student',
      validation: (Rule) =>
        Rule.required()
          .min(2)
          .max(80)
          .error('Student name is required (2–80 characters).'),
    }),

    defineField({
      name: 'percentage',
      title: 'Score / Percentage (%)',
      type: 'number',
      group: 'general',
      description: 'Enter the percentage (e.g. 90.20)',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .max(100)
          .precision(2)
          .error('Percentage is required and must be between 0 and 100.'),
    }),

    defineField({
      name: 'board',
      title: 'Board',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { title: 'SSC (Maharashtra State Board)', value: 'SSC' },
          { title: 'HSC (Maharashtra Higher Secondary)', value: 'HSC' },
          { title: 'CBSE', value: 'CBSE' },
          { title: 'ICSE', value: 'ICSE' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Board is required.'),
    }),

    defineField({
      name: 'standard',
      title: 'Standard / Class',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { title: 'Std 5th', value: '5' },
          { title: 'Std 6th', value: '6' },
          { title: 'Std 7th', value: '7' },
          { title: 'Std 8th', value: '8' },
          { title: 'Std 9th', value: '9' },
          { title: 'Std 10th', value: '10' },
          { title: 'Std 11th', value: '11' },
          { title: 'Std 12th', value: '12' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('Standard / Class is required.'),
    }),

    defineField({
      name: 'year',
      title: 'Result Year',
      type: 'number',
      group: 'general',
      description: 'Academic year of the result (e.g. 2026)',
      validation: (Rule) =>
        Rule.required()
          .min(2000)
          .max(new Date().getFullYear() + 1)
          .integer()
          .error('A valid result year is required.'),
    }),

    defineField({
      name: 'rank',
      title: 'Rank',
      type: 'string',
      group: 'general',
      description: 'Optional — e.g. "1st in School", "District Rank 3"',
      validation: (Rule) => Rule.max(80),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      group: 'general',
      rows: 3,
      description: 'A brief quote or note about this student (max 200 chars)',
      validation: (Rule) => Rule.max(200),
    }),

    // ── PHOTOS ────────────────────────────────────────────────────────────────
    defineField({
      name: 'studentPhoto',
      title: 'Student Photo',
      type: 'image',
      group: 'media',
      options: { hotspot: true, accept: 'image/*' },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Short description for accessibility',
          validation: (Rule) => Rule.max(120),
        }),
      ],
    }),

    defineField({
      name: 'resultPoster',
      title: 'Result Poster / Marksheet',
      type: 'image',
      group: 'media',
      description: 'Optional — upload a result screenshot or marksheet',
      options: { hotspot: true, accept: 'image/*' },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.max(120),
        }),
      ],
    }),

    // ── HOMEPAGE SETTINGS ────────────────────────────────────────────────────
    defineField({
      name: 'featured',
      title: 'Show on Homepage?',
      type: 'boolean',
      group: 'homepage',
      description: 'Turn ON to display this achiever in the homepage "Shining Stars" section.',
      initialValue: false,
    }),

    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      description: 'Lower number = appears first. Use 1, 2, 3 … to control ordering.',
      validation: (Rule) =>
        Rule.integer().min(0).warning('Display order should be a positive number.'),
      initialValue: 99,
    }),
  ],

  preview: {
    select: {
      title: 'studentName',
      subtitle: 'board',
      percentage: 'percentage',
      standard: 'standard',
      year: 'year',
      media: 'studentPhoto',
    },
    prepare({ title, subtitle, percentage, standard, year, media }) {
      return {
        title: title ?? 'Unnamed Achiever',
        subtitle: [
          subtitle,
          standard ? `Std ${standard}` : null,
          percentage != null ? `${percentage}%` : null,
          year ? `(${year})` : null,
        ]
          .filter(Boolean)
          .join(' · '),
        media,
      }
    },
  },

  orderings: [
    {
      title: 'Year (Newest First)',
      name: 'yearDesc',
      by: [
        { field: 'year', direction: 'desc' },
        { field: 'displayOrder', direction: 'asc' },
      ],
    },
    {
      title: 'Percentage (Highest First)',
      name: 'percentageDesc',
      by: [{ field: 'percentage', direction: 'desc' }],
    },
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [{ field: 'displayOrder', direction: 'asc' }],
    },
  ],
})
