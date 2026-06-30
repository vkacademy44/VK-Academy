"use client";
 
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
 
export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build a readable WhatsApp message from the form data
    const lines = [
      `*New Inquiry from VK Academy Website*`,
      ``,
      `*Name:* ${name || "Not provided"}`,
      `*Email:* ${email || "Not provided"}`,
      `*Phone:* ${phone || "Not provided"}`,
      `*Target Exam / Class:* ${course || "Not selected"}`,
      ``,
      `*Message:*`,
      message || "No message provided",
    ];

    const whatsappText = encodeURIComponent(lines.join("\n"));
    const whatsappUrl = `https://wa.me/918356992905?text=${whatsappText}`;

    window.open(whatsappUrl, "_blank");
  };

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
                      Shop No: 4, M. N. Yadav Bhavan,<br />
                      Mohili Village Pipeline,<br />
                      Above Jethva Tailor,<br />
                      Mumbai, Maharashtra 400072<br />
                      India
                    </p>
                  </div>
                </div>
 
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-gold/10 text-brand-navy shrink-0 border border-brand-gold/30">
                    <Phone className="w-6 h-6 text-brand-gold" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Phone Number</h5>
                    <p className="text-brand-navy font-semibold text-sm leading-relaxed">
                      <a href="tel:+918356992905" className="hover:text-brand-gold transition-colors">
                        +91 83569 92905
                      </a>
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
                      <a href="mailto:vkacademy44@gmail.com" className="hover:text-brand-gold transition-colors">
                        vkacademy44@gmail.com
                      </a>
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
                Fill out the form below and click send — it will open WhatsApp with your inquiry pre-filled.
              </p>
 
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-brand-navy tracking-wide">Full Name *</label>
                    <input 
                      type="text" id="name" placeholder="Student or Parent Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-brand-navy tracking-wide">Email Address *</label>
                    <input 
                      type="email" id="email" placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                    />
                  </div>
                </div>
 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-xs font-bold text-brand-navy tracking-wide">Phone Number *</label>
                    <input 
                      type="tel" id="phone" placeholder="+91 00000 00000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="course" className="text-xs font-bold text-brand-navy tracking-wide">Target Exam / Class</label>
                    <select 
                      id="course" 
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all appearance-none"
                    >
                      <option value="">Select a program</option>
                      <option value="School Section (Std 5th to 10th)">School Section (Std 5th to 10th)</option>
                      <option value="11th & 12th Science Coaching">11th & 12th Science Coaching</option>
                      <option value="MHT-CET Entrance Preparation">MHT-CET Entrance Preparation</option>
                    </select>
                  </div>
                </div>
 
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-brand-navy tracking-wide">Your Message *</label>
                  <textarea 
                    id="message" rows={4} placeholder="Tell us about your current class and coaching requirements..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy transition-all resize-none"
                  ></textarea>
                </div>
 
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-navy hover:bg-[#002244] text-white px-7 py-4 rounded-xl font-bold text-sm transition-all duration-300 shadow-md mt-4">
                  Send Inquiry via WhatsApp <Send className="w-4 h-4 text-brand-gold" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
 
    </div>
  );
}
