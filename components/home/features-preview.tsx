import Link from "next/link"
import { Eye, Package, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Eye,
    title: "Your Window into the Build",
    description: "Follow every stage of your project from anywhere with real-time updates and reports.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Package,
    title: "Materials Procurement",
    description: "Monitor materials sourcing, order status, and delivery timelines with full transparency.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Users,
    title: "Contractor Management",
    description: "Work with vetted contractors while maintaining transparent oversight of all tasks.",
    color: "from-purple-500 to-purple-600",
  },
]

export default function FeaturesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need to Build
            <span className="block text-[#f08121]">With Confidence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're building your first home, renovating or you're building from abroad, KoraBuild gives you
            visibility, control, and peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#f08121]/20"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>

              <div className="absolute inset-0 bg-gradient-to-r from-[#f08121]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Explore All Features
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
