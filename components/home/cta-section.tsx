import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Ready to Build Your
            <span className="block text-[#f08121]">Dream Home?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join thousands of homeowners who trust KoraBuild to manage their construction projects with transparency,
            professionalism, and peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Download className="w-5 h-5 mr-2" />
              Download the KoraBuild App
            </Button>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#f08121] text-[#f08121] hover:bg-[#f08121] hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 bg-transparent"
              >
                Learn More About Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <p className="text-gray-700 font-medium text-lg leading-relaxed">
              "Whether you're building your first home, renovating or you're building from abroad, KoraBuild gives you
              visibility, control, and peace of mind while our experienced team manages the complexity on the ground."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
