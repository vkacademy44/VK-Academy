"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

/* ── Slide data — update src/title whenever you add new class photos ── */
const SLIDES = [
  {
    src:     "/images/2025.jpeg",
    title:   "🏆 Batch 2025 Toppers",
    sub:     "Outstanding results — 90%+ board scores",
  },
  {
    src:     "/hero.png",
    title:   "📚 Live Classroom Sessions",
    sub:     "Small batches · personal attention · daily doubt clearing",
  },
  {
    src:     "/images/marunal sawant.jpeg",
    title:   "🥇 Mrunal Sawant",
    sub:     "SSC Board Topper · 90.20%",
  },
  {
    src:     "/images/neel vadke.jpeg",
    title:   "🥈 Neel Vadke",
    sub:     "SSC Board Topper · 90.00%",
  },
  {
    src:     "/images/mayank mahajan.jpeg",
    title:   "🎖️ Mayank Mahajan",
    sub:     "SSC Board Topper · 89.80%",
  },
];

const INTERVAL = 3500; // ms between slides

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [fading,  setFading]  = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 280);
  }, []);

  /* Auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [current, goTo]);

  const slide = SLIDES[current];

  return (
    <div className="relative w-full max-w-[420px] aspect-[4/5] bg-brand-light rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(13,27,42,0.12)]">

      {/* ── Slide image ── */}
      <Image
        key={slide.src}
        src={slide.src}
        alt={slide.title}
        fill
        priority={current === 0}
        className={`object-cover transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, 420px"
      />

      {/* ── Gradient overlay so text is always readable ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

      {/* ── Dot indicators ── */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-5 h-2 bg-[#FFB300]"
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* ── Info badge (replaces static Certified Coaching card) ── */}
      <div
        className={`absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-brand-gold/30 transition-opacity duration-300 ${
          fading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-navy shrink-0 text-lg leading-none">
            🛡️
          </div>
          <div className="min-w-0">
            <p className="text-sm font-bold text-brand-navy truncate">{slide.title}</p>
            <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-2">{slide.sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
