import Image from "next/image";

interface ShiningStarCardProps {
  name: string;
  achievement: string;
  tag: string;
  imagePlaceholder: string;
}

export default function ShiningStarCard({ name, achievement, tag, imagePlaceholder }: ShiningStarCardProps) {
  return (
    <div className={`relative h-[380px] w-full rounded-3xl overflow-hidden group ${imagePlaceholder}`}>
      
      {/* Image Placeholder Text (will be hidden when you use real <Image/> tags) */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <span className="text-white/50 font-medium text-sm">Student Photo</span>
      </div>

      {/* Dark Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent z-10"></div>

      {/* Content pinned to bottom */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-md mb-3 border border-white/20">
          {tag}
        </span>
        <h3 className="text-2xl font-extrabold text-white mb-1">{name}</h3>
        <p className="text-sm font-medium text-blue-100">{achievement}</p>
      </div>
      
    </div>
  );
}