import { SectionLabelCentered } from "@/components/section-label"
import { SectionLabel } from "@/components/section-label"
import { Shield } from "lucide-react"

function FeatureRow({
  label,
  title,
  body,
  bullets,
  mockup,
  reverse = false,
}: {
  label: string
  title: string
  body: string
  bullets: string[]
  mockup: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
      style={{ gap: 60, marginBottom: 80 }}
    >
      {/* Text */}
      <div style={{ flex: "0 0 45%", maxWidth: "45%" }} className="w-full md:w-auto">
        <SectionLabel>{label}</SectionLabel>
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 28,
            fontWeight: 400,
            color: "#0D1B2A",
            margin: "0 0 16px",
            lineHeight: 1.3,
          }}
          className="text-balance"
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "#374151",
            lineHeight: 1.8,
            maxWidth: 440,
            fontFamily: "var(--font-inter)",
            margin: 0,
          }}
        >
          {body}
        </p>
        <ul
          className="flex flex-col"
          style={{ marginTop: 20, gap: 10, listStyle: "none", padding: 0 }}
        >
          {bullets.map((b) => (
            <li
              key={b}
              style={{
                fontSize: 14,
                color: "#374151",
                fontFamily: "var(--font-inter)",
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
              }}
            >
              <span style={{ color: "#D4A843", flexShrink: 0 }}>›</span>
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Mockup */}
      <div style={{ flex: 1 }} className="w-full md:w-auto">
        {mockup}
      </div>
    </div>
  )
}

function BriefIntelligenceMockup() {
  return (
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        overflow: "hidden",
        background: "#0A1628",
      }}
    >
      <div
        style={{
          padding: "8px 12px",
          background: "#0D1B2A",
          borderBottom: "1px solid #1B3A5C",
          fontSize: 10,
          color: "#6B7280",
          fontFamily: "var(--font-inter)",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ color: "#D4A843", fontWeight: 600 }}>LIVE INTELLIGENCE</span>
        <span style={{ marginLeft: "auto", color: "#4B5563" }}>Brief · Step 3 of 5</span>
      </div>
      <div className="flex flex-col" style={{ gap: 8, padding: 14 }}>
        <div
          style={{
            background: "#0D1B2A",
            border: "1px solid rgba(234,179,8,0.4)",
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#EAB308",
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#EAB308",
                display: "inline-block",
              }}
            />
            EU–China Market Conflict Detected
          </div>
          <p
            style={{
              fontSize: 10,
              color: "#9CA3AF",
              margin: "4px 0 0",
              lineHeight: 1.5,
              fontFamily: "var(--font-inter)",
            }}
          >
            Oxybenzone permitted in EU (max 6%) is prohibited under NMPA CN 2023 revision. 3 alternative UV filters available.
          </p>
        </div>
        <div
          style={{
            background: "#0D1B2A",
            border: "1px solid rgba(34,197,94,0.3)",
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#22C55E",
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#22C55E",
                display: "inline-block",
              }}
            />
            Strong Asia-Pacific Signal
          </div>
          <p
            style={{
              fontSize: 10,
              color: "#9CA3AF",
              margin: "4px 0 0",
              lineHeight: 1.5,
              fontFamily: "var(--font-inter)",
            }}
          >
            Niacinamide + Centella Asiatica co-occurs in 4,218 marketed APAC products. High positive correlation with consumer acceptance.
          </p>
        </div>
        <div
          style={{
            background: "#0D1B2A",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <div
            style={{
              fontSize: 10,
              color: "#3B82F6",
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#3B82F6",
                display: "inline-block",
              }}
            />
            Brief Status: 63% complete
          </div>
          <p
            style={{
              fontSize: 10,
              color: "#9CA3AF",
              margin: "4px 0 0",
              lineHeight: 1.5,
              fontFamily: "var(--font-inter)",
            }}
          >
            Preservative system and target pH not yet specified. Required before generation.
          </p>
        </div>
      </div>
    </div>
  )
}

