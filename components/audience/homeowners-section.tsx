import { Home } from "lucide-react"

export default function HomeownersSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 order-2 lg:order-1">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#f08121]/10 rounded-xl flex items-center justify-center shadow-lg">
              <Home className="w-7 h-7 sm:w-8 sm:h-8 text-[#f08121]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Homeowners</h2>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We manage every aspect of your build—while the app gives you direct access to project updates, financials,
            and decisions. Focus on your dream; we'll handle the details.
          </p>
          <ul className="space-y-3">
            {[
              "Complete project management",
              "Real-time updates & reports",
              "Full financial transparency",
              "Direct decision-making access",
            ].map((item) => (
              <li key={item} className="flex items-start">
                <span className="w-2 h-2 bg-[#f08121] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span className="text-gray-700 text-sm sm:text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Decorative pane */}
        <div className="order-1 lg:order-2">
          <img 
            src="/images/zim.jpg" 
            alt="Homeowners" 
            className="w-full h-64 sm:h-72 object-cover rounded-3xl shadow-lg" 
          />
        </div>
      </div>
    </section>
  )
}
