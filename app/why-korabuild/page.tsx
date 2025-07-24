import WhyHero from "@/components/why/why-hero"
import BenefitsList from "@/components/why/benefits-list"
import TrustSection from "@/components/why/trust-section"
import FinalCTA from "@/components/why/final-cta"

export default function WhyKoraBuildPage() {
  return (
    <div className="min-h-screen pt-[120px] sm:pt-[100px]">
      <WhyHero />
      <BenefitsList />
      <TrustSection />
      <FinalCTA />
    </div>
  )
}
