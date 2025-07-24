import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Play, Building, Smartphone, Users, Star, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-[#f08121]/5 overflow-hidden">
      {/* Refined Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-gradient-to-r from-[#f08121]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[600px] h-[600px] bg-gradient-to-l from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#f08121]/4 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 pt-24">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* Enhanced Content */}
          <div className="lg:col-span-7 space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md rounded-full text-[#f08121] text-sm font-semibold border border-[#f08121]/20 shadow-lg">
              <div className="w-2 h-2 bg-[#f08121] rounded-full mr-3 animate-pulse"></div>
              <Star className="w-4 h-4 mr-2" />
              Africa's Premier Construction Platform
            </div>

            {/* Hero Title */}
            <div className="space-y-8">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
                <span className="block text-gray-900">Build Your</span>
                <span className="block bg-gradient-to-r from-[#f08121] via-[#e07420] to-[#f08121] bg-clip-text text-transparent">
                  Dream Home
                </span>
                <span className="block text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-bold mt-4">
                  With Complete
                </span>
                <span className="block text-gray-900 text-4xl sm:text-5xl lg:text-6xl font-bold">
                  Confidence
                </span>
              </h1>

              <p className="text-lg sm:text-2xl text-gray-600 leading-relaxed max-w-2xl font-light">
              With KoraBuild, building your home from anywhere in the world is now possible. 
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-100/50">
                <div className="w-12 h-12 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Digital Control</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Complete project oversight through our advanced mobile platform
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-gray-100/50">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Vetted professionals managing every aspect of your build
                  </p>
                </div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-[#f08121]/10 via-[#f08121]/5 to-transparent rounded-3xl p-8 border-l-4 border-[#f08121]">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900">Why Choose KoraBuild?</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Full financial transparency",
                    "Real-time progress tracking",
                    "Professional quality assurance",
                    "Global accessibility"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#f08121] flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#f08121] to-[#e07420] hover:from-[#e07420] hover:to-[#d06620] text-white font-bold px-12 py-6 rounded-3xl shadow-2xl shadow-[#f08121]/25 hover:shadow-3xl hover:shadow-[#f08121]/30 transition-all duration-300 transform hover:scale-105 text-lg group"
              >
                Start Your Project
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#f08121] text-[#f08121] hover:bg-[#f08121] hover:text-white font-bold px-12 py-6 rounded-3xl transition-all duration-300 bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl text-lg"
              >
                <Download className="w-6 h-6 mr-3" />
                Download App
              </Button>
            </div>

            {/* Trust Indicators */}
            {/* <div className="flex items-center space-x-8 pt-8 border-t border-gray-200/60">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-full flex items-center justify-center text-white font-bold border-3 border-white shadow-lg text-sm">
                    K
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold border-3 border-white shadow-lg text-sm">
                    B
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold border-3 border-white shadow-lg text-sm">
                    +
                  </div>
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">1000+ Projects</p>
                  <p className="text-sm text-gray-600">Successfully completed</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-base font-bold text-gray-900">4.9 Rating</p>
                  <p className="text-sm text-gray-600">App store average</p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Enhanced Visual Section */}
          <div className="lg:col-span-5 relative">
            {/* Main Video Showcase */}
            <div className="relative mb-8">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-200/20">
                <video
                  src="/promo.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  title="KoraBuild Promo Video"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="bg-white rounded-full p-4 shadow-2xl border border-gray-200">
                  <Play className="w-8 h-8 text-[#f08121]" />
                </div>
              </div>
            </div>

            {/* App Screenshots */}
            <div className="flex justify-center space-x-6 mt-12">
              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2010.00.57-xmAwoyTK5Oi2CWSBipgdI5Z57QN3pb.jpeg"
                  alt="KoraBuild App Welcome Screen"
                  className="w-48 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 group-hover:scale-105 border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f08121]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2011.55.50%20%281%29-HQDlay6gP72cKaxkXyZfpkPTQmASVO.jpeg"
                  alt="KoraBuild App Dashboard"
                  className="w-48 rounded-3xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 group-hover:scale-105 border-4 border-white"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f08121]/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Refined Floating Elements */}
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border border-gray-200">
              <ArrowRight className="w-10 h-10 text-[#f08121]" />
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 -right-4 w-4 h-4 bg-[#f08121] rounded-full animate-ping"></div>
            <div className="absolute bottom-1/4 -left-4 w-3 h-3 bg-[#e07420] rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

