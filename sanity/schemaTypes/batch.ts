import { defineField, defineType } from 'sanity'
import { CalendarIcon } from '@sanity/icons'

export const batchSchema = defineType({
  name: 'batch',
  title: 'Batch',
  type: 'document',
  icon: CalendarIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'homepage', title: 'Homepage' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Batch Title',
      type: 'string',
      group: 'general',
      description: 'e.g. "Class 12 Science (Board + MHT-CET 2027)"',
      validation: (Rule) => Rule.required().error('Batch Title is required.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { title: 'Class 11 & 12 Science', value: 'college' },
          { title: 'Class 5-10 Secondary', value: 'school' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('Category is required.'),
    }),
    defineField({
      name: 'batchType',
      title: 'Batch Type Badge',
      type: 'string',
      group: 'general',
      description: 'e.g. "1-Year Regular Classroom", "Regular Board Prep"',
      validation: (Rule) => Rule.required().error('Batch Type is required.'),
    }),
    defineField({
      name: 'status',
      title: 'Status Badge',
      type: 'string',
      group: 'general',
      options: {
        list: [
          { title: 'Admissions Open', value: 'Admissions Open' },
          { title: 'Filling Fast', value: 'Filling Fast' },
          { title: 'Limited Seats', value: 'Limited Seats' },
          { title: 'Closed', value: 'Closed' },
        ],
      },
      validation: (Rule) => Rule.required().error('Status Badge is required.'),
      initialValue: 'Admissions Open',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'string',
      group: 'general',
      description: 'e.g. "April 06, 2026"',
      validation: (Rule) => Rule.required().error('Start Date is required.'),
    }),
    defineField({
      name: 'schedule',
      title: 'Schedule / Timing',
      type: 'string',
      group: 'general',
      description: 'e.g. "04:00 PM - 08:00 PM (Mon-Fri)"',
      validation: (Rule) => Rule.required().error('Schedule is required.'),
    }),
    defineField({
      name: 'venue',
      title: 'Venue / Location',
      type: 'string',
      group: 'general',
      description: 'e.g. "Shop No. 4, Mohili Village Pipeline, Mumbai"',
      validation: (Rule) => Rule.required().error('Venue is required.'),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      group: 'general',
      initialValue: 'Enquire For This Batch',
      validation: (Rule) => Rule.required().error('Button text is required.'),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      group: 'general',
      initialValue: '/contact',
      validation: (Rule) => Rule.required().error('Button link is required.'),
    }),
    defineField({
      name: 'enquiryWhatsapp',
      title: 'Enquiry WhatsApp Number (Optional)',
      type: 'string',
      group: 'general',
      description: 'Specify a WhatsApp number (with country code, e.g. "918356992905") to redirect batch enquiries directly to WhatsApp instead of the general contact page.',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      validation: (Rule) => Rule.required().integer().min(1),
      initialValue: 99,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'homepage',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      status: 'status',
      active: 'active',
    },
    prepare({ title, category, status, active }) {
      const catText = category === 'college' ? 'College' : 'School'
      return {
        title: title ?? 'Unnamed Batch',
        subtitle: `${catText} · ${status} · ${active ? 'Active' : 'Inactive'}`,
      }
    },
  },
})

