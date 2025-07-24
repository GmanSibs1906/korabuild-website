import { Building, Users, Globe, CheckCircle } from "lucide-react"

export default function ServicesHero() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-white/15 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-[#f08121]/20 rounded-full text-[#f08121] text-sm font-semibold mb-6">
                <Building className="w-4 h-4 mr-2" />
                Professional Construction Services
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Full-Service Construction
                <span className="block text-[#f08121]">Management</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-300 mt-4">
                  From Ground to Finish
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                KoraBuild delivers comprehensive construction services combining traditional craftsmanship with modern project management, ensuring your dream home becomes reality with professional excellence.
              </p>
            </div>

            {/* Service Highlights */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Complete Construction</h3>
                  <p className="text-gray-400 text-sm">End-to-end project delivery from planning to handover</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Expert Teams</h3>
                  <p className="text-gray-400 text-sm">Vetted professionals with proven construction expertise</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-400 text-sm">Serving local and international clients across Africa</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Quality Assured</h3>
                  <p className="text-gray-400 text-sm">Rigorous quality control and professional standards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              <img 
                src="/images/complete.jpg" 
                alt="KoraBuild Construction Project"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-3 gap-4 text-white text-center">
                    <div>
                      <div className="text-2xl font-bold">100+</div>
                      <div className="text-sm opacity-80">Projects</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">99%</div>
                      <div className="text-sm opacity-80">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-sm opacity-80">Countries</div>
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
