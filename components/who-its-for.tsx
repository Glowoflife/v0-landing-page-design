import { Beaker, Lightbulb, ShieldCheck, Users } from "lucide-react"

export function WhoItsFor() {
  return (
    <section
      id="who-its-for"
      style={{
        background: "#ffffff",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(28px, 4vw, 38px)",
            fontWeight: 400,
            color: "#0D1B2A",
            textAlign: "center",
            margin: "0 auto 56px",
            maxWidth: 640,
            lineHeight: 1.3,
          }}
          className="text-balance"
        >
          Built for the teams that turn concepts into products.
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2"
          style={{ gap: 24, maxWidth: 880, margin: "0 auto" }}
        >
          {cards.map((card) => (
            <div
              key={card.headline}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: 10,
                padding: 28,
                background: "#ffffff",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#F4F6F9",
                  marginBottom: 16,
                }}
              >
                <card.Icon size={22} color="#D4A843" strokeWidth={1.5} />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "#0D1B2A",
                  margin: "0 0 8px",
                }}
              >
                {card.headline}
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
      </div>
    </section>
  )
}

const cards = [
  {
    Icon: Beaker,
    headline: "R&D Formulators",
    body: "Generate structured starting formulations and reduce dead-end iterations with market-validated ingredient systems.",
  },
  {
    Icon: Lightbulb,
    headline: "Innovation Teams",
    body: "Translate product briefs and claims into formulation pathways faster — from concept to bench-ready prototype.",
  },
  {
    Icon: ShieldCheck,
    headline: "Regulatory Affairs",
    body: "Catch ingredient and market-fit issues earlier in development, across 16 regulatory markets including Brazil, Thailand, and Malaysia.",
  },
  {
    Icon: Users,
    headline: "Technical & Sales Teams",
    body: "Respond to customer briefs with higher-quality prototype concepts backed by real formulation intelligence.",
  },
]
