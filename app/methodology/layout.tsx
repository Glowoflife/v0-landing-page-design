import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ingredient Safety Scoring Methodology — theformulator.ai",
  description:
    "How theformulator.ai scores 30,000+ cosmetic ingredients across six hazard axes using primary regulatory data from ECHA, IARC, CIR, and 16 market authorities.",
}

export default function MethodologyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
