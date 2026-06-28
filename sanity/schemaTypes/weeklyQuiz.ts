import { defineField, defineType } from 'sanity'
import { HelpCircleIcon } from '@sanity/icons'

export const weeklyQuizSchema = defineType({
  name: 'weeklyQuiz',
  title: 'Weekly Quiz',
  type: 'document',
  icon: HelpCircleIcon,
  fields: [
    defineField({
      name: 'quizTitle',
      title: 'Quiz Title',
      type: 'string',
      description: 'E.g. "🧠 Weekly Physics Quiz"',
      validation: (Rule) => Rule.required().error('Quiz Title is required.'),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'E.g. "Test your knowledge and improve your concepts."',
      validation: (Rule) => Rule.required().error('Description is required.'),
    }),
    defineField({
      name: 'quizLink',
      title: 'Quiz Link (URL)',
      type: 'url',
      description: 'The URL to the Google Form or Quiz page',
      validation: (Rule) => Rule.required().uri({ scheme: ['http', 'https'] }).error('A valid quiz link URL is required.'),
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Check to enable this quiz banner on the home page',
      initialValue: true,
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date (Optional)',
      type: 'datetime',
      description: 'Show banner starting from this date (if set)',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date (Optional)',
      type: 'datetime',
      description: 'Hide banner after this date (if set)',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'E.g. "Take Quiz Now"',
      initialValue: 'Take Quiz Now',
      validation: (Rule) => Rule.required().error('Button text is required.'),
    }),
  ],
  preview: {
    select: {
      title: 'quizTitle',
      isActive: 'isActive',
      startDate: 'startDate',
      endDate: 'endDate',
    },
    prepare({ title, isActive, startDate, endDate }) {
      let dateRange = 'No date constraints'
      if (startDate || endDate) {
        const startStr = startDate ? new Date(startDate).toLocaleDateString() : '...'
        const endStr = endDate ? new Date(endDate).toLocaleDateString() : '...'
        dateRange = `${startStr} → ${endStr}`
      }
      return {
        title: title || 'Unnamed Weekly Quiz',
        subtitle: `${isActive ? 'Active' : 'Inactive'} (${dateRange})`,
      }
    },
  },
})
