import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "navbar";
  className?: string;
}

export default function Button({ children, href, variant = "primary", className = "" }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 tracking-wide";
  
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-800 premium-shadow",
    outline: "border border-blue-200 bg-white text-brand-blue hover:bg-slate-50",
    navbar: "bg-brand-blue text-white px-8 py-3 rounded-xl hover:bg-blue-800 font-semibold",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses}>
      {children}
    </button>
  );
}