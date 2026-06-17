import Link from "next/link";
import Button from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import { getBatches } from "@/sanity/lib/queries";

export default async function BatchesPage() {
  const batches = await getBatches().catch(() => []);

  const hasSanityBatches = batches.length > 0;

  // Filter batches if present in Sanity
  const collegeBatchesFromSanity = batches.filter((b) => b.category === "college");
  const schoolBatchesFromSanity = batches.filter((b) => b.category === "school");

  // Fallback Mock data for upcoming batches
  const collegeBatchesFallback = [
    {
      title: "Class 12 Science (Board + MHT-CET 2027)",
      batchType: "1-Year Regular Classroom",
      startDate: "April 06, 2026",
      schedule: "04:00 PM - 08:00 PM (Mon-Fri)",
      status: "Filling Fast",
      venue: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    },
    {
      title: "Class 11 Science (Board + MHT-CET 2028)",
      batchType: "2-Year Regular Classroom",
      startDate: "April 15, 2026",
      schedule: "04:00 PM - 07:30 PM (Mon-Sat)",
      status: "Admissions Open",
      venue: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    }
  ];

  const schoolBatchesFallback = [
    {
      title: "Class 9th & 10th Board Batch",
      batchType: "Regular Board Prep",
      startDate: "April 06, 2026",
      schedule: "05:00 PM - 07:30 PM (Mon-Fri)",
      status: "Filling Fast",
      venue: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    },
    {
      title: "Class 5th to 8th Foundation Batch",
      batchType: "Concept Building & School Prep",
      startDate: "April 10, 2026",
      schedule: "04:00 PM - 06:00 PM (Mon-Fri)",
      status: "Limited Seats",
      venue: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    }
  ];

  const collegeList = hasSanityBatches ? collegeBatchesFromSanity : collegeBatchesFallback;
  const schoolList = hasSanityBatches ? schoolBatchesFromSanity : schoolBatchesFallback;

  return (
    <div className="w-full bg-brand-light min-h-screen pb-24 border-t border-slate-100">
      
      {/* Page Header */}
      <section className="bg-white py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">
            Upcoming <span className="text-brand-gold">Batches</span>
          </h1>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Secure your seat in our premium offline coaching programs. Batches are strictly limited in size to ensure personalized attention.
          </p>
        </div>
      </section>

      {/* Batches Content */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16 space-y-20">
        
        {/* College Section */}
        {(collegeList.length > 0) && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy">Class 11 and 12 Science</h2>
              <div className="h-[1px] flex-grow bg-slate-200 mt-2"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {collegeList.map((batch, index) => (
                <BatchCard 
                  key={batch._id || index} 
                  {...batch} 
                  badgeColor="bg-blue-50 text-brand-navy border border-blue-200" 
                />
              ))}
            </div>
          </div>
        )}

        {/* School Section */}
        {(schoolList.length > 0) && (
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy">Class 5 to 10 Secondary</h2>
              <div className="h-[1px] flex-grow bg-slate-200 mt-2"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {schoolList.map((batch, index) => (
                <BatchCard 
                  key={batch._id || index} 
                  {...batch} 
                  badgeColor="bg-emerald-50 text-emerald-800 border border-emerald-200" 
                />
              ))}
            </div>
          </div>
        )}

      </section>

      {/* Admission Process / CTA */}
      <section className="max-w-5xl mx-auto px-6 mt-24">
        <div className="bg-brand-navy rounded-sm p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">How to Enroll?</h3>
            <p className="text-slate-300 mb-10 max-w-2xl mx-auto font-medium">
              Admissions are currently open for the 2026-2027 academic session. Fill out the inquiry form to schedule your campus visit and diagnostic test.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 bg-brand-gold text-brand-navy hover:bg-amber-400 shadow-lg"
              >
                Request Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Reusable UI Component for the Batch Cards
function BatchCard({ title, batchType, startDate, schedule, status, venue, buttonText, buttonLink, enquiryWhatsapp, badgeColor }) {
  const finalLink = enquiryWhatsapp
    ? `https://wa.me/${enquiryWhatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the batch: ${title}`)}`
    : (buttonLink || "/contact");

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300">
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3 ${badgeColor}`}>
            {batchType}
          </span>
          <h3 className="text-xl font-extrabold text-brand-navy">{title}</h3>
        </div>
        <div className="flex items-center gap-1.5 bg-rose-50 text-rose-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide shrink-0">
          <Users className="w-3.5 h-3.5" /> {status}
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4 text-brand-navy" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starts On</p>
            <p className="text-sm font-bold text-brand-navy">{startDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 text-brand-navy" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Schedule</p>
            <p className="text-sm font-bold text-brand-navy">{schedule}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-brand-navy" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Venue</p>
            <p className="text-sm font-bold text-brand-navy">{venue}</p>
          </div>
        </div>
      </div>

      <Button href={finalLink} variant="outline" className="w-full justify-center group">
        {buttonText || "Enquire For This Batch"} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>

    </div>
  );
}