import AppGuideHero from "@/components/app-guide/app-guide-hero"
import GettingStarted from "@/components/app-guide/getting-started"
import AppFeatures from "@/components/app-guide/app-features"
import AppScreenshots from "@/components/app-guide/app-screenshots"

export default function HowToUsePage() {
  return (
    <div className="min-h-screen pt-[120px] sm:pt-[100px]">
      <AppGuideHero />
      <GettingStarted />
      <AppFeatures />
      <AppScreenshots />
    </div>
  )
}
