import { SectionLabelCentered } from "@/components/section-label"

const axes = [
  {
    number: "01",
    name: "Carcinogenicity",
    measure: "Potential to cause or promote cancer",
    sources: "IARC Monograph classifications · ECHA CLP Annex VI (H350/H351) · NTP Report on Carcinogens",
  },
  {
    number: "02",
    name: "Developmental & Reproductive Toxicity",
    measure: "Risk to fertility, fetal development, or lactation",
    sources: "ECHA CLP Annex VI (H360/H361) · SCCS scientific opinions",
  },
  {
    number: "03",
    name: "Sensitization",
    measure: "Potential to cause allergic contact dermatitis or respiratory sensitization",
    sources: "ECHA CLP (H317/H334) · CIR safety assessments · NACDG clinical patch test data (50,000+ patients)",
  },
  {
    number: "04",
    name: "Systemic Toxicity",
    measure: "Risk of organ damage from repeated or single exposure",
    sources: "ECHA CLP Annex VI (H370/H372) · CIR assessments",
  },
  {
    number: "05",
    name: "Irritation",
    measure: "Potential to cause skin or eye irritation on contact",
    sources: "CIR safety assessments · SCCS opinions · clinical Zein Number data for surfactants",
  },
  {
    number: "06",
    name: "Endocrine Disruption",
    measure: "Potential to interfere with hormonal systems",
    sources: "ECHA Endocrine Disruptor assessment list · EU SVHC identification",
  },
]

const principles = [
  {
    title: "No data gap penalty",
    body: "If an ingredient has no evidence of harm on a given axis, it scores zero — not a penalty score. This is the opposite of consumer databases like EWG Skin Deep, which inflate scores for under-studied ingredients.",
  },
  {
    title: "Exposure context matters",
    body: "Leave-on products carry different risk profiles than rinse-off products. Our scoring applies an exposure modifier so a preservative in a face cream is assessed differently than the same preservative in a shampoo.",
  },
  {
    title: "Source hierarchy",
    body: "Not all data is equal. We weight peer-reviewed regulatory assessments (ECHA, SCCS, CIR) above supplier documentation, and supplier data above general literature. Every score is traceable to its primary source.",
  },
  {
    title: "Confidence tiering",
    body: "Each ingredient score carries a confidence level — high, medium, or low — based on the quality and directness of the underlying evidence. Only medium and high confidence scores are shown to users. Low confidence data is transparently labelled as 'No hazard data available' rather than displayed as a misleadingly green score.",
  },
  {
    title: "Conservative on carcinogenicity",
    body: "When multiple authoritative sources provide scores for the same ingredient, we keep the highest (most conservative) score. If IARC classifies a substance as a Group 1 carcinogen and NTP data suggests lower risk, the IARC classification governs.",
  },
]

export function SafetyMethodology() {
  return (
    <section
      id="safety"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div className="flex flex-col items-center" style={{ marginBottom: 48 }}>
          <SectionLabelCentered>SAFETY METHODOLOGY</SectionLabelCentered>
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
            Ingredient Safety Methodology
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
            Transparent, source-attributed, no data gap penalties.
          </p>
        </div>

        {/* Intro paragraph */}
        <p
          style={{
            fontFamily: "var(--font-inter)",
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.8,
            maxWidth: 740,
            margin: "0 auto 56px",
            textAlign: "center",
          }}
        >
          Every ingredient in our knowledge base is scored on six independent hazard axes, each derived from authoritative primary sources. Unlike consumer databases that penalise ingredients simply for having less data, our system scores zero when no evidence exists.{" "}
          <span style={{ color: "#0D1B2A", fontWeight: 500 }}>
            Absence of data is not a hazard signal.
          </span>
        </p>

        {/* Six axes grid */}
        <div
          className="axes-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {axes.map((axis) => (
            <div
              key={axis.number}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: 10,
                padding: "24px 24px 20px",
                background: "#ffffff",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 13,
                    color: "#D4A843",
                    fontWeight: 400,
                    flexShrink: 0,
                  }}
                >
                  {axis.number}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    fontWeight: 600,
                    color: "#0D1B2A",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {axis.name}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  color: "#4B5563",
                  margin: 0,
                  lineHeight: 1.6,
                  flex: 1,
                }}
              >
                {axis.measure}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-jetbrains)",
                  fontSize: 11,
                  color: "#9CA3AF",
                  margin: "12px 0 0",
                  lineHeight: 1.7,
                }}
              >
                {axis.sources}
              </p>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <div
          style={{
            background: "#F8F6F1",
            borderRadius: 12,
            padding: "40px 40px 36px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              fontWeight: 600,
              color: "#D4A843",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 0 28px",
            }}
          >
            Key Principles
          </h3>
          <div
            className="principles-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px 40px",
            }}
          >
            {principles.map((p) => (
              <div key={p.title}>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#0D1B2A",
                    margin: "0 0 6px",
                  }}
                >
                  {p.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    color: "#6B7280",
                    margin: 0,
                    lineHeight: 1.7,
                  }}
                >
                  {p.body}
                </p>
              </div>
            ))}
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
          Full methodology documentation including all primary data sources, update frequency, and scoring validation will be published at{" "}
          <span style={{ fontFamily: "var(--font-jetbrains)", color: "#6B7280" }}>/methodology</span>{" "}
          before launch.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .axes-grid {
            grid-template-columns: 1fr !important;
          }
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
