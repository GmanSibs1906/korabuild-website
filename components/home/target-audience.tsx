import { Home, Globe, ArrowRight, MapPin, Smartphone, Users, Clock, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const audiences = [
  {
    icon: Home,
    title: "Local Homeowners",
    subtitle: "Build with confidence right where you are",
    description: "We manage every aspect of your build while the app gives you direct access to project updates, financials, and decisions. Focus on your dream; we'll handle the details.",
    image: "/images/zim.jpg",
    features: [
      {
        icon: Users,
        title: "Complete Project Management",
        desc: "From start to finish with expert oversight"
      },
      {
        icon: Smartphone,
        title: "Real-time Updates",
        desc: "Live progress tracking on all construction phases"
      },
      {
        icon: Shield,
        title: "Financial Transparency",
        desc: "Detailed tracking with complete visibility"
      },
      {
        icon: CheckCircle,
        title: "Quick Decision Making",
        desc: "Direct access to approve important choices"
      }
    ]
  },
  {
    icon: Globe,
    title: "Diaspora Clients",
    subtitle: "Build back home from anywhere in the world",
    description: "Building back home while living abroad? KoraBuild bridges the distance. Stay fully engaged and informed while we manage contractors, materials, and site execution locally.",
    image: "/images/world.webp",
    features: [
      {
        icon: MapPin,
        title: "Remote Monitoring",
        desc: "Real-time project oversight from anywhere"
      },
      {
        icon: Users,
        title: "Local Team Management",
        desc: "Expert coordination with international oversight"
      },
      {
        icon: Globe,
        title: "Global Communication",
        desc: "Secure cross-border collaboration platform"
      },
      {
        icon: Clock,
        title: "Time-zone Friendly",
        desc: "Progress tracking that works around your schedule"
      }
    ]
  }
]

export default function TargetAudience() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#f08121]/10 rounded-full text-[#f08121] text-sm font-semibold mb-6">
            <Users className="w-4 h-4 mr-2" />
            Who We Serve
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Built for
            <span className="block text-transparent bg-gradient-to-r from-[#f08121] to-[#e07420] bg-clip-text">
              Everyone
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Whether you're building locally or from abroad, KoraBuild provides professional construction management tailored to your unique needs and location.
          </p>
        </div>

        {/* Audiences - Modern Layout */}
        <div className="space-y-32 mb-24">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl flex items-center justify-center shadow-lg">
                      <audience.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                        {audience.title}
                      </h3>
                      <p className="text-lg text-gray-500 font-medium">
                        {audience.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    {audience.description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {audience.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start space-x-4 p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-gray-100/50">
                      <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-xs text-gray-600 leading-relaxed">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href="/who-we-serve">
                    <Button className="bg-gradient-to-r from-[#f08121] to-[#e07420] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual Element with Image */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  <div className="w-full h-80 rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                    <img 
                      src={audience.image} 
                      alt={audience.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center">
                      <audience.icon className="w-32 h-32 text-white/70" />
                    </div>
                    
                    {/* Stats Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <div className="flex justify-between text-white text-sm">
                          <div className="text-center">
                            <div className="text-xl font-bold">
                              {index === 0 ? "500+" : "500+"}
                            </div>
                            <div className="opacity-80">Projects</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold">
                              {index === 0 ? "98%" : "95%"}
                            </div>
                            <div className="opacity-80">Satisfaction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold">
                              {index === 0 ? "Local" : "15+"}
                            </div>
                            <div className="opacity-80">
                              {index === 0 ? "Focus" : "Countries"}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#f08121] via-[#e07420] to-[#f08121] rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-48 h-48 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full"></div>
            </div>

            <div className="relative p-12 lg:p-16 text-center text-white">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                One Platform. Two Audiences.
                <span className="block">Zero Stress.</span>
              </h3>
              <p className="text-xl opacity-90 mb-10 max-w-3xl mx-auto leading-relaxed">
                KoraBuild adapts to your needs—whether you're on-site or thousands of miles away, we provide the same level of professional service and transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button className="bg-white text-[#f08121] hover:bg-gray-100 font-semibold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg">
                  Start Your Project Today
                </Button>
                <Link href="/how-to-use">
                  <Button variant="outline" className="border-2 border-white/50 text-white hover:bg-white hover:text-[#f08121] font-semibold px-10 py-5 rounded-2xl transition-all duration-300 text-lg">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
