export interface Announcement {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  description?: string
  priority: 'normal' | 'important' | 'urgent'
  isActive: boolean
  createdAt: string
}
