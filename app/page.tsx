import Button from "@/components/ui/Button";
import Image from "next/image"; 
import { Users, BookOpen, LineChart } from "lucide-react";
import VisionaryCard from "@/components/ui/VisionaryCard";
import ShiningStarCard from "@/components/ui/ShiningStarCard";

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* ----------------- HERO SECTION ----------------- */}
      <section className="bg-gradient-to-br from-[#F4F8FF] via-[#F8FAFF] to-white pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Typography & Text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-[#E6F0FF] text-brand-blue text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 tracking-wide">
                <span>🎓</span> Top Rated Academy - 5.0 Google Rating
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-brand-navy leading-[1.15] mb-6 tracking-tight">
                Build Your Future With <br />
                <span className="text-brand-blue">VK Academy</span>
              </h1>
              
              <p className="text-base sm:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-medium">
                Experience world-class coaching with a blend of traditional values and modern technology. Empowering students for a brighter tomorrow.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-16">
                {/* Updated link to point to the new Batches page */}
                <Button href="/batches" variant="primary">
                  Explore Batches
                </Button>
                <Button href="/contact" variant="outline">
                  Download Brochure
                </Button>
              </div>

              <div className="flex items-center gap-16 border-t border-slate-100 pt-8">
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-navy tracking-tight">100+</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Students Enrolled</p>
                </div>
                <div className="h-10 w-[1px] bg-slate-200"></div>
                <div>
                  <h4 className="text-4xl font-extrabold text-brand-navy tracking-tight">98%</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Success Rate (%)</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Graphic Panel */}
            <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[440px] aspect-[4/5] bg-brand-light rounded-[32px] overflow-hidden shadow-2xl">
                <Image 
                  src="/hero.png" 
                  alt="VK Academy Students" 
                  fill
                  priority
                  className="object-cover z-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 440px"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl text-left shadow-xl border border-white/20 z-20">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-blue-50 text-brand-blue mt-0.5">
                      🛡️
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-brand-navy mb-1">Certified Coaching</h5>
                      <p className="text-[11px] leading-normal text-slate-500 font-medium">
                        Outpaced by the industry's most respected masters and subject matter experts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* ----------------- WHY CHOOSE US SECTION ----------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Why Choose VK Academy?</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We provide an ecosystem that fosters curiosity and rewards excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 lg:p-10 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="w-14 h-14 bg-[#F4F8FF] rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                 <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Expert Faculty</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Learn from PhD holders and experienced professionals who guide you at every step of your journey.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="w-14 h-14 bg-[#F4F8FF] rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                 <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Premium Study Material</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Meticulously designed study modules that cover every concept in depth, ensuring thorough preparation.
              </p>
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-[28px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
              <div className="w-14 h-14 bg-[#F4F8FF] rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                 <LineChart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-3">Personalized Tracking</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                Weekly assessments and real-time performance tracking to identify and improve weak areas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ----------------- SHINING STARS SECTION ----------------- */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Our Shining Stars</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Consistently producing top ranks. Our legacy is defined by the extraordinary achievements of our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <ShiningStarCard 
              name="Rahul Sharma"
              achievement="JEE Advanced 2023 - All India Rank 12"
              tag="IIT Bombay CS"
              imagePlaceholder="bg-slate-800"
            />
            <ShiningStarCard 
              name="Sneha Gupta"
              achievement="NEET 2023 - Score: 710/720"
              tag="AIIMS Delhi"
              imagePlaceholder="bg-slate-700"
            />
            <ShiningStarCard 
              name="Arjun Mehta"
              achievement="CA Foundation - State Topper"
              tag="AIR 4"
              imagePlaceholder="bg-slate-900"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button href="/wall-of-fame" variant="outline" className="bg-white">
              View All Achievers
            </Button>
          </div>
          
        </div>
      </section>

      {/* ----------------- FACULTY / VISIONARIES SECTION ----------------- */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 tracking-tight">Meet Our Visionaries</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Mentors who don't just teach, but inspire and guide you to your true potential.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <VisionaryCard 
              name="Dr. Vikram K."
              title="Founder & Physics HOD"
              description="20+ years of academic excellence. Ex-IITian with a passion for simplified physics."
              imagePlaceholder="bg-slate-300"
            />
            <VisionaryCard 
              name="Prof. Ananya S."
              title="Biology Expert"
              description="Renowned author and mentor. Guided over 500+ students to premier medical colleges."
              imagePlaceholder="bg-slate-400"
            />
            <VisionaryCard 
              name="Mr. Rajiv M."
              title="Chemistry Specialist"
              description="Known for his innovative teaching methodologies and flawless organic chemistry breakdown."
              imagePlaceholder="bg-slate-300"
            />
            <VisionaryCard 
              name="Mrs. Shreya V."
              title="Mathematics HOD"
              description="Gold medalist with a unique approach to high-speed calculus and algebra solving."
              imagePlaceholder="bg-slate-400"
            />
          </div>
          
          <div className="mt-16 text-center">
            <Button href="/faculty" variant="outline">
              View Full Directory
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}