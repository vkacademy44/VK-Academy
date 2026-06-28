'use client'

/**
 * Studio segment layout — Next.js 16 App Router.
 *
 * Rules:
 *  - NO fixed/overflow wrapper around children — Sanity Studio manages its
 *    own internal layout, sticky headers, modals and document action bars.
 *  - Site chrome is hidden via [data-site-chrome] CSS.
 */

import { useEffect } from 'react'

function clearAdminSession() {
  // 1. Clear cookies
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=${window.location.hostname}`;
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/studio`;
  }
  // 2. Clear localStorage
  localStorage.clear();
  // 3. Clear sessionStorage
  sessionStorage.clear();
  // 4. Redirect to home page
  window.location.href = '/';
}

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 1. Inject studio page styling overrides
    const style = document.createElement('style')
    style.id = 'vk-studio-overrides'
    style.textContent = `
      /* Hide site chrome (Navbar, Footer, WhatsApp, overlays, marquee) */
      [data-site-chrome] { display: none !important; }

      /* Remove the root <main>'s bottom padding (added for mobile nav) */
      main {
        padding-bottom: 0 !important;
      }
    `
    document.head.appendChild(style)

    // 2. Session expiration check (24 hours logout)
    const checkSession = () => {
      const hasSanitySession = Object.keys(localStorage).some(key => key.toLowerCase().includes('sanity'));
      
      if (hasSanitySession) {
        const sessionStart = localStorage.getItem('admin_session_start_time');
        const now = Date.now();
        
        if (!sessionStart) {
          localStorage.setItem('admin_session_start_time', now.toString());
        } else {
          const startTime = parseInt(sessionStart, 10);
          const twentyFourHours = 24 * 60 * 60 * 1000;
          
          if (now - startTime > twentyFourHours) {
            clearAdminSession();
          }
        }
      } else {
        localStorage.removeItem('admin_session_start_time');
      }
    };

    checkSession();

    // Cleanup style overrides
    return () => document.getElementById('vk-studio-overrides')?.remove()
  }, [])

  return (
    <>
      {children}
    </>
  )
}
