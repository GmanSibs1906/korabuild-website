import { Globe } from "lucide-react"

export default function DiasporaSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 order-2">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f08121]/10 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-[#f08121]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Diaspora Clients</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Building back home while living abroad? KoraBuild bridges the distance so you stay fully engaged and
            informed while we manage contractors, materials, and site execution locally.
          </p>
          <ul className="space-y-3">
            {[
              "Remote project monitoring",
              "Local team management",
              "Secure cross-border communication",
              "Real-time progress tracking",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="w-2 h-2 bg-[#f08121] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative pane */}
        <div className="order-1">
          <img 
            src="/images/world.webp" 
            alt="Diaspora Clients" 
            className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-lg" 
          />
        </div>
      </div>
    </section>
  )
}
