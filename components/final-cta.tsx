"use client"

import { useState } from "react"

interface FinalCtaProps {
  onRegisterClick?: () => void
}

export function FinalCta({ onRegisterClick }: FinalCtaProps) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      style={{
        background: "#0D1B2A",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4.5vw, 46px)",
            fontWeight: 400,
            color: "#ffffff",
            maxWidth: 640,
            margin: "0 auto",
            lineHeight: 1.25,
          }}
          className="text-balance"
        >
          The formulation tool you didn&apos;t know you were missing.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 17,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            marginTop: 16,
          }}
        >
          Register free. Experience the platform. Request a subscription when
          you&apos;re ready.
        </p>

        {/* Registration form */}
        <form
          onSubmit={handleSubmit}
          style={{ maxWidth: 480, margin: "36px auto 0" }}
        >
          {submitted ? (
            <div
              style={{
                padding: "24px",
                border: "1px solid rgba(212,168,67,0.3)",
                borderRadius: 6,
                background: "rgba(212,168,67,0.06)",
              }}
            >
              <p
                style={{
                  color: "#D4A843",
                  fontSize: 15,
                  fontFamily: "var(--font-inter)",
                  margin: 0,
                }}
              >
                Registration received. {"We'll"} be in touch shortly.
              </p>
            </div>
          ) : (
            <div className="flex flex-col" style={{ gap: 0 }}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                required
                style={{
                  width: "100%",
                  height: 44,
                  borderRadius: "6px 6px 0 0",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderBottom: "none",
                  background: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  fontSize: 14,
                  padding: "0 14px",
                  fontFamily: "var(--font-inter)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                required
                style={{
                  width: "100%",
                  height: 44,
                  borderRadius: 0,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  fontSize: 14,
                  padding: "0 14px",
                  fontFamily: "var(--font-inter)",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                className="cursor-pointer transition-opacity hover:opacity-90"
                style={{
                  width: "100%",
                  height: 44,
                  background: "#D4A843",
                  color: "#0D1B2A",
                  fontWeight: 600,
                  fontSize: 15,
                  borderRadius: "0 0 6px 6px",
                  border: "none",
                  fontFamily: "var(--font-inter)",
                  marginTop: 8,
                  cursor: "pointer",
                }}
              >
                Register free →
              </button>
            </div>
          )}
        </form>

        {/* Reassurance lines */}
        {!submitted && (
          <div
            className="flex flex-col items-center"
            style={{ gap: 6, marginTop: 16 }}
          >
            {[
              "No credit card required",
              "Free account — explore the platform and run your first brief",
              "Subscribe at any time — sample reports sent before you commit",
            ].map((line) => (
              <div
                key={line}
                className="flex items-center"
                style={{ gap: 8 }}
              >
                <span style={{ color: "#D4A843", fontSize: 12, lineHeight: 1 }}>✓</span>
                <span
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 13,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 32,
          marginTop: 64,
          maxWidth: 1100,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div className="flex flex-wrap justify-center" style={{ gap: 32 }}>
          {["Privacy Policy", "Terms of Service", "Contact", "@theformulatorai"].map(
            (link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: "var(--font-inter)",
                  textDecoration: "none",
                  transition: "color 150ms",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.7)"
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.4)"
                }}
              >
                {link}
              </a>
            )
          )}
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 20,
            marginTop: 20,
            maxWidth: 600,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              color: "#9CA3AF",
              fontStyle: "italic",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            *theformulator.ai has no commercial relationships with ingredient
            suppliers. Ingredient recommendations are ranked by performance
            data, market frequency, and regulatory compliance — never by
            commercial agreements. Platform neutrality is architectural.
          </p>
        </div>
        <p
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: 12,
            color: "rgba(255,255,255,0.3)",
            fontFamily: "var(--font-inter)",
          }}
        >
          © 2026 theformulator.ai. All rights reserved.
        </p>
      </footer>
    </section>
  )
}
