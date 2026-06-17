"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { Achiever } from "@/types/achiever";

interface AchieverCardProps {
  achiever: Achiever;
  /** Controls card height; defaults to "h-72" on homepage, "h-80" on wall-of-fame */
  size?: "sm" | "lg";
}

const BOARD_LABEL: Record<string, string> = {
  SSC: "SSC Board",
  HSC: "HSC Board",
  CBSE: "CBSE Board",
  ICSE: "ICSE Board",
};

const BG_FALLBACKS = [
  "bg-slate-700",
  "bg-slate-800",
  "bg-slate-900",
  "bg-zinc-800",
];

export default function AchieverCard({ achiever, size = "sm" }: AchieverCardProps) {
  const {
    studentName,
    percentage,
    board,
    standard,
    year,
    rank,
    studentPhoto,
    shortDescription,
  } = achiever;

  const heightClass = size === "lg" ? "h-80" : "h-72";
  const fallbackBg =
    BG_FALLBACKS[studentName.charCodeAt(0) % BG_FALLBACKS.length];

  const boardLabel = BOARD_LABEL[board] ?? board;
  const tagLabel = `Std ${standard} · ${boardLabel}`;
  const scoreLabel = `${percentage.toFixed(2)}%`;

  const photoUrl = studentPhoto?.asset
    ? urlFor(studentPhoto)
        .width(400)
        .height(500)
        .fit("crop")
        .auto("format")
        .quality(85)
        .url()
    : null;

  return (
    <div
      className={`relative ${heightClass} w-full rounded-2xl overflow-hidden group ${fallbackBg}`}
    >
      {/* Student photo */}
      {photoUrl ? (
        <Image
          src={photoUrl}
          alt={studentPhoto?.alt ?? studentName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 z-0"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <span className="text-white/30 font-medium text-sm">Photo coming soon</span>
        </div>
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />

      {/* Year badge top-right */}
      <div className="absolute top-3 right-3 z-20">
        <span className="px-2.5 py-1 bg-black/40 backdrop-blur-sm text-white/90 text-[10px] font-bold rounded-full border border-white/10">
          {year}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 w-full p-5 z-20 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        {/* Tag */}
        <span className="inline-block px-2.5 py-1 bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-widest rounded mb-2">
          {tagLabel}
        </span>

        {/* Name & score */}
        <h3 className="text-xl font-extrabold text-white leading-tight">{studentName}</h3>
        <p className="text-sm text-amber-100 mt-0.5 font-semibold">{scoreLabel}</p>

        {/* Rank & description — visible on hover */}
        <div className="mt-2 overflow-hidden max-h-0 group-hover:max-h-20 transition-all duration-300">
          {rank && (
            <p className="text-xs text-white/80 font-medium">🏅 {rank}</p>
          )}
          {shortDescription && (
            <p className="text-xs text-white/70 leading-relaxed mt-1 line-clamp-2">
              {shortDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
