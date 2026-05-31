import Image from "next/image";

interface VisionaryCardProps {
  name: string;
  title: string;
  description: string;
  imagePlaceholder: string;
}

export default function VisionaryCard({ name, title, description, imagePlaceholder }: VisionaryCardProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      {/* Circular Image Container */}
      <div className={`relative w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] group-hover:-translate-y-2 transition-transform duration-300 ${imagePlaceholder}`}>
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="text-white/70 font-medium text-xs">Faculty Photo</span>
        </div>
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-extrabold text-brand-navy mb-1">{name}</h3>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-3">{title}</p>
      <p className="text-sm text-slate-500 leading-relaxed px-4">
        {description}
      </p>
    </div>
  );
}