import { SectionLabel } from "@/components/section-label"

export function TheProblem() {
  return (
    <section
      id="problem"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center"
        style={{ maxWidth: 1100, margin: "0 auto", gap: 60 }}
      >
        {/* Left column — text */}
        <div style={{ flex: "0 0 55%", maxWidth: "55%" }} className="w-full md:w-auto">
          <SectionLabel>THE PROBLEM</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 36,
              fontWeight: 400,
              color: "#0D1B2A",
              lineHeight: 1.3,
              margin: "0 0 20px",
            }}
            className="text-balance"
          >
            Formulation development hasn&apos;t changed in 30 years.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#374151",
              lineHeight: 1.8,
              maxWidth: 480,
              fontFamily: "var(--font-inter)",
              margin: 0,
            }}
          >
            Professional formulators still navigate regulatory requirements
            across PDFs and spreadsheets. Supplier data lives in disconnected
            portals. When something goes wrong in stability testing, you start
            over.
          </p>

          {/* Problem list */}
          <ul
            className="flex flex-col"
            style={{ marginTop: 28, gap: 14, listStyle: "none", padding: 0 }}
          >
            {[
              "Regulatory limits change across 13 markets — no single source of truth",
              "550,000 marketed products contain co-occurrence intelligence that nobody has organised",
              "CIR safety data, supplier TDS, research literature — all disconnected",
              "Every failed stability batch is a reformulation from scratch",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start"
                style={{ gap: 12 }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    background: "#0D1B2A",
                    borderRadius: 1,
                    flexShrink: 0,
                    marginTop: 7,
                  }}
                />
                <span
                  style={{
                    fontSize: 14,
                    color: "#374151",
                    lineHeight: 1.6,
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — SVG diagram */}
        <div
          style={{ flex: "0 0 45%", maxWidth: "45%" }}
          className="hidden md:flex items-center justify-center w-full md:w-auto"
        >
          <ProblemDiagram />
        </div>
      </div>
    </section>
  )
}

function ProblemDiagram() {
  return (
    <svg
      width="340"
      height="320"
      viewBox="0 0 340 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Data sources converging into theformulator.ai platform"
    >
      {/* Lines from corners to center */}
      <line x1="75" y1="75" x2="168" y2="158" stroke="#D4A843" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="265" y1="75" x2="172" y2="158" stroke="#D4A843" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="75" y1="245" x2="168" y2="162" stroke="#D4A843" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="265" y1="245" x2="172" y2="162" stroke="#D4A843" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Central circle */}
      <circle cx="170" cy="160" r="36" fill="#D4A843" />
      <text x="170" y="156" textAnchor="middle" fill="#0D1B2A" fontFamily="var(--font-inter)" fontSize="14" fontWeight="700">tf</text>
      <text x="170" y="172" textAnchor="middle" fill="rgba(13,27,42,0.65)" fontFamily="var(--font-inter)" fontSize="7" fontWeight="500">theformulator.ai</text>

      {/* Top-left: PDF */}
      <rect x="30" y="30" width="90" height="90" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="52" y="50" width="46" height="56" rx="3" fill="#F4F6F9" stroke="#0D1B2A" strokeWidth="1.5" />
      <line x1="60" y1="65" x2="90" y2="65" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="60" y1="72" x2="90" y2="72" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="60" y1="79" x2="82" y2="79" stroke="#0D1B2A" strokeWidth="1" />
      <text x="75" y="118" textAnchor="middle" fill="#6B7280" fontFamily="var(--font-inter)" fontSize="10" fontWeight="500">Regulatory PDFs</text>

      {/* Top-right: Spreadsheet */}
      <rect x="220" y="30" width="90" height="90" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="237" y="48" width="56" height="52" rx="2" fill="#F4F6F9" stroke="#0D1B2A" strokeWidth="1.5" />
      <line x1="253" y1="48" x2="253" y2="100" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="269" y1="48" x2="269" y2="100" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="237" y1="63" x2="293" y2="63" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="237" y1="78" x2="293" y2="78" stroke="#0D1B2A" strokeWidth="1" />
      <text x="265" y="116" textAnchor="middle" fill="#6B7280" fontFamily="var(--font-inter)" fontSize="10" fontWeight="500">Spreadsheets</text>

      {/* Bottom-left: Portal */}
      <rect x="30" y="200" width="90" height="90" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <circle cx="75" cy="243" r="22" fill="#F4F6F9" stroke="#0D1B2A" strokeWidth="1.5" />
      <line x1="53" y1="243" x2="97" y2="243" stroke="#0D1B2A" strokeWidth="1" />
      <ellipse cx="75" cy="243" rx="10" ry="22" fill="none" stroke="#0D1B2A" strokeWidth="1" />
      <text x="75" y="278" textAnchor="middle" fill="#6B7280" fontFamily="var(--font-inter)" fontSize="10" fontWeight="500">Supplier Portals</text>

      {/* Bottom-right: Document */}
      <rect x="220" y="200" width="90" height="90" rx="8" fill="white" stroke="#E5E7EB" strokeWidth="1.5" />
      <rect x="244" y="216" width="42" height="52" rx="3" fill="#F4F6F9" stroke="#0D1B2A" strokeWidth="1.5" />
      <polyline points="274,216 286,228 274,228" fill="#F4F6F9" stroke="#0D1B2A" strokeWidth="1.5" />
      <line x1="252" y1="238" x2="278" y2="238" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="252" y1="245" x2="278" y2="245" stroke="#0D1B2A" strokeWidth="1" />
      <line x1="252" y1="252" x2="272" y2="252" stroke="#0D1B2A" strokeWidth="1" />
      <text x="265" y="280" textAnchor="middle" fill="#6B7280" fontFamily="var(--font-inter)" fontSize="10" fontWeight="500">Research Literature</text>
    </svg>
  )
}
