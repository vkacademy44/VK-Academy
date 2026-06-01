import Button from "@/components/ui/Button";
import { Calculator, Microscope, GraduationCap, Target, Brain, Activity, BarChart3 } from "lucide-react";

export default function AcademicDivisionsPage() {
  return (
    <div className="w-full bg-white">
      
      {/* Page Header */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden rounded-sm">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-amber-100 text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 border border-white/10 tracking-wide uppercase">
              <span>📚</span> Academic Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Our Academic <span className="text-brand-gold">Divisions</span>
            </h1>
            <p className="text-slate-300 font-medium text-lg leading-relaxed mb-10">
              Discover our specialized departments designed to build unbreakable fundamentals and cultivate top-tier competitive board and entrance exam ranks.
            </p>
            <Button href="/contact" variant="accent" className="shadow-lg">
              Consult an Academic Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* The VK Teaching Framework */}
      <section className="py-20 lg:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">The VK Teaching Framework</h2>
            <p className="text-slate-600 font-medium text-lg leading-relaxed">
              A proprietary four-stage offline methodology that guarantees conceptual clarity and application under exam pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="bg-brand-navy text-white p-8 rounded-3xl shadow-xl transform lg:-translate-y-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm text-xl font-bold text-brand-gold">
                01
              </div>
              <h3 className="text-xl font-extrabold mb-3">Concept Clarity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Deep dive into core scientific and logical principles using clean step-by-step breakdowns.
              </p>
            </div>
            {/* Stage 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-brand-light text-brand-navy rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                <Brain className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">Strong Foundation</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Interlinking topics across standards to ensure long-term retention and structured building blocks.
              </p>
            </div>
            {/* Stage 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-brand-light text-brand-navy rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                <Activity className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">Regular Assessment</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Regular Chapter Tests and timed offline examinations to build exam speed, accuracy, and confidence.
              </p>
            </div>
            {/* Stage 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-brand-light text-brand-navy rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                <BarChart3 className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">Performance Analysis</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Exhaustive analytical feedback loops to pinpoint weak topics and organize customized doubt clearance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Divisions */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
          
          {/* School Division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-brand-navy font-bold uppercase tracking-widest text-xs mb-4">
                <GraduationCap className="w-5 h-5 text-brand-gold" /> School Section
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 tracking-tight">
                Standard 5th to 10th
              </h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                Early standard coaching is the foundation of competitive academic success. Our comprehensive school coaching programs emphasize deep concept building, structured logical progression, and school board preparedness.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-sm">State Board & ICSE Board curricula.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-sm">Personal Attention with strictly limited Small Batch Sizes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-sm">Consistent chapter-wise tests and performance analysis reports for parents.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400 font-medium shadow-inner relative overflow-hidden border border-slate-200">
              <span className="text-slate-500 font-bold text-sm">School Coaching Batch</span>
            </div>
          </div>

          {/* Science College Division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400 font-medium shadow-inner relative overflow-hidden border border-slate-200">
              <span className="text-slate-500 font-bold text-sm">Science College Coaching Batch</span>
            </div>
            <div>
              <div className="flex items-center gap-3 text-brand-navy font-bold uppercase tracking-widest text-xs mb-4">
                <Microscope className="w-5 h-5 text-brand-gold" /> College Section
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 tracking-tight">
                11th & 12th Science
              </h2>
              <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">
                Targeted, result-oriented coaching programs mapped specifically to boards and competitive entrance examinations. We cultivate solid logical modeling, high-speed problem-solving skills, and stress-free academic stamina.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-sm">CET State Entrance Board preparation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-sm">JEE Mains (Engineering Entrance) & NEET (Medical Entrance) Preparation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-semibold text-sm">Exhaustive PCM (Physics, Chemistry, Maths) & PCB (Physics, Chemistry, Biology) Core foundations.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}