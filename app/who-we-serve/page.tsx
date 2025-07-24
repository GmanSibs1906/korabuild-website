import AudienceHero from "@/components/audience/audience-hero"
import HomeownersSection from "@/components/audience/homeowners-section"
import DiasporaSection from "@/components/audience/diaspora-section"
import ComparisonSection from "@/components/audience/comparison-section"

export default function WhoWeServePage() {
  return (
    <div className="min-h-screen pt-[120px] sm:pt-[100px]">
      <AudienceHero />
      <HomeownersSection />
      <DiasporaSection />
      <ComparisonSection />
    </div>
  )
}
