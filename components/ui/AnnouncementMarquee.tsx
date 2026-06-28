import React from 'react'
import type { Announcement } from '@/types/announcement'

interface AnnouncementMarqueeProps {
  announcements: Announcement[]
}

const getAnnouncementEmoji = (priority: string, title: string) => {
  const t = title.toLowerCase()
  if (t.includes('admission')) return '📢'
  if (t.includes('test') || t.includes('exam') || t.includes('quiz')) return '📝'
  if (t.includes('workshop') || t.includes('seminar')) return '🎯'
  if (t.includes('holiday') || t.includes('diwali') || t.includes('eid') || t.includes('christmas') || t.includes('closed')) return '📅'
  if (priority === 'urgent') return '🚨'
  if (priority === 'important') return '🔥'
  return '✨'
}

export default function AnnouncementMarquee({ announcements }: AnnouncementMarqueeProps) {
  if (!announcements || announcements.length === 0) return null

  // Ensure we have enough items for marquee scrolling or repeat them to ensure smoothness
  const marqueeItems = announcements.length < 3 
    ? [...announcements, ...announcements, ...announcements] 
    : announcements;

  return (
    <div 
      className="pause-marquee overflow-hidden whitespace-nowrap bg-brand-navy/95 border-b border-brand-gold/30 py-3 text-sm font-semibold text-white relative z-50 flex items-center shadow-md select-none"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex animate-marquee gap-16 items-center">
        {/* First copy */}
        <div className="flex gap-16 items-center shrink-0">
          {marqueeItems.map((ann, idx) => (
            <div key={`a-${ann._id}-${idx}`} className="flex items-center gap-3">
              <span className="text-base select-none">
                {getAnnouncementEmoji(ann.priority, ann.title)}
              </span>
              
              <span className="text-white hover:text-brand-gold transition-colors duration-200 tracking-wide text-[13px] md:text-sm">
                {ann.title}
                {ann.description && (
                  <span className="font-normal text-slate-300 ml-1.5 opacity-90">
                    — {ann.description}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>

        {/* Second copy for infinite scrolling loop */}
        <div className="flex gap-16 items-center shrink-0" aria-hidden="true">
          {marqueeItems.map((ann, idx) => (
            <div key={`b-${ann._id}-${idx}`} className="flex items-center gap-3">
              <span className="text-base select-none">
                {getAnnouncementEmoji(ann.priority, ann.title)}
              </span>
              
              <span className="text-white hover:text-brand-gold transition-colors duration-200 tracking-wide text-[13px] md:text-sm">
                {ann.title}
                {ann.description && (
                  <span className="font-normal text-slate-300 ml-1.5 opacity-90">
                    — {ann.description}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