function INCIMockup() {
  const ingredients = [
    { inci: "Aqua", phase: "A", conc: "q.s.", conf: 98 },
    { inci: "Glycerin", phase: "A", conc: "5.00%", conf: 97 },
    { inci: "Niacinamide", phase: "A", conc: "4.00%", conf: 94 },
    { inci: "Centella Asiatica Extract", phase: "B", conc: "2.00%", conf: 88 },
    { inci: "Bakuchiol", phase: "B", conc: "0.50%", conf: 85 },
    { inci: "Phenoxyethanol, Ethylhexylglycerin", phase: "C", conc: "0.80%", conf: 91 },
  ]
  const phaseColor: Record<string, string> = {
    A: "#3B82F6",
    B: "#22C55E",
    C: "#D4A843",
  }

  return (
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        overflow: "hidden",
        background: "#0A1628",
      }}
    >
      <div
        style={{
          padding: "8px 14px",
          background: "#0D1B2A",
          borderBottom: "1px solid #1B3A5C",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#D4A843",
            fontWeight: 600,
            fontFamily: "var(--font-inter)",
          }}
        >
          INCI FORMULATION — VARIANT 1
        </span>
        <span
          style={{
            fontSize: 9,
            color: "#4B5563",
            fontFamily: "var(--font-inter)",
          }}
        >
          INCI-only · No brand names
        </span>
      </div>
      <div style={{ padding: 14 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {["INCI Name", "Ph.", "Conc.", "Conf."].map((h) => (
                <th
                  key={h}
                  style={{
                    fontSize: 9,
                    color: "#4B5563",
                    textAlign: "left",
                    paddingBottom: 6,
                    fontFamily: "var(--font-inter)",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ingredients.map((row) => (
              <tr key={row.inci} style={{ borderTop: "1px solid #1B3A5C" }}>
                <td
                  style={{
                    padding: "6px 0",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 10,
                    color: "#D1D5DB",
                  }}
                >
                  {row.inci}
                </td>
                <td style={{ padding: "6px 8px" }}>
                  <span
                    style={{
                      fontSize: 9,
                      color: phaseColor[row.phase],
                      background: `${phaseColor[row.phase]}1A`,
                      border: `1px solid ${phaseColor[row.phase]}33`,
                      borderRadius: 3,
                      padding: "1px 5px",
                      fontFamily: "var(--font-inter)",
                      fontWeight: 600,
                    }}
                  >
                    {row.phase}
                  </span>
                </td>
                <td
                  style={{
                    padding: "6px 8px",
                    fontFamily: "var(--font-jetbrains)",
                    fontSize: 10,
                    color: "#9CA3AF",
                  }}
                >
                  {row.conc}
                </td>
                <td style={{ padding: "6px 0", width: 70 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                    <div
                      style={{
                        flex: 1,
                        height: 4,
                        background: "#1B3A5C",
                        borderRadius: 2,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${row.conf}%`,
                          height: "100%",
                          background: "#D4A843",
                          borderRadius: 2,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: 9,
                        color: "#6B7280",
                        fontFamily: "var(--font-inter)",
                        flexShrink: 0,
                      }}
                    >
                      {row.conf}%
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function FormulationPartnerMockup() {
  return (
    <div
      style={{
        border: "1px solid #E5E7EB",
        borderRadius: 8,
        overflow: "hidden",
        background: "#0A1628",
      }}
    >
      <div
        style={{
          padding: "8px 14px",
          background: "#0D1B2A",
          borderBottom: "1px solid #1B3A5C",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            fontSize: 10,
            color: "#D4A843",
            fontWeight: 600,
            fontFamily: "var(--font-inter)",
          }}
        >
          FORMULATION PARTNER — DIAGNOSIS
        </span>
      </div>
      <div className="flex flex-col" style={{ gap: 8, padding: 14 }}>
        <div
          style={{
            background: "#0D1B2A",
            borderRadius: 6,
            padding: "10px 12px",
            border: "1px solid rgba(239,68,68,0.35)",
          }}
        >
          <div
            className="flex items-center justify-between"
            style={{ marginBottom: 6 }}
          >
            <span
              style={{
                fontSize: 10,
                color: "#EF4444",
                fontWeight: 700,
                fontFamily: "var(--font-inter)",
              }}
            >
              ROOT CAUSE #1
            </span>
            <span
              style={{
                fontSize: 9,
                background: "rgba(239,68,68,0.12)",
                color: "#EF4444",
                border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: 3,
                padding: "2px 6px",
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
              }}
            >
              HIGH — 78%
            </span>
          </div>
          <p
            style={{
              fontSize: 11,
              color: "#D1D5DB",
              margin: "0 0 6px",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.5,
            }}
          >
            Insufficient HLB balance for O/W emulsion at 40°C. Emulsifier ratio indicates phase inversion above 37°C.
          </p>
          <div
            style={{
              background: "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 4,
              padding: "6px 8px",
            }}
          >
            <span
              style={{
                fontSize: 9,
                color: "#22C55E",
                fontWeight: 600,
                fontFamily: "var(--font-inter)",
              }}
            >
              FIX RECOMMENDATION
            </span>
            <p
              style={{
                fontSize: 10,
                color: "#9CA3AF",
                margin: "3px 0 0",
                lineHeight: 1.4,
                fontFamily: "var(--font-inter)",
              }}
            >
              Increase Cetearyl Alcohol to 2.5% + add co-emulsifier. Cross-referenced against 412 stable O/W systems at 40°C.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "#0D1B2A",
            borderRadius: 6,
            padding: "10px 12px",
            border: "1px solid rgba(234,179,8,0.25)",
          }}
        >
          <div className="flex items-center justify-between">
            <span
              style={{
                fontSize: 10,
                color: "#EAB308",
                fontWeight: 700,
                fontFamily: "var(--font-inter)",
              }}
            >
              ROOT CAUSE #2
            </span>
            <span
              style={{
                fontSize: 9,
                background: "rgba(234,179,8,0.1)",
                color: "#EAB308",
                border: "1px solid rgba(234,179,8,0.25)",
                borderRadius: 3,
                padding: "2px 6px",
                fontFamily: "var(--font-inter)",
                fontWeight: 700,
              }}
            >
              MED — 54%
            </span>
          </div>
          <p
            style={{
              fontSize: 11,
              color: "#9CA3AF",
              margin: "4px 0 0",
              fontFamily: "var(--font-inter)",
              lineHeight: 1.5,
            }}
          >
            pH drift above 6.2 destabilising carbomer network. Check pH at 40°C in stability chamber.
          </p>
        </div>
      </div>
    </div>
  )
}

export function FeatureShowcase() {
  return (
    <section
      id="features"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="flex flex-col items-center" style={{ marginBottom: 64 }}>
          <SectionLabelCentered>WHAT IT DOES</SectionLabelCentered>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 36,
              fontWeight: 400,
              color: "#0D1B2A",
              textAlign: "center",
              margin: 0,
            }}
            className="text-balance"
          >
            A platform that thinks alongside you.
          </h2>
        </div>

        <FeatureRow
          label="BRIEF INTELLIGENCE"
          title="The platform flags problems before you generate."
          body="As you build your brief, the Live Intelligence panel surfaces tensions in real time. Ecocert targets, China NMPA conflicts, market co-occurrence patterns from 550,000 products — all flagged before a single ingredient is committed."
          bullets={[
            "Real-time regulatory conflict detection",
            "Market corpus intelligence as you type",
            "Certification constraint guidance",
          ]}
          mockup={<BriefIntelligenceMockup />}
        />

        <FeatureRow
          label="INCI FORMULATION OUTPUT"
          title="Phase-structured. Regulatory-validated. Ready for the bench."
          body="The format hasn't changed in decades — INCI-only, no brand names, no supplier bias. Phase-structured with critical control points flagged and confidence scores across stability, performance, and regulatory safety for every target market."
          bullets={[
            "INCI-only output — zero supplier bias",
            "Phase-structured processing protocol",
            "3-dimensional confidence scoring",
          ]}
          mockup={<INCIMockup />}
          reverse
        />

        <FeatureRow
          label="FORMULATION PARTNER"
          title="Paste a failing formula. Get a ranked diagnosis."
          body="Describe an emulsion breaking at 40°C. Get three ranked root causes with probability scores, cross-referenced against 2,573 similar systems in the knowledge base. Fix recommendations included."
          bullets={[
            "Failure mode diagnosis ranked by probability",
            "Substitution engine for discontinued ingredients",
            "Stability risk register before physical testing",
          ]}
          mockup={<FormulationPartnerMockup />}
        />

        {/* Supplier Agnostic feature card */}
        <div
          style={{
            border: "1px solid #E5E7EB",
            borderRadius: 8,
            padding: "32px 40px",
            background: "#F8F6F1",
            display: "flex",
            alignItems: "flex-start",
            gap: 24,
            marginBottom: 80,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "#0D1B2A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Shield size={20} color="#D4A843" strokeWidth={1.5} />
          </div>
          <div>
            <SectionLabel>PLATFORM INTEGRITY</SectionLabel>
            <h3
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 24,
                fontWeight: 400,
                color: "#0D1B2A",
                margin: "0 0 12px",
                lineHeight: 1.3,
              }}
            >
              No supplier relationships
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#374151",
                lineHeight: 1.8,
                maxWidth: 640,
                fontFamily: "var(--font-inter)",
                margin: 0,
              }}
            >
              Every ingredient recommendation is ranked by performance data,
              market frequency, and regulatory status — not commercial
              agreements. No supplier pays to influence your formulation output.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
