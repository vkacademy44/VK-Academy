import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp"; 
import AnnouncementMarquee from "@/components/ui/AnnouncementMarquee";
import { getSiteSettings, getActiveAnnouncements } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"] 
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings().catch(() => null);
  if (!settings) {
    return {
      title: "VK Academy | Build Your Future",
      description: "Experience world-class coaching with modern technology.",
    };
  }

  const ogUrl = settings.ogImage ? urlFor(settings.ogImage).url() : undefined;

  return {
    title: settings.metaTitle || settings.instituteName || "VK Academy",
    description: settings.metaDescription || settings.tagline || "Experience world-class coaching with modern technology.",
    openGraph: ogUrl ? {
      images: [{ url: ogUrl }],
    } : undefined,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const announcements = await getActiveAnnouncements().catch(() => []);

  return (
    <html lang="en">
      <body className={`${jakarta.className} min-h-screen flex flex-col antialiased`}>
        <div data-site-chrome="marquee"><AnnouncementMarquee announcements={announcements} /></div>
        <div data-site-chrome="navbar"><Navbar /></div>
        <main className="flex-grow pb-20 lg:pb-0">{children}</main>
        <div data-site-chrome="whatsapp"><FloatingWhatsApp /></div>
        <div data-site-chrome="footer"><Footer /></div>

        {/*
          ── PREMIUM VISUAL OVERLAYS ─────────────────────────────────
          Placed LAST in the DOM so they naturally sit above all page
          content in stacking order. pointer-events:none on every
          element — zero interference with clicks, scroll, or touch.
        */}

        {/* 1. SVG filter bank — hidden 0×0, defines grain filter in the
               real DOM (Chrome supports this; data-URI SVG filters are blocked) */}
        <svg
          aria-hidden="true"
          data-site-chrome="overlay"
          focusable="false"
          style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
        >
          <defs>
            <filter id="grain-filter" x="0%" y="0%" width="100%" height="100%"
                    colorInterpolationFilters="sRGB">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
              <feColorMatrix type="saturate" values="0" />
            </filter>
          </defs>
        </svg>

        {/* 2. Grain texture — references the DOM filter above */}
        <div aria-hidden="true" data-site-chrome="overlay" className="grain-overlay" />

        {/* 3. Grid lines + dot grid */}
        <div aria-hidden="true" data-site-chrome="overlay" className="dot-grid-overlay" />

        {/* 4. Edge vignette */}
        <div aria-hidden="true" data-site-chrome="overlay" className="vignette-overlay" />
      </body>
    </html>
  );
}