import { Button } from "@/components/ui/button"
import { Download, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                KoraBuild - Your Homebuilding Partner, <span className="text-[#f08121]">In Your Pocket</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                KoraBuild is a full-service platform that helps you build your dream home with confidence—from materials
                procurement and contractor management to full project oversight.
              </p>

              <p className="text-lg text-gray-600">
                The KoraBuild App is your digital interface to access, track, and manage these services—making your
                building journey simpler, more transparent, and fully supported.
              </p>
            </div>

            <div className="bg-[#f08121]/10 p-6 rounded-lg border-l-4 border-[#f08121]">
              <p className="text-gray-700 font-medium">
                Whether you're building your first home, renovating or you're building from abroad, KoraBuild gives you
                visibility, control, and peace of mind while our experienced team manages the complexity on the ground.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#f08121] hover:bg-[#e07420] text-white">
                <Download className="w-5 h-5 mr-2" />
                Download the KoraBuild App today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#f08121] text-[#f08121] hover:bg-[#f08121] hover:text-white bg-transparent"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-[#f08121] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  T
                </div>
                <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  B
                </div>
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                  H
                </div>
              </div>
              <span className="font-medium">Trusted by homeowners building from here or there</span>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2010.00.57-xmAwoyTK5Oi2CWSBipgdI5Z57QN3pb.jpeg"
                alt="KoraBuild App Loading Screen"
                className="w-64 mx-auto rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute top-8 right-8 z-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2011.55.50%20%281%29-HQDlay6gP72cKaxkXyZfpkPTQmASVO.jpeg"
                alt="KoraBuild App Dashboard"
                className="w-56 rounded-3xl shadow-xl opacity-80"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#f08121]/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#f08121]/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
