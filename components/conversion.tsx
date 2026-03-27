interface ConversionProps {
  onRegisterClick: () => void
  onSubscribeClick: () => void
}

export function Conversion({ onRegisterClick, onSubscribeClick }: ConversionProps) {
  return (
    <section
      id="pricing"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section label */}
        <div className="flex flex-col items-center" style={{ marginBottom: 16 }}>
          <div
            style={{ width: 40, height: 2, background: "#D4A843", marginBottom: 8 }}
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
            GET STARTED
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 36,
            fontWeight: 400,
            color: "#0D1B2A",
            textAlign: "center",
            margin: 0,
          }}
        >
          Start free. Upgrade when you&apos;re ready.
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 16,
            color: "#6B7280",
            textAlign: "center",
            maxWidth: 520,
            margin: "12px auto 0",
            lineHeight: 1.7,
          }}
        >
          Registration is free — no credit card, no commitment. When you&apos;re
          ready to explore a subscription, we&apos;ll walk you through your options
          personally, with sample reports so you can decide with full information.
        </p>

        {/* Two path cards */}
        <div
          className="flex flex-col md:flex-row"
          style={{ gap: 24, maxWidth: 720, margin: "48px auto 0" }}
        >
          {/* Free account card */}
          <div
            style={{
              flex: 1,
              border: "1px solid #E5E7EB",
              borderRadius: 10,
              padding: 32,
              background: "#ffffff",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#F4F6F9",
                flexShrink: 0,
              }}
            >
              <UserPlusIcon size={20} color="#D4A843" />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 17,
                fontWeight: 600,
                color: "#0D1B2A",
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Free account
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.7,
                marginTop: 8,
                fontFamily: "var(--font-inter)",
                flex: 1,
              }}
            >
              Register in 30 seconds. Explore the platform, run the brief
              interview, and see what a generation looks like — before committing
              to anything.
            </p>
            <button
              onClick={onRegisterClick}
              className="cursor-pointer transition-opacity hover:opacity-90"
              style={{
                width: "100%",
                height: 40,
                background: "#D4A843",
                color: "#0D1B2A",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
                marginTop: 20,
                cursor: "pointer",
              }}
            >
              Register free →
            </button>
          </div>

          {/* Subscription card */}
          <div
            style={{
              flex: 1,
              border: "1px solid #E5E7EB",
              borderRadius: 10,
              padding: 32,
              background: "#ffffff",
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "#F4F6F9",
                flexShrink: 0,
              }}
            >
              <MailIcon size={20} color="#D4A843" />
            </div>
            <h3
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 17,
                fontWeight: 600,
                color: "#0D1B2A",
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Subscription access
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.7,
                marginTop: 8,
                fontFamily: "var(--font-inter)",
                flex: 1,
              }}
            >
              When you&apos;re ready to subscribe, request access. We&apos;ll send you
              sample reports at every intelligence level on the same formulation,
              explain the credit system, and recommend the right tier for your
              workflow. No pressure, full information.
            </p>
            <button
              onClick={onSubscribeClick}
              className="cursor-pointer transition-opacity hover:opacity-90"
              style={{
                width: "100%",
                height: 40,
                background: "transparent",
                color: "#0D1B2A",
                border: "1px solid #0D1B2A",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
                marginTop: 20,
                cursor: "pointer",
              }}
            >
              Request subscription access →
            </button>
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: 24,
            fontSize: 14,
            color: "#9CA3AF",
            fontFamily: "var(--font-inter)",
          }}
        >
          Subscriptions activate within 24 hours of confirmation. Sample reports
          sent before you commit.
        </p>
      </div>
    </section>
  )
}

function UserPlusIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" y1="8" x2="19" y2="14" />
      <line x1="22" y1="11" x2="16" y2="11" />
    </svg>
  )
}

function MailIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}
