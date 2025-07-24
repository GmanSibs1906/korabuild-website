import { Eye, Package, Users, BarChart3, CreditCard, FileText, Bell, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Eye,
    title: "Complete Project Visibility",
    description:
      "Real-time access to every aspect of your build. Track progress, receive updates, and make approvals from anywhere in the world.",
    image: "/images/complete.jpg",
    highlight: "Real-time tracking",
  },
  {
    icon: Package,
    title: "Materials & Procurement",
    description:
      "Professional sourcing with full transparency. Monitor deliveries, approve purchases, and ensure quality standards.",
    image: "/images/mat.jpg",
    highlight: "Quality assured",
  },
  {
    icon: Users,
    title: "Expert Team Management",
    description:
      "Vetted contractors and skilled professionals. Transparent progress tracking with quality oversight at every stage.",
    image: "/images/team.jpg",
    highlight: "Vetted professionals",
  },
  {
    icon: FileText,
    title: "Digital Documentation",
    description:
      "Streamlined approval process for plans, permits, and contracts. Efficient document management without delays.",
    image: "/images/request.jpeg",
    highlight: "Seamless approvals",
  },
  {
    icon: CreditCard,
    title: "Financial Transparency",
    description:
      "Complete budget visibility and payment tracking. Monitor expenses in real-time and stay within your planned budget.",
    image: "/images/digital.jpeg",
  },
  // {
  //   icon: FileText,
  //   title: "Digital Documentation",
  //   description:
  //     "Streamlined approval process for plans, permits, and contracts. Efficient document management without delays.",
  //   image: "/images/request.jpeg",
  //   highlight: "Seamless approvals",
  // },
]

export default function ServicesOverview() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#f08121]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#f08121]/10 rounded-full text-[#f08121] text-sm font-semibold mb-6">
            <div className="w-2 h-2 bg-[#f08121] rounded-full mr-2 animate-pulse"></div>
            Digital Construction Management
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Your Build,
            <span className="block text-transparent bg-gradient-to-r from-[#f08121] to-[#e07420] bg-clip-text">
              Reimagined
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Experience construction management like never before. Our comprehensive platform puts you in control while our experts handle the complexity.
          </p>
        </div>

        {/* Services Grid - New Modern Layout */}
        <div className="space-y-24 mb-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
            >
              {/* Content */}
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl flex items-center justify-center shadow-lg">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                      {service.highlight}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Visual Element with Image */}
              <div className="flex-1 max-w-md lg:max-w-lg">
                <div className="relative">
                  <div className="w-full h-80 rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-white/80" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-[#f08121]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 border border-white/20 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 border border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-white/10 rounded-full"></div>
            </div>
            
            <div className="relative text-center max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#f08121] rounded-2xl flex items-center justify-center">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <div className="h-px w-24 bg-gradient-to-r from-[#f08121] to-transparent"></div>
                <h3 className="text-3xl sm:text-4xl font-bold">Stay Connected</h3>
                <div className="h-px w-24 bg-gradient-to-l from-[#f08121] to-transparent"></div>
              </div>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
                Regular insights covering timelines, costs, and site activities. Weekly reports keep you connected to every aspect of your build progress.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/services">
                  <Button className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
                    Explore All Features
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/how-to-use">
                  <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
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
