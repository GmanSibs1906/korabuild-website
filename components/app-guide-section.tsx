import { Smartphone, Shield, MessageCircle, FileText, Package, Calendar } from "lucide-react"

const features = [
  {
    icon: Smartphone,
    title: "Getting Started",
    description:
      "Download the app, create your account with email verification, and set up your secure 4-digit PIN for easy access.",
  },
  {
    icon: MessageCircle,
    title: "Your Main Dashboard",
    description:
      "View project overview, progress tracking, financial summary, and quick access to all important updates in one place.",
  },
  {
    icon: Calendar,
    title: "Track Progress",
    description:
      "Monitor milestone status, current work phases, timeline comparisons, and view project photos organized by construction phase.",
  },
  {
    icon: Package,
    title: "Manage Money",
    description:
      "Full financial transparency with budget tracking, payment history, real-time spending updates, and upcoming payment alerts.",
  },
  {
    icon: MessageCircle,
    title: "Communication Hub",
    description:
      "Stay connected with your construction team through real-time messaging, file sharing, and priority notifications.",
  },
  {
    icon: FileText,
    title: "Document Management",
    description:
      "Upload, organize, and share all project documents including plans, contracts, reports, and inspection records.",
  },
  {
    icon: Package,
    title: "Orders & Materials",
    description:
      "Track material orders, approve purchases, monitor deliveries, and coordinate site logistics in real-time.",
  },
  {
    icon: Shield,
    title: "Security & Support",
    description:
      "PIN protection, biometric login, encrypted data, and 24/7 support through the app's built-in help system.",
  },
]

export default function AppGuideSection() {
  return (
    <section id="app-guide" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How to Use the KoraBuild App</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your construction project partner that gives you full control and visibility, just like a banking app for
            your finances!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-[#f08121]/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#f08121]" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* App Screenshots Showcase */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Experience KoraBuild in Action</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#f08121] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Welcome & Setup</h4>
                    <p className="text-gray-600 text-sm">Get started with our intuitive onboarding process</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#f08121] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Dashboard</h4>
                    <p className="text-gray-600 text-sm">Monitor your project progress and financial status</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-[#f08121] rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Full Control</h4>
                    <p className="text-gray-600 text-sm">Manage every aspect of your build from your phone</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex justify-center space-x-4">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2010.00.57-xmAwoyTK5Oi2CWSBipgdI5Z57QN3pb.jpeg"
                  alt="KoraBuild App Welcome Screen"
                  className="w-48 rounded-2xl shadow-xl"
                />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-07-22%20at%2011.55.50%20%281%29-HQDlay6gP72cKaxkXyZfpkPTQmASVO.jpeg"
                  alt="KoraBuild App Dashboard"
                  className="w-48 rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
