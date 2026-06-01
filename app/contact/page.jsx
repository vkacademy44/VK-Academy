"use client";
 
import Button from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
 
export default function ContactPage() {
  return (
    <div className="w-full bg-white">
      
      {/* Page Header */}
      <section className="bg-brand-light py-16 lg:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy mb-4 tracking-tight">
            Get in Touch with <span className="text-brand-gold">Excellence.</span>
          </h1>
          <p className="text-slate-600 font-medium text-lg max-w-2xl mx-auto">
            Have questions about our offline batches or admission process? Our academic advisors are here to help you navigate your journey to success.
          </p>
        </div>
      </section>
 
      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5 bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-2xl font-extrabold text-brand-navy mb-8">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-navy shrink-0 border border-brand-gold/30">
                    <MapPin className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Campus Address</h5>
                    <p className="text-brand-navy font-semibold text-sm leading-relaxed">
                      Shop No. 4, M. N. Yadav Bhavan,<br />
                      Mohili Village Pipeline, Above Jethva Tailor,<br />
                      Mumbai - 400072
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-navy shrink-0 border border-brand-gold/30">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Numbers</h5>
                    <p className="text-brand-navy font-semibold text-sm leading-relaxed">
                      +91 8356992905<br />
                      +91 9653235975
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-navy shrink-0 border border-brand-gold/30">
                    <Mail className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</h5>
                    <p className="text-brand-navy font-semibold text-sm leading-relaxed">
                      info@vkacademy.in<br />
                      admissions@vkacademy.in
                    </p>
                  </div>
                </div>
              </div>
 
              {/* Working Hours */}
              <div className="mt-12 pt-8 border-t border-slate-100">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Working Hours</h5>
                <div className="space-y-3 text-sm font-medium">
                  <div className="flex justify-between text-brand-navy">
                    <span>Monday - Saturday</span>
                    <span>09:30 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-brand-navy">
                    <span>Sunday</span>
                    <span>03:00 PM - 10:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
 
            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_40px_rgb(0,0,0,0.06)] border border-slate-100">
              <h3 className="text-2xl font-extrabold text-brand-navy mb-2">Academic Inquiry</h3>
              <p className="text-slate-500 text-sm font-medium mb-8">
                Fill out the form below and an admission counselor will contact you within 24 hours.
              </p>
 
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-brand-navy tracking-wide">Full Name *</label>
                    <input 
                      type="text" id="name" placeholder="Student or Parent Name"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-brand-navy tracking-wide">Email Address *</label>
                    <input 
                      type="email" id="email" placeholder="john@example.com"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-brand-navy tracking-wide">Phone Number *</label>
                    <input 
                      type="tel" id="phone" placeholder="+91 00000 00000"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course" className="text-xs font-bold text-brand-navy tracking-wide">Target Exam / Class</label>
                    <select id="course" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all appearance-none">
                      <option value="">Select a program</option>
                      <option value="school">School Section (Std 5th to 10th)</option>
                      <option value="science-11-12">11th & 12th Science Coaching</option>
                      <option value="jee">IIT-JEE Mains Preparation</option>
                      <option value="neet">NEET Entrance Preparation</option>
                      <option value="cet">MHT-CET Entrance Preparation</option>
                    </select>
                  </div>
                </div>
 
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-brand-navy tracking-wide">Your Message *</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your current class and coaching requirements..." className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all resize-none"></textarea>
                </div>
 
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-[#002244] text-white px-7 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-md mt-4">
                  Send Inquiry <Send className="w-4 h-4 text-brand-gold" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
 
      {/* Embedded Location Map */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-slate-100 rounded-[2rem] overflow-hidden shadow-inner border border-slate-200 h-[400px] lg:h-[500px] w-full relative">
            
            {/* Live Google Maps iFrame matching the exact Mumbai address */}
            <iframe 
              src="https://maps.google.com/maps?q=Shop%20No%205,%20Saraswati%20Academy,%20Sai%20Shakti%20HSG,%20Pipe%20Line%20Rd,%20Pereira%20Wadi,%20Saki%20Naka,%20Mumbai&t=&z=16&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
            
            {/* Overlay Box */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 z-20 max-w-sm hidden md:block">
              <h5 className="text-lg font-extrabold text-brand-navy mb-1">Visit Our Campus</h5>
              <p className="text-sm leading-relaxed text-slate-500 font-medium">
                Shop No. 4, M. N. Yadav Bhavan, Mohili Village Pipeline, Above Jethva Tailor, Mumbai - 400072
              </p>
            </div>
 
          </div>
        </div>
      </section>
 
    </div>
  );
}