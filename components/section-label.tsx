export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col" style={{ marginBottom: 16 }}>
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
        {children}
      </span>
    </div>
  )
}

export function SectionLabelCentered({ children }: { children: React.ReactNode }) {
  return (
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
          textAlign: "center",
        }}
      >
        {children}
      </span>
    </div>
  )
}
