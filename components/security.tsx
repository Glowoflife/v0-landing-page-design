import { SectionLabelCentered } from "@/components/section-label"

export function Security() {
  return (
    <section
      id="security"
      style={{
        background: "#0D1B2A",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section label */}
        <div className="flex flex-col items-center" style={{ marginBottom: 16 }}>
          <div
            style={{
              width: 40,
              height: 2,
              background: "#D4A843",
              marginBottom: 8,
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
            FORMULATION VAULT
          </span>
        </div>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(32px, 4vw, 44px)",
            fontWeight: 400,
            color: "#ffffff",
            maxWidth: 700,
            margin: "0 auto",
            lineHeight: 1.25,
          }}
          className="text-balance"
        >
          Your formulations are your most valuable trade secret. We treat them
          that way.
        </h2>

        {/* Sub-copy */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 17,
            color: "rgba(255,255,255,0.7)",
            textAlign: "center",
            maxWidth: 580,
            margin: "16px auto 56px",
            lineHeight: 1.7,
          }}
        >
          Every formula you generate is encrypted with a key derived from your
          account — before it touches our database. We cannot read your work. We
          will never share it with ingredient suppliers or third parties.
        </p>

        {/* Three pillars */}
        <div
          className="flex flex-col md:flex-row justify-center"
          style={{ gap: 32, marginBottom: 56 }}
        >
          {pillars.map((p) => (
            <div
              key={p.title}
              className="flex flex-col items-center"
              style={{ maxWidth: 240, margin: "0 auto" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#1B3A5C",
                  flexShrink: 0,
                }}
              >
                <p.Icon size={20} color="#D4A843" strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#ffffff",
                  marginTop: 14,
                  marginBottom: 0,
                  textAlign: "center",
                }}
              >
                {p.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.6)",
                  marginTop: 6,
                  textAlign: "center",
                  maxWidth: 220,
                  lineHeight: 1.6,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            maxWidth: 600,
            margin: "0 auto 40px",
          }}
        />

        {/* Trust signals */}
        <div
          className="flex flex-wrap justify-center"
          style={{ gap: 12 }}
        >
          {trustSignals.map((s) => (
            <div
              key={s.label}
              className="flex items-center"
              style={{
                gap: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 6,
                padding: "10px 16px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <s.Icon size={14} color="#D4A843" strokeWidth={1.5} />
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 500,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <p
          style={{
            marginTop: 40,
            textAlign: "center",
            fontSize: 14,
            color: "rgba(255,255,255,0.5)",
            fontStyle: "italic",
            fontFamily: "var(--font-inter)",
          }}
        >
          We never share formulation data with ingredient suppliers, distributors,
          or any third party. Platform neutrality is architectural.
        </p>
      </div>
    </section>
  )
}

// Inline SVG icon components to avoid lucide-react dependency issues
function LockIcon({ size, color, strokeWidth }: { size: number; color: string; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function EyeOffIcon({ size, color, strokeWidth }: { size: number; color: string; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

function ShieldIcon({ size, color, strokeWidth }: { size: number; color: string; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function CloudIcon({ size, color, strokeWidth }: { size: number; color: string; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}

function ClipboardIcon({ size, color, strokeWidth }: { size: number; color: string; strokeWidth: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    </svg>
  )
}

const pillars = [
  {
    Icon: LockIcon,
    title: "Per-User AES-256 Encryption",
    body: "Each formulation is encrypted with a unique key derived from your account. Not a shared key — your key. Mathematically impossible for us to decrypt without your credentials.",
  },
  {
    Icon: EyeOffIcon,
    title: "Zero-Knowledge Architecture",
    body: "We store only encrypted bytes and metadata. The platform has no access to formulation content — only you do. This is architectural, not a policy promise.",
  },
  {
    Icon: ShieldIcon,
    title: "You Always Own Your Data",
    body: "Export your formulations at any time in full. If you leave, your data leaves with you. No lock-in, no retention.",
  },
]

const trustSignals = [
  { Icon: LockIcon, label: "256-bit AES Encryption" },
  { Icon: ShieldIcon, label: "GDPR Compliant" },
  { Icon: ShieldIcon, label: "India DPDP Compliant" },
  { Icon: CloudIcon, label: "Hosted on Google Cloud" },
  { Icon: ClipboardIcon, label: "SOC 2 Type I — In Progress" },
]
