import { defineField, defineType } from 'sanity'
import { ImageIcon } from '@sanity/icons'

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

export const studentLifeSchema = defineType({
  name: 'studentLife',
  title: 'Student Life',
  type: 'document',
  icon: ImageIcon,
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
      description: 'The title/name of the moment or event',
      validation: (Rule) => Rule.required().error('Title is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'general',
      rows: 3,
      description: 'Short caption/details about the event (max 200 chars)',
      validation: (Rule) => Rule.required().error('Description is required.'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'general',
      description: 'Choose a matching category for gallery organization',
      options: {
        list: [
          { title: 'Fun', value: 'Fun' },
          { title: 'Achievement', value: 'Achievement' },
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Seminar', value: 'Seminar' },
          { title: 'Celebration', value: 'Celebration' },
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required().error('Category is required.'),
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      group: 'media',
      description: 'Specify whether this record is an image upload or a YouTube link',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'YouTube Video', value: 'youtube' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required().error('Media Type is required.'),
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'media',
      description: 'Required if Media Type is Image. Recommended: 1600×1200. JPG/JPEG/PNG only.',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      hidden: ({ parent }) => parent?.mediaType !== 'image',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as any
          if (parent?.mediaType === 'image' && !value) {
            return 'An image is required when Media Type is Image.'
          }
          if (value) {
            return imageExtensionRule(Rule).run(value, context)
          }
          return true
        }),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) =>
            Rule.custom((value, context) => {
              const parent = context.parent as any
              const grandparent = context.document as any
              if (grandparent?.mediaType === 'image' && !value) {
                return 'Alt text is required for accessibility.'
              }
              return true
            }),
        }),
      ],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Video URL',
      type: 'url',
      group: 'media',
      description: 'Required if Media Type is YouTube Video. Supports: youtube.com/watch?v=..., youtube.com/shorts/..., and youtu.be/... links',
      hidden: ({ parent }) => parent?.mediaType !== 'youtube',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as any
          if (parent?.mediaType === 'youtube' && !value) {
            return 'A YouTube URL is required when Media Type is YouTube Video.'
          }
          if (value) {
            // Match standard watch, shorts, youtu.be, embed, and v/ formats
            const regExp = /^.*(youtu\.be\/|youtube\.com\/shorts\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
            const match = value.match(regExp)
            if (!match || !match[2] || match[2].length < 8) {
              return 'Please enter a valid YouTube video URL (supports watch, shorts, and youtu.be links).'
            }
          }
          return true
        }),
    }),
    defineField({
      name: 'customThumbnail',
      title: 'Custom YouTube Thumbnail (Optional)',
      type: 'image',
      group: 'media',
      description: 'Upload a custom cover image if the default YouTube thumbnail looks low quality. JPG/JPEG/PNG only.',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      hidden: ({ parent }) => parent?.mediaType !== 'youtube',
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
      title: 'Featured',
      type: 'boolean',
      group: 'homepage',
      description: 'Check to highlight this moment in special sections',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      group: 'homepage',
      description: 'Lower number = appears first. Control gallery ordering.',
      validation: (Rule) => Rule.required().integer().min(1),
      initialValue: 99,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      group: 'homepage',
      description: 'Toggle visibility. Drafts or inactive items will not appear on the website.',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      mediaType: 'mediaType',
      image: 'image',
      customThumbnail: 'customThumbnail',
      youtubeUrl: 'youtubeUrl',
      active: 'active',
    },
    prepare({ title, category, mediaType, image, customThumbnail, youtubeUrl, active }) {
      const typeLabel = mediaType === 'image' ? '🖼️ Image' : '🎥 YouTube Video'
      return {
        title: title ?? 'Unnamed Moment',
        subtitle: `${category} · ${typeLabel} · ${active ? '✅ Active' : '❌ Inactive'}`,
        media: mediaType === 'image' ? image : (customThumbnail ?? undefined),
      }
    },
  },
})

