'use client'

import React, { useState, useEffect } from 'react'
import { Trophy, ArrowRight } from 'lucide-react'
import type { WeeklyQuiz } from '@/types/weeklyQuiz'

interface WeeklyQuizBannerProps {
  quizzes: WeeklyQuiz[]
}

export default function WeeklyQuizBanner({ quizzes }: WeeklyQuizBannerProps) {
  const [activeQuiz, setActiveQuiz] = useState<WeeklyQuiz | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (!quizzes || quizzes.length === 0) return

    const now = new Date()
    // Find the first active quiz that satisfies the date constraints
    const matchingQuiz = quizzes.find((quiz) => {
      if (!quiz.isActive) return false

      if (quiz.startDate) {
        const start = new Date(quiz.startDate)
        if (now < start) return false
      }

      if (quiz.endDate) {
        const end = new Date(quiz.endDate)
        if (now > end) return false
      }

      return true
    })

    setActiveQuiz(matchingQuiz || null)
  }, [quizzes])

  // Avoid hydration mismatch by waiting until mounted
  if (!mounted || !activeQuiz) return null

  return (
    <div className="w-full bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-navy via-slate-900 to-brand-navy p-5 sm:p-6 shadow-xl border border-brand-gold/30">
          {/* Decorative glow elements */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-brand-blue/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              {/* Icon Container */}
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 shrink-0 text-brand-gold shadow-inner animate-pulse">
                <Trophy className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  {activeQuiz.quizTitle}
                </h3>
                <p className="text-slate-300 text-sm font-medium max-w-xl leading-relaxed">
                  {activeQuiz.description}
                </p>
              </div>
            </div>

            {/* Action button */}
            <div className="shrink-0 w-full md:w-auto">
              <a
                href={activeQuiz.quizLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 rounded-xl bg-brand-gold hover:bg-amber-400 text-brand-navy font-bold text-sm sm:text-base tracking-wide shadow-md shadow-brand-gold/10 hover:shadow-brand-gold/20 hover:-translate-y-0.5 transition-all duration-200"
              >
                {activeQuiz.buttonText || 'Take Quiz Now'}
                <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
