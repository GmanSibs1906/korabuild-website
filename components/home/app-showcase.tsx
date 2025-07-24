import { Smartphone, Shield, Zap } from "lucide-react"

export default function AppShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Your Digital Interface to
                <span className="block text-[#f08121]">Professional Construction</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                The KoraBuild App puts the power of professional construction management in your hands, giving you
                complete visibility and control over your project.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile-First Design</h3>
                  <p className="text-gray-300">
                    Access your project from anywhere, anytime with our intuitive mobile interface.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
                  <p className="text-gray-300">
                    Bank-level security with PIN protection and encrypted data transmission.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#f08121] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
                  <p className="text-gray-300">
                    Get instant notifications about project progress, payments, and important milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2011.55.50%20%281%29-HQDlay6gP72cKaxkXyZfpkPTQmASVO.jpeg"
                alt="KoraBuild App Dashboard"
                className="w-80 mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            {/* Glowing effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#f08121]/20 to-transparent rounded-3xl blur-3xl"></div>

            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#f08121]/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#f08121]/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
