import { Suspense } from "react";
import Button from "@/components/ui/Button";
import AchieverCard from "@/components/ui/AchieverCard";
import { getAllAchievers, getAchieverYears } from "@/sanity/lib/queries";
import type { Achiever } from "@/types/achiever";
import ShiningStarCard from "@/components/ui/ShiningStarCard";

// ── Fallback data (shown until Sanity content is added) ─────────────────────
const FALLBACK_ACHIEVERS = [
  { name: "Mrunal Sawant", achievement: "Score: 90.20%", tag: "10th Board Topper", imageSrc: "/images/3.2026.jpeg", imagePlaceholder: "bg-slate-800" },
  { name: "Neel Vadke",    achievement: "Score: 90.00%", tag: "10th Board Topper", imageSrc: "/images/2.2026.jpeg", imagePlaceholder: "bg-slate-700" },
  { name: "Mayank Mahajan",achievement: "Score: 89.80%", tag: "10th Board Topper", imageSrc: "/images/4.2026.jpeg", imagePlaceholder: "bg-slate-900" },
  { name: "Rose Joseph",   achievement: "Score: 85.40%", tag: "10th Board Topper", imageSrc: "/images/1.2026.jpeg", imagePlaceholder: "bg-slate-800" },
];

// ── Year group helper ────────────────────────────────────────────────────────
function groupByYear(achievers: Achiever[]): Record<number, Achiever[]> {
  return achievers.reduce<Record<number, Achiever[]>>((acc, a) => {
    if (!acc[a.year]) acc[a.year] = [];
    acc[a.year].push(a);
    return acc;
  }, {});
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default async function WallOfFamePage() {
  const [allAchievers, allYears] = await Promise.all([
    getAllAchievers().catch(() => []),
    getAchieverYears().catch(() => []),
  ]);

  const hasSanityData = allAchievers.length > 0;
  const grouped = groupByYear(allAchievers);

  return (
    <div className="w-full bg-white">

      {/* ── Page Header ─────────────────────────────────────────────────── */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 border border-white/10 tracking-wide uppercase">
            <span>🏆</span> Legacy of Excellence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Wall of <span className="text-brand-gold">Fame</span>
          </h1>
          <p className="text-slate-300 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Success isn't just about hard work; it's about the right guidance. Meet the brilliant
            minds who trusted VK Academy and conquered their academic milestones.
          </p>
        </div>
      </section>

      {/* ── Stats Banner ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-brand-navy">150+</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">MHT-CET Qualifiers</p>
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-extrabold text-brand-navy">98%</h3>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Board Success Rate</p>
            </div>
            <div>
              <h4 className="text-3xl md:text-4xl font-extrabold text-brand-navy">50+</h4>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Distinction Holders</p>
            </div>
            {hasSanityData && (
              <div>
                <h4 className="text-3xl md:text-4xl font-extrabold text-brand-gold">{allAchievers.length}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">Achievers Listed</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Achievers Grid ──────────────────────────────────────────────── */}
      {hasSanityData ? (
        // ── SANITY-POWERED: grouped by year ─────────────────────────────
        allYears.map((year) => {
          const yearAchievers = grouped[year] ?? [];
          if (yearAchievers.length === 0) return null;
          return (
            <section key={year} className="py-16 lg:py-20 bg-[#F4F8FF] border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Year heading */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-brand-gold/20 text-brand-navy text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                      Batch {year}
                    </span>
                    <h2 className="text-3xl font-extrabold text-brand-navy tracking-tight">
                      {year} Toppers
                    </h2>
                    <p className="text-slate-500 font-medium mt-1">
                      {yearAchievers.length} achiever{yearAchievers.length !== 1 ? "s" : ""} from this batch.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {yearAchievers.map((achiever) => (
                    <AchieverCard key={achiever._id} achiever={achiever} size="lg" />
                  ))}
                </div>
              </div>
            </section>
          );
        })
      ) : (
        // ── FALLBACK: static 2026 toppers ───────────────────────────────
        <section className="py-16 lg:py-24 bg-[#F4F8FF]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
              <div>
                <h2 className="text-3xl font-extrabold text-brand-navy mb-2 tracking-tight">
                  Our 2026–27 Toppers
                </h2>
                <p className="text-slate-500 font-medium">
                  Celebrating the hard work, dedication, and outstanding success of our students.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {FALLBACK_ACHIEVERS.map((s) => (
                <ShiningStarCard
                  key={s.name}
                  name={s.name}
                  achievement={s.achievement}
                  tag={s.tag}
                  imageSrc={s.imageSrc}
                  imagePlaceholder={s.imagePlaceholder}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-6">
            Ready to see your photo on this wall?
          </h2>
          <p className="text-slate-500 mb-8 font-medium">
            Join our target batches and let our expert faculty guide your preparation strategy.
          </p>
          <Button href="/contact" variant="primary" className="px-8">
            Enquire About Admissions
          </Button>
        </div>
      </section>

    </div>
  );
}