"use client"

import { Nav } from "@/components/nav"

// ─── Design tokens ───────────────────────────────────────────────────────────
const BG       = "#0D1B2A"
const GOLD     = "#D4A843"
const BODY     = "#D1D5DB"
const MUTED    = "#9CA3AF"
const DIVIDER  = "rgba(255,255,255,0.08)"
const MAX_W    = 760
const CHART_W  = 880

// ─── Shared components ───────────────────────────────────────────────────────

function Code({ children }: { children: React.ReactNode }) {
  return (
    <code
      style={{
        fontFamily: "var(--font-jetbrains)",
        fontSize: "0.83em",
        background: "rgba(212,168,67,0.1)",
        border: "1px solid rgba(212,168,67,0.18)",
        borderRadius: 3,
        padding: "1px 5px",
        color: GOLD,
      }}
    >
      {children}
    </code>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "var(--font-playfair)",
        fontSize: 26,
        fontWeight: 400,
        color: GOLD,
        margin: "0 0 20px",
        lineHeight: 1.3,
      }}
    >
      {children}
    </h2>
  )
}

function Prose({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p
      style={{
        fontFamily: "var(--font-inter)",
        fontSize: 15,
        color: BODY,
        lineHeight: 1.85,
        margin: "0 0 18px",
        ...style,
      }}
    >
      {children}
    </p>
  )
}

function Hr() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: `1px solid ${DIVIDER}`,
        margin: "0",
      }}
    />
  )
}

// ─── Dark-background radar chart ─────────────────────────────────────────────

