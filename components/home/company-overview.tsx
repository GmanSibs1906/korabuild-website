import { Building, Users, Globe, Award, Shield, Zap, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Building,
    title: "Full-Service Excellence",
    description: "Comprehensive homebuilding support from foundation to finish, backed by professional oversight at every construction phase.",
    color: "from-blue-500 to-blue-600",
    stats: "100% Coverage"
  },
  {
    icon: Users,
    title: "Vetted Professionals",
    description: "Carefully selected contractors and skilled artisans with proven track records and years of industry experience.",
    color: "from-emerald-500 to-emerald-600",
    stats: "Expert Team"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Purpose-built for African markets and diaspora communities, seamlessly bridging geographical distances with technology.",
    color: "from-purple-500 to-purple-600",
    stats: "15+ Countries"
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "Rigorous materials sourcing and procurement processes ensuring superior quality and long-term reliability.",
    color: "from-orange-500 to-orange-600",
    stats: "Premium Quality"
  },
  {
    icon: Shield,
    title: "Complete Transparency",
    description: "Full project visibility with real-time updates, detailed financial tracking, and open communication channels.",
    color: "from-red-500 to-red-600",
    stats: "100% Visible"
  },
  {
    icon: Zap,
    title: "Digital Innovation",
    description: "Cutting-edge app technology that simplifies construction management while maintaining professional standards.",
    color: "from-indigo-500 to-indigo-600",
    stats: "Smart Tech"
  },
]

const commitments = [
  "Full-service homebuilding support, from ground to finish",
  "Professional materials sourcing and procurement",
  "Vetted contractor management and on-site supervision",
  "Real-time visibility and financial tracking via the app",
  "Designed for African markets and diaspora needs",
  "Transparent, secure, and reliable every step of the way",
]

export default function CompanyOverview() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#f08121]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#f08121]/10 rounded-full text-[#f08121] text-sm font-semibold mb-6">
            <Award className="w-4 h-4 mr-2" />
            Why Choose KoraBuild
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Excellence in Every
            <span className="block text-transparent bg-gradient-to-r from-[#f08121] to-[#e07420] bg-clip-text">
              Detail
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            We combine traditional construction expertise with modern digital innovation to deliver exceptional homebuilding experiences that exceed expectations.
          </p>
        </div>

        {/* Features - Modern Layout */}
        <div className="space-y-20 mb-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-20`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                    {feature.stats}
                  </div>
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>

              {/* Visual Element */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  <div className={`w-full h-64 bg-gradient-to-br ${feature.color} rounded-3xl shadow-xl transform hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                      <feature.icon className="w-20 h-20 text-white/60" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                    <Check className="w-8 h-8 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Commitment Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 p-12 lg:p-16 items-center">
              {/* Content */}
              <div className="text-white space-y-8">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold mb-6">Our Promise to You</h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    Building a home should be exciting, not overwhelming. KoraBuild delivers professional construction management with the convenience of intuitive technology.
                  </p>
                </div>

                <div className="grid gap-4">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-[#f08121] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 leading-relaxed">{commitment}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Link href="/why-korabuild">
                    <Button className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                      Learn More About Us
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-[#f08121]/20 to-transparent rounded-3xl p-12 border border-white/10">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-[#f08121] rounded-full flex items-center justify-center mx-auto">
                      <Shield className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Build Smarter</h4>
                    <p className="text-gray-300 leading-relaxed">
                      With support you can trust. No stress, no surprises—just a clear path to your dream home.
                    </p>
                    <div className="flex justify-center space-x-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">1000+</div>
                        <div className="text-sm text-gray-400">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">4.9</div>
                        <div className="text-sm text-gray-400">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-white">99%</div>
                        <div className="text-sm text-gray-400">Success</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
