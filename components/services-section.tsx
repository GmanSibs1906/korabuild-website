import { Eye, Package, Users, BarChart3, CreditCard, FileText, Bell } from "lucide-react"

const services = [
  {
    icon: Eye,
    title: "Your Window into the Build",
    description:
      "The app connects you to KoraBuild's expert services—so you can follow every stage of your project from anywhere. Get updates, approvals, and reports in real time.",
  },
  {
    icon: Package,
    title: "Materials Procurement Visibility",
    description:
      "Through the app, monitor materials sourcing, order status, and delivery timelines. KoraBuild ensures quality and reliability—so nothing delays your build.",
  },
  {
    icon: Users,
    title: "Contractor Management",
    description:
      "KoraBuild works with vetted, skilled contractors and oversees their work. The app gives you a transparent view of task progress, quality checks, and issue resolution.",
  },
  {
    icon: BarChart3,
    title: "Project Oversight & Tracking",
    description:
      "We manage the day-to-day construction. You get a clear dashboard with timelines, milestones, and regular progress updates to keep you informed.",
  },
  {
    icon: CreditCard,
    title: "Budget & Payment Management",
    description:
      "Track your build budget, see payment history, and monitor balances. KoraBuild provides full financial transparency and helps you stay within plan.",
  },
  {
    icon: FileText,
    title: "Approvals, Notices & Documents",
    description:
      "Review building plans, contracts, permits, and inspection reports. The app makes it easy to send approvals and receive notices without delays or confusion.",
  },
  {
    icon: Bell,
    title: "Weekly Reports & Notifications",
    description:
      "Get regular insights on how your project is progressing—covering timelines, costs, site activities, and more—so you never feel disconnected from your build.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What the KoraBuild App Does for You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience complete transparency and control over your construction project with our comprehensive suite of
            digital tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-[#f08121] hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-[#f08121]/10 rounded-lg flex items-center justify-center group-hover:bg-[#f08121] transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-[#f08121] group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
