export interface WeeklyQuiz {
  _id: string
  _createdAt: string
  _updatedAt: string
  quizTitle: string
  description: string
  quizLink: string
  isActive: boolean
  startDate?: string
  endDate?: string
  buttonText: string
}
