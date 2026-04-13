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
          Your Formulations Stay Private
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
          Every formulation you generate is stored in your private workspace. No
          one at theformulator.ai — including our team — can access your generated
          formulations. Export or delete your data anytime.
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

        {/* Encryption flow diagram */}
        <div
          className="flex justify-center"
          style={{ marginBottom: 56 }}
        >
          <svg
            viewBox="0 0 560 80"
            width="100%"
            style={{ maxWidth: 560, height: 80, overflow: "visible" }}
            aria-label="Privacy flow: Your formulation stored in your private workspace, accessible only via your account"
          >
            {/* Step 1 — Document icon */}
            <g transform="translate(56, 40)">
              {/* Document icon */}
              <rect x="-14" y="-18" width="28" height="34" rx="3" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              <line x1="-7" y1="-8" x2="7" y2="-8" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
              <line x1="-7" y1="-2" x2="7" y2="-2" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
              <line x1="-7" y1="4" x2="3" y2="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
              <text x="0" y="28" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="var(--font-inter)">Your formulation</text>
            </g>

            {/* Arrow 1 */}
            <g transform="translate(168, 40)">
              <line x1="-36" y1="0" x2="36" y2="0" stroke="#D4A843" strokeWidth="1.5" />
              <polygon points="36,0 29,-4 29,4" fill="#D4A843" />
              {/* Lock icon above arrow */}
              <g transform="translate(0, -20)">
                <rect x="-6" y="-2" width="12" height="10" rx="2" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
                <path d="M-3.5 -2 Q-3.5 -8 0 -8 Q3.5 -8 3.5 -2" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
              </g>
              <text x="0" y="18" textAnchor="middle" fill="#D4A843" fontSize="10" fontFamily="var(--font-inter)">Private workspace</text>
            </g>

            {/* Step 2 — Vault cylinder */}
            <g transform="translate(280, 40)">
              <ellipse cx="0" cy="-14" rx="16" ry="5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              <rect x="-16" y="-14" width="32" height="24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              <ellipse cx="0" cy="10" rx="16" ry="5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              {/* lock on vault */}
              <rect x="-4" y="-6" width="8" height="7" rx="1.5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
              <path d="M-2 -6 Q-2 -10 0 -10 Q2 -10 2 -6" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" />
              <text x="0" y="28" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="var(--font-inter)">Encrypted vault</text>
            </g>

            {/* Arrow 2 */}
            <g transform="translate(392, 40)">
              <line x1="-36" y1="0" x2="36" y2="0" stroke="#D4A843" strokeWidth="1.5" />
              <polygon points="36,0 29,-4 29,4" fill="#D4A843" />
              {/* Key icon above arrow */}
              <g transform="translate(0, -20)">
                <circle cx="-4" cy="0" r="5" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
                <line x1="1" y1="0" x2="10" y2="0" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
                <line x1="8" y1="0" x2="8" y2="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
                <line x1="6" y1="0" x2="6" y2="3" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
              </g>
              <text x="0" y="18" textAnchor="middle" fill="#D4A843" fontSize="10" fontFamily="var(--font-inter)">Only you hold the key</text>
            </g>

            {/* Step 3 — User circle */}
            <g transform="translate(504, 40)">
              <circle cx="0" cy="-10" r="10" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              <circle cx="0" cy="-12" r="4" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
              <path d="M-7 -3 Q-7 2 0 2 Q7 2 7 -3" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.4" />
              <text x="0" y="14" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="11" fontFamily="var(--font-inter)">Your account</text>
            </g>
          </svg>
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

        {/* Intelligence by Claude badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <span
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 20,
              padding: "8px 16px",
              fontSize: 12,
              color: "#D4A843",
              letterSpacing: "0.05em",
              fontFamily: "var(--font-inter)",
              background: "transparent",
            }}
          >
            ✦ Intelligence by Claude · Anthropic
          </span>
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
    title: "Private Workspace",
    body: "Your generated formulations are stored in a workspace tied to your account. No theformulator.ai team member can read your formulation content.",
  },
  {
    Icon: EyeOffIcon,
    title: "No Internal Access",
    body: "We do not use your formulation data for training, analytics, or any purpose other than delivering your results back to you.",
  },
  {
    Icon: ShieldIcon,
    title: "You Always Own Your Data",
    body: "Export your formulations at any time in full. If you leave, your data leaves with you.",
  },
]

const trustSignals = [
  { Icon: LockIcon, label: "Private workspace per account" },
  { Icon: ShieldIcon, label: "GDPR Compliant" },
  { Icon: ShieldIcon, label: "India DPDP Compliant" },
  { Icon: CloudIcon, label: "Hosted on Google Cloud" },
  { Icon: ClipboardIcon, label: "SOC 2 Type I — In Progress" },
]
