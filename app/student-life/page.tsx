"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { X, Play, ZoomIn, Grid3X3, LayoutGrid } from "lucide-react";

/* ── Media catalogue ─────────────────────────────────────────────────────── */
type MediaItem = {
  id: number;
  type: "image" | "video";
  src: string;
  thumb?: string;        // poster / thumb for video
  alt: string;
  category: string;
  span?: "tall" | "wide" | "hero" | "normal"; // bento shape hint
};

const mediaItems: MediaItem[] = [
  {
    id: 1,
    type: "video",
    src: "/wvideoVk.mp4",
    thumb: "/images/WhatsApp Image 2026-05-31 at 8.35.15 PM.jpeg",
    alt: "Interactive Student Fun & Active Campus Life",
    category: "Fun",
    span: "hero",
  },
  {
    id: 2,
    type: "image",
    src: "/images/WhatsApp Image 2026-05-31 at 8.35.13 PM.jpeg",
    alt: "Active Classroom Engagement & Practical Learning",
    category: "Classrooms",
    span: "tall",
  },
  {
    id: 3,
    type: "image",
    src: "/images/WhatsApp Image 2026-05-31 at 8.35.15 PM (1).jpeg",
    alt: "Annual Science Seminar & Conceptual Lectures",
    category: "Seminars",
    span: "normal",
  },
  {
    id: 4,
    type: "image",
    src: "/images/WhatsApp Image 2026-05-31 at 8.35.15 PM (2).jpeg",
    alt: "High-Energy Interactive Workshops & Student Events",
    category: "Events",
    span: "wide",
  },
  {
    id: 5,
    type: "image",
    src: "/images/WhatsApp Image 2026-05-31 at 8.35.15 PM (3).jpeg",
    alt: "Recognizing & Celebrating Toppers' Academic Achievements",
    category: "Achievements",
    span: "normal",
  },
  {
    id: 6,
    type: "image",
    src: "/images/WhatsApp Image 2026-05-31 at 8.35.15 PM.jpeg",
    alt: "Cooperative Peer Groups & Study Circles",
    category: "Classrooms",
    span: "normal",
  },
  {
    id: 7,
    type: "image",
    src: "/images/vkFounder.jpeg",
    alt: "Academic Guidance Session by VK Academy Founder",
    category: "Seminars",
    span: "tall",
  },
  {
    id: 8,
    type: "image",
    src: "/images/vkLogo.jpeg",
    alt: "VK Academy — Dare to Dream, Learn to Excel",
    category: "Achievements",
    span: "normal",
  },
];

const categories = ["All", "Fun", "Classrooms", "Seminars", "Events", "Achievements"];

/* ── Bento cell class resolver ───────────────────────────────────────────── */
function spanClass(span?: string) {
  switch (span) {
    case "hero":
      return "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
    case "tall":
      return "col-span-1 row-span-2";
    case "wide":
      return "col-span-2 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
}

/* ── Lightbox ──────────────────────────────────────────────────────────────── */
function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: MediaItem;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    document.body.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.classList.remove("lightbox-open");
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        aria-label="Close"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xl font-bold"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors text-xl font-bold"
        aria-label="Next"
      >
        ›
      </button>

      {/* Media */}
      <div
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            ref={videoRef}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="rounded-2xl max-h-[80vh] w-full object-contain shadow-2xl"
          />
        ) : (
          <div className="relative w-full max-h-[80vh] flex items-center justify-center">
            <Image
              src={item.src}
              alt={item.alt}
              width={1200}
              height={800}
              className="rounded-2xl object-contain max-h-[80vh] w-auto shadow-2xl"
              priority
            />
          </div>
        )}

        {/* Caption */}
        <p className="mt-4 text-white/70 text-sm font-medium text-center">
          <span className="px-3 py-1 bg-white/10 rounded-full text-xs uppercase tracking-widest mr-2">
            {item.category}
          </span>
          {item.alt}
        </p>
      </div>
    </div>
  );
}

