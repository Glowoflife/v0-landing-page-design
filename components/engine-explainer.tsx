import { SectionLabelCentered } from "@/components/section-label"

const layers = [
  { label: "Market Intelligence", desc: "Co-occurrence patterns from 561,000+ commercially launched products" },
  { label: "Regulatory Constraints", desc: "Per-market concentration limits and prohibited substance lists across 16 markets" },
  { label: "Reference Formulations", desc: "23,500+ professional benchmark formulations with phase structure" },
  { label: "Ingredient Technical Data", desc: "HLB values, solubility, phase of addition, typical use levels from supplier TDS" },
  { label: "CIR Safety Assessments", desc: "Cosmetic-specific safety conclusions from 2,600+ peer-reviewed CIR reports" },
  { label: "Published Research", desc: "PubMed literature on ingredient efficacy and interactions" },
  { label: "Preservative Intelligence", desc: "System recommendations ranked by spectrum, pH compatibility, and natural origin" },
  { label: "Surfactant Intelligence", desc: "Mildness-ranked cleansing systems with clinical irritation data" },
  { label: "Safety Scores", desc: "6-axis hazard scoring from ECHA, CIR, IARC, and NTP primary sources" },
  { label: "Ingredient Compatibility", desc: "Known interaction flags and formulation stability signals" },
  { label: "Concentration Limits", desc: "Per-market maximum use levels from EU Annexes, Japan Standards, Korea MFDS" },
  { label: "Silicone Alternatives", desc: "Function-matched replacements grouped by slip, skin feel, and film forming" },
  { label: "Unified Risk Scoring", desc: "Composite safety assessment with confidence-tiered display" },
  { label: "Annex V Compliance", desc: "Permitted preservative verification against EU regulatory annexes" },
  { label: "Regulatory Detail", desc: "Per-ingredient status across all target markets — prohibited, restricted, or permitted" },
]

const stages = [
  {
    number: "01",
    title: "Brief Analysis",
    body: "Your formulation brief is parsed to identify product type, target markets, ingredient constraints, claims, and technical requirements. This drives which intelligence layers activate.",
  },
  {
    number: "02",
    title: "Parallel Intelligence Retrieval",
    body: "The engine queries 15 specialised data layers simultaneously — each returning domain-specific intelligence grounded in primary sources.",
    grid: true,
  },
  {
    number: "03",
    title: "Formulation Generation",
    body: "All 15 layers feed into a single generation call. The AI formulates with full regulatory awareness — it doesn't guess concentrations, it checks limits. It doesn't suggest random preservatives, it recommends systems ranked by your target markets and pH range.",
  },
  {
    number: "04",
    title: "Post-Generation Validation",
    body: "Every output passes a 3-sweep validation: prohibited substance check, concentration compliance check, and restricted substance flag. Trade names and supplier names are stripped at three independent layers — the platform is supplier-agnostic by architecture, not by policy.",
  },
]

export function EngineExplainer() {
  return (
    <section
      id="engine"
      style={{
        background: "#F4F6F9",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="flex flex-col items-center" style={{ marginBottom: 56 }}>
          <SectionLabelCentered>INTELLIGENCE ARCHITECTURE</SectionLabelCentered>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 36,
              fontWeight: 400,
              color: "#0D1B2A",
              textAlign: "center",
              margin: 0,
              maxWidth: 680,
            }}
          >
            How Our Formulation Engine Works
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
              maxWidth: 560,
            }}
          >
            Every formulation is built on 15 independent intelligence layers, not a single AI prompt.
          </p>
        </div>

        {/* Stage flow */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {stages.map((stage, i) => (
            <div key={stage.number}>
              {/* Stage row */}
              <div
                style={{
                  display: "flex",
                  gap: 32,
                  alignItems: "flex-start",
                }}
              >
                {/* Left: number + connector line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                    width: 48,
                  }}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: "#ffffff",
                      border: "1.5px solid #D4A843",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair)",
                        fontSize: 15,
                        color: "#D4A843",
                        fontWeight: 400,
                      }}
                    >
                      {stage.number}
                    </span>
                  </div>
                  {i < stages.length - 1 && (
                    <div
                      style={{
                        width: 1,
                        background: "#D4A843",
                        opacity: 0.3,
                        flex: 1,
                        minHeight: 32,
                        marginTop: 8,
                        marginBottom: 8,
                      }}
                    />
                  )}
                </div>

                {/* Right: content */}
                <div style={{ flex: 1, paddingBottom: i < stages.length - 1 ? 40 : 0, paddingTop: 8 }}>
                  <h3
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 17,
                      fontWeight: 600,
                      color: "#0D1B2A",
                      margin: 0,
                      marginBottom: 8,
                    }}
                  >
                    {stage.title}
                    {stage.number === "02" && (
                      <span
                        style={{
                          marginLeft: 10,
                          fontFamily: "var(--font-jetbrains)",
                          fontSize: 11,
                          color: "#D4A843",
                          fontWeight: 400,
                          verticalAlign: "middle",
                        }}
                      >
                        15 layers
                      </span>
                    )}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6B7280",
                      lineHeight: 1.7,
                      margin: 0,
                      fontFamily: "var(--font-inter)",
                      maxWidth: 760,
                    }}
                  >
                    {stage.body}
                  </p>

                  {/* Intelligence layers grid — stage 02 only */}
                  {stage.grid && (
                    <div
                      className="grid-layers"
                      style={{
                        marginTop: 20,
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 10,
                      }}
                    >
                      {layers.map((layer) => (
                        <div
                          key={layer.label}
                          style={{
                            background: "#ffffff",
                            border: "1px solid #E5E7EB",
                            borderRadius: 8,
                            padding: "12px 14px",
                          }}
                        >
                          <p
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#0D1B2A",
                              margin: 0,
                              marginBottom: 3,
                            }}
                          >
                            {layer.label}
                          </p>
                          <p
                            style={{
                              fontFamily: "var(--font-inter)",
                              fontSize: 12,
                              color: "#9CA3AF",
                              margin: 0,
                              lineHeight: 1.5,
                            }}
                          >
                            {layer.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          style={{
            marginTop: 48,
            borderTop: "1px solid #E5E7EB",
            paddingTop: 24,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-jetbrains)",
              fontSize: 12,
              color: "#6B7280",
              margin: 0,
              lineHeight: 1.8,
            }}
          >
            All 15 intelligence layers query in parallel — results fused in under 6 seconds.{" "}
            <span style={{ color: "#0D1B2A" }}>
              The complete formulation — including regulatory screening across all target markets — generates in under 60 seconds.
            </span>
          </p>
        </div>
      </div>

      {/* Responsive grid override */}
      <style>{`
        @media (max-width: 768px) {
          .grid-layers {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
