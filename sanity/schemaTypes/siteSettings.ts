import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

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

export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'media', title: 'Media' },
    { name: 'homepage', title: 'Homepage' },
  ],
  fields: [
    defineField({
      name: 'instituteName',
      title: 'Institute Name',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required().error('Institute Name is required.'),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required().error('Phone number is required.'),
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      group: 'general',
      description: 'Used for direct WhatsApp chat integration',
      validation: (Rule) => Rule.required().error('WhatsApp number is required.'),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required().email().error('A valid email address is required.'),
    }),
    defineField({
      name: 'address',
      title: 'Office Address',
      type: 'text',
      group: 'general',
      rows: 3,
      validation: (Rule) => Rule.required().error('Address is required.'),
    }),
    defineField({
      name: 'googleMapsEmbedUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
      group: 'general',
      description: 'The embed URL from the iframe src tag (e.g. https://maps.google.com/maps?q=...)',
      validation: (Rule) => Rule.required().error('Google Maps Embed URL is required.'),
    }),
    defineField({
      name: 'googleMapsCtaUrl',
      title: 'Google Maps CTA URL',
      type: 'url',
      group: 'general',
      description: 'The click-through URL for the "Open in Google Maps" link',
      validation: (Rule) => Rule.required().error('Google Maps CTA URL is required.'),
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'linkedinUrl',
      title: 'LinkedIn URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      group: 'general',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required().error('Copyright Text is required.'),
    }),
    defineField({
      name: 'logo',
      title: 'Institute Logo',
      type: 'image',
      group: 'media',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      validation: (Rule) => [
        Rule.required().error('Logo is required.'),
        imageExtensionRule(Rule)
      ],
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (Rule) => Rule.required().error('Alt text is required for accessibility.'),
        }),
      ],
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      group: 'media',
      options: { hotspot: true, accept: 'image/jpeg,image/png,image/x-icon' },
      validation: (Rule) => [
        Rule.required().error('Favicon is required.'),
        Rule.custom((value: any) => {
          if (!value || !value.asset || !value.asset._ref) return true
          const ref = value.asset._ref
          const extension = ref.split('-').pop()?.toLowerCase()
          if (extension && ['jpg', 'jpeg', 'png', 'ico'].includes(extension)) {
            return true
          }
          return 'Only JPG, JPEG, PNG, or ICO formats are allowed.'
        })
      ],
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      group: 'general',
      rows: 3,
      validation: (Rule) =>
        Rule.required()
          .max(300)
          .error('Footer description is required and must be max 300 characters.'),
    }),
    // ── HERO METRICS ──────────────────────────────────────────────────────────
    defineField({
      name: 'studentsEnrolled',
      title: 'Hero: Students Enrolled Metric',
      type: 'string',
      group: 'homepage',
      description: 'Count to display (e.g. "100+")',
      validation: (Rule) => Rule.required().error('Students enrolled metric is required.'),
      initialValue: '100+',
    }),
    defineField({
      name: 'successRate',
      title: 'Hero: Success Rate Metric',
      type: 'string',
      group: 'homepage',
      description: 'Success rate to display (e.g. "98%")',
      validation: (Rule) => Rule.required().error('Success rate metric is required.'),
      initialValue: '98%',
    }),
    defineField({
      name: 'googleRating',
      title: 'Hero: Google Rating Metric',
      type: 'string',
      group: 'homepage',
      description: 'Rating to display (e.g. "5.0")',
      validation: (Rule) => Rule.required().error('Google rating metric is required.'),
      initialValue: '5.0',
    }),
    // ── SEO SETTINGS ──────────────────────────────────────────────────────────
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      group: 'general',
      description: 'Default SEO page title tag',
      validation: (Rule) => Rule.required().error('Meta Title is required.'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      group: 'general',
      rows: 3,
      description: 'Default SEO page description tag',
      validation: (Rule) => Rule.required().error('Meta Description is required.'),
    }),
    defineField({
      name: 'ogImage',
      title: 'OG OpenGraph Image',
      type: 'image',
      group: 'media',
      description: 'Image displayed when sharing the site link on social media. JPG/JPEG/PNG only.',
      options: { hotspot: true, accept: 'image/jpeg,image/png' },
      validation: (Rule) => [
        Rule.required().error('OG Image is required.'),
        imageExtensionRule(Rule)
      ],
    }),
  ],
  preview: {
    select: {
      title: 'instituteName',
      subtitle: 'tagline',
      media: 'logo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Global Site Settings',
        subtitle: subtitle ?? 'Global Website Settings',
        media,
      }
    },
  },
})

