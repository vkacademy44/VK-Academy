export type BatchCategory = 'school' | 'college'
export type BatchStatus = 'Admissions Open' | 'Filling Fast' | 'Limited Seats' | 'Closed'

export interface Batch {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  category: BatchCategory
  batchType: string
  status: BatchStatus
  startDate: string
  schedule: string
  venue: string
  buttonText: string
  buttonLink: string
  enquiryWhatsapp?: string
  displayOrder: number
  active: boolean
}

