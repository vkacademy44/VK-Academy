import Link from "next/link";
import Image from "next/image";
import { getSiteSettings } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const footerLinks = {
  Explore: [
    { name: "Academic Divisions", href: "/academic-divisions" },
    { name: "Upcoming Batches", href: "/batches" },
    { name: "Wall of Fame", href: "/wall-of-fame" },
    { name: "Our Faculty", href: "/faculty" },
    { name: "Student Life", href: "/student-life" },
  ],
  Support: [
    { name: "Admissions Help", href: "/contact" },
    { name: "FAQ", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

export default async function Footer() {
  const settings = await getSiteSettings().catch(() => null);

  const instituteName = settings?.instituteName || "VK Academy";
  const footerDescription = settings?.footerDescription || "Empowering students with knowledge, character, and the competitive edge for a bright future. A legacy of excellence.";
  const address = settings?.address || "Shop No: 4, M. N. Yadav Bhavan,\nMohili Village Pipeline, above Jethva Tailor,\nMumbai, Maharashtra 400072";
  const phone = settings?.phone || "83569 92905";
  const phoneLink = settings?.phone ? `tel:${settings.phone.replace(/\s+/g, "")}` : "tel:8356992905";
  const email = settings?.email || "vkacademy44@gmail.com";
  const googleMapsEmbedUrl = settings?.googleMapsEmbedUrl || "https://maps.google.com/maps?q=19.100898893729603,72.89231479615131&t=&z=17&ie=UTF8&iwloc=&output=embed";
  const googleMapsCtaUrl = settings?.googleMapsCtaUrl || "https://www.google.com/maps?q=19.100898893729603,72.89231479615131";
  
  const logoUrl = settings?.logo ? urlFor(settings.logo).url() : "/images/vkLogo.jpeg";
  const logoAlt = settings?.logo?.alt || "VK Academy Logo";
  
  const currentYear = new Date().getFullYear();
  const copyrightText = settings?.copyrightText || `© ${currentYear} VK Academy. All rights reserved.`;

  const socialLinks = [
    { name: "Facebook", href: settings?.facebookUrl || "#" },
    { name: "Instagram", href: settings?.instagramUrl || "#" },
    { name: "LinkedIn", href: settings?.linkedinUrl || "#" },
    { name: "YouTube", href: settings?.youtubeUrl || "#" },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-slate-700 shadow-sm flex items-center justify-center">
                <Image
                  src={logoUrl}
                  alt={logoAlt}
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-lg font-extrabold tracking-tight">{instituteName}</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
              {footerDescription}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                {group}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-300 hover:text-white transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Reach Us
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="leading-relaxed whitespace-pre-line">
                {address}
              </p>
              <p className="space-y-1">
                <a href={phoneLink} className="block hover:text-brand-gold transition-colors">
                  📞 {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="hover:text-brand-gold transition-colors">
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* ── Campus Map ──────────────────────────────────────── */}
        <div className="mb-10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Find Us
          </h3>
          <div className="relative rounded-2xl overflow-hidden border border-slate-700 h-[220px] sm:h-[280px] w-full">
            {/* Map iframe — grayscale to match dark footer, lifts on hover */}
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VK Academy Location Map"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Location card overlay */}
            <div className="absolute top-3 left-3 bg-brand-navy/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-slate-600 z-20 max-w-[220px] hidden sm:block">
              <p className="text-xs font-extrabold text-white mb-0.5">📍 {instituteName}</p>
              <p className="text-[11px] leading-relaxed text-slate-300 whitespace-pre-line">
                {address}
              </p>
              <a
                href={googleMapsCtaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-1.5 text-[10px] font-bold text-brand-gold hover:underline"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>{copyrightText}</p>
          <div className="flex gap-5">
            {socialLinks.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="hover:text-slate-300 transition-colors duration-150"
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}