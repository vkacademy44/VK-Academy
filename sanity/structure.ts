import type { StructureResolver } from 'sanity/structure'
import {
  CogIcon,
  ImagesIcon,
  StarFilledIcon,
  CommentIcon,
  BookIcon,
  CalendarIcon,
  UsersIcon,
  ImageIcon,
  PinIcon,
  HelpCircleIcon,
} from '@sanity/icons'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('VK Academy CMS')
    .items([
      // 1. Site Settings (Singleton)
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      S.divider(),

      // 2. Hero Slides
      S.listItem()
        .title('Hero Slides')
        .icon(ImagesIcon)
        .child(
          S.documentList()
            .title('Hero Slides')
            .filter('_type == "heroSlide"')
            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
        ),

      // 3. Achievers (Existing)
      S.listItem()
        .title('Achievers / Toppers')
        .icon(StarFilledIcon)
        .child(
          S.documentList()
            .title('Achievers')
            .filter('_type == "achiever"')
            .defaultOrdering([
              { field: 'year', direction: 'desc' },
              { field: 'displayOrder', direction: 'asc' },
            ])
        ),

      // 4. Testimonials
      S.listItem()
        .title('Testimonials')
        .icon(CommentIcon)
        .child(
          S.documentList()
            .title('Testimonials')
            .filter('_type == "testimonial"')
            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
        ),

      // 5. Academic Divisions
      S.listItem()
        .title('Academic Divisions')
        .icon(BookIcon)
        .child(
          S.documentList()
            .title('Academic Divisions')
            .filter('_type == "division"')
            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
        ),

      // 6. Batches
      S.listItem()
        .title('Batches')
        .icon(CalendarIcon)
        .child(
          S.documentList()
            .title('Batches')
            .filter('_type == "batch"')
            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
        ),

      // 7. Faculty
      S.listItem()
        .title('Faculty')
        .icon(UsersIcon)
        .child(
          S.documentList()
            .title('Faculty')
            .filter('_type == "faculty"')
            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
        ),

      // 8. Student Life
      S.listItem()
        .title('Student Life')
        .icon(ImageIcon)
        .child(
          S.documentList()
            .title('Student Life')
            .filter('_type == "studentLife"')
            .defaultOrdering([{ field: 'displayOrder', direction: 'asc' }])
        ),

      S.divider(),

      // 9. Announcements
      S.listItem()
        .title('Announcements')
        .icon(PinIcon)
        .child(
          S.documentList()
            .title('Announcements')
            .filter('_type == "announcement"')
            .defaultOrdering([{ field: 'createdAt', direction: 'desc' }])
        ),

      // 10. Weekly Quizzes
      S.listItem()
        .title('Weekly Quizzes')
        .icon(HelpCircleIcon)
        .child(
          S.documentList()
            .title('Weekly Quizzes')
            .filter('_type == "weeklyQuiz"')
        ),
    ])



