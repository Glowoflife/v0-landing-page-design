import { SectionLabelCentered } from "@/components/section-label"

const cards = [
  {
    icon: <SearchIcon />,
    title: "Search 561K+ Products",
    body: "Type a product name. If it's in our database of 561,000+ marketed products across 16 markets, the INCI list auto-populates instantly. Coverage spans Sephora, Nykaa, Olive Young, Douglas, and dozens more retailers.",
  },
  {
    icon: <LayersIcon />,
    title: "3-Layer Blend Detection",
    body: "Commercial INCI lists decompose supplier blends into constituent names. Our engine re-groups them using thousands of ingredient technical records, statistical co-occurrence from 561K products, and functional chemistry rules. See what the formulator actually weighed out.",
  },
  {
    icon: <FlaskIcon />,
    title: "Concentration Reconstruction",
    body: "INCI order gives you descending concentration above 1%. We go further — cross-referencing regulatory limits, TDS usage ranges, clinical efficacy data, and market norms to estimate probable concentrations with confidence tiers.",
  },
]

const inputMethods = [
  { emoji: "🔍", label: "Product Search" },
  { emoji: "📋", label: "Paste INCI" },
  { emoji: "📷", label: "Label Photo" },
]

export function Deformulate() {
  return (
    <section
      id="deformulate"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Eyebrow + headline */}
        <div className="flex flex-col items-center" style={{ marginBottom: 48 }}>
          <SectionLabelCentered>DEFORMULATE</SectionLabelCentered>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 36,
              fontWeight: 400,
              color: "#0D1B2A",
              textAlign: "center",
              margin: "0 0 16px",
            }}
          >
            Reverse-engineer any product on the shelf.
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "#6B7280",
              textAlign: "center",
              maxWidth: 620,
              margin: 0,
              lineHeight: 1.6,
              fontFamily: "var(--font-inter)",
            }}
          >
            Paste an INCI list, search our 561,000+ product database, or photograph a label. Get a probable bench-ready formula with concentrations, phase assignments, and regulatory screening — in minutes.
          </p>
        </div>

        {/* Three feature cards */}
        <div className="flex flex-col md:flex-row" style={{ gap: 24, marginBottom: 32 }}>
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                flex: 1,
                background: "#ffffff",
                border: "1px solid #E5E7EB",
                borderRadius: 10,
                padding: 28,
              }}
            >
              <div style={{ marginBottom: 14 }}>{card.icon}</div>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 18,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  margin: "0 0 10px",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#6B7280",
                  lineHeight: 1.7,
                  margin: 0,
                  fontFamily: "var(--font-inter)",
                }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>

        {/* Gold-tinted callout strip */}
        <div
          style={{
            background: "#FDFAF3",
            border: "1px solid #E8D9A8",
            borderRadius: 10,
            padding: "18px 28px",
            marginBottom: 28,
          }}
        >
          <p
            style={{
              fontSize: 14,
              color: "#6B5A1E",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.6,
              fontFamily: "var(--font-inter)",
            }}
          >
            Same credit cost as formulation. Same 15-layer retrieval. Same regulatory screening across 16 markets. Same INCI-only, supplier-agnostic output.
          </p>
        </div>

        {/* Input method pills */}
        <div className="flex items-center justify-center flex-wrap" style={{ gap: 10 }}>
          {inputMethods.map((method) => (
            <span
              key={method.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#0D1B2A",
                color: "#ffffff",
                fontSize: 12,
                fontFamily: "var(--font-inter)",
                fontWeight: 500,
                padding: "6px 14px",
                borderRadius: 100,
                letterSpacing: "0.01em",
              }}
            >
              {method.emoji} {method.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SearchIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function FlaskIcon() {
  return (
    <svg width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="#D4A843" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6" />
      <path d="M9 3v7l-4.5 9A2 2 0 0 0 6.26 22h11.48a2 2 0 0 0 1.76-2.97L15 10V3" />
      <path d="M7.5 16h9" />
    </svg>
  )
}
