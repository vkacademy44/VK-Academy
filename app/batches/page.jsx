import Link from "next/link";
import Button from "@/components/ui/Button";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";

export default function BatchesPage() {
  // Mock data for upcoming batches
  const engineeringBatches = [
    {
      name: "JEE Mains & Advanced 2027",
      type: "2-Year Regular Classroom",
      startDate: "April 06, 2026",
      timing: "04:00 PM - 08:00 PM (Mon-Fri)",
      seats: "Filling Fast",
      location: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    },
    {
      name: "MHT-CET Target Batch 2027",
      type: "1-Year Regular / Fast Track",
      startDate: "April 15, 2026",
      timing: "04:00 PM - 07:30 PM (Mon-Sat)",
      seats: "Admissions Open",
      location: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    }
  ];

  const medicalBatches = [
    {
      name: "NEET UG Target 2027",
      type: "2-Year Regular Classroom",
      startDate: "April 06, 2026",
      timing: "04:00 PM - 08:00 PM (Mon-Fri)",
      seats: "Filling Fast",
      location: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    },
    {
      name: "NEET Repeaters Batch 2027",
      type: "1-Year Intensive Classroom",
      startDate: "April 20, 2026",
      timing: "09:00 AM - 02:00 PM (Mon-Sat)",
      seats: "Limited Seats",
      location: "Shop No. 4, Mohili Village Pipeline, Mumbai",
    }
  ];

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
        
        {/* Engineering Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy">Division of Engineering & CET</h2>
            <div className="h-[1px] flex-grow bg-slate-200 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {engineeringBatches.map((batch, index) => (
              <BatchCard key={index} {...batch} badgeColor="bg-blue-50 text-brand-navy border border-blue-200" />
            ))}
          </div>
        </div>

        {/* Medical Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-brand-navy">Division of Medical (NEET)</h2>
            <div className="h-[1px] flex-grow bg-slate-200 mt-2"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {medicalBatches.map((batch, index) => (
              <BatchCard key={index} {...batch} badgeColor="bg-emerald-50 text-emerald-800 border border-emerald-200" />
            ))}
          </div>
        </div>

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
                Book Campus Visit
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 border border-white/20 text-white hover:bg-white/10"
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
function BatchCard({ name, type, startDate, timing, seats, location, badgeColor }) {
  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-300">
      
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className={`inline-block px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3 ${badgeColor}`}>
            {type}
          </span>
          <h3 className="text-xl font-extrabold text-brand-navy">{name}</h3>
        </div>
        <div className="flex items-center gap-1.5 bg-rose-50 text-rose-600 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wide shrink-0">
          <Users className="w-3.5 h-3.5" /> {seats}
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
            <p className="text-sm font-bold text-brand-navy">{timing}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600">
          <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-brand-navy" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Venue</p>
            <p className="text-sm font-bold text-brand-navy">{location}</p>
          </div>
        </div>
      </div>

      <Button href="/contact" variant="outline" className="w-full justify-center group">
        Enquire For This Batch <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>

    </div>
  );
}