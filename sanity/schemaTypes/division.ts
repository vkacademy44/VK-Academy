import { defineField, defineType } from 'sanity'
import { BookIcon } from '@sanity/icons'

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

export const divisionSchema = defineType({
  name: 'division',
  title: 'Academic Division',
  type: 'document',
  icon: BookIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'homepage', title: 'Homepage' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'general',
      description: 'e.g. "Standard 5th to 10th", "11th & 12th Science"',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      group: 'general',
      description: 'Choose whether this is a school-level or college-level division',
      options: {
        list: [
          { title: 'School Section', value: 'school' },
          { title: 'College Section', value: 'college' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Section Type is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'general',
      rows: 4,
      description: 'Introductory description of the department and teaching goals',
      validation: (Rule) => Rule.required().error('Description is required.'),
    }),
    defineField({
      name: 'image',
      title: 'Division Image',
      type: 'image',
      group: 'media',
      description: 'Banner image shown on the Academic Divisions page. Recommended: 1200×900. JPG/JPEG/PNG only.',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      validation: (Rule) => [
        Rule.required().error('Image is required.'),
        imageExtensionRule(Rule)
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
      name: 'bulletPoints',
      title: 'Bullet Points',
      type: 'array',
      group: 'general',
      description: 'Core benefits or highlights (at least 1 is required)',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1).error('At least one bullet point is required.'),
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      description: 'Sequence order on divisions page (lower displays first)',
      validation: (Rule) => Rule.required().integer().min(1),
      initialValue: 99,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'homepage',
      description: 'Toggle visibility. Inactive divisions will not display on the website.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'sectionType',
      media: 'image',
      active: 'active',
    },
    prepare({ title, subtitle, media, active }) {
      return {
        title: title ?? 'Unnamed Division',
        subtitle: `${subtitle === 'school' ? 'School' : 'College'} Section · ${active ? 'Active' : 'Inactive'}`,
        media,
      }
    },
  },
})
