"use client";

import { useState } from "react";
import Image from "next/image";

// Mock data for the gallery
const galleryItems = [
  { id: 1, category: "Classrooms", title: "Physics Lab Interaction", placeholder: "bg-slate-200" },
  { id: 2, category: "Achievements", title: "Toppers Convocation", placeholder: "bg-slate-300" },
  { id: 3, category: "Events", title: "Annual Tech Fest", placeholder: "bg-brand-navy" },
  { id: 4, category: "Seminars", title: "Career Guidance 2024", placeholder: "bg-slate-800" },
  { id: 5, category: "Classrooms", title: "Digital Library Wing", placeholder: "bg-slate-100" },
  { id: 6, category: "Events", title: "Strategic Planning", placeholder: "bg-brand-blue" },
];

const categories = ["All Moments", "Classrooms", "Seminars", "Events", "Achievements"];

export default function StudentLifePage() {
  const [activeFilter, setActiveFilter] = useState("All Moments");

  // Filter logic
  const filteredItems = galleryItems.filter(item => 
    activeFilter === "All Moments" ? true : item.category === activeFilter
  );

  return (
    <div className="w-full bg-white pb-24">
      
      {/* Page Header */}
      <section className="pt-20 pb-12 lg:pt-28 lg:pb-16 text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-6 tracking-tight">
            Academy Life in <span className="text-brand-blue">Frames</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg leading-relaxed mb-12">
            Witness the journey of excellence through our interactive classrooms, milestone celebrations, and high-energy seminars.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeFilter === category 
                    ? "bg-brand-navy text-white shadow-md" 
                    : "bg-blue-50 text-brand-blue hover:bg-blue-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Image Area */}
              <div className={`relative h-64 w-full ${item.placeholder} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-white/50 font-medium text-sm group-hover:scale-105 transition-transform duration-500">
                  [ {item.category} Photo ]
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-50 text-brand-blue text-[10px] font-bold uppercase tracking-wider rounded-md mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-extrabold text-brand-navy">{item.title}</h3>
              </div>
            </div>
          ))}

        </div>

        {/* Empty State (if a filter has no images yet) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-slate-400 font-medium">
            More photos coming soon to this category.
          </div>
        )}

        {/* Bottom Trust Badge */}
        <div className="mt-20 flex justify-center">
          <div className="inline-flex items-center gap-4 bg-white py-4 px-8 rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-slate-50">
            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue text-xl">
              G
            </div>
            <div>
              <div className="flex gap-1 text-amber-400 text-lg">
                ★★★★★
              </div>
              <p className="text-xs font-extrabold text-brand-navy mt-0.5 tracking-wide">
                5.0 Google Rating
              </p>
            </div>
          </div>
        </div>

      </section>
      
    </div>
  );
}