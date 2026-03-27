"use client"

import { useState } from "react"

interface RegisterModalProps {
  open: boolean
  onClose: () => void
}

export function RegisterModal({ open, onClose }: RegisterModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email) {
      setSubmitted(true)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 12,
          padding: 32,
          maxWidth: 440,
          width: "calc(100% - 32px)",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            color: "#9CA3AF",
            fontSize: 20,
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 22,
                fontWeight: 400,
                color: "#0D1B2A",
                margin: "0 0 8px",
              }}
            >
              Account created.
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
                lineHeight: 1.6,
              }}
            >
              {"We'll"} send your access details to{" "}
              <strong>{form.email}</strong> shortly.
            </p>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 22,
                fontWeight: 400,
                color: "#0D1B2A",
                margin: "0 0 4px",
              }}
            >
              Create your free account
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
                margin: "0 0 24px",
              }}
            >
              No credit card. Instant access.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 16 }}>
              <input
                type="text"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Company name (Optional)"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                style={inputStyle}
              />
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                style={{ ...inputStyle, color: form.role ? "#374151" : "#9CA3AF" }}
              >
                <option value="" disabled>
                  Select your role
                </option>
                {roles.map((r) => (
                  <option key={r} value={r} style={{ color: "#374151" }}>
                    {r}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="cursor-pointer transition-opacity hover:opacity-90"
                style={{
                  width: "100%",
                  height: 44,
                  background: "#D4A843",
                  color: "#0D1B2A",
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 6,
                  border: "none",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                  marginTop: 4,
                }}
              >
                Create account →
              </button>

              <p
                style={{
                  fontSize: 13,
                  color: "#9CA3AF",
                  textAlign: "center",
                  fontFamily: "var(--font-inter)",
                  margin: 0,
                }}
              >
                By registering you agree to our Terms of Service and Privacy
                Policy.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

interface SubscribeModalProps {
  open: boolean
  onClose: () => void
}

export function SubscribeModal({ open, onClose }: SubscribeModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    tier: "",
    brief: "",
  })
  const [submitted, setSubmitted] = useState(false)

  if (!open) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (form.name && form.email) {
      setSubmitted(true)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.5)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: 12,
          padding: 32,
          maxWidth: 500,
          width: "calc(100% - 32px)",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            color: "#9CA3AF",
            fontSize: 20,
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
          }}
          aria-label="Close"
        >
          ×
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 22,
                fontWeight: 400,
                color: "#0D1B2A",
                margin: "0 0 8px",
              }}
            >
              Request received.
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
                lineHeight: 1.6,
              }}
            >
              {"We'll"} respond within 1 business day with your sample reports.
            </p>
          </div>
        ) : (
          <>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 22,
                fontWeight: 400,
                color: "#0D1B2A",
                margin: "0 0 4px",
              }}
            >
              Request subscription access
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
                margin: "0 0 24px",
              }}
            >
              {"We'll"} send sample reports before you commit — no pressure.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 14 }}>
              <input
                type="text"
                placeholder="Full name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Company name (Optional)"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                style={inputStyle}
              />
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                style={{ ...inputStyle, color: form.role ? "#374151" : "#9CA3AF" }}
              >
                <option value="" disabled>
                  Select your role
                </option>
                {roles.map((r) => (
                  <option key={r} value={r} style={{ color: "#374151" }}>
                    {r}
                  </option>
                ))}
              </select>

              {/* Tier radio */}
              <div>
                <p
                  style={{
                    fontSize: 13,
                    color: "#374151",
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    margin: "0 0 10px",
                  }}
                >
                  Tier of interest
                </p>
                <div className="flex flex-col" style={{ gap: 8 }}>
                  {tiers.map((t) => (
                    <label
                      key={t.value}
                      className="flex items-center cursor-pointer"
                      style={{ gap: 10 }}
                    >
                      <input
                        type="radio"
                        name="tier"
                        value={t.value}
                        checked={form.tier === t.value}
                        onChange={(e) =>
                          setForm({ ...form, tier: e.target.value })
                        }
                        style={{ accentColor: "#D4A843", width: 15, height: 15 }}
                      />
                      <span
                        style={{
                          fontSize: 14,
                          color: "#374151",
                          fontFamily: "var(--font-inter)",
                        }}
                      >
                        {t.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <textarea
                rows={3}
                value={form.brief}
                onChange={(e) => setForm({ ...form, brief: e.target.value })}
                placeholder="e.g. SPF 50 sunscreen for EU + Japan, or natural moisturiser for India launch — helps us personalise your sample reports"
                style={{
                  ...inputStyle,
                  height: "auto",
                  padding: "10px 14px",
                  resize: "vertical",
                  lineHeight: 1.5,
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
                  fontWeight: 500,
                  fontSize: 14,
                  borderRadius: 6,
                  border: "none",
                  fontFamily: "var(--font-inter)",
                  cursor: "pointer",
                  marginTop: 4,
                }}
              >
                Send my request →
              </button>

              <p
                style={{
                  fontSize: 13,
                  color: "#9CA3AF",
                  textAlign: "center",
                  fontFamily: "var(--font-inter)",
                  margin: 0,
                }}
              >
                {"We'll"} respond within 1 business day with your sample reports.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 44,
  borderRadius: 6,
  border: "1px solid #E5E7EB",
  background: "#ffffff",
  color: "#374151",
  fontSize: 14,
  padding: "0 14px",
  fontFamily: "var(--font-inter)",
  outline: "none",
  boxSizing: "border-box",
}

const roles = [
  "Independent Formulator",
  "R&D Team at a Brand",
  "Contract Manufacturer",
  "Ingredient Distributor",
  "Other",
]

const tiers = [
  { value: "starter", label: "Starter — $99/month" },
  { value: "professional", label: "Professional — $299/month" },
  { value: "studio", label: "Studio — $799/month" },
  { value: "unsure", label: "Not sure yet" },
]
