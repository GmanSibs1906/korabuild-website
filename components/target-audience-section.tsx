import { Home, Globe } from "lucide-react"

const audiences = [
  {
    icon: Home,
    title: "Homeowners",
    description:
      "We manage every aspect of your build—while the app gives you direct access to project updates, financials, and decisions. Focus on your dream; we'll handle the details.",
    features: [
      "Complete project management",
      "Real-time updates",
      "Financial transparency",
      "Direct decision-making access",
    ],
  },
  {
    icon: Globe,
    title: "Diaspora Clients",
    description:
      "Building back home while living abroad? KoraBuild bridges the distance. Stay fully engaged and informed while we manage contractors, materials, and site execution locally.",
    features: [
      "Remote project monitoring",
      "Local team management",
      "Cross-border communication",
      "Real-time progress tracking",
    ],
  },
]

export default function TargetAudienceSection() {
  return (
    <section id="who-we-serve" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Who KoraBuild Is For</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're building locally or from abroad, KoraBuild provides the tools and support you need for a
            successful construction project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#f08121]/10 rounded-xl flex items-center justify-center">
                  <audience.icon className="w-8 h-8 text-[#f08121]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">{audience.title}</h3>
              </div>

              <p className="text-gray-600 text-lg mb-6 leading-relaxed">{audience.description}</p>

              <div className="space-y-3">
                {audience.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-[#f08121] rounded-full mr-3"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
