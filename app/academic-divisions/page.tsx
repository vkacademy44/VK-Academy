import Button from "@/components/ui/Button";
import { Calculator, Microscope, GraduationCap, Target, Brain, Activity, BarChart3 } from "lucide-react";

export default function AcademicDivisionsPage() {
  return (
    <div className="w-full bg-white">
      
      {/* Page Header */}
      <section className="bg-brand-navy py-20 lg:py-28 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-100 text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 border border-white/10 tracking-wide uppercase">
              <span>📚</span> Academic Excellence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Our Academic <span className="text-brand-blue">Divisions</span>
            </h1>
            <p className="text-slate-300 font-medium text-lg leading-relaxed mb-10">
              Discover our specialized departments designed to build unbreakable fundamentals and cultivate top-tier competitive ranks.
            </p>
            <Button href="/contact" variant="primary" className="shadow-lg shadow-brand-blue/20">
              Consult an Academic Advisor
            </Button>
          </div>
        </div>
      </section>

      {/* The VK Teaching Framework (from your original design) */}
      <section className="py-20 lg:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">The VK Teaching Framework</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              A proprietary four-stage offline methodology that guarantees retention and application under exam pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stage 1 */}
            <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl transform lg:-translate-y-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm text-xl font-bold">
                01
              </div>
              <h3 className="text-xl font-extrabold mb-3">Concept Immersion</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Deep dive into fundamental principles using classroom visualizations and real-world case studies.
              </p>
            </div>
            {/* Stage 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-brand-light text-brand-blue rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">Cognitive Mapping</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Techniques to link new information with existing knowledge, ensuring long-term memory encoding.
              </p>
            </div>
            {/* Stage 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-brand-light text-brand-blue rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">Stress Simulations</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Timed offline examinations under strict hall conditions to build psychological fortitude and speed.
              </p>
            </div>
            {/* Stage 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-brand-light text-brand-blue rounded-xl flex items-center justify-center mb-6 text-xl font-bold">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-brand-navy mb-3">Precision Analytics</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Data-driven feedback to pin-point specific weak topics for targeted doubt-clearing sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Divisions */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-24">
          
          {/* Engineering Division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest text-xs mb-4">
                <Calculator className="w-5 h-5" /> Division of Engineering
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 tracking-tight">
                IIT-JEE (Main & Advanced)
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                Engineering entrance exams require more than formula memorization; they demand intense analytical thinking and rapid problem-solving skills. Our engineering faculty focuses on rigorous mathematical modeling and physics applications.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">Extensive coverage of PCM (Physics, Chemistry, Mathematics).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">Graded level assignment sheets (Basic to Advanced).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">All India offline test series for peer benchmarking.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400 font-medium shadow-inner">
              [ Engineering Batch Photo ]
            </div>
          </div>

          {/* Medical Division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400 font-medium shadow-inner">
              [ Medical Batch Photo ]
            </div>
            <div>
              <div className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest text-xs mb-4">
                <Microscope className="w-5 h-5" /> Division of Medical
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 tracking-tight">
                NEET / Medical Sciences
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                The medical entrance is a test of accuracy, speed, and vast memory retention. Our methodology ensures line-by-line mastery of NCERT, coupled with exhaustive objective practice for Botany, Zoology, Physics, and Chemistry.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">Strict adherence to the latest NTA/NEET syllabus guidelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">High-frequency revision modules for Biology retention.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">OMR-based offline testing to minimize bubbling errors.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Foundation Division */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest text-xs mb-4">
                <GraduationCap className="w-5 h-5" /> Division of Foundation
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-6 tracking-tight">
                Early Foundation (Class 8-10)
              </h2>
              <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8">
                Catching them young is the secret to producing top rankers. The Foundation division builds logical reasoning, sharpens IQ, and prepares junior students for school boards, NTSE, and Olympiads, giving them a massive head start for future competitive exams.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">Focus on Mental Ability and Logical Reasoning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">Preparation for state and national level Olympiads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-slate-600 font-medium text-sm">Stress-free transition to higher secondary academics.</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center text-slate-400 font-medium shadow-inner">
              [ Foundation Batch Photo ]
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}