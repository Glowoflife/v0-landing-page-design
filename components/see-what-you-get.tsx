import { SectionLabelCentered } from "@/components/section-label"

export function SeeWhatYouGet() {
  return (
    <section
      id="sample-reports"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="flex flex-col items-center" style={{ marginBottom: 48 }}>
          <SectionLabelCentered>SEE WHAT YOU GET</SectionLabelCentered>
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
            Three levels of intelligence.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              color: "#6B7280",
              textAlign: "center",
              marginTop: 12,
              marginBottom: 0,
              lineHeight: 1.7,
            }}
          >
            Choose the depth your project needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row" style={{ gap: 24 }}>
          {/* Card 1 — Quick Formula */}
          <div
            style={{
              flex: 1,
              border: "1px solid #E5E7EB",
              borderRadius: 10,
              padding: 32,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#F4F6F9",
                flexShrink: 0,
              }}
            >
              <ZapIcon size={20} color="#D4A843" />
            </div>
            <div style={{ marginTop: 16, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  margin: 0,
                }}
              >
                Quick Formula
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#9CA3AF",
                }}
              >
                1 credit
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.7,
                marginTop: 8,
                marginBottom: 0,
                fontFamily: "var(--font-inter)",
                flex: 1,
              }}
            >
              A bench-ready formula with regulatory pass/fail per market and preservation system. Built for speed — ideal for early-stage screening.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                color: "#9CA3AF",
                marginTop: 14,
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              INCI formula table · regulatory status summary · preservation system
            </p>
            <a
              href="/samples/quick-formula-sample.pdf"
              download
              style={{
                display: "inline-block",
                marginTop: 20,
                height: 40,
                lineHeight: "40px",
                padding: "0 20px",
                background: "transparent",
                color: "#0D1B2A",
                border: "1px solid #D4A843",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
                textAlign: "center",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#FBF5E6"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent"
              }}
            >
              Download sample →
            </a>
          </div>

          {/* Card 2 — Intelligence Brief (featured) */}
          <div
            style={{
              flex: 1,
              border: "1px solid #E5E7EB",
              borderTop: "3px solid #D4A843",
              borderRadius: 10,
              padding: 32,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: -1,
                right: 20,
                background: "#D4A843",
                color: "#0D1B2A",
                fontSize: 10,
                fontWeight: 700,
                fontFamily: "var(--font-inter)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "3px 10px",
                borderRadius: "0 0 6px 6px",
              }}
            >
              Most popular
            </span>
            <div
              className="flex items-center justify-center"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#F4F6F9",
                flexShrink: 0,
              }}
            >
              <FileTextIcon size={20} color="#D4A843" />
            </div>
            <div style={{ marginTop: 16, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  margin: 0,
                }}
              >
                Intelligence Brief
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#9CA3AF",
                }}
              >
                3 credits
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.7,
                marginTop: 8,
                marginBottom: 0,
                fontFamily: "var(--font-inter)",
                flex: 1,
              }}
            >
              Full formulation intelligence with safety scores, per-ingredient regulatory detail, market co-occurrence data, and preservation rationale. The workhorse for professional R&D.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                color: "#9CA3AF",
                marginTop: 14,
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Everything in Quick plus safety overview · market intelligence · formulation notes · ingredient-level regulatory table
            </p>
            <a
              href="/samples/intelligence-brief-sample.pdf"
              download
              style={{
                display: "inline-block",
                marginTop: 20,
                height: 40,
                lineHeight: "40px",
                padding: "0 20px",
                background: "#D4A843",
                color: "#0D1B2A",
                border: "none",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
                textAlign: "center",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "0.9"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.opacity = "1"
              }}
            >
              Download sample →
            </a>
          </div>

          {/* Card 3 — Dossier */}
          <div
            style={{
              flex: 1,
              border: "1px solid #E5E7EB",
              borderRadius: 10,
              padding: 32,
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "#F4F6F9",
                flexShrink: 0,
              }}
            >
              <BookOpenIcon size={20} color="#D4A843" />
            </div>
            <div style={{ marginTop: 16, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  margin: 0,
                }}
              >
                Dossier
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#9CA3AF",
                }}
              >
                5 credits
              </span>
            </div>
            <p
              style={{
                fontSize: 14,
                color: "#6B7280",
                lineHeight: 1.7,
                marginTop: 8,
                marginBottom: 0,
                fontFamily: "var(--font-inter)",
                flex: 1,
              }}
            >
              Complete technical package with stability risk assessment, manufacturing brief, technical ingredient data, and PubMed citations. Built for regulatory submissions and CMO handoff.
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains)",
                fontSize: 11,
                color: "#9CA3AF",
                marginTop: 14,
                marginBottom: 0,
                lineHeight: 1.6,
              }}
            >
              Everything in Brief plus stability risk assessment (ICH zones) · manufacturing brief · technical ingredient data · 3–5 PubMed citations per active
            </p>
            <a
              href="/samples/dossier-sample.pdf"
              download
              style={{
                display: "inline-block",
                marginTop: 20,
                height: 40,
                lineHeight: "40px",
                padding: "0 20px",
                background: "transparent",
                color: "#0D1B2A",
                border: "1px solid #D4A843",
                borderRadius: 6,
                fontSize: 14,
                fontWeight: 500,
                fontFamily: "var(--font-inter)",
                textDecoration: "none",
                textAlign: "center",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#FBF5E6"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent"
              }}
            >
              Download sample →
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 13,
            color: "#9CA3AF",
            fontFamily: "var(--font-inter)",
            lineHeight: 1.7,
          }}
        >
          All three variants are included in every report. Credits buy the intelligence depth, not the number of formulations.
        </p>
      </div>
    </section>
  )
}

function ZapIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function FileTextIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function BookOpenIcon({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}
