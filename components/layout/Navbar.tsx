"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "Divisions", path: "/academic-divisions" },
  { name: "Batches", path: "/batches" },
  { name: "Wall of Fame", path: "/wall-of-fame" },
  { name: "Faculty", path: "/faculty" },
  { name: "Student Life", path: "/student-life" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_20px_rgba(13,27,42,0.08)] border-b border-slate-100"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-100 shadow-sm flex items-center justify-center">
                <Image
                  src="/images/vkLogo.jpeg"
                  alt="VK Academy Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-extrabold text-brand-navy tracking-tight">
                Academy
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-150 ${
                      isActive
                        ? "bg-brand-light text-brand-blue"
                        : "text-slate-600 hover:text-brand-navy hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Button href="/contact" variant="primary">
                Enquire Now
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-xl text-brand-navy hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="relative w-7 h-7 rounded-md overflow-hidden shrink-0 border border-slate-100 shadow-sm flex items-center justify-center">
              <Image
                src="/images/vkLogo.jpeg"
                alt="VK Academy Logo"
                fill
                sizes="28px"
                className="object-cover"
              />
            </div>
            <span className="font-extrabold text-brand-navy">VK Academy</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-brand-light text-brand-blue"
                    : "text-slate-600 hover:bg-slate-50 hover:text-brand-navy"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Drawer CTA */}
        <div className="px-4 pb-8 pt-4 border-t border-slate-100">
          <Button href="/contact" variant="primary" className="w-full">
            Enquire Now
          </Button>
        </div>
      </div>
    </>
  );
}