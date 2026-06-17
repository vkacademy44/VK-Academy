"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Button from "./Button";
import { Star } from "lucide-react";
import type { HeroSlide } from "@/types/heroSlide";
import { urlFor } from "@/sanity/lib/image";

interface HeroSectionProps {
  slides: HeroSlide[];
  studentsEnrolled?: string;
  successRate?: string;
  googleRating?: string;
}

export default function HeroSection({
  slides,
  studentsEnrolled,
  successRate,
  googleRating,
}: HeroSectionProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 280);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [current, slides.length, goTo]);

  if (slides.length === 0) return null;

  const slide = slides[current];
  const imageUrl = urlFor(slide.heroImage).url();
  const imageAlt = slide.heroImage.alt || `${slide.titleLine1} ${slide.titleLine2}`;

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, #EFF6FF 0%, transparent 55%), radial-gradient(circle at 10% 80%, #F8FAFC 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`inline-flex items-center gap-2 bg-[#FFB300]/10 text-brand-navy text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 tracking-wide border border-brand-gold/30 transition-all duration-300 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
              <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              {slide.admissionBadgeText}
            </div>

            <h1 className={`text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] mb-6 tracking-tight transition-all duration-300 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
              {slide.titleLine1}<br />
              <span className="text-brand-gold">{slide.titleLine2}</span>
            </h1>

            <p className={`text-base sm:text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-medium transition-all duration-300 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
              {slide.description}
            </p>

            <div className={`flex flex-wrap gap-3 mb-14 transition-all duration-300 ${fading ? "opacity-0 translate-y-1" : "opacity-100 translate-y-0"}`}>
              <Button href={slide.primaryButtonLink} variant="accent">
                {slide.primaryButtonText}
              </Button>
              <Button href={slide.secondaryButtonLink} variant="outline">
                {slide.secondaryButtonText}
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-10 border-t border-slate-200 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-brand-navy tracking-tight">{studentsEnrolled || "100+"}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Students Enrolled</p>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <p className="text-3xl font-extrabold text-brand-navy tracking-tight">{successRate || "98%"}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Success Rate</p>
              </div>
              <div className="h-8 w-px bg-slate-200" />
              <div>
                <p className="text-3xl font-extrabold text-brand-navy tracking-tight">{googleRating || "5.0"}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Google Rating</p>
              </div>
            </div>
          </div>

          {/* Right – Carousel Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[4/5] bg-brand-light rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(13,27,42,0.12)]">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                priority
                className={`object-cover transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}
                sizes="(max-width: 768px) 100vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              {/* Dot indicators */}
              {slides.length > 1 && (
                <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {slides.map((_, i) => (
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
              )}

              {/* Info badge at bottom of image container */}
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
                    <p className="text-sm font-bold text-brand-navy truncate">{`${slide.titleLine1} ${slide.titleLine2}`}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-snug line-clamp-2">{slide.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
