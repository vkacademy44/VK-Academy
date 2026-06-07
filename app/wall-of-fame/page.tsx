import ShiningStarCard from "@/components/ui/ShiningStarCard";
import Button from "@/components/ui/Button";

export default function WallOfFamePage() {
  return (
    <div className="w-full bg-white">

      {/* Page Header */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 border border-white/10 tracking-wide uppercase">
            <span>🏆</span> Legacy of Excellence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Our Wall of <span className="text-brand-gold">Fame</span>
          </h1>
          <p className="text-slate-300 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Success isn't just about hard work; it's about the right guidance. Meet the brilliant minds who trusted VK Academy and conquered their academic milestones.
          </p>
        </div>
      </section>

      {/* Analytics / Stats Banner */}
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
          </div>
        </div>
      </section>

      {/* 2026 - 27 Toppers Section */}
      <section className="py-16 lg:py-24 bg-[#F4F8FF]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-navy mb-2 tracking-tight">Our 2026 - 27 Toppers</h2>
              <p className="text-slate-500 font-medium">Celebrating the hard work, dedication, and outstanding success of our students.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <ShiningStarCard
              name="Mrunal Sawant"
              achievement="Score: 90.20%"
              tag="10th Board Topper"
              imageSrc="/images/3.2026.jpeg"
              imagePlaceholder="bg-slate-800"
            />
            <ShiningStarCard
              name="Neel Vadke"
              achievement="Score: 90.00%"
              tag="10th Board Topper"
              imageSrc="/images/2.2026.jpeg"
              imagePlaceholder="bg-slate-700"
            />
            <ShiningStarCard
              name="Mayank Mahajan"
              achievement="Score: 89.80%"
              tag="10th Board Topper"
              imageSrc="/images/4.2026.jpeg"
              imagePlaceholder="bg-slate-900"
            />
            <ShiningStarCard
              name="Rose Joseph"
              achievement="Score: 85.40%"
              tag="10th Board Topper"
              imageSrc="/images/1.2026.jpeg"
              imagePlaceholder="bg-slate-800"
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-extrabold text-brand-navy mb-6">Ready to see your photo on this wall?</h2>
          <p className="text-slate-500 mb-8 font-medium">Join our target batches and let our expert faculty guide your preparation strategy.</p>
          <Button href="/contact" variant="primary" className="px-8">
            Enquire About Admissions
          </Button>
        </div>
      </section>

    </div>
  );
}