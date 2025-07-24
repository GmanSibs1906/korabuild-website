import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  "Full-service homebuilding support, from ground to finish",
  "Professional materials sourcing and procurement",
  "Vetted contractor management and on-site supervision",
  "Real-time visibility and financial tracking via the app",
  "Designed for African markets and diaspora needs",
  "Transparent, secure, and reliable every step of the way",
]

export default function WhyKoraBuildSection() {
  return (
    <section id="why-korabuild" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Why KoraBuild?</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start text-left">
                <CheckCircle className="w-6 h-6 text-[#f08121] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Build Smarter, With Support You Can Trust</h3>
            <p className="text-lg mb-6 opacity-90 leading-relaxed">
              Building a home should be exciting, not overwhelming. KoraBuild gives you the power of a professional
              construction partner—and the convenience of a simple, intuitive app to guide and support your journey.
            </p>
            <p className="text-lg mb-8 opacity-90">No stress. No surprises. Just a clear path to your dream home.</p>
            <Button size="lg" className="bg-white text-[#f08121] hover:bg-gray-100">
              Download the KoraBuild App today—let's build your home, together.
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
