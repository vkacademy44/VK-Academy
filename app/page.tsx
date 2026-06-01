import Button from "@/components/ui/Button";
import Image from "next/image";
import { Users, BookOpen, LineChart, Star, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import CompareDemo from "@/components/compare-demo";

export default function Home() {
  return (
    <div className="w-full bg-white">


      {/* ── HERO ──────────────────────────────────────────────────────── */}
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
              <div className="inline-flex items-center gap-2 bg-[#FFB300]/10 text-brand-navy text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 tracking-wide border border-brand-gold/30">
                <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                Admissions Open 2026–27
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-brand-navy leading-[1.1] mb-6 tracking-tight">
                "Dare to Dream,<br />
                <span className="text-brand-gold">Learn to Excel"</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-lg mb-10 leading-relaxed font-medium">
                Empowering Students from Std 5th to 12th Science with Expert Guidance for CET, JEE & NEET. Built on strong PCM/PCB foundations.
              </p>

              <div className="flex flex-wrap gap-3 mb-14">
                <Button href="/contact" variant="accent">
                  Enroll Now
                </Button>
                <Button href="tel:8356992905" variant="outline">
                  📞 Call Now
                </Button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-10 border-t border-slate-200 pt-8">
                <div>
                  <p className="text-3xl font-extrabold text-brand-navy tracking-tight">100+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Students Enrolled</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <p className="text-3xl font-extrabold text-brand-navy tracking-tight">98%</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Success Rate</p>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <p className="text-3xl font-extrabold text-brand-navy tracking-tight">5.0</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Google Rating</p>
                </div>
              </div>
            </div>

            {/* Right – hero image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] bg-brand-light rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(13,27,42,0.12)]">
                <Image
                  src="/hero.png"
                  alt="VK Academy Students"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                {/* Floating badge */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/98 p-4 rounded-2xl shadow-lg border border-brand-gold/30">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-brand-gold/10 text-brand-navy shrink-0">
                      🛡️
                    </div>
                    <div>
                      <p className="text-sm font-bold text-brand-navy">Certified Coaching</p>
                      <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                        Guided by industry's most respected masters and subject matter experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── COURSES SECTION ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Our Offerings</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Academic Divisions & Coaching
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Structured result-oriented coaching classes to guide school learners to boards, and science students to competitive college exams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* School Coaching */}
            <div className="bg-brand-light p-8 md:p-10 rounded-2xl border border-slate-100 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-navy/10 text-brand-navy text-xs font-bold uppercase tracking-wider rounded-full">
                  🏫 School Section
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy">Standard 5th to 10th</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Building strong conceptual bases and rigorous discipline to score top ranks in secondary school exams.
                </p>
                <div className="h-px bg-slate-200" />
                <ul className="space-y-3">
                  {["State Board Coaching", "ICSE Board Preparation", "Concept-Based Lectures", "Personal Attention & Small Batches"].map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                      <span className="w-5 h-5 bg-brand-gold/25 rounded-full flex items-center justify-center text-brand-navy text-xs font-black">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="accent" className="w-full">
                  Enroll in School Batch
                </Button>
              </div>
            </div>

            {/* Science Coaching */}
            <div className="bg-brand-light p-8 md:p-10 rounded-2xl border border-slate-100 hover:border-brand-gold/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/20 text-brand-navy text-xs font-bold uppercase tracking-wider rounded-full">
                  🔬 College Section
                </div>
                <h3 className="text-2xl font-extrabold text-brand-navy">11th & 12th Science</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Targeted, result-oriented coaching programs to crack national and state competitive entrance exams.
                </p>
                <div className="h-px bg-slate-200" />
                <ul className="space-y-3">
                  {["CET Entrance Preparation", "JEE Mains (Engineering Exams)", "NEET (Medical Board Exams)", "Strong PCM & PCB Core Foundations"].map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2.5 text-slate-700 text-sm font-semibold">
                      <span className="w-5 h-5 bg-brand-gold/25 rounded-full flex items-center justify-center text-brand-navy text-xs font-black">✓</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary" className="w-full">
                  Enroll in Science Batch
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-brand-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Academy Features & Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Why Us</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
                  Why Choose VK Academy?
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                  We provide an ecosystem that fosters curiosity, instills rigorous discipline, and unlocks the true latent potential of every single student.
                </p>
              </div>

              {/* Stack of Key Benefits */}
              <div className="space-y-4">
                {[
                  {
                    icon: <Users className="w-5.5 h-5.5" />,
                    title: "Expert Faculty & Subject Mentors",
                    desc: "Learn from highly specialized professionals and subject matter experts who guide your learning path every single day.",
                  },
                  {
                    icon: <BookOpen className="w-5.5 h-5.5" />,
                    title: "Premium Conceptual Study Material",
                    desc: "In-house structured modules crafted to break down complex concepts into highly intuitive lessons.",
                  },
                  {
                    icon: <LineChart className="w-5.5 h-5.5" />,
                    title: "Continuous Progress & Analytics Tracking",
                    desc: "Weekly chapter tests, detailed feedback loops, and individual tracking to bridge conceptual gaps.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 hover:border-brand-gold/40 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-brand-navy/10 rounded-xl flex items-center justify-center text-brand-navy shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-brand-navy mb-1">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Student Transformation Compare Slider */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
              <div className="text-center lg:text-left w-full">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-gold/10 text-brand-navy text-xs font-bold uppercase tracking-wider rounded-full mb-3 border border-brand-gold/30">
                  <TrendingUp className="w-3.5 h-3.5 text-[#FFB300]" /> Proven Transformation
                </span>
                <h3 className="text-xl font-extrabold text-brand-navy tracking-tight mb-2">
                  9th Standard vs. 10th Board Results
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  Drag or hover over the slider to witness how our students transformed their academic trajectories under VK Academy's coaching program.
                </p>
              </div>

              {/* Interactive Compare Slider Component */}
              <div className="relative p-2 bg-white rounded-3xl shadow-md border border-slate-100 w-full flex justify-center">
                <CompareDemo />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── SHINING STARS ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Achievers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Our Shining Stars
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A legacy defined by the extraordinary achievements of our students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Rahul Sharma", result: "JEE Advanced · AIR 12", tag: "IIT Bombay CS" },
              { name: "Sneha Gupta", result: "NEET 2023 · 710/720", tag: "AIIMS Delhi" },
              { name: "Arjun Mehta", result: "CA Foundation · State Topper", tag: "AIR 4" },
            ].map((star, i) => (
              <div
                key={star.name}
                className={`relative h-72 rounded-2xl overflow-hidden group ${
                  ["bg-slate-700", "bg-slate-800", "bg-slate-900"][i]
                }`}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-20">
                  <span className="inline-block px-2.5 py-1 bg-brand-gold text-brand-navy text-[10px] font-bold uppercase tracking-widest rounded mb-2">
                    {star.tag}
                  </span>
                  <h3 className="text-xl font-extrabold text-white">{star.name}</h3>
                  <p className="text-sm text-amber-100 mt-1">{star.result}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-0">
                  <span className="text-white/20 text-sm font-medium">Student Photo</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/wall-of-fame"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-[#002244] transition-colors"
            >
              View All Achievers <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── FACULTY ──────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-xl mx-auto mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3">Team</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4">
              Meet Our Visionaries
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Mentors who don't just teach — they inspire and guide you to your true potential.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: "Dr. Vikram K.", title: "Founder · Physics HOD", desc: "20+ years of academic excellence. Ex-IITian with a passion for simplified physics.", shade: "bg-slate-300" },
              { name: "Prof. Ananya S.", title: "Biology Expert", desc: "Renowned author & mentor. Guided 500+ students to premier medical colleges.", shade: "bg-slate-400" },
              { name: "Mr. Rajiv M.", title: "Chemistry Specialist", desc: "Known for innovative teaching & flawless organic chemistry breakdown.", shade: "bg-slate-300" },
              { name: "Mrs. Shreya V.", title: "Mathematics HOD", desc: "Gold medalist with a unique approach to high-speed calculus & algebra.", shade: "bg-slate-400" },
            ].map((faculty) => (
              <div key={faculty.name} className="text-center group">
                <div className={`relative w-full aspect-square rounded-2xl overflow-hidden ${faculty.shade} mb-4 flex items-center justify-center border border-slate-200`}>
                  <span className="text-white/30 text-xs font-medium">Photo</span>
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-300 rounded-2xl" />
                </div>
                <h3 className="text-sm font-bold text-brand-navy">{faculty.name}</h3>
                <p className="text-xs text-brand-navy/70 font-semibold mt-0.5 mb-2">{faculty.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed hidden sm:block">{faculty.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faculty"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-[#002244] transition-colors"
            >
              View Full Directory <ArrowRight className="w-4 h-4 text-brand-gold" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────── */}
      <section className="py-20 lg:py-24 bg-brand-navy rounded-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed mb-8">
            Join hundreds of students who have transformed their futures with VK Academy's expert guidance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button href="/batches" variant="accent">
              Explore Batches
            </Button>
            <Button href="/contact" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              Contact Admissions
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}