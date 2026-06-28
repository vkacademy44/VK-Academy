import { defineField, defineType } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const announcementSchema = defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'E.g. "Admissions Open Now" or "Weekly Test on Sunday"',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Details about the announcement (optional)',
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'string',
      options: {
        list: [
          { title: 'Normal', value: 'normal' },
          { title: 'Important', value: 'important' },
          { title: 'Urgent', value: 'urgent' },
        ],
        layout: 'radio',
      },
      initialValue: 'normal',
      validation: (Rule) => Rule.required().error('Priority is required.'),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Check to show this announcement in the top marquee',
      initialValue: true,
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error('Created date is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      priority: 'priority',
      isActive: 'isActive',
    },
    prepare({ title, priority, isActive }) {
      return {
        title: title || 'Unnamed Announcement',
        subtitle: `Priority: ${priority || 'normal'} · ${isActive ? 'Active' : 'Inactive'}`,
      }
    },
  },
})
