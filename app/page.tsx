"use client"

import { useState } from "react"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { WhoItsFor } from "@/components/who-its-for"
import { TheProblem } from "@/components/the-problem"
import { HowItWorks } from "@/components/how-it-works"
import { SeeWhatYouGet } from "@/components/see-what-you-get"
import { EngineExplainer } from "@/components/engine-explainer"
import { SafetyMethodology } from "@/components/safety-methodology"
import { FeatureShowcase } from "@/components/feature-showcase"
import { Security } from "@/components/security"
import { DataCorpus } from "@/components/data-corpus"
import { Conversion } from "@/components/conversion"
import { FinalCta } from "@/components/final-cta"
import { SignInModal, RegisterModal, SubscribeModal } from "@/components/modals"

export default function Page() {
  const [signInOpen, setSignInOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [subscribeOpen, setSubscribeOpen] = useState(false)

  return (
    <main>
      <Nav
        onSignInClick={() => setSignInOpen(true)}
        onRegisterClick={() => setRegisterOpen(true)}
      />
      <Hero onRegisterClick={() => setRegisterOpen(true)} />
      <WhoItsFor />
      <TheProblem />
      <HowItWorks />
      <SeeWhatYouGet />
      <EngineExplainer />
      <SafetyMethodology />
      <FeatureShowcase />
      <Security />
      <DataCorpus />
      <Conversion
        onRegisterClick={() => setRegisterOpen(true)}
        onSubscribeClick={() => setSubscribeOpen(true)}
      />
      <FinalCta onRegisterClick={() => setRegisterOpen(true)} />

      <SignInModal
        open={signInOpen}
        onClose={() => setSignInOpen(false)}
        onSwitchToRegister={() => setRegisterOpen(true)}
      />
      <RegisterModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onSwitchToSignIn={() => setSignInOpen(true)}
      />
      <SubscribeModal
        open={subscribeOpen}
        onClose={() => setSubscribeOpen(false)}
      />
    </main>
  )
}
