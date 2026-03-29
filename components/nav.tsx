"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface NavProps {
  onRegisterClick: () => void
}

export function Nav({ onRegisterClick }: NavProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-all duration-200"
      style={{
        background: scrolled ? "#ffffff" : "transparent",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div
        className="flex items-center justify-between w-full px-6"
        style={{ maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Logo */}
        <a href="#" className="flex items-center no-underline" style={{ gap: 10 }}>
          <Image
            src="/logo.svg"
            alt="theformulator.ai"
            width={36}
            height={36}
            style={{ width: "auto", height: "auto" }}
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

        {/* Center nav links */}
        <div className="hidden md:flex items-center" style={{ gap: 32 }}>
          {[
            { label: "Features", href: "#features" },
            { label: "Security", href: "#security" },
            { label: "How it works", href: "#how-it-works" },
            { label: "Data", href: "#data" },
            { label: "Pricing", href: "#pricing" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-150 no-underline"
              style={{
                fontSize: 14,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#0D1B2A"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#6B7280"
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={onRegisterClick}
          className="hidden md:inline-flex items-center cursor-pointer transition-opacity duration-150 hover:opacity-90"
          style={{
            background: "#D4A843",
            color: "#0D1B2A",
            height: 36,
            padding: "0 18px",
            fontSize: 14,
            fontWeight: 500,
            borderRadius: 6,
            border: "none",
            fontFamily: "var(--font-inter)",
          }}
        >
          Register free →
        </button>
      </div>
    </nav>
  )
}
