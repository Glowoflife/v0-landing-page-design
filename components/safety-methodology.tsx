import Link from "next/link"
import { SectionLabelCentered } from "@/components/section-label"

const AXES = [
  { label: "Carcinogenicity", sources: "IARC Monographs, ECHA CLP" },
  { label: "DART", sources: "ECHA CLP reproductive toxicity classifications" },
  { label: "Sensitization", sources: "ECHA CLP, NACDG patch test data" },
  { label: "Systemic Toxicity", sources: "ECHA CLP, SCCS opinions" },
  { label: "Irritation", sources: "CIR assessments, Zein Number data" },
  { label: "Endocrine Disruption", sources: "ECHA ED assessments, REACH SVHC" },
]

const PRINCIPLES = [
  {
    title: "No data gap penalty",
    body: "absence of evidence ≠ evidence of harm",
  },
  {
    title: "Exposure context matters",
    body: "leave-on and rinse-off scored differently",
  },
  {
    title: "Source hierarchy enforced",
    body: "ECHA/CIR/IARC data always trumps lower-tier sources",
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
        <div className="flex flex-col items-center" style={{ marginBottom: 56 }}>
          <SectionLabelCentered>SAFETY METHODOLOGY</SectionLabelCentered>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 34,
              fontWeight: 400,
              color: "#0D1B2A",
              textAlign: "center",
              margin: 0,
              lineHeight: 1.25,
            }}
          >
            Ingredient Safety — Built on Primary Sources, Not Fear
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 16,
              color: "#6B7280",
              textAlign: "center",
              marginTop: 14,
              marginBottom: 0,
              lineHeight: 1.65,
              maxWidth: 620,
            }}
          >
            Every ingredient scored across six hazard axes using data from regulatory authorities — not consumer databases.
          </p>
        </div>

        {/* Two-column layout */}
        <div
          className="safety-cols"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
            marginBottom: 48,
          }}
        >
          {/* Left column */}
          <div>
            {/* Compact axes list */}
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 36px",
                padding: 0,
              }}
            >
              {AXES.map((axis) => (
                <li
                  key={axis.label}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 0,
                    padding: "9px 0",
                    borderBottom: "1px solid #F3F4F6",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#0D1B2A",
                      minWidth: 168,
                      flexShrink: 0,
                    }}
                  >
                    {axis.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: 12,
                      color: "#9CA3AF",
                    }}
                  >
                    — {axis.sources}
                  </span>
                </li>
              ))}
            </ul>

            {/* 3 key principles */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {PRINCIPLES.map((p) => (
                <li
                  key={p.title}
                  style={{
                    padding: "6px 0",
                    fontFamily: "var(--font-inter)",
                    fontSize: 13,
                    lineHeight: 1.65,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#0D1B2A" }}>
                    {p.title}
                  </span>
                  <span style={{ color: "#6B7280" }}> — {p.body}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column — chart */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 11,
                fontWeight: 500,
                color: "#9CA3AF",
                textAlign: "center",
                margin: "0 0 10px",
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Example: Benzophenone-3 (Oxybenzone)
            </p>
            <RadarChart />
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: 12,
                color: "#9CA3AF",
                textAlign: "center",
                margin: "14px 0 0",
                lineHeight: 1.7,
              }}
            >
              Why a single &apos;safety score&apos; misleads — an ingredient can be safe on five axes and dangerous on one.
            </p>
          </div>
        </div>

        {/* Full-width editorial CTA */}
        <div
          style={{
            borderTop: "1px solid #E5E7EB",
            paddingTop: 32,
            textAlign: "center",
          }}
        >
          <Link
            href="/methodology"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: 14,
              color: "#6B7280",
              textDecoration: "none",
              borderBottom: "1px solid #D4A843",
              paddingBottom: 1,
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#D4A843" }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6B7280" }}
          >
            Read our full methodology — how we score 30,000+ ingredients across 16 markets →
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .safety-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

// ─── Radar chart ────────────────────────────────────────────────────────────

function RadarChart() {
  // Geometry: centre (260, 225), maxRadius = 130 (score of 10)
  const cx = 260
  const cy = 225
  const R  = 130

  // Axis angles in radians, starting top and going clockwise by 60°
  const deg = [-90, -30, 30, 90, 150, 210]
  const rad = deg.map((d) => (d * Math.PI) / 180)

  const px = (a: number, r: number) => (cx + r * Math.cos(a)).toFixed(1)
  const py = (a: number, r: number) => (cy + r * Math.sin(a)).toFixed(1)

  // Hexagonal ring at radius r — returns SVG polygon points string
  const ring = (r: number) => rad.map((a) => `${px(a, r)},${py(a, r)}`).join(" ")

  // Benzophenone-3 (Oxybenzone) scores [Carcino, DART, Sensitization, Systemic, Irritation, Endocrine]
  const scores = [2, 4, 5, 3, 4, 7]
  const polyPts = scores.map((s, i) => `${px(rad[i], (s / 10) * R)},${py(rad[i], (s / 10) * R)}`).join(" ")

  const dot = (i: number) => ({ x: px(rad[i], (scores[i] / 10) * R), y: py(rad[i], (scores[i] / 10) * R) })

  const axisLabel = {
    fontSize: 10,
    fontFamily: "var(--font-inter)",
    fill: "#374151",
  }
  const scoreLabel = {
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "var(--font-inter)",
    fill: "#D4A843",
  }
  const levelLabel = {
    fontSize: 8,
    fontFamily: "var(--font-inter)",
    fill: "rgba(27,58,92,0.4)",
  }

  return (
    <svg
      viewBox="0 0 520 440"
      width="100%"
      style={{ display: "block", overflow: "visible" }}
      aria-label="Radar chart showing 6-axis safety profile for Benzophenone-3 (Oxybenzone)"
    >
      {/* Concentric rings at levels 2, 4, 6, 8, 10 */}
      {[26, 52, 78, 104, 130].map((r) => (
        <polygon
          key={r}
          points={ring(r)}
          fill="none"
          stroke="rgba(27,58,92,0.18)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines from centre to each vertex */}
      {rad.map((a, i) => (
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={px(a, R)}
          y2={py(a, R)}
          stroke="rgba(27,58,92,0.22)"
          strokeWidth="1"
        />
      ))}

      {/* Score polygon */}
      <polygon
        points={polyPts}
        fill="rgba(212,168,67,0.18)"
        stroke="#D4A843"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Score dots */}
      {scores.map((_, i) => {
        const d = dot(i)
        return <circle key={i} cx={d.x} cy={d.y} r="4" fill="#D4A843" />
      })}

      {/* Score value labels */}
      {/* Carcinogenicity (2) — top, anchor middle */}
      <text x="260" y="182" textAnchor="middle" {...scoreLabel}>2</text>
      {/* DART (4) — top-right, anchor start */}
      <text x="320" y="191" textAnchor="start" {...scoreLabel}>4</text>
      {/* Sensitization (5) — bottom-right, anchor start */}
      <text x="330" y="267" textAnchor="start" {...scoreLabel}>5</text>
      {/* Systemic Toxicity (3) — bottom, anchor middle */}
      <text x="260" y="281" textAnchor="middle" {...scoreLabel}>3</text>
      {/* Irritation (4) — bottom-left, anchor end */}
      <text x="200" y="260" textAnchor="end" {...scoreLabel}>4</text>
      {/* Endocrine Disruption (7) — top-left, anchor end */}
      <text x="166" y="171" textAnchor="end" {...scoreLabel}>7</text>

      {/* Ring level labels — along vertical (Carcinogenicity) axis */}
      <text x="266" y="202" textAnchor="start" {...levelLabel}>2</text>
      <text x="266" y="176" textAnchor="start" {...levelLabel}>4</text>
      <text x="266" y="150" textAnchor="start" {...levelLabel}>6</text>
      <text x="266" y="124" textAnchor="start" {...levelLabel}>8</text>
      <text x="266" y="98"  textAnchor="start" {...levelLabel}>10</text>

      {/* Axis labels */}
      {/* Carcinogenicity — top, middle anchor */}
      <text x="260" y="77" textAnchor="middle" {...axisLabel}>Carcinogenicity</text>

      {/* Reproductive / DART — top-right, start anchor */}
      <text textAnchor="start" {...axisLabel}>
        <tspan x="392" dy="0" y="147">Reproductive /</tspan>
        <tspan x="392" dy="13">DART</tspan>
      </text>

      {/* Sensitization — bottom-right, start anchor */}
      <text x="392" y="305" textAnchor="start" {...axisLabel}>Sensitization</text>

      {/* Systemic Toxicity — bottom, middle anchor */}
      <text textAnchor="middle" {...axisLabel}>
        <tspan x="260" dy="0" y="374">Systemic</tspan>
        <tspan x="260" dy="13">Toxicity</tspan>
      </text>

      {/* Irritation — bottom-left, end anchor */}
      <text x="128" y="305" textAnchor="end" {...axisLabel}>Irritation</text>

      {/* Endocrine Disruption — top-left, end anchor */}
      <text textAnchor="end" {...axisLabel}>
        <tspan x="128" dy="0" y="147">Endocrine</tspan>
        <tspan x="128" dy="13">Disruption</tspan>
      </text>
    </svg>
  )
}
