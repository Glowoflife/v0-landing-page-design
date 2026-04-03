"use client"

// ─── Dark panel visuals ─────────────────────────────────────────────────────

function DotTexture() {
  return (
    <svg
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.05,
      }}
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#ffffff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  )
}

function CompliancePanel() {
  const markets = [
    { code: "EU", status: "pass" },
    { code: "US", status: "pass" },
    { code: "UK", status: "pass" },
    { code: "CN", status: "warn" },
    { code: "JP", status: "pass" },
    { code: "IN", status: "pass" },
    { code: "KR", status: "pass" },
    { code: "CA", status: "pass" },
  ]
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <div
        style={{
          fontSize: 10,
          color: "#D4A843",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.08em",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        REGULATORY STATUS — 8 MARKETS
      </div>
      <div
        className="flex flex-wrap"
        style={{ gap: 8 }}
      >
        {markets.map((m) => (
          <div
            key={m.code}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 6,
              padding: "6px 12px",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: m.status === "pass" ? "#22C55E" : "#EAB308",
                flexShrink: 0,
                display: "inline-block",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.8)",
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
              }}
            >
              {m.code}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 20,
          background: "rgba(234,179,8,0.08)",
          border: "1px solid rgba(234,179,8,0.25)",
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
            marginBottom: 4,
          }}
        >
          CN — NMPA 2023 CONFLICT
        </div>
        <p
          style={{
            fontSize: 11,
            color: "#9CA3AF",
            margin: 0,
            lineHeight: 1.5,
            fontFamily: "var(--font-inter)",
          }}
        >
          Oxybenzone prohibited under CN revision. 3 compliant alternatives ranked.
        </p>
      </div>
    </div>
  )
}

