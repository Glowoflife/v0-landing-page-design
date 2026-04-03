"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff, CheckCircle, Loader2 } from "lucide-react"

// ─────────────────────────────────────────────────────────────────────────────
// SIGN IN MODAL
// ─────────────────────────────────────────────────────────────────────────────

interface SignInModalProps {
  open: boolean
  onClose: () => void
  onSwitchToRegister: () => void
}

export function SignInModal({ open, onClose, onSwitchToRegister }: SignInModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [forgotPassword, setForgotPassword] = useState(false)

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || data.message || "Login failed. Please try again.")
        setLoading(false)
        return
      }

      // Success — store tokens and redirect
      localStorage.setItem("tf_access_token", data.access_token)
      localStorage.setItem("tf_refresh_token", data.refresh_token)
      window.location.href = "https://app.theformulator.ai"
    } catch {
      setError("Network error. Please check your connection.")
      setLoading(false)
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
          border: "1px solid #E5E7EB",
          padding: 40,
          maxWidth: 440,
          width: "calc(100% - 32px)",
          position: "relative",
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
            fontSize: 22,
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
          }}
          aria-label="Close"
        >
          &times;
        </button>

        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Image
            src="/logo.svg"
            alt="theformulator.ai"
            width={36}
            height={36}
            loading="eager"
            style={{ margin: "0 auto", width: 36, height: 36 }}
          />
        </div>

        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 22,
            fontWeight: 700,
            color: "#0D1B2A",
            textAlign: "center",
            margin: "0 0 4px",
          }}
        >
          Welcome back
        </h2>
        <p
          style={{
            fontSize: 13,
            color: "#6B7280",
            fontFamily: "var(--font-inter)",
            textAlign: "center",
            margin: "0 0 28px",
          }}
        >
          Sign in to theformulator.ai
        </p>

        {/* Error */}
        {!forgotPassword && error && (
          <div
            style={{
              background: "#FEF2F2",
              border: "1px solid #FECACA",
              borderRadius: 8,
              padding: "12px 14px",
              marginBottom: 20,
            }}
          >
            <p
              style={{
                fontSize: 13,
                color: "#DC2626",
                fontFamily: "var(--font-inter)",
                margin: 0,
              }}
            >
              {error}
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 16 }}>
          {/* Email */}
          <div>
            <label style={labelStyle}>EMAIL</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Password */}
          <div>
            <label style={labelStyle}>PASSWORD</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ ...inputStyle, paddingRight: 44 }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  right: 12,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  color: "#9CA3AF",
                }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <p
              style={{
                fontSize: 11,
                color: "#9CA3AF",
                textAlign: "right",
                cursor: "pointer",
                marginTop: 4,
                marginBottom: 0,
                fontFamily: "var(--font-inter)",
              }}
              onClick={() => setForgotPassword(true)}
            >
              Forgot password?
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="cursor-pointer transition-opacity hover:opacity-90 flex items-center justify-center"
            style={{
              width: "100%",
              height: 44,
              background: "#D4A843",
              color: "#0D1B2A",
              fontWeight: 600,
              fontSize: 14,
              borderRadius: 8,
              border: "none",
              fontFamily: "var(--font-inter)",
              marginTop: 4,
              gap: 8,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in \u2192"
            )}
          </button>

          {/* Switch to register */}
          <p
            style={{
              fontSize: 13,
              color: "#6B7280",
              textAlign: "center",
              fontFamily: "var(--font-inter)",
              margin: 0,
            }}
          >
            {"Don't have an account? "}
            <button
              type="button"
              onClick={() => {
                onClose()
                onSwitchToRegister()
              }}
              style={{
                background: "none",
                border: "none",
                color: "#D4A843",
                cursor: "pointer",
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
                fontSize: 13,
                padding: 0,
              }}
            >
              Request access &rarr;
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// REGISTER MODAL
// ─────────────────────────────────────────────────────────────────────────────

interface RegisterModalProps {
  open: boolean
  onClose: () => void
  onSwitchToSignIn?: () => void
}

