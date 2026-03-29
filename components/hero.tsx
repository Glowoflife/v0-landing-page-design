"use client"

import { Bell, Zap } from "lucide-react"

interface HeroProps {
  onRegisterClick: () => void
}

export function Hero({ onRegisterClick }: HeroProps) {
  return (
    <section
      style={{
        background: "#F8F6F1",
        paddingTop: 144,
        paddingBottom: 0,
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Eyebrow */}
        <div className="flex flex-col items-center" style={{ marginBottom: 24 }}>
          <div
            style={{
              width: 40,
              height: 2,
              background: "#D4A843",
              marginBottom: 10,
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "#D4A843",
              letterSpacing: "0.1em",
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
              textTransform: "uppercase",
            }}
          >
            NOW IN EARLY ACCESS
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(38px, 6vw, 62px)",
            fontWeight: 400,
            color: "#0D1B2A",
            lineHeight: 1.2,
            maxWidth: 820,
            margin: "0 auto",
          }}
          className="text-balance"
        >
          The world&apos;s most comprehensive cosmetic formulation intelligence
          platform.
        </h1>

        {/* Sub-headline */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 18,
            color: "#6B7280",
            fontWeight: 400,
            maxWidth: 580,
            margin: "20px auto 0",
            lineHeight: 1.7,
          }}
        >
          From brief to regulatory-compliant formulation in minutes.
        </p>

        {/* CTA pair */}
        <div
          className="flex items-center justify-center flex-wrap"
          style={{ gap: 16, marginTop: 36 }}
        >
          <button
            onClick={onRegisterClick}
            className="inline-flex items-center cursor-pointer transition-opacity hover:opacity-90"
            style={{
              background: "#D4A843",
              color: "#0D1B2A",
              height: 48,
              padding: "0 28px",
              fontSize: 15,
              fontWeight: 500,
              borderRadius: 6,
              border: "none",
              fontFamily: "var(--font-inter)",
            }}
          >
            Register free →
          </button>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1 transition-all"
            style={{
              color: "#0D1B2A",
              fontSize: 14,
              fontFamily: "var(--font-inter)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                "underline"
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.textDecoration =
                "none"
            }}
          >
            See how it works ↓
          </a>
        </div>

        {/* Social proof */}
        <div
          className="flex flex-wrap items-center justify-center"
          style={{ gap: 8, marginTop: 24 }}
        >
          {[
            "550,000+ marketed products",
            "23,500+ reference formulations",
            "13 regulatory markets",
            "2,400+ CIR safety assessments",
          ].map((badge) => (
            <span
              key={badge}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: 20,
                padding: "6px 14px",
                fontSize: 12,
                color: "#374151",
                fontFamily: "var(--font-inter)",
              }}
            >
              {badge}
            </span>
          ))}
          <span
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: 20,
              padding: "6px 14px",
              fontSize: 12,
              color: "#374151",
              fontFamily: "var(--font-inter)",
            }}
          >
            Supplier-Agnostic<sup style={{ color: "#D4A843" }}>*</sup>
          </span>
        </div>

        {/* App mockup */}
        <div
          style={{
            marginTop: 48,
            width: "85%",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Browser chrome */}
          <div
            style={{
              border: "1px solid #E5E7EB",
              borderRadius: "10px 10px 0 0",
              overflow: "hidden",
            }}
          >
            {/* Browser top bar */}
            <div
              className="flex items-center"
              style={{
                height: 32,
                background: "#F1F3F5",
                borderBottom: "1px solid #E5E7EB",
                padding: "0 12px",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FF5F57",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#FEBC2E",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "#28C840",
                  display: "inline-block",
                }}
              />
              <div
                style={{
                  flex: 1,
                  marginLeft: 12,
                  background: "#E5E7EB",
                  borderRadius: 4,
                  height: 16,
                  maxWidth: 240,
                }}
              />
            </div>

            {/* App content */}
            <AppMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function AppMockup() {
  return (
    <div
      style={{
        background: "#0D1B2A",
        padding: 0,
        fontSize: 12,
        fontFamily: "var(--font-inter)",
      }}
    >
      {/* Inner top bar */}
      <div
        className="flex items-center justify-between"
        style={{
          padding: "10px 16px",
          borderBottom: "1px solid #1B3A5C",
          background: "#0D1B2A",
        }}
      >
        <span
          style={{
            color: "#D4A843",
            fontSize: 13,
            fontWeight: 600,
            fontFamily: "var(--font-inter)",
          }}
        >
          theformulator.ai
        </span>
        <div className="flex items-center" style={{ gap: 10 }}>
          <span
            className="inline-flex items-center"
            style={{
              fontSize: 11,
              color: "#D4A843",
              background: "rgba(212,168,67,0.12)",
              border: "1px solid rgba(212,168,67,0.25)",
              borderRadius: 20,
              padding: "2px 8px",
              gap: 4,
              fontFamily: "var(--font-inter)",
            }}
          >
            <Zap size={10} />
            27 / 40 credits
          </span>
          <Bell size={14} color="#6B7280" />
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "#1B3A5C",
              color: "#D4A843",
              fontSize: 10,
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-inter)",
            }}
          >
            JR
          </span>
        </div>
      </div>

      {/* Main content area */}
      <div
        style={{ background: "#0A1628", padding: 20 }}
        className="flex gap-4"
      >
        {/* Left column */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              color: "#ffffff",
              fontSize: 16,
              fontWeight: 500,
              margin: 0,
              fontFamily: "var(--font-inter)",
            }}
          >
            Good morning, Andrea.
          </p>
          <p
            style={{
              color: "#6B7280",
              fontSize: 11,
              marginTop: 4,
              marginBottom: 16,
              fontFamily: "var(--font-inter)",
            }}
          >
            Friday, 27 March 2026 · 3 active projects · Alpha launch in 14
            weeks
          </p>

          {/* Stat cards */}
          <div className="grid grid-cols-4" style={{ gap: 8, marginBottom: 16 }}>
            {[
              { label: "FORMULATIONS", value: "12", alert: false },
              { label: "SAVED", value: "38", alert: false },
              { label: "REG. ALERTS", value: "2", alert: true },
              { label: "MARKETS", value: "9", alert: false },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "#0D1B2A",
                  border: `1px solid ${stat.alert ? "rgba(239,68,68,0.4)" : "#1B3A5C"}`,
                  borderRadius: 6,
                  padding: "10px 10px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: stat.alert ? "#EF4444" : "#ffffff",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 9,
                    color: "#6B7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginTop: 2,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Project cards */}
          <div className="flex flex-col" style={{ gap: 8 }}>
            {[
              {
                name: "Brightening Serum",
                markets: [
                  { code: "EU", color: "#22C55E" },
                  { code: "US", color: "#22C55E" },
                  { code: "IN", color: "#EAB308" },
                ],
              },
              {
                name: "SPF 50 Sunscreen",
                markets: [
                  { code: "EU", color: "#22C55E" },
                  { code: "CN", color: "#EF4444" },
                  { code: "JP", color: "#EAB308" },
                ],
              },
            ].map((project) => (
              <div
                key={project.name}
                style={{
                  background: "#0D1B2A",
                  border: "1px solid #1B3A5C",
                  borderRadius: 6,
                  padding: "10px 14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 12,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {project.name}
                </span>
                <div className="flex items-center" style={{ gap: 6 }}>
                  {project.markets.map((m) => (
                    <span
                      key={m.code}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 3,
                        fontSize: 10,
                        color: m.color,
                        fontFamily: "var(--font-inter)",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: m.color,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {m.code}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ width: 220, flexShrink: 0 }}>
          {/* Regulatory alerts */}
          <div
            style={{
              marginBottom: 12,
            }}
          >
            <p
              style={{
                fontSize: 9,
                color: "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 8,
                fontFamily: "var(--font-inter)",
              }}
            >
              REGULATORY ALERTS
            </p>
            <div className="flex flex-col" style={{ gap: 6 }}>
              <div
                style={{
                  background: "#0D1B2A",
                  border: "1px solid rgba(239,68,68,0.4)",
                  borderRadius: 6,
                  padding: "8px 10px",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: "#EF4444",
                    fontWeight: 600,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  NMPA limit update
                </span>
                <p
                  style={{
                    fontSize: 10,
                    color: "#9CA3AF",
                    margin: "2px 0 0",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  Titanium Dioxide max. revised
                </p>
              </div>
              <div
                style={{
                  background: "#0D1B2A",
                  border: "1px solid rgba(234,179,8,0.4)",
                  borderRadius: 6,
                  padding: "8px 10px",
                }}
              >
                <span
                  style={{
                    fontSize: 10,
                    color: "#EAB308",
                    fontWeight: 600,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  EU Annex II review
                </span>
                <p
                  style={{
                    fontSize: 10,
                    color: "#9CA3AF",
                    margin: "2px 0 0",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  3 ingredients under assessment
                </p>
              </div>
            </div>
          </div>

          {/* Today's intelligence */}
          <div>
            <p
              style={{
                fontSize: 9,
                color: "#6B7280",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 8,
                fontFamily: "var(--font-inter)",
              }}
            >
              {"TODAY'S INTELLIGENCE"}
            </p>
            <div className="flex flex-wrap" style={{ gap: 4 }}>
              {[
                { label: "REG", color: "#EF4444" },
                { label: "SCIENCE", color: "#3B82F6" },
                { label: "MARKET", color: "#22C55E" },
                { label: "INGREDIENT", color: "#D4A843" },
              ].map((pill) => (
                <span
                  key={pill.label}
                  style={{
                    fontSize: 9,
                    color: pill.color,
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${pill.color}33`,
                    borderRadius: 20,
                    padding: "2px 7px",
                    fontWeight: 600,
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {pill.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
