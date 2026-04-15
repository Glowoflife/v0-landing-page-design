"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"

interface NavProps {
  onSignInClick: () => void
  onRegisterClick: () => void
  defaultScrolled?: boolean
}

const NAV_LINKS: Array<{ label: string; id?: string; href?: string }> = [
  { label: "How It Works", id: "how-it-works" },
  { label: "Deformulate", id: "deformulate" },
  { label: "Engine", id: "engine" },
  { label: "Safety", id: "safety" },
  { label: "Samples", id: "sample-reports" },
  { label: "Data", id: "data" },
  { label: "Pricing", id: "pricing" },
]

const TRACKED_IDS = NAV_LINKS.filter((l) => l.id).map((l) => l.id!)

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export function Nav({ onSignInClick, onRegisterClick, defaultScrolled }: NavProps) {
  const [scrolled, setScrolled] = useState(defaultScrolled ?? false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // IntersectionObserver for active section
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // Track which sections are intersecting and pick the topmost visible one
    const visible = new Map<string, number>()

    TRACKED_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            visible.set(id, entry.boundingClientRect.top)
          } else {
            visible.delete(id)
          }
          // Pick the section closest to top of viewport
          if (visible.size === 0) {
            setActiveId(null)
          } else {
            const topmost = [...visible.entries()].reduce((a, b) =>
              Math.abs(a[1]) < Math.abs(b[1]) ? a : b
            )
            setActiveId(topmost[0])
          }
        },
        { threshold: 0.2, rootMargin: "-64px 0px 0px 0px" }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  // Close mobile menu on scroll
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener("scroll", close, { passive: true, once: true })
    return () => window.removeEventListener("scroll", close)
  }, [menuOpen])

  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      setMenuOpen(false)
      if (window.location.pathname === "/") {
        e.preventDefault()
        scrollTo(id)
      }
      // else let href="/#id" navigate back to landing page
    },
    []
  )

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-200"
        style={{
          background: scrolled || menuOpen ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div
          className="flex items-center justify-between w-full px-6"
          style={{ maxWidth: 1100, margin: "0 auto" }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center no-underline"
            style={{ gap: 10, marginRight: 32 }}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
          >
            <Image
              src="/logo.svg"
              alt="theformulator.ai"
              width={36}
              height={36}
              loading="eager"
              style={{ width: 36, height: 36 }}
            />
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: 16,
                color: "#D4A843",
                letterSpacing: "-0.01em",
              }}
            >
              theformulator.ai
            </span>
          </a>

          {/* Center nav links — desktop */}
          <div className="hidden md:flex items-center" style={{ gap: 32 }}>
            {NAV_LINKS.map((link) => {
              const isActive = link.href ? false : activeId === link.id
              return (
                <a
                  key={link.label}
                  href={link.href ?? `/#${link.id}`}
                  onClick={link.href ? undefined : (e) => handleLinkClick(e, link.id!)}
                  className="transition-colors duration-150 no-underline"
                  style={{
                    fontSize: 13,
                    fontFamily: "var(--font-inter)",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "#D4A843" : "#6B7280",
                    borderBottom: isActive ? "1.5px solid #D4A843" : "1.5px solid transparent",
                    paddingBottom: 2,
                    whiteSpace: "nowrap",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "#0D1B2A"
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      (e.currentTarget as HTMLAnchorElement).style.color = "#6B7280"
                  }}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* CTA buttons — desktop */}
          <div className="hidden md:flex items-center" style={{ gap: 8 }}>
            <button
              onClick={onSignInClick}
              className="cursor-pointer transition-opacity duration-150 hover:opacity-80"
              style={{
                background: "transparent",
                color: "#0D1B2A",
                height: 36,
                padding: "0 16px",
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 8,
                border: "1px solid #0D1B2A",
                fontFamily: "var(--font-inter)",
              }}
            >
              Sign in
            </button>
            <button
              onClick={onRegisterClick}
              className="cursor-pointer transition-opacity duration-150 hover:opacity-90"
              style={{
                background: "#D4A843",
                color: "#0D1B2A",
                height: 36,
                padding: "0 16px",
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 8,
                border: "none",
                fontFamily: "var(--font-inter)",
              }}
            >
              Request Access &rarr;
            </button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="flex md:hidden items-center justify-center cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              background: "transparent",
              border: "none",
              padding: 8,
              borderRadius: 6,
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className="fixed z-40 left-0 right-0"
          style={{
            top: 64,
            background: "#ffffff",
            borderBottom: "1px solid #E5E7EB",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <div style={{ padding: "16px 24px 20px" }}>
            {NAV_LINKS.map((link) => {
              const isActive = link.href ? false : activeId === link.id
              return (
                <a
                  key={link.label}
                  href={link.href ?? `/#${link.id}`}
                  onClick={link.href ? undefined : (e) => handleLinkClick(e, link.id!)}
                  className="no-underline"
                  style={{
                    display: "block",
                    padding: "11px 0",
                    fontSize: 15,
                    fontFamily: "var(--font-inter)",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "#D4A843" : "#0D1B2A",
                    borderBottom: "1px solid #F3F4F6",
                  }}
                >
                  {link.label}
                </a>
              )
            })}
            <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
              <button
                onClick={() => { setMenuOpen(false); onSignInClick() }}
                style={{
                  flex: 1,
                  height: 40,
                  background: "transparent",
                  color: "#0D1B2A",
                  border: "1px solid #0D1B2A",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
              >
                Sign in
              </button>
              <button
                onClick={() => { setMenuOpen(false); onRegisterClick() }}
                style={{
                  flex: 1,
                  height: 40,
                  background: "#D4A843",
                  color: "#0D1B2A",
                  border: "none",
                  borderRadius: 8,
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                }}
              >
                Request Access →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function MenuIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="1.75" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="#0D1B2A" strokeWidth="1.75" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