function MarketIntelligencePanel() {
  const bars = [
    { label: "Niacinamide + Centella", count: 4218, pct: 100 },
    { label: "Niacinamide + Bakuchiol", count: 3041, pct: 72 },
    { label: "Centella + Ceramide NP", count: 2187, pct: 52 },
    { label: "Bakuchiol + Retinol", count: 891, pct: 21 },
  ]
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <div
        style={{
          fontSize: 10,
          color: "#D4A843",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.08em",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        CO-OCCURRENCE — APAC BRIGHTENING (561,000 products)
      </div>
      <div className="flex flex-col" style={{ gap: 12 }}>
        {bars.map((b) => (
          <div key={b.label}>
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: 4 }}
            >
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.7)",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {b.label}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: "#D4A843",
                  fontFamily: "var(--font-jetbrains)",
                  fontWeight: 600,
                }}
              >
                {b.count.toLocaleString()}
              </span>
            </div>
            <div
              style={{
                height: 5,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${b.pct}%`,
                  height: "100%",
                  background: "#D4A843",
                  borderRadius: 3,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function INCIPanel() {
  const rows = [
    { inci: "Aqua", phase: "A", conc: "q.s.", conf: 98 },
    { inci: "Glycerin", phase: "A", conc: "5.00%", conf: 97 },
    { inci: "Niacinamide", phase: "A", conc: "4.00%", conf: 94 },
    { inci: "Centella Asiatica Extract", phase: "B", conc: "2.00%", conf: 88 },
    { inci: "Bakuchiol", phase: "B", conc: "0.50%", conf: 85 },
    { inci: "Phenoxyethanol, Ethylhexylglycerin", phase: "C", conc: "0.80%", conf: 91 },
  ]
  const phaseColor: Record<string, string> = { A: "#3B82F6", B: "#22C55E", C: "#D4A843" }
  return (
    <div style={{ width: "100%", maxWidth: 380 }}>
      <div
        style={{
          fontSize: 10,
          color: "#D4A843",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.08em",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        INCI OUTPUT — VARIANT 1 · INCI-ONLY
      </div>
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
          {rows.map((row) => (
            <tr key={row.inci} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
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
                      background: "rgba(255,255,255,0.08)",
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
  )
}

function SupplierAgnosticPanel() {
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <div
        style={{
          fontSize: 10,
          color: "#D4A843",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.08em",
          marginBottom: 20,
          fontWeight: 600,
        }}
      >
        INGREDIENT RANKING METHODOLOGY
      </div>
      {/* Sources → theformulator.ai → formulator diagram */}
      <div className="flex flex-col items-center" style={{ gap: 0 }}>
        {/* Source pills */}
        <div className="flex flex-wrap justify-center" style={{ gap: 6, marginBottom: 10 }}>
          {["Market frequency", "Stability data", "Regulatory status", "CIR safety"].map((s) => (
            <span
              key={s}
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 4,
                padding: "4px 10px",
                fontSize: 10,
                color: "rgba(255,255,255,0.6)",
                fontFamily: "var(--font-inter)",
              }}
            >
              {s}
            </span>
          ))}
        </div>
        {/* Arrow down */}
        <svg width="2" height="24" style={{ display: "block" }}>
          <line x1="1" y1="0" x2="1" y2="24" stroke="#D4A843" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
        {/* Central node */}
        <div
          style={{
            border: "1px solid #D4A843",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 12,
            color: "#D4A843",
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            background: "rgba(212,168,67,0.08)",
            margin: "4px 0",
          }}
        >
          theformulator.ai
        </div>
        {/* Arrow down */}
        <svg width="2" height="24" style={{ display: "block" }}>
          <line x1="1" y1="0" x2="1" y2="24" stroke="#D4A843" strokeWidth="1.5" strokeDasharray="3 2" />
        </svg>
        {/* Output */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 11,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "var(--font-inter)",
            background: "rgba(255,255,255,0.04)",
            marginTop: 4,
          }}
        >
          Ranked formulation output
        </div>
      </div>
      {/* No supplier bias annotation */}
      <div
        style={{
          marginTop: 16,
          textAlign: "center",
          fontSize: 11,
          color: "#D4A843",
          fontStyle: "italic",
          fontFamily: "var(--font-inter)",
        }}
      >
        No supplier pays to influence output
      </div>
    </div>
  )
}

function SafetyPanel() {
  const ingredients = [
    { name: "Niacinamide", tier: "SAFE", score: 95, color: "#22C55E" },
    { name: "Bakuchiol", tier: "SAFE", score: 88, color: "#22C55E" },
    { name: "Oxybenzone", tier: "RESTRICTED", score: 42, color: "#EF4444" },
    { name: "Phenoxyethanol", tier: "CONDITIONALLY SAFE", score: 74, color: "#EAB308" },
  ]
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <div
        style={{
          fontSize: 10,
          color: "#D4A843",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.08em",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        SAFETY INTELLIGENCE — CIR CROSS-REFERENCE
      </div>
      <div className="flex flex-col" style={{ gap: 8 }}>
        {ingredients.map((ing) => (
          <div
            key={ing.name}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 6,
              padding: "10px 12px",
            }}
          >
            <div className="flex items-center justify-between" style={{ marginBottom: 6 }}>
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: "var(--font-jetbrains)",
                }}
              >
                {ing.name}
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: ing.color,
                  background: `${ing.color}18`,
                  border: `1px solid ${ing.color}33`,
                  borderRadius: 3,
                  padding: "2px 6px",
                  fontFamily: "var(--font-inter)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}
              >
                {ing.tier}
              </span>
            </div>
            <div
              style={{
                height: 4,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${ing.score}%`,
                  height: "100%",
                  background: ing.color,
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FormulationSciencePanel() {
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <div
        style={{
          fontSize: 10,
          color: "#D4A843",
          fontFamily: "var(--font-inter)",
          letterSpacing: "0.08em",
          marginBottom: 16,
          fontWeight: 600,
        }}
      >
        FAILURE DIAGNOSIS — RANKED BY PROBABILITY
      </div>
      <div className="flex flex-col" style={{ gap: 8 }}>
        <div
          style={{
            background: "rgba(239,68,68,0.06)",
            border: "1px solid rgba(239,68,68,0.3)",
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <div className="flex items-center justify-between" style={{ marginBottom: 4 }}>
            <span
              style={{ fontSize: 10, color: "#EF4444", fontWeight: 700, fontFamily: "var(--font-inter)" }}
            >
              ROOT CAUSE #1
            </span>
            <span
              style={{
                fontSize: 9,
                color: "#EF4444",
                background: "rgba(239,68,68,0.12)",
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
          <p style={{ fontSize: 11, color: "#D1D5DB", margin: 0, lineHeight: 1.5, fontFamily: "var(--font-inter)" }}>
            Insufficient HLB balance for O/W emulsion at 40°C.
          </p>
          <div
            style={{
              marginTop: 6,
              background: "rgba(34,197,94,0.06)",
              border: "1px solid rgba(34,197,94,0.2)",
              borderRadius: 4,
              padding: "6px 8px",
            }}
          >
            <span style={{ fontSize: 9, color: "#22C55E", fontWeight: 600, fontFamily: "var(--font-inter)" }}>
              FIX
            </span>
            <p style={{ fontSize: 10, color: "#9CA3AF", margin: "3px 0 0", lineHeight: 1.4, fontFamily: "var(--font-inter)" }}>
              Increase Cetearyl Alcohol to 2.5%. Cross-ref: 412 stable O/W systems.
            </p>
          </div>
        </div>
        <div
          style={{
            background: "rgba(234,179,8,0.04)",
            border: "1px solid rgba(234,179,8,0.2)",
            borderRadius: 6,
            padding: "10px 12px",
          }}
        >
          <div className="flex items-center justify-between">
            <span style={{ fontSize: 10, color: "#EAB308", fontWeight: 700, fontFamily: "var(--font-inter)" }}>
              ROOT CAUSE #2
            </span>
            <span
              style={{
                fontSize: 9,
                color: "#EAB308",
                background: "rgba(234,179,8,0.1)",
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
          <p style={{ fontSize: 11, color: "#9CA3AF", margin: "4px 0 0", fontFamily: "var(--font-inter)", lineHeight: 1.5 }}>
            pH drift above 6.2 destabilising carbomer network.
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Dark visual panel wrapper ───────────────────────────────────────────────

function DarkPanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "relative",
        background: "#0D1B2A",
        borderRadius: 16,
        padding: 40,
        minHeight: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <DotTexture />
      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        {children}
      </div>
    </div>
  )
}

// ─── Feature row ─────────────────────────────────────────────────────────────

function AlternatingRow({
  tag,
  title,
  body,
  panel,
  reverse = false,
}: {
  tag: string
  title: string
  body: string
  panel: React.ReactNode
  reverse?: boolean
}) {
  return (
    <div
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
      style={{ gap: 80, paddingTop: 80, paddingBottom: 80, borderTop: "1px solid #F3F4F6" }}
    >
      {/* Text column */}
      <div style={{ flex: "0 0 50%", maxWidth: "50%" }} className="w-full md:w-auto">
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            color: "#D4A843",
            border: "1px solid #D4A843",
            borderRadius: 20,
            padding: "4px 12px",
            letterSpacing: "0.08em",
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {tag}
        </span>
        <h3
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 28,
            fontWeight: 700,
            color: "#0D1B2A",
            margin: "0 0 12px",
            lineHeight: 1.3,
          }}
          className="text-balance"
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 15,
            color: "#4B5563",
            lineHeight: 1.7,
            maxWidth: 480,
            fontFamily: "var(--font-inter)",
            margin: 0,
          }}
        >
          {body}
        </p>
      </div>

      {/* Visual column */}
      <div style={{ flex: 1 }} className="w-full md:w-auto">
        <DarkPanel>{panel}</DarkPanel>
      </div>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function FeatureShowcase() {
  return (
    <section
      id="features"
      style={{ background: "#FAFAF7", padding: "0 24px 80px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Section header */}
        <div
          className="flex flex-col items-center"
          style={{ paddingTop: 100, marginBottom: 0 }}
        >
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 36,
              fontWeight: 700,
              color: "#0D1B2A",
              textAlign: "center",
              margin: "0 0 16px",
              lineHeight: 1.25,
            }}
            className="text-balance"
          >
            Built for how formulators actually work
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6B7280",
              textAlign: "center",
              maxWidth: 560,
              margin: 0,
              lineHeight: 1.7,
              fontFamily: "var(--font-inter)",
            }}
          >
            Every feature is grounded in real regulatory data, real market
            intelligence, and real formulation science.
          </p>
        </div>

        {/* Row 1 — Text LEFT, Visual RIGHT */}
        <AlternatingRow
          tag="Compliance"
          title="The platform flags regulatory conflicts before you generate."
          body="As you build your brief, real-time intelligence surfaces market-specific tensions. EU/China conflicts, Ecocert constraints, prohibited ingredient flags — all resolved before a single INCI is committed."
          panel={<CompliancePanel />}
        />

        {/* Row 2 — Visual LEFT, Text RIGHT */}
        <AlternatingRow
          tag="Market Intelligence"
          title="Know what is already working in 561,000 products."
          body="Co-occurrence analysis across 561,000 marketed formulations surfaces ingredient combinations that correlate with consumer acceptance in your target markets — giving every output a market-intelligence foundation."
          panel={<MarketIntelligencePanel />}
          reverse
        />

        {/* Row 3 — Text LEFT, Visual RIGHT */}
        <AlternatingRow
          tag="Formulation"
          title="Phase-structured. Regulatory-validated. Ready for the bench."
          body="INCI-only output — no brand names, no supplier bias. Phase A through C clearly structured with critical control points flagged and 3-dimensional confidence scores across stability, performance, and regulatory safety."
          panel={<INCIPanel />}
        />

        {/* Confidence scores explainer */}
        <p
          style={{
            fontSize: 12,
            color: "#9CA3AF",
            fontStyle: "italic",
            maxWidth: 560,
            lineHeight: 1.7,
            fontFamily: "var(--font-inter)",
            textAlign: "center",
            margin: "-40px auto 40px",
          }}
        >
          Confidence indicators are generated using internal evaluation logic across
          ingredient compatibility, known formulation patterns, regulatory constraints,
          and category fit. They support expert review — they do not replace laboratory
          validation or formal safety assessment.
        </p>

        {/* Row 4 — Visual LEFT, Text RIGHT */}
        <AlternatingRow
          tag="Platform Integrity"
          title="No supplier relationships. No commercial influence."
          body="Every ingredient recommendation is ranked by performance data, market frequency, and regulatory status. No supplier pays to influence your formulation output. Platform neutrality is architectural."
          panel={<SupplierAgnosticPanel />}
          reverse
        />

        {/* Row 5 — Text LEFT, Visual RIGHT */}
        <AlternatingRow
          tag="Safety"
          title="2,400+ CIR safety assessments integrated into every output."
          body="Every ingredient is cross-referenced against the CIR compendium, SCCS opinions, and ECHA dossiers. Safety tiers are computed per-ingredient and flagged in the output before you reach the lab."
          panel={<SafetyPanel />}
        />

        {/* Row 6 — Visual LEFT, Text RIGHT */}
        <AlternatingRow
          tag="Knowledge Base"
          title="Paste a failing formula. Get a ranked diagnosis."
          body="Describe an emulsion breaking at 40°C. Get three ranked root causes with probability scores, cross-referenced against 2,573 similar systems in the knowledge base. Fix recommendations included."
          panel={<FormulationSciencePanel />}
          reverse
        />

      </div>
    </section>
  )
}
