import VisionaryCard from "@/components/ui/VisionaryCard";
import Button from "@/components/ui/Button";
export default function FacultyPage() {
  return (
    <div className="w-full bg-white">
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#F4F8FF] via-white to-[#F4F8FF] py-16 lg:py-24 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white text-brand-blue text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 shadow-sm border border-blue-50 tracking-wide">
            <span>⭐</span> 5.0 Rated Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">
            World-Class <span className="text-brand-blue">Mentors</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Meet the visionary educators who bridge the gap between academic theory and high-performance success. Our faculty are experts from premier global institutions.
          </p>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Department: Physics & Math */}
          <div className="mb-20">
            <h2 className="text-2xl font-extrabold text-brand-navy mb-10 border-b border-slate-100 pb-4">Department of Engineering (JEE)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              <VisionaryCard 
                name="Dr. Vikram K."
                title="Founder & Physics HOD"
                description="20+ years of academic excellence. Ex-IITian with a passion for simplified physics."
                imagePlaceholder="bg-slate-300"
              />
              <VisionaryCard 
                name="Mrs. Shreya V."
                title="Mathematics HOD"
                description="Gold medalist with a unique approach to high-speed calculus and algebra solving."
                imagePlaceholder="bg-slate-400"
              />
              <VisionaryCard 
                name="Mr. Amit D."
                title="Advanced Mathematics"
                description="Renowned for his problem-solving techniques in coordinate geometry and trigonometry."
                imagePlaceholder="bg-slate-300"
              />
              <VisionaryCard 
                name="Dr. Rahul M."
                title="Physical Chemistry"
                description="Expert in breaking down complex thermodynamic equations into simple concepts."
                imagePlaceholder="bg-slate-500"
              />
            </div>
          </div>

          {/* Department: Medical */}
          <div>
            <h2 className="text-2xl font-extrabold text-brand-navy mb-10 border-b border-slate-100 pb-4">Department of Medical (NEET)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              <VisionaryCard 
                name="Prof. Ananya S."
                title="Biology Expert (Botany)"
                description="Renowned author and mentor. Guided over 500+ students to premier medical colleges."
                imagePlaceholder="bg-slate-400"
              />
              <VisionaryCard 
                name="Dr. Sneha P."
                title="Zoology HOD"
                description="Ex-AIIMS scholar focusing on human anatomy and conceptual clarity."
                imagePlaceholder="bg-slate-300"
              />
              <VisionaryCard 
                name="Mr. Rajiv M."
                title="Organic Chemistry"
                description="Known for his innovative teaching methodologies and flawless reaction mechanism breakdowns."
                imagePlaceholder="bg-slate-600"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Learn from the best to become the best.</h2>
          <Button href="/contact" variant="outline" className="px-10">
            Book a Counseling Session
          </Button>
        </div>
      </section>

    </div>
  );
}