/* ── Bento Card ──────────────────────────────────────────────────────────── */
function BentoCard({
  item,
  onClick,
  index,
}: {
  item: MediaItem;
  onClick: () => void;
  index: number;
}) {
  return (
    <div
      className={`${spanClass(item.span)} relative group cursor-pointer rounded-2xl overflow-hidden bg-slate-100 fade-in-up`}
      style={{ animationDelay: `${index * 60}ms` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`Open ${item.alt}`}
    >
      {/* Thumbnail */}
      <Image
        src={item.thumb ?? item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Video badge */}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 sm:w-7 sm:h-7 text-brand-navy fill-brand-navy ml-1" />
          </div>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />

      {/* Hover zoom icon */}
      <div className="absolute top-3 right-3 p-1.5 bg-white/80 backdrop-blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
        <ZoomIn className="w-3.5 h-3.5 text-brand-navy" />
      </div>

      {/* Caption on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
        <span className="inline-block px-2 py-0.5 bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-wider rounded mb-1">
          {item.category}
        </span>
        <p className="text-white text-sm font-semibold leading-snug line-clamp-2">
          {item.alt}
        </p>
      </div>
    </div>
  );
}

/* ── Page ──────────────────────────────────────────────────────────────────── */
export default function StudentLifePage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [layout, setLayout] = useState<"bento" | "grid">("bento");

  const filtered = mediaItems.filter(
    (item) => activeFilter === "All" || item.category === activeFilter
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const prevItem = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const nextItem = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  // Reset lightbox when filter changes
  useEffect(() => {
    setLightboxIndex(null);
  }, [activeFilter]);

  return (
    <div className="w-full bg-white min-h-screen">

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-10 lg:pt-28 lg:pb-14 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          {/* Eyebrow */}
          <span className="inline-block px-4 py-1.5 bg-brand-gold/10 text-brand-navy text-xs font-bold uppercase tracking-widest rounded-full mb-5 border border-brand-gold/30">
            Campus Moments
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight mb-4">
            Life at{" "}
            <span className="text-brand-gold">VK Academy</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            Classrooms buzzing with curiosity, events full of energy, and milestones worth celebrating — every moment, in one place.
          </p>
        </div>
      </section>

      {/* ── Controls ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Filter pills */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-brand-navy text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Layout toggle */}
          <div className="flex items-center gap-1 bg-slate-100 rounded-xl p-1">
            <button
              onClick={() => setLayout("bento")}
              className={`p-2 rounded-lg transition-all ${layout === "bento" ? "bg-white shadow-sm text-brand-navy" : "text-slate-400 hover:text-slate-600"}`}
              aria-label="Bento layout"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-lg transition-all ${layout === "grid" ? "bg-white shadow-sm text-brand-navy" : "text-slate-400 hover:text-slate-600"}`}
              aria-label="Grid layout"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── Gallery ─────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-400 font-medium">
            No moments in this category yet — check back soon!
          </div>
        ) : layout === "bento" ? (
          /* Pinterest / bento grid */
          <div
            className="
              grid gap-3
              grid-cols-2
              sm:grid-cols-3
              lg:grid-cols-4
              auto-rows-[180px]
              sm:auto-rows-[200px]
              lg:auto-rows-[220px]
            "
          >
            {filtered.map((item, i) => (
              <BentoCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => openLightbox(i)}
              />
            ))}
          </div>
        ) : (
          /* Uniform grid */
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="relative aspect-square rounded-2xl overflow-hidden bg-slate-100 group cursor-pointer fade-in-up"
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
              >
                <Image
                  src={item.thumb ?? item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-4 h-4 text-brand-navy fill-brand-navy ml-0.5" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                  {item.alt}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Count badge */}
        <p className="text-center mt-8 text-slate-400 text-sm font-medium">
          Showing <span className="font-bold text-slate-600">{filtered.length}</span> moments
        </p>
      </section>

      {/* ── Lightbox ────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={closeLightbox}
          onPrev={prevItem}
          onNext={nextItem}
        />
      )}
    </div>
  );
}