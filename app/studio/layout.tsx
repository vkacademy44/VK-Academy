'use client'

/**
 * Studio segment layout — Next.js 16 App Router.
 *
 * Rules:
 *  - NO fixed/overflow wrapper around children — Sanity Studio manages its
 *    own internal layout, sticky headers, modals and document action bars.
 *  - The top bar IS fixed (only the bar itself, not the content below it).
 *  - We push the page down via padding-top injected on <body> so the bar
 *    never obscures anything.
 *  - Site chrome is hidden via [data-site-chrome] CSS.
 */

import { useState, useEffect } from 'react'

const BAR_HEIGHT = 44 // px

/* ─── VK Academy admin bar ──────────────────────────────────────────────── */
function StudioTopBar() {
  const [loggingOut, setLoggingOut] = useState(false)

  async function handleLogout() {
    setLoggingOut(true)
    try {
      // Clear every Sanity auth key from localStorage
      Object.keys(localStorage)
        .filter((k) => k.toLowerCase().includes('sanity'))
        .forEach((k) => localStorage.removeItem(k))
      await new Promise((r) => setTimeout(r, 250))
    } finally {
      window.location.href = '/'
    }
  }

  const sharedBtn: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    padding: '5px 14px',
    borderRadius: 8,
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    letterSpacing: '0.03em',
    textDecoration: 'none',
    fontFamily: 'inherit',
    transition: 'background 0.15s, border-color 0.15s, color 0.15s',
  }

  return (
    <div
      id="vk-studio-bar"
      style={{
        /* The bar itself is fixed — but we never wrap *children* in fixed. */
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 99999,
        height: BAR_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        background: 'linear-gradient(90deg, #0a0f1e 0%, #0d1a3a 100%)',
        borderBottom: '1px solid rgba(255,179,0,0.2)',
        boxShadow: '0 2px 16px rgba(0,0,0,0.45)',
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 15 }}>⭐</span>
        <span
          style={{
            color: '#FFB300',
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          VK Academy CMS
        </span>
        <span
          style={{
            marginLeft: 4,
            padding: '2px 8px',
            borderRadius: 20,
            background: 'rgba(255,179,0,0.1)',
            border: '1px solid rgba(255,179,0,0.22)',
            color: 'rgba(255,255,255,0.45)',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '0.08em',
          }}
        >
          ADMIN
        </span>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* View Website */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            ...sharedBtn,
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.13)',
            color: '#e2e8f0',
          }}
          onMouseEnter={(e) =>
            Object.assign((e.currentTarget as HTMLElement).style, {
              background: 'rgba(255,255,255,0.12)',
              borderColor: 'rgba(255,179,0,0.45)',
            })
          }
          onMouseLeave={(e) =>
            Object.assign((e.currentTarget as HTMLElement).style, {
              background: 'rgba(255,255,255,0.06)',
              borderColor: 'rgba(255,255,255,0.13)',
            })
          }
        >
          🌐 View Website ↗
        </a>

        {/* Logout */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          style={{
            ...sharedBtn,
            border: '1px solid rgba(220,38,38,0.32)',
            background: 'rgba(220,38,38,0.09)',
            color: '#fca5a5',
            opacity: loggingOut ? 0.65 : 1,
          }}
          onMouseEnter={(e) => {
            if (!loggingOut)
              Object.assign((e.currentTarget as HTMLElement).style, {
                background: 'rgba(220,38,38,0.2)',
                color: '#f87171',
              })
          }}
          onMouseLeave={(e) =>
            Object.assign((e.currentTarget as HTMLElement).style, {
              background: 'rgba(220,38,38,0.09)',
              color: '#fca5a5',
            })
          }
        >
          {loggingOut ? '⏳ Logging out…' : '🚪 Logout'}
        </button>
      </div>
    </div>
  )
}

/* ─── Segment layout ────────────────────────────────────────────────────── */
export default function StudioLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'vk-studio-overrides'
    style.textContent = `
      /* 1. Hide site chrome (Navbar, Footer, WhatsApp, overlays) */
      [data-site-chrome] { display: none !important; }

      /* 2. Shift the whole page down so content starts below the bar.
            padding-top on body is the safest approach — it lets Sanity's
            own sticky/fixed elements calculate offsets correctly. */
      body {
        padding-top: ${BAR_HEIGHT}px !important;
      }

      /* 3. Remove the root <main>'s bottom padding (added for mobile nav) */
      main {
        padding-bottom: 0 !important;
      }
    `
    document.head.appendChild(style)
    return () => document.getElementById('vk-studio-overrides')?.remove()
  }, [])

  return (
    <>
      <StudioTopBar />
      {/*
        ✅ children rendered directly — no wrapper with position/overflow.
        Sanity Studio manages its own internal layout from here.
      */}
      {children}
    </>
  )
}
