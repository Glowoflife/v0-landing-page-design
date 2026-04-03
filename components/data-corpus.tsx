export function DataCorpus() {
  return (
    <section
      id="data"
      style={{
        background: "#1B3A5C",
        padding: "100px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Section label */}
        <div className="flex flex-col items-center" style={{ marginBottom: 16 }}>
          <div
            style={{
              width: 40,
              height: 2,
              background: "#D4A843",
              marginBottom: 8,
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "#D4A843",
              letterSpacing: "0.1em",
              fontWeight: 600,
              fontFamily: "var(--font-inter)",
              textTransform: "uppercase",
            }}
          >
            THE KNOWLEDGE BASE
          </span>
        </div>

        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: 400,
            color: "#ffffff",
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto",
            lineHeight: 1.25,
          }}
          className="text-balance"
        >
          One of the most comprehensive dedicated knowledge systems for cosmetic
          formulation and compliance.
        </h2>

        {/* Stats grid */}
        <div
          className="flex flex-col"
          style={{ gap: 32, marginTop: 56, maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div className="flex items-baseline justify-center" style={{ gap: 8 }}>
                <span
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: "clamp(32px, 4vw, 44px)",
                    color: "#D4A843",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: 15,
                    color: "rgba(255,255,255,0.8)",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 4,
                  lineHeight: 1.5,
                  maxWidth: 560,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                {s.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Regulatory market coverage grid */}
        <div style={{ marginTop: 48, marginBottom: 8 }}>
          <div
            className="flex flex-wrap justify-center"
            style={{ gap: 12, maxWidth: 720, margin: "0 auto" }}
          >
            {markets.map((m) => (
              <div
                key={m.name}
                className="flex flex-row items-center"
                style={{
                  gap: 8,
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 6,
                  padding: "8px 14px",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <span style={{ fontSize: 15 }}>{m.flag}</span>
                <span
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {m.name}
                </span>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: m.full ? "#2D6A4F" : "#B45309",
                    flexShrink: 0,
                    display: "inline-block",
                  }}
                />
              </div>
            ))}
          </div>
          <p
            style={{
              marginTop: 12,
              textAlign: "center",
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              fontStyle: "italic",
              fontFamily: "var(--font-inter)",
            }}
          >
            Green — full regulatory coverage · Amber — coverage expanding in 2026
          </p>
        </div>

        {/* Source row */}
        <p
          style={{
            textAlign: "center",
            marginTop: 48,
            fontSize: 12,
            color: "rgba(255,255,255,0.4)",
            lineHeight: 1.8,
            fontFamily: "var(--font-inter)",
            maxWidth: 720,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Sources include: Thousands of formulations with stability data ·
          Thousands of INCI with complete technical information ·
          CIR safety assessments · EUR-Lex · ECHA · SCCS ·
          MHLW Japan · NMPA China · PubMed · MOCRA · CDSCO
        </p>

        <p
          style={{
            textAlign: "center",
            maxWidth: 560,
            margin: "24px auto 0",
            fontSize: 15,
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.7,
            fontFamily: "var(--font-inter)",
          }}
        >
          This corpus took years to assemble. It is the foundation that makes
          every formulation, market intelligence suggestion, and regulatory check
          meaningful — not generic.
        </p>
      </div>
    </section>
  )
}

const markets = [
  { flag: "🇪🇺", name: "EU", full: true },
  { flag: "🇺🇸", name: "US", full: true },
  { flag: "🇬🇧", name: "UK", full: true },
  { flag: "🇨🇳", name: "China", full: true },
  { flag: "🇯🇵", name: "Japan", full: true },
  { flag: "🇮🇳", name: "India", full: true },
  { flag: "🇰🇷", name: "Korea", full: true },
  { flag: "🇨🇦", name: "Canada", full: true },
  { flag: "🇦🇺", name: "Australia", full: true },
  { flag: "🇧🇷", name: "Brazil", full: true },
  { flag: "🇹🇭", name: "Thailand", full: true },
  { flag: "🇲🇾", name: "Malaysia", full: true },
  { flag: "🇸🇬", name: "Singapore", full: false },
  { flag: "🇮🇩", name: "Indonesia", full: false },
  { flag: "🇻🇳", name: "Vietnam", full: false },
  { flag: "🇵🇭", name: "Philippines", full: false },
]

const stats = [
  {
    value: "561,000+",
    label: "marketed products",
    subtext: "ingredient co-occurrence intelligence across skin care, hair care, sun care, and personal care",
  },
  {
    value: "24,000+",
    label: "cosmetic ingredients",
    subtext: "ingredient-level data supporting selection, screening, and compatibility checking",
  },
  {
    value: "23,500+",
    label: "reference formulations",
    subtext: "historical prototype patterns to support generation and benchmarking",
  },
  {
    value: "2,400+",
    label: "CIR safety assessments",
    subtext: "peer-reviewed safety data integrated at ingredient level",
  },
  {
    value: "16",
    label: "regulatory markets",
    subtext: "EU, UK, USA, China, Japan, Korea, India, Australia, Canada, Brazil, Thailand, Malaysia, and more",
  },
]
