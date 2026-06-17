import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

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

export const facultySchema = defineType({
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  icon: UsersIcon,
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
      description: 'Full name of the educator (e.g. "Dr. Vikram K.")',
      validation: (Rule) => Rule.required().error('Name is required.'),
    }),
    defineField({
      name: 'designation',
      title: 'Designation / Role',
      type: 'string',
      group: 'general',
      description: 'Role or designation at the institute (e.g. "Founder & Physics HOD")',
      validation: (Rule) => Rule.required().error('Designation is required.'),
    }),
    defineField({
      name: 'subject',
      title: 'Subject taught',
      type: 'string',
      group: 'general',
      description: 'Main teaching subject (e.g. "Physics", "Chemistry")',
      validation: (Rule) => Rule.required().error('Subject is required.'),
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      group: 'general',
      description: 'Total experience (e.g. "20+ years", "Gold medalist with 10+ years")',
      validation: (Rule) => Rule.required().error('Experience description is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Short Biography / Description',
      type: 'text',
      group: 'general',
      rows: 3,
      description: 'Short introduction of the teacher/advisor (max 200 chars)',
      validation: (Rule) => Rule.required().error('Description is required.'),
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      group: 'general',
      description: 'Determine which category grid they are rendered in on the Faculty page',
      options: {
        list: [
          { title: 'Class 5 to 10', value: 'school' },
          { title: 'Class 11 and 12', value: 'college' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('Section is required.'),
    }),
    defineField({
      name: 'photo',
      title: 'Photo (Optional)',
      type: 'image',
      group: 'media',
      description: 'Recommended: 800×800 square. JPG/JPEG/PNG only.',
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
      name: 'featured',
      title: 'Featured (Homepage)',
      type: 'boolean',
      group: 'homepage',
      description: 'Mark to display on the homepage in future feature updates',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      description: 'Lower number = displays first. Controls sequence on Faculty page.',
      validation: (Rule) => Rule.required().integer().min(1),
      initialValue: 99,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'homepage',
      description: 'Toggle visibility. Inactive faculty will not display on the website.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'designation',
      media: 'photo',
      active: 'active',
    },
    prepare({ title, subtitle, media, active }) {
      return {
        title: title ?? 'Unnamed Faculty',
        subtitle: `${subtitle ?? ''} · ${active ? 'Active' : 'Inactive'}`,
        media,
      }
    },
  },
})

