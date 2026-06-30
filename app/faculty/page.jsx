import VisionaryCard from "@/components/ui/VisionaryCard";
import Button from "@/components/ui/Button";
import { getFaculty } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export const metadata = {
  title: "Expert Faculty | VK Academy Mumbai",
  description: "Meet the expert educators and mentors at VK Academy Mumbai. Highly experienced faculty for school, college, CET, and JEE coaching.",
  alternates: {
    canonical: "https://www.vkacademy.co.in/faculty",
  },
  openGraph: {
    title: "Expert Faculty | VK Academy Mumbai",
    description: "Meet the expert educators and mentors at VK Academy Mumbai. Highly experienced faculty for school, college, CET, and JEE coaching.",
    url: "https://www.vkacademy.co.in/faculty",
    siteName: "VK Academy",
    type: "website",
    images: [
      {
        url: "https://www.vkacademy.co.in/images/vkLogo.jpeg",
        width: 1200,
        height: 630,
        alt: "VK Academy Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Faculty | VK Academy Mumbai",
    description: "Meet the expert educators and mentors at VK Academy Mumbai. Highly experienced faculty for school, college, CET, and JEE coaching.",
    images: ["https://www.vkacademy.co.in/images/vkLogo.jpeg"],
  },
};

export default async function FacultyPage() {
  const mentors = await getFaculty().catch(() => []);

  const hasSanityMentors = mentors.length > 0;

  // Filter sections
  const schoolMentorsFromSanity = mentors.filter((m) => m.section === "school");
  const collegeMentorsFromSanity = mentors.filter((m) => m.section === "college");

  // Fallback Mock data
  const schoolFallback = [
    {
      name: "Dr. Vikram K.",
      designation: "Founder & Physics HOD",
      description: "20+ years of academic excellence. Ex-IITian with a passion for simplified physics.",
      subject: "Physics",
      experience: "20+ years",
    },
    {
      name: "Mrs. Shreya V.",
      designation: "Mathematics HOD",
      description: "Gold medalist with a unique approach to high-speed calculus and algebra solving.",
      subject: "Mathematics",
      experience: "10+ years",
    },
    {
      name: "Mr. Amit D.",
      designation: "Advanced Mathematics",
      description: "Renowned for his problem-solving techniques in coordinate geometry and trigonometry.",
      subject: "Mathematics",
      experience: "8+ years",
    },
    {
      name: "Dr. Rahul M.",
      designation: "Physical Chemistry",
      description: "Expert in breaking down complex thermodynamic equations into simple concepts.",
      subject: "Chemistry",
      experience: "12+ years",
    }
  ];

  const collegeFallback = [
    {
      name: "Prof. Ananya S.",
      designation: "Biology Expert (Botany)",
      description: "Renowned author and mentor. Guided over 500+ students to premier medical colleges.",
      subject: "Biology",
      experience: "15+ years",
    },
    {
      name: "Dr. Sneha P.",
      designation: "Zoology HOD",
      description: "Ex-AIIMS scholar focusing on human anatomy and conceptual clarity.",
      subject: "Biology",
      experience: "9+ years",
    },
    {
      name: "Mr. Rajiv M.",
      designation: "Organic Chemistry",
      description: "Known for his innovative teaching methodologies and flawless reaction mechanism breakdowns.",
      subject: "Chemistry",
      experience: "11+ years",
    }
  ];

  const schoolList = hasSanityMentors ? schoolMentorsFromSanity : schoolFallback;
  const collegeList = hasSanityMentors ? collegeMentorsFromSanity : collegeFallback;

  const placeholders = ["bg-slate-300", "bg-slate-400", "bg-slate-500", "bg-slate-600"];

  return (
    <div className="w-full bg-white">
      
      {/* Page Header */}
      <section className="bg-brand-light py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 bg-[#FFB300]/10 text-brand-navy text-xs font-bold px-4 py-2 rounded-full w-fit mb-6 shadow-sm border border-brand-gold/30 tracking-wide">
            <span>⭐</span> 5.0 Rated Excellence
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">
            World-Class <span className="text-brand-gold">Mentors</span>
          </h1>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Meet the visionary educators who bridge the gap between academic theory and high-performance success. Our faculty are experts from premier local and national institutions.
          </p>
        </div>
      </section>

      {/* Faculty Grid Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Department: School */}
          {(schoolList.length > 0) && (
            <div className="mb-20">
              <h2 className="text-2xl font-extrabold text-brand-navy mb-10 border-b border-slate-100 pb-4">Class 5 to 10</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {schoolList.map((mentor, index) => {
                  const photoUrl = mentor.photo ? urlFor(mentor.photo).url() : undefined;
                  const combinedDesc = mentor.subject && mentor.experience
                    ? `${mentor.description} (${mentor.subject} · ${mentor.experience})`
                    : mentor.description;

                  return (
                    <VisionaryCard 
                      key={mentor._id || index}
                      name={mentor.name}
                      title={mentor.designation}
                      description={combinedDesc}
                      imagePlaceholder={placeholders[index % placeholders.length]}
                      photoUrl={photoUrl}
                    />
                  );
                })}
              </div>
            </div>
          )}

          {/* Department: College */}
          {(collegeList.length > 0) && (
            <div>
              <h2 className="text-2xl font-extrabold text-brand-navy mb-10 border-b border-slate-100 pb-4">Class 11 and 12</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {collegeList.map((mentor, index) => {
                  const photoUrl = mentor.photo ? urlFor(mentor.photo).url() : undefined;
                  const combinedDesc = mentor.subject && mentor.experience
                    ? `${mentor.description} (${mentor.subject} · ${mentor.experience})`
                    : mentor.description;

                  return (
                    <VisionaryCard 
                      key={mentor._id || index}
                      name={mentor.name}
                      title={mentor.designation}
                      description={combinedDesc}
                      imagePlaceholder={placeholders[(index + 1) % placeholders.length]}
                      photoUrl={photoUrl}
                    />
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-brand-navy py-16 rounded-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">Learn from the best to become the best.</h2>
          <Button href="https://wa.me/918356992905?text=Hi%2C%20I%27d%20like%20to%20book%20a%20counseling%20session%20at%20VK%20Academy." variant="accent" className="px-10">
            Book a Counseling Session
          </Button>
        </div>
      </section>

    </div>
  );
}