import { SectionLabelCentered } from "@/components/section-label"

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        background: "#F4F6F9",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="flex flex-col items-center" style={{ marginBottom: 48 }}>
          <SectionLabelCentered>HOW IT WORKS</SectionLabelCentered>
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
            Brief. Generate. Ship.
          </h2>
        </div>

        <div
          className="flex flex-col md:flex-row"
          style={{ gap: 24 }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                flex: 1,
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                borderRadius: 10,
                padding: 28,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 24,
                  color: "#D4A843",
                  fontWeight: 400,
                }}
              >
                {step.number}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  marginTop: 8,
                  marginBottom: 0,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  lineHeight: 1.7,
                  marginTop: 10,
                  marginBottom: 0,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {step.body}
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
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const steps = [
  {
    number: "01",
    title: "Define the brief",
    body: "Enter product format, claims, target markets, sensory goals, and technical constraints across 5 structured layers.",
    detail: "sulphate free · no silicones · EU + India · brightening",
  },
  {
    number: "02",
    title: "Generate formulation routes",
    body: "Receive structured prototype formulations with INCI-only ingredient lists, phase-by-phase processing, and concentration rationale.",
    detail: "Aqua · Glycerin · Niacinamide · Centella Asiatica Extract · Bakuchiol",
  },
  {
    number: "03",
    title: "Screen for fit and risk",
    body: "Evaluate ingredient suitability, market-specific regulatory constraints, and formulation confidence indicators across 16 markets.",
    detail: "Stability 82% · Performance 91% · Regulatory 76%",
  },
  {
    number: "04",
    title: "Refine and troubleshoot",
    body: "Compare variants, diagnose instability concerns, and iterate toward a stronger starting formula with the Formulation Partner.",
    detail: "emulsion break · pH drift · preservative efficacy",
  },
]
