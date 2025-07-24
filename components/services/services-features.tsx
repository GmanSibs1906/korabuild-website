import { Button } from "@/components/ui/button"
import { Award, Users, Globe, Shield, Clock, Star, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const differentiators = [
  {
    icon: Award,
    title: "Proven Excellence",
    description: "Over 1000 successfully completed projects across Africa with 99% client satisfaction rate.",
    stat: "1000+ Projects"
  },
  {
    icon: Users,
    title: "Expert Professionals",
    description: "Vetted contractors, skilled craftsmen, and project managers with years of construction experience.",
    stat: "Expert Teams"
  },
  {
    icon: Globe,
    title: "International Reach",
    description: "Serving clients across 15+ countries with specialized diaspora construction services.",
    stat: "15+ Countries"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Comprehensive quality assurance with regular inspections and adherence to international standards.",
    stat: "Quality Assured"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Professional project management ensuring timely completion within agreed schedules and budgets.",
    stat: "99% On-Time"
  },
  {
    icon: Star,
    title: "5-Star Service",
    description: "Exceptional customer service with 24/7 support and transparent communication throughout.",
    stat: "4.9 Rating"
  }
]

export default function ServicesFeatures() {
  return (
    <>
      {/* Why Choose KoraBuild */}
      {/* <section className="py-32 bg-gradient-to-br from-[#f08121] via-[#e07420] to-[#f08121] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              Why Choose KoraBuild for
              <span className="block">Your Construction Project?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              We combine traditional construction expertise with modern project management to deliver exceptional results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 backdrop-blur-md">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
                <div className="text-lg font-bold mb-2 text-white/95">{item.stat}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-white/80 leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Local Expertise & Global Standards */}
      {/* <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Local Expertise,
                  <span className="block text-[#f08121]">Global Standards</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  KoraBuild bridges the gap between local construction knowledge and international quality standards, delivering world-class results in African markets.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Deep Local Knowledge</h3>
                    <p className="text-gray-400">Understanding of local regulations, materials, and construction practices across African markets.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">International Standards</h3>
                    <p className="text-gray-400">Adherence to global construction standards and best practices for quality and safety.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Diaspora Focused</h3>
                    <p className="text-gray-400">Specialized services for clients building from abroad with enhanced communication and oversight.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/why-korabuild">
                  <Button className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    Learn More About Us
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/images/local-expertise.jpg" 
                alt="KoraBuild Local Expertise"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
              
             
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 text-white text-center">
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm opacity-80">African Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm opacity-80">Diaspora Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#f08121] via-[#e07420] to-[#f08121] ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-12 lg:p-16 text-center border border-gray-200">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Experience the KoraBuild difference. Professional construction services that bring your vision to life with transparency, quality, and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact">
                <Button className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-lg group">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link href="/who-we-serve">
                <Button variant="outline" className="border-2 border-[#f08121] text-[#f08121] hover:bg-[#f08121] hover:text-white font-semibold px-10 py-5 rounded-2xl transition-all duration-300 text-lg">
                  Explore Client Types
                </Button>
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 text-sm">
                Join 1000+ satisfied homeowners who have built their dream homes with KoraBuild's professional construction services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
