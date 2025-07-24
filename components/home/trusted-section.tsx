import { Star, Users, Globe, Award, CheckCircle, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "1000+",
    label: "Happy Homeowners",
    description: "Successfully completed projects",
    image: "/images/happy-homeowners.jpg",
  },
  {
    icon: Globe,
    number: "15+",
    label: "Countries Served",
    description: "Supporting diaspora clients globally",
    image: "/images/global-reach.jpg",
  },
  {
    icon: Award,
    number: "99%",
    label: "Success Rate",
    description: "Projects completed on time",
    image: "/images/success-rate.jpg",
  },
  {
    icon: Star,
    number: "4.9",
    label: "App Rating",
    description: "Average user satisfaction",
    image: "/images/app-rating.jpg",
  },
]

export default function TrustedSection() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#f08121] via-[#e07420] to-[#f08121] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 border border-white/15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-white/25 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-white text-sm font-semibold mb-6 backdrop-blur-md">
            <TrendingUp className="w-4 h-4 mr-2" />
            Proven Success
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Trusted by Homeowners
            <span className="block">Building From Here or There</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied homeowners who have successfully built their dream homes with KoraBuild's
            professional support and innovative app technology.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-3xl mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center justify-center">
                    <stat.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              <div className="text-5xl font-black mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-xl font-bold mb-2 text-white/95">{stat.label}</div>
              <div className="text-sm opacity-80 text-white/80">{stat.description}</div>
            </div>
          ))}
        </div> */}

        <div className="text-center space-y-8">
          <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20">
            <div className="flex -space-x-0">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-6 h-6 text-yellow-300 fill-current drop-shadow-lg" />
              ))}
            </div>
            <div className="h-6 w-px bg-white/30"></div>
            <span className="text-white font-semibold text-lg">Rated 4.9/5 by our users</span>
          </div>

          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl italic text-white/90 leading-relaxed">
              "KoraBuild transformed our building experience. The transparency and professional management gave us complete confidence throughout the entire process."
            </blockquote>
            <div className="mt-6 flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">Sarah & Michael T.</div>
                <div className="text-white/70 text-sm">Diaspora Clients, UK → Zimbabwe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
