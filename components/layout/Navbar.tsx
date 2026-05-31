"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Academic Divisions", path: "/academic-divisions" },
    { name: "Explore Batches", path: "/batches" },
    { name: "Wall of Fame", path: "/wall-of-fame" },
    { name: "Our Faculty", path: "/faculty" },
    { name: "Student Life", path: "/student-life" },
    { name: "Contact", path: "/contact" },
  ];

  // Toggle function for the mobile menu
  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="text-2xl font-extrabold text-brand-navy tracking-tight">
              VK Academy
            </span>
          </Link>

          {/* Desktop Navigation (Hidden on Mobile) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button (Hidden on Mobile) */}
          <div className="hidden lg:flex">
            <Button href="/contact" variant="primary">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Hamburger Button (Visible only on Mobile/Tablet) */}
          <button 
            className="lg:hidden p-2 text-brand-navy hover:bg-slate-50 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl overflow-y-auto max-h-[calc(100vh-5rem)]">
          <div className="flex flex-col px-6 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-slate-600 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="pt-6 border-t border-slate-100">
              <Button 
                href="/contact" 
                variant="primary" 
                className="w-full"
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}