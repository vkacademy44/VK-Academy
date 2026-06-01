"use client";
import React, { useEffect, useState, useMemo } from "react";
import { cn } from "@/lib/utils";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

type ParticlesProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
};

export const SparklesCore = ({
  className,
  minSize = 1,
  maxSize = 3,
  particleColor = "#ffffff",
  particleDensity = 60,
}: ParticlesProps) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Generate randomized star particles
    const generated: Sparkle[] = Array.from({ length: particleDensity }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage x
      y: Math.random() * 100, // percentage y
      size: Math.random() * (maxSize - minSize) + minSize,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2,
    }));
    setSparkles(generated);
  }, [minSize, maxSize, particleDensity]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      <style jsx global>{`
        @keyframes floatUp {
          0% {
            transform: translateY(100%) scale(0.3);
            opacity: 0;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20%) scale(1.2);
            opacity: 0;
          }
        }
        .sparkle-particle {
          animation: floatUp linear infinite;
        }
      `}</style>
      {sparkles.map((sp) => (
        <svg
          key={sp.id}
          className="absolute sparkle-particle"
          style={{
            left: `${sp.x}%`,
            top: `${sp.y}%`,
            width: `${sp.size * 6}px`,
            height: `${sp.size * 6}px`,
            animationDelay: `${sp.delay}s`,
            animationDuration: `${sp.duration}s`,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z"
            fill={particleColor}
            className="drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
          />
        </svg>
      ))}
    </div>
  );
};