export function RegisterModal({ open, onClose, onSwitchToSignIn }: RegisterModalProps) {
  const [form, setForm] = useState({
    full_name: "",
    organisation: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  if (!open) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Validate password match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          full_name: form.full_name,
          organisation: form.organisation,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || data.message || "Registration failed. Please try again.")
        setLoading(false)
        return
      }

      // Success — show success state (no redirect for alpha)
      setSuccess(true)
      setLoading(false)
    } catch {
      setError("Network error. Please check your connection.")
      setLoading(false)
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
          border: "1px solid #E5E7EB",
          padding: 40,
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
            fontSize: 22,
            cursor: "pointer",
            lineHeight: 1,
            padding: 4,
          }}
          aria-label="Close"
        >
          &times;
        </button>

        {success ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <CheckCircle size={48} color="#16A34A" style={{ margin: "0 auto 16px" }} />
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 18,
                fontWeight: 600,
                color: "#0D1B2A",
                margin: "0 0 8px",
              }}
            >
              Access Requested
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
                lineHeight: 1.6,
                maxWidth: 280,
                margin: "0 auto 20px",
              }}
            >
              {"Your account has been created. You'll receive access once your credits are activated by the team."}
            </p>
            <button
              onClick={onClose}
              style={{
                background: "transparent",
                color: "#0D1B2A",
                height: 40,
                padding: "0 24px",
                fontSize: 14,
                fontWeight: 500,
                borderRadius: 8,
                border: "1px solid #0D1B2A",
                fontFamily: "var(--font-inter)",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Logo */}
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <Image
                src="/logo.svg"
                alt="theformulator.ai"
                width={36}
                height={36}
                loading="eager"
                style={{ margin: "0 auto", width: 36, height: 36 }}
              />
            </div>

            {/* Heading */}
            <h2
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 22,
                fontWeight: 700,
                color: "#0D1B2A",
                textAlign: "center",
                margin: "0 0 4px",
              }}
            >
              Request Alpha Access
            </h2>
            <p
              style={{
                fontSize: 13,
                color: "#6B7280",
                fontFamily: "var(--font-inter)",
                textAlign: "center",
                margin: "0 0 28px",
              }}
            >
              Join the theformulator.ai alpha programme
            </p>

            {/* Error */}
            {error && (
              <div
                style={{
                  background: "#FEF2F2",
                  border: "1px solid #FECACA",
                  borderRadius: 8,
                  padding: "12px 14px",
                  marginBottom: 20,
                }}
              >
                <p
                  style={{
                    fontSize: 13,
                    color: "#DC2626",
                    fontFamily: "var(--font-inter)",
                    margin: 0,
                  }}
                >
                  {error}
                </p>
              </div>
            )}

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: 16 }}>
              {/* Full Name */}
              <div>
                <label style={labelStyle}>FULL NAME</label>
                <input
                  type="text"
                  required
                  value={form.full_name}
                  onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Organisation */}
              <div>
                <label style={labelStyle}>ORGANISATION</label>
                <input
                  type="text"
                  value={form.organisation}
                  onChange={(e) => setForm({ ...form, organisation: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>EMAIL</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle}
                />
              </div>

              {/* Password */}
              <div>
                <label style={labelStyle}>PASSWORD</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    style={{ ...inputStyle, paddingRight: 44 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      color: "#9CA3AF",
                    }}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label style={labelStyle}>CONFIRM PASSWORD</label>
                <div style={{ position: "relative" }}>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={form.confirmPassword}
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                    style={{ ...inputStyle, paddingRight: 44 }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                      position: "absolute",
                      right: 12,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      color: "#9CA3AF",
                    }}
                    aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer transition-opacity hover:opacity-90 flex items-center justify-center"
                style={{
                  width: "100%",
                  height: 44,
                  background: "#D4A843",
                  color: "#0D1B2A",
                  fontWeight: 600,
                  fontSize: 14,
                  borderRadius: 8,
                  border: "none",
                  fontFamily: "var(--font-inter)",
                  marginTop: 4,
                  gap: 8,
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Requesting access...
                  </>
                ) : (
                  "Request Access \u2192"
                )}
              </button>

              {/* Switch to sign in */}
              {onSwitchToSignIn && (
                <p
                  style={{
                    fontSize: 13,
                    color: "#6B7280",
                    textAlign: "center",
                    fontFamily: "var(--font-inter)",
                    margin: 0,
                  }}
                >
                  {"Already have an account? "}
                  <button
                    type="button"
                    onClick={() => {
                      onClose()
                      onSwitchToSignIn()
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#D4A843",
                      cursor: "pointer",
                      fontWeight: 500,
                      fontFamily: "var(--font-inter)",
                      fontSize: 13,
                      padding: 0,
                    }}
                  >
                    Sign in
                  </button>
                </p>
              )}
            </form>
          </>
        )}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SUBSCRIBE MODAL (unchanged)
// ─────────────────────────────────────────────────────────────────────────────

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
          &times;
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
                style={subscribeInputStyle}
              />
              <input
                type="email"
                placeholder="Email address"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={subscribeInputStyle}
              />
              <input
                type="text"
                placeholder="Company name (Optional)"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                style={subscribeInputStyle}
              />
              <select
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                style={{ ...subscribeInputStyle, color: form.role ? "#374151" : "#9CA3AF" }}
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
                  ...subscribeInputStyle,
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
                Send my request &rarr;
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

// ─────────────────────────────────────────────────────────────────────────────
// SHARED STYLES
// ─────────────────────────────────────────────────────────────────────────────

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 11,
  fontWeight: 500,
  color: "#9CA3AF",
  fontFamily: "var(--font-inter)",
  textTransform: "uppercase",
  marginBottom: 6,
  letterSpacing: "0.02em",
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 40,
  borderRadius: 8,
  border: "1px solid #E5E7EB",
  background: "#ffffff",
  color: "#374151",
  fontSize: 14,
  padding: "0 14px",
  fontFamily: "var(--font-inter)",
  outline: "none",
  boxSizing: "border-box",
}

const subscribeInputStyle: React.CSSProperties = {
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