function DarkRadarChart({
  scores,
  ariaLabel,
}: {
  scores: number[]
  ariaLabel: string
}) {
  const cx = 260, cy = 225, R = 130
  const degAngles = [-90, -30, 30, 90, 150, 210]
  const rad = degAngles.map((d) => (d * Math.PI) / 180)

  const ptX = (a: number, r: number) => (cx + r * Math.cos(a)).toFixed(1)
  const ptY = (a: number, r: number) => (cy + r * Math.sin(a)).toFixed(1)

  const ring = (r: number) =>
    rad.map((a) => `${ptX(a, r)},${ptY(a, r)}`).join(" ")

  const polyPts = scores
    .map((s, i) => `${ptX(rad[i], (s / 10) * R)},${ptY(rad[i], (s / 10) * R)}`)
    .join(" ")

  const axisLabel = {
    fontSize: 10,
    fontFamily: "var(--font-inter)",
    fill: MUTED,
  }
  const scoreLabel = {
    fontSize: 11,
    fontWeight: "600" as const,
    fontFamily: "var(--font-inter)",
    fill: GOLD,
  }
  const levelLabel = {
    fontSize: 8,
    fontFamily: "var(--font-inter)",
    fill: "rgba(255,255,255,0.22)",
  }

  // Score label positions — hand-tuned per axis direction
  // [0] top: offset y up; [1] top-right: offset x right; [2] bottom-right: offset x right
  // [3] bottom: offset y down; [4] bottom-left: offset x left; [5] top-left: offset x left
  const scoreLabelPos = (i: number, s: number) => {
    const r = (s / 10) * R
    const cosA = Math.cos(rad[i])
    const sinA = Math.sin(rad[i])
    const offset = 14
    const x = cx + r * cosA + offset * cosA
    const y = cy + r * sinA + offset * sinA
    const anchor =
      i === 0 || i === 3
        ? ("middle" as const)
        : i === 1 || i === 2
        ? ("start" as const)
        : ("end" as const)
    return { x, y, anchor }
  }

  return (
    <svg
      viewBox="0 0 520 440"
      width="100%"
      style={{ display: "block", overflow: "visible" }}
      aria-label={ariaLabel}
    >
      {/* Concentric rings */}
      {[26, 52, 78, 104, 130].map((r) => (
        <polygon
          key={r}
          points={ring(r)}
          fill="none"
          stroke="rgba(255,255,255,0.09)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines */}
      {rad.map((a, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={ptX(a, R)}
          y2={ptY(a, R)}
          stroke="rgba(255,255,255,0.11)"
          strokeWidth="1"
        />
      ))}

      {/* Score polygon */}
      <polygon
        points={polyPts}
        fill="rgba(212,168,67,0.2)"
        stroke={GOLD}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Score dots — skip for zero */}
      {scores.map((s, i) =>
        s > 0 ? (
          <circle
            key={i}
            cx={ptX(rad[i], (s / 10) * R)}
            cy={ptY(rad[i], (s / 10) * R)}
            r="3.5"
            fill={GOLD}
          />
        ) : null
      )}

      {/* Score value labels — skip for zero */}
      {scores.map((s, i) => {
        if (s === 0) return null
        const pos = scoreLabelPos(i, s)
        return (
          <text
            key={i}
            x={pos.x}
            y={pos.y}
            textAnchor={pos.anchor}
            dominantBaseline="middle"
            {...scoreLabel}
          >
            {s}
          </text>
        )
      })}

      {/* Ring level labels — along top (Carcinogenicity) axis */}
      <text x="266" y="202" textAnchor="start" {...levelLabel}>2</text>
      <text x="266" y="176" textAnchor="start" {...levelLabel}>4</text>
      <text x="266" y="150" textAnchor="start" {...levelLabel}>6</text>
      <text x="266" y="124" textAnchor="start" {...levelLabel}>8</text>
      <text x="266" y="98"  textAnchor="start" {...levelLabel}>10</text>

      {/* Axis labels */}
      <text x="260" y="77" textAnchor="middle" {...axisLabel}>Carcinogenicity</text>
      <text textAnchor="start" {...axisLabel}>
        <tspan x="392" dy="0" y="147">Reproductive /</tspan>
        <tspan x="392" dy="13">DART</tspan>
      </text>
      <text x="392" y="305" textAnchor="start" {...axisLabel}>Sensitization</text>
      <text textAnchor="middle" {...axisLabel}>
        <tspan x="260" dy="0" y="374">Systemic</tspan>
        <tspan x="260" dy="13">Toxicity</tspan>
      </text>
      <text x="128" y="305" textAnchor="end" {...axisLabel}>Irritation</text>
      <text textAnchor="end" {...axisLabel}>
        <tspan x="128" dy="0" y="147">Endocrine</tspan>
        <tspan x="128" dy="13">Disruption</tspan>
      </text>
    </svg>
  )
}

// ─── Data table ───────────────────────────────────────────────────────────────

const DATA_SOURCES = [
  {
    source: "ECHA CLP Annex VI",
    extract: "H-statement hazard classifications mapped to 6 axes",
    coverage: "3,831 cosmetic-relevant ingredients",
  },
  {
    source: "CIR (Cosmetic Ingredient Review)",
    extract: "Safety assessment conclusions, clinical patch test data",
    coverage: "2,654 assessment reports",
  },
  {
    source: "IARC Monographs",
    extract: "Carcinogen group classifications (1, 2A, 2B, 3)",
    coverage: "811 substances classified",
  },
  {
    source: "NTP Report on Carcinogens",
    extract: "Known and reasonably anticipated carcinogens",
    coverage: "256 substances",
  },
  {
    source: "NACDG Patch Test Data",
    extract: "Sensitization prevalence rates (% positive reactions)",
    coverage: "Top allergens with prevalence data",
  },
  {
    source: "SCCS Scientific Opinions",
    extract: "EU-specific safety evaluations for cosmetic ingredients",
    coverage: "Referenced per ingredient",
  },
  {
    source: "PubMed / PMC",
    extract: "Hazard signals extracted from peer-reviewed literature",
    coverage: "28,800+ papers mined",
  },
  {
    source: "REACH SVHC List",
    extract: "Substances of very high concern (ED, CMR, PBT flags)",
    coverage: "213 SVHC-flagged ingredients",
  },
  {
    source: "COSING (EU)",
    extract: "INCI identity, Annex II–VI regulatory status",
    coverage: "Baseline identity for all EU-listed ingredients",
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MethodologyPage() {
  const sectionStyle: React.CSSProperties = {
    maxWidth: MAX_W,
    margin: "0 auto",
    padding: "72px 24px",
  }

  return (
    <div style={{ background: BG, minHeight: "100vh" }}>
      <Nav
        onSignInClick={() => {}}
        onRegisterClick={() => {}}
        defaultScrolled
      />

      <main style={{ paddingTop: 64 }}>

        {/* ── Section 1: Opening ────────────────────────────────────────── */}
        <section style={sectionStyle}>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 11,
              fontWeight: 500,
              color: GOLD,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "0 0 20px",
            }}
          >
            Methodology
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 38,
              fontWeight: 400,
              color: "#F9FAFB",
              margin: "0 0 12px",
              lineHeight: 1.2,
            }}
          >
            How We Score Ingredient Safety
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 17,
              color: MUTED,
              margin: "0 0 36px",
              lineHeight: 1.6,
            }}
          >
            Our methodology for the 30,000+ ingredient safety assessments powering theformulator.ai
          </p>
          <Prose>
            Every formulation generated on theformulator.ai includes per-ingredient safety scores across six hazard axes. This page explains how those scores are calculated, what data sources feed them, and why we built a proprietary system instead of licensing an existing one.
          </Prose>
        </section>

        <Hr />

        {/* ── Section 2: Why We Built This ─────────────────────────────── */}
        <section style={sectionStyle}>
          <SectionHeading>Why existing safety databases fall short for formulators</SectionHeading>

          <Prose>
            The two most widely referenced ingredient safety databases — EWG Skin Deep and SkinSafe — were designed for consumers, not formulators. This creates fundamental problems when R&D teams try to use them as data inputs for formulation decisions.
          </Prose>

          <Prose>
            EWG Skin Deep scores approximately 11,500 ingredients. Its methodology applies a data gap penalty: ingredients with limited safety studies receive elevated hazard scores. For a formulator working with novel or niche raw materials, this means an absence of negative evidence gets treated as evidence of harm. The scoring algorithm is opaque — weights and methodology are not published. Exposure context (whether an ingredient appears in a leave-on serum at 2% or a rinse-off shampoo at 0.5%) is not factored into the score. And the database is consumer-facing, with framing that tends toward alarmism rather than risk-based assessment.
          </Prose>

          <Prose>
            SkinSafe takes a different approach, focusing on allergen and irritant avoidance based on Mayo Clinic data. While clinically grounded for contact dermatitis, it does not cover the full hazard spectrum that regulatory affairs teams need — carcinogenicity, reproductive toxicity, and endocrine disruption are outside its scope.
          </Prose>

          <Prose>
            Neither system provides per-market regulatory status. A formulator developing for both EU and China needs to know that an ingredient permitted in Europe may be prohibited or restricted under NMPA — this cross-market view does not exist in consumer-facing databases. Neither system updates automatically from primary regulatory sources. Neither system adjusts scores based on product type or exposure duration.
          </Prose>

          <Prose style={{ marginBottom: 8 }}>
            We needed a scoring system that:
          </Prose>
          <ul
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 15,
              color: BODY,
              lineHeight: 1.85,
              margin: "0 0 18px",
              paddingLeft: 24,
            }}
          >
            <li>Draws from the same primary sources regulatory authorities use</li>
            <li>Treats absence of data honestly — as a data gap, not a hazard signal</li>
            <li>Accounts for exposure context (leave-on vs rinse-off)</li>
            <li>Covers the full hazard spectrum across six independent axes</li>
            <li>Provides per-market regulatory intelligence alongside safety scores</li>
            <li>Updates from primary sources automatically, not via periodic manual review</li>
          </ul>
        </section>

        <Hr />

        {/* ── Section 3: The Six Hazard Axes ───────────────────────────── */}
        <section style={sectionStyle}>
          <SectionHeading>Six axes of hazard assessment</SectionHeading>

          <Prose>
            Each ingredient is scored 0–10 on six independent hazard axes. A composite score is calculated, but all six axis scores are always visible to the formulator — because a single number hides critical information.
          </Prose>

          {/* Axis blocks */}
          {[
            {
              n: "1",
              name: "Carcinogenicity",
              measure: "Evidence of cancer-causing potential from chronic or repeated exposure.",
              sources: "IARC Monographs (Group 1, 2A, 2B classifications), ECHA CLP Annex VI (H350, H351 hazard statements), NTP Report on Carcinogens.",
              scoring:
                "IARC Group 1 (known carcinogen) maps to the highest severity range. Group 2A (probable) and 2B (possible) map progressively lower. When multiple authoritative sources provide different classifications for the same ingredient, the highest score is retained — we never downgrade a carcinogenicity assessment. Any ingredient classified as a known carcinogen receives a composite score floor regardless of how clean its other five axes are.",
              hCodes: ["H350", "H351"],
            },
            {
              n: "2",
              name: "Developmental & Reproductive Toxicity (DART)",
              measure: "Risk of harm to fertility, fetal development, or lactation.",
              sources: "ECHA CLP Annex VI (H360, H361, H362 hazard statements), SCCS opinions on specific cosmetic ingredients.",
              scoring:
                "H360 (may damage fertility or the unborn child) maps to the highest severity. H361 (suspected) maps to moderate severity. H362 (may cause harm to breastfed children) is scored based on exposure route relevance to cosmetic use.",
              hCodes: ["H360", "H361", "H362"],
            },
            {
              n: "3",
              name: "Sensitization",
              measure: "Potential to cause allergic contact dermatitis on repeated exposure.",
              sources: "ECHA CLP (H317 — skin sensitizer classification), NACDG (North American Contact Dermatitis Group) patch test prevalence data, CIR safety assessments.",
              scoring:
                "The ECHA H317 classification provides a regulatory baseline. NACDG prevalence rates add clinical weight — a sensitizer that causes positive patch test reactions in 5% of patients is scored higher than one affecting 0.3%. Strong sensitizers receive a composite score floor to prevent other clean axes from masking the risk.",
              hCodes: ["H317"],
            },
            {
              n: "4",
              name: "Systemic Toxicity",
              measure: "Potential for organ damage from single or repeated exposure via dermal, oral, or inhalation routes.",
              sources: "ECHA CLP (H370, H371 for single exposure; H372, H373 for repeated exposure), SCCS safety opinions.",
              scoring:
                '"Causes organ damage" classifications map to high severity. "May cause organ damage" maps lower. Repeated-exposure classifications are scored based on exposure route relevance — an inhalation-only hazard is less relevant for a topical cream than for a spray product.',
              hCodes: ["H370", "H371", "H372", "H373"],
            },
            {
              n: "5",
              name: "Irritation",
              measure: "Potential to cause non-allergic skin or eye irritation on contact.",
              sources: "CIR safety assessments (clinical patch test data), Zein Number dissolution data (for surfactants specifically), ECHA CLP (H315 skin irritation, H319 eye irritation).",
              scoring:
                "For surfactants, the Zein Number provides a quantitative protein denaturation measure that correlates directly with skin irritation potential — this is more predictive than binary classification. CIR clinical data provides human-relevant irritation thresholds. High irritation scores receive a modest composite floor to ensure highly irritating ingredients are flagged even when all other axes are clean.",
              hCodes: ["H315", "H319"],
            },
            {
              n: "6",
              name: "Endocrine Disruption",
              measure: "Potential to interfere with hormonal systems (estrogen, androgen, thyroid, steroidogenesis pathways).",
              sources: "ECHA Endocrine Disruptor assessment list, REACH SVHC (Substances of Very High Concern) identifications with ED concern, EU Community Rolling Action Plan (CoRAP) evaluations.",
              scoring:
                "Confirmed endocrine disruptors on the ECHA list score highest. Ingredients under active assessment score at moderate severity. SVHC identification with endocrine disruption concern adds weight to the score.",
              hCodes: [],
            },
          ].map((axis) => (
            <div
              key={axis.n}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: `1px solid ${DIVIDER}`,
                borderRadius: 10,
                padding: "28px 28px 24px",
                marginBottom: 16,
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 13,
                    color: GOLD,
                    flexShrink: 0,
                  }}
                >
                  0{axis.n}
                </span>
                <h3
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#F9FAFB",
                    margin: 0,
                  }}
                >
                  {axis.name}
                </h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 600, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px" }}>
                    What it measures
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: BODY, margin: 0, lineHeight: 1.65 }}>
                    {axis.measure}
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 600, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px" }}>
                    Primary sources
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: BODY, margin: 0, lineHeight: 1.65 }}>
                    {axis.hCodes.length > 0
                      ? axis.sources.split(/(\b(?:H\d{3})\b)/g).map((part, idx) =>
                          /^H\d{3}$/.test(part)
                            ? <Code key={idx}>{part}</Code>
                            : part
                        )
                      : axis.sources}
                  </p>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 10, fontWeight: 600, color: GOLD, letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 6px" }}>
                    Scoring approach
                  </p>
                  <p style={{ fontFamily: "var(--font-inter)", fontSize: 13, color: BODY, margin: 0, lineHeight: 1.65 }}>
                    {axis.hCodes.length > 0
                      ? axis.scoring.split(/(\b(?:H\d{3})\b)/g).map((part, idx) =>
                          /^H\d{3}$/.test(part)
                            ? <Code key={idx}>{part}</Code>
                            : part
                        )
                      : axis.scoring}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <Hr />

        {/* ── Section 4: Spider Chart Examples ─────────────────────────── */}
        <section
          style={{
            maxWidth: CHART_W,
            margin: "0 auto",
            padding: "72px 24px",
          }}
        >
          <div style={{ maxWidth: MAX_W }}>
            <SectionHeading>Why multi-axis scoring matters</SectionHeading>
            <Prose>
              A single composite score can mask critical safety signals. An ingredient with a composite of 3.0 could have a carcinogenicity score of 8.0 — averaged away by five clean axes. Our system always shows both the composite and the individual axis breakdown.
            </Prose>
          </div>

          <div
            className="chart-pair"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              marginTop: 40,
            }}
          >
            {/* Chart 1: Benzophenone-3 */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: MUTED,
                  textAlign: "center",
                  margin: "0 0 10px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Benzophenone-3 (Oxybenzone)
              </p>
              <DarkRadarChart
                scores={[2, 3, 4, 2, 3, 8]}
                ariaLabel="Radar chart: Benzophenone-3 safety profile — carcinogenicity 2, DART 3, sensitization 4, systemic toxicity 2, irritation 3, endocrine disruption 8"
              />
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  color: MUTED,
                  textAlign: "center",
                  margin: "14px 0 0",
                  lineHeight: 1.7,
                }}
              >
                Oxybenzone — composite score of 3.2 (yellow band) masks an endocrine disruption score of 8.0. A formulator selecting UV filters needs to see this axis breakdown, not just the average.
              </p>
            </div>

            {/* Chart 2: SLS */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 11,
                  fontWeight: 500,
                  color: MUTED,
                  textAlign: "center",
                  margin: "0 0 10px",
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Phenoxyethanol
              </p>
              <DarkRadarChart
                scores={[0, 2, 5, 3, 4, 1]}
                ariaLabel="Radar chart: Phenoxyethanol safety profile — carcinogenicity 0, DART 2, sensitization 5, systemic toxicity 3, irritation 4, endocrine disruption 1"
              />
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 12,
                  color: MUTED,
                  textAlign: "center",
                  margin: "14px 0 0",
                  lineHeight: 1.7,
                }}
              >
                Phenoxyethanol — the most widely used standalone preservative in cosmetics. Composite score of 2.5 (green band), but a sensitization score of 5.0 warrants attention for sensitive-skin formulations. EU restricts to 1.0% maximum — Japan applies different limits by product category.
              </p>
            </div>
          </div>
        </section>

        <Hr />

        {/* ── Section 5: Scoring Principles ────────────────────────────── */}
        <section style={sectionStyle}>
          <SectionHeading>Five principles that guide our scoring</SectionHeading>

          <ol
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {[
              {
                title: "No data gap penalty",
                body: "If an ingredient has no studies addressing a particular hazard axis, that axis scores 0 — not an elevated score. Absence of evidence is not evidence of harm. This is the single largest methodological difference between our system and EWG Skin Deep, which inflates scores for under-studied ingredients. A novel botanical extract with limited toxicology literature should not receive a higher hazard score than a well-studied petrochemical with confirmed clean safety data.",
              },
              {
                title: "Exposure context matters",
                body: "The same ingredient at the same concentration poses different risks in a leave-on facial serum (hours of skin contact) versus a rinse-off shampoo (30 seconds of contact). Our scoring applies an exposure modifier based on product type. This is standard practice in regulatory toxicology — SCCS and CIR both evaluate safety in the context of exposure — but is absent from consumer-facing databases.",
              },
              {
                title: "Source hierarchy",
                body: "Not all safety data is equal. Peer-reviewed regulatory assessments (ECHA CLP, SCCS opinions, CIR final reports) carry more weight than preliminary findings or supplier-provided data. Our system enforces a clear hierarchy: regulatory authority classifications first, then peer-reviewed clinical data, then curated literature. Scores from higher-tier sources are never downgraded by lower-tier data.",
              },
              {
                title: "Confidence tiering",
                body: 'Every safety score carries a confidence level: high (direct ECHA, CIR, or IARC classification), medium (extracted from peer-reviewed literature or CIR group assessments), or low (baseline from COSING registration with no hazard evidence found). Only medium and high confidence scores are displayed to users. Low confidence ingredients show "No hazard data available in our sources" rather than a green score that implies safety has been confirmed.',
              },
              {
                title: "Conservative on carcinogenicity",
                body: "Carcinogenicity is treated asymmetrically. A known carcinogen classified by IARC or NTP cannot have its composite score pulled below a floor by clean scores on other axes. When multiple sources provide different carcinogenicity classifications, the highest (most conservative) score is retained. This reflects the irreversible nature of carcinogenic harm compared to reversible irritation.",
              },
            ].map((p, idx) => (
              <li
                key={p.title}
                style={{
                  display: "flex",
                  gap: 20,
                  marginBottom: 32,
                  paddingBottom: 32,
                  borderBottom: idx < 4 ? `1px solid ${DIVIDER}` : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 22,
                    color: GOLD,
                    opacity: 0.5,
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: 2,
                  }}
                >
                  {idx + 1}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 15,
                      fontWeight: 600,
                      color: "#F9FAFB",
                      margin: "0 0 8px",
                    }}
                  >
                    {p.title}
                  </p>
                  <Prose style={{ margin: 0 }}>{p.body}</Prose>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <Hr />

        {/* ── Section 6: Data Sources ───────────────────────────────────── */}
        <section style={sectionStyle}>
          <SectionHeading>Where our data comes from</SectionHeading>

          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontFamily: "var(--font-inter)",
                fontSize: 13,
              }}
            >
              <thead>
                <tr>
                  {["Source", "What we extract", "Coverage"].map((col) => (
                    <th
                      key={col}
                      style={{
                        textAlign: "left",
                        padding: "10px 16px",
                        background: "rgba(212,168,67,0.1)",
                        color: GOLD,
                        fontWeight: 600,
                        fontSize: 12,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        borderBottom: `1px solid rgba(212,168,67,0.2)`,
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DATA_SOURCES.map((row, idx) => (
                  <tr
                    key={row.source}
                    style={{
                      background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                    }}
                  >
                    <td
                      style={{
                        padding: "12px 16px",
                        color: "#F9FAFB",
                        fontWeight: 500,
                        borderBottom: `1px solid ${DIVIDER}`,
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.source}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        color: BODY,
                        borderBottom: `1px solid ${DIVIDER}`,
                        verticalAlign: "top",
                      }}
                    >
                      {row.extract}
                    </td>
                    <td
                      style={{
                        padding: "12px 16px",
                        color: MUTED,
                        borderBottom: `1px solid ${DIVIDER}`,
                        verticalAlign: "top",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.coverage}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Prose style={{ marginTop: 28 }}>
            All extraction pipelines run automatically. Regulatory source pages across 16 markets are monitored daily for changes. When a regulatory authority updates an ingredient classification or restriction, the change is detected via content hashing, logged as a structured event, and propagated to affected safety scores without manual intervention.
          </Prose>
        </section>

        <Hr />

        {/* ── Section 7: Per-Market Regulatory Intelligence ─────────────── */}
        <section style={sectionStyle}>
          <SectionHeading>Safety scores are only half the picture</SectionHeading>

          <Prose>
            An ingredient can score well on all six hazard axes and still be prohibited in your target market. Formaldehyde releasers are a clear example — permitted with concentration limits in some markets, banned outright in others. Safety scoring without market-specific regulatory status is incomplete.
          </Prose>

          <Prose>
            Every ingredient in our system carries per-market regulatory status across 16 markets: EU, US (FDA), China (NMPA IECIC), Japan (MHLW), South Korea (MFDS), India (BIS IS 4707), Canada, Australia (TGA), Brazil (ANVISA), Thailand, Malaysia (NPRA), Singapore (HSA), Indonesia, Vietnam, Philippines, and ASEAN harmonised standards. Status categories include: permitted, restricted (with maximum concentrations, required labelling, and product-type limitations), prohibited, and not listed.
          </Prose>
        </section>

        <Hr />

        {/* ── Section 8: What We Deliberately Exclude ─────────────────── */}
        <section style={sectionStyle}>
          <SectionHeading>What we deliberately exclude</SectionHeading>

          {[
            {
              lead: "No certification claims.",
              body: "We do not recommend or imply COSMOS, Ecocert, Vegan, Halal, or any other certification status. Certifications are granted to finished products by certifying bodies based on the full supply chain — they cannot be determined from an ingredient's INCI name alone. Any platform that tells you \"this ingredient is COSMOS-approved\" based solely on identity data is misleading you.",
            },
            {
              lead: "No trade names.",
              body: "Every ingredient is identified by its INCI name only. We do not surface supplier trade names, branded ingredient names, or proprietary blend names in any output. This ensures supplier neutrality — our recommendations are based on chemistry, not commercial relationships.",
            },
            {
              lead: "No EWG or SkinSafe data.",
              body: "We do not use, reference, or derive scores from EWG Skin Deep or SkinSafe databases. Our scoring is built entirely from primary regulatory and scientific sources. This is a deliberate architectural decision, not an oversight.",
            },
            {
              lead: "No \"clean beauty\" judgments.",
              body: "We provide hazard data and regulatory status. We do not label ingredients as \"clean,\" \"toxic,\" \"natural,\" or \"synthetic\" — these are marketing categories, not scientific ones. Formulators make their own informed decisions based on the data we provide.",
            },
          ].map((item) => (
            <div key={item.lead} style={{ marginBottom: 20 }}>
              <Prose style={{ margin: 0 }}>
                <strong style={{ color: "#F9FAFB" }}>{item.lead}</strong>{" "}
                {item.body}
              </Prose>
            </div>
          ))}
        </section>

        <Hr />

        {/* ── Section 9: Closing ────────────────────────────────────────── */}
        <section style={{ ...sectionStyle, paddingBottom: 96 }}>
          <Prose style={{ marginBottom: 8 }}>
            This methodology is not static. As regulatory authorities update classifications, as new clinical data enters the peer-reviewed literature, and as our automated pipelines expand coverage, scores are refined. We publish this methodology because transparency is a prerequisite for trust — and trust is what separates a tool formulators rely on from one they dismiss.
          </Prose>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 13,
              color: MUTED,
              fontStyle: "italic",
              margin: 0,
            }}
          >
            Last updated: April 2026
          </p>
        </section>
      </main>

      <style>{`
        @media (max-width: 768px) {
          .chart-pair {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .axis-block-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
