import { Building, Hammer, FileCheck, Users, Shield, Globe, Truck, Calculator, Phone, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const coreServices = [
  {
    icon: Building,
    title: "Project Planning & Design",
    description: "Comprehensive architectural planning, site analysis, and design development tailored to your vision and local requirements.",
    features: ["Architectural Design", "Site Survey & Analysis", "3D Visualization", "Permit Planning"],
    image: "/images/plan.jpg",
    category: "Planning"
  },
  {
    icon: Hammer,
    title: "Construction Management",
    description: "Full-scale construction execution with professional project management, ensuring quality delivery on time and within budget.",
    features: ["Site Preparation", "Foundation Work", "Structural Construction", "Finishing Works"],
    image: "/images/28.jpeg",
    category: "Construction"
  },
  {
    icon: Truck,
    title: "Materials Procurement",
    description: "Professional sourcing of high-quality construction materials with transparent pricing and reliable supply chain management.",
    features: ["Quality Material Sourcing", "Cost Optimization", "Supply Chain Management", "Delivery Coordination"],
    image: "/images/mat.jpg",
    category: "Materials"
  },
  {
    icon: Users,
    title: "Contractor & Team Management",
    description: "Vetted professional contractors and skilled craftsmen managed under strict quality and timeline standards.",
    features: ["Vetted Professionals", "Skills Verification", "Performance Management", "Quality Oversight"],
    image: "/images/pros.jpg",
    category: "Management"
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description: "Complete handling of permits, approvals, and regulatory requirements to ensure your project meets all legal standards.",
    features: ["Building Permits", "Environmental Compliance", "Safety Regulations", "Documentation"],
    image: "/images/permit.jpg",
    category: "Legal"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control processes with regular inspections and adherence to international construction standards.",
    features: ["Quality Inspections", "Standards Compliance", "Progress Monitoring", "Issue Resolution"],
    image: "/images/quality.jpg",
    category: "Quality"
  }
]

const specializedServices = [
  {
    icon: Globe,
    title: "Diaspora Construction Services",
    description: "Specialized services for clients building from abroad with enhanced communication and project oversight.",
    features: ["Remote Project Management", "International Communication", "Local Representation", "Currency Management"]
  },
  {
    icon: Calculator,
    title: "Financial Management",
    description: "Transparent budget management with detailed cost tracking and flexible payment arrangements.",
    features: ["Budget Planning", "Cost Tracking", "Payment Management", "Financial Reporting"]
  },
  {
    icon: Phone,
    title: "24/7 Project Support",
    description: "Round-the-clock support and communication ensuring you're always connected to your project.",
    features: ["Real-time Updates", "Emergency Response", "Regular Reporting", "Client Communication"]
  }
]

export default function ServicesList() {
  return (
    <>
      {/* Core Services Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#f08121]/10 rounded-full text-[#f08121] text-sm font-semibold mb-6">
              <Building className="w-4 h-4 mr-2" />
              Our Core Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
              Complete Construction
              <span className="block text-[#f08121]">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From initial planning to final handover, we provide comprehensive construction services that bring your vision to life with professional excellence.
            </p>
          </div>

          <div className="space-y-24">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 items-center`}
              >
                {/* Content */}
                <div className="flex-1 space-y-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl flex items-center justify-center shadow-lg">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600">
                        {service.category}
                      </div>
                    </div>
                    
                    <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-[#f08121] flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className="flex-1 max-w-md lg:max-w-lg">
                  <div className="relative">
                    <div className="w-full h-80 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end justify-center pb-8">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl px-6 py-3 border border-white/20">
                          <span className="text-white font-semibold">{service.category} Services</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[#f08121]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional expertise and support services designed to meet specific client needs and project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="w-16 h-16 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-[#f08121] flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from initial consultation to final handover.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation & Planning", desc: "Initial project assessment and planning phase" },
                { step: "02", title: "Design & Permits", desc: "Architectural design and regulatory approvals" },
                { step: "03", title: "Construction Execution", desc: "Professional construction with quality oversight" },
                { step: "04", title: "Completion & Handover", desc: "Final inspections and project delivery" }
              ].map((phase, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">{phase.step}</span>
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-y-0.5"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get in touch with our team to discuss your construction needs and receive a comprehensive project proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button className="bg-[#f08121] hover:bg-[#e07420] text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Project Quote
              </Button>
            </Link>
            <Link href="/how-to-use">
              <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-2xl transition-all duration-300">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
    </>
  )
}
