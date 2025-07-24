import HeroSection from "@/components/home/hero-section"
import ServicesOverview from "@/components/home/services-overview"
import TargetAudience from "@/components/home/target-audience"
import AppShowcase from "@/components/home/app-showcase"
import TrustedSection from "@/components/home/trusted-section"
import CTASection from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen pt-[100px]">
      <HeroSection />
      <ServicesOverview />
      <TargetAudience />
      <AppShowcase />
      <TrustedSection />
      <CTASection />
    </div>
  )
}
