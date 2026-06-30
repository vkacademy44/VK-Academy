import { ReactNode } from "react";
import Link from "next/link";

  interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "ghost" | "accent";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 tracking-wide select-none";

  const variants: Record<string, string> = {
    primary:
      "bg-brand-navy text-white hover:bg-[#002244] active:scale-[0.98] shadow-sm",
    accent:
      "bg-brand-gold text-[#212529] hover:bg-amber-400 active:scale-[0.98] shadow-sm",
    outline:
      "border border-brand-navy bg-white text-brand-navy hover:bg-slate-50 active:scale-[0.98]",
    ghost:
      "text-brand-navy hover:bg-brand-light active:scale-[0.98]",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    // Use native <a> for external links (tel:, mailto:, http://, https://)
    const isExternal = /^(https?:\/\/|tel:|mailto:)/.test(href);
    if (isExternal) {
      return (
        <a
          href={href}
          className={cls}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}