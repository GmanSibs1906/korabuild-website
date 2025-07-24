import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-r from-[#f08121] to-[#e07420] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 leading-tight">
          Ready to Experience KoraBuild?
        </h3>
        <p className="text-base sm:text-lg opacity-90 mb-8 sm:mb-12 leading-relaxed">
          Join homeowners worldwide who rely on our full-service platform and intuitive app to bring their dream homes
          to life.
        </p>
        <Button
          size="lg"
          className="bg-white text-[#f08121] hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-base sm:text-lg"
        >
          <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          Download the KoraBuild App
        </Button>
      </div>
    </section>
  )
}
