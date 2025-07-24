import { CheckCircle } from "lucide-react"

const benefits = [
  "Full-service homebuilding support, from ground to finish",
  "Professional materials sourcing and procurement",
  "Vetted contractor management and on-site supervision",
  "Real-time visibility and financial tracking via the app",
  "Designed for African markets and diaspora needs",
  "Transparent, secure, and reliable every step of the way",
]

export default function BenefitsList() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Built for Your Success</h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our comprehensive approach combines expert on-ground execution with powerful digital oversight.
          </p>
          <div className="space-y-3 sm:space-y-4">
            {benefits.map((b) => (
              <div key={b} className="flex items-start">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#f08121] mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base">{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative illustration */}
        <div className="order-1 lg:order-2">
          <img 
            src="/images/car.jpg" 
            alt="Construction Success" 
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-3xl shadow-lg" 
          />
        </div>
      </div>
    </section>
  )
}
