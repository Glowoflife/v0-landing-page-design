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
          The most comprehensive cosmetic formulation knowledge base ever
          assembled.
        </h2>

        {/* Stats grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-3"
          style={{ gap: 40, marginTop: 56, maxWidth: 800, marginLeft: "auto", marginRight: "auto" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(36px, 5vw, 52px)",
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
                  fontSize: 13,
                  color: "rgba(255,255,255,0.7)",
                  marginTop: 6,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  textAlign: "center",
                  lineHeight: 1.4,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
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
          Sources include: Ernest Flick (all 8 volumes) · Croda · BASF ·
          INCIDecoder · Innova market intelligence · UL Prospector · Knowde ·
          CIR safety assessments · EUR-Lex · ECHA · SCCS · MHLW Japan · NMPA
          China · PubMed
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

const stats = [
  { value: "550,000+", label: "Marketed products analysed" },
  { value: "23,500+", label: "Reference formulations" },
  { value: "24,000+", label: "Ingredients with safety scoring" },
  { value: "13", label: "Regulatory markets" },
  { value: "3,073", label: "Peer-reviewed research papers" },
  { value: "2,400+", label: "CIR safety assessments" },
]
