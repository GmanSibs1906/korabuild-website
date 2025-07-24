import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import ServicesFeatures from "@/components/services/services-features"

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-[100px]">
      <ServicesHero />
      <ServicesList />
      <ServicesFeatures />
    </div>
  )
}
