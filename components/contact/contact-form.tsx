import { Button } from "@/components/ui/button"
import { Mail, Phone, MessageCircle, MapPin, Clock, Users, HelpCircle, Download, Globe, Shield } from "lucide-react"

const contactMethods = [
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our construction experts",
    contact: "+263 775 529 850",
    availability: "Monday - Friday, 8 AM - 6 PM CAT"
  },
  {
    icon: Mail,
    title: "Email Support", 
    description: "Get detailed project information and quotes",
    contact: "connect@korabuild.com",
    availability: "Response within 24 hours"
  },
  {
    icon: MessageCircle,
    title: "In-App Support",
    description: "Direct messaging through the KoraBuild app",
    contact: "Available in app",
    availability: "Real-time support"
  }
]

const supportTopics = [
  {
    icon: Users,
    title: "Project Consultation",
    description: "Get expert advice on your construction project planning and execution"
  },
  {
    icon: HelpCircle,
    title: "App Usage Help",
    description: "Learn how to use KoraBuild features for maximum project visibility"
  },
  {
    icon: Shield,
    title: "Technical Support",
    description: "Troubleshooting and technical assistance for app-related issues"
  },
  {
    icon: Globe,
    title: "International Clients",
    description: "Specialized support for diaspora clients building from abroad"
  }
]

export default function ContactForm() {
  return (
    <>
      {/* Contact Information Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our expert team is ready to help you with your construction project. Choose the best way to reach us.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Methods */}
            <div className="space-y-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 bg-[#f08121]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <method.icon className="w-7 h-7 text-[#f08121]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-3">{method.description}</p>
                    <p className="text-[#f08121] font-semibold text-lg mb-2">{method.contact}</p>
                    <p className="text-sm text-gray-500">{method.availability}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Location */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-[#f08121] to-[#e07420] rounded-2xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Office</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-lg">Unit 3, 149 The Chase</p>
                  <p className="text-lg">Mt Pleasant, Harare</p>
                  <p className="text-lg">Zimbabwe</p>
                </div>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-white/80" />
                    <span className="text-white/90">Monday - Friday: 8:00 AM - 6:00 PM CAT</span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button className="w-full bg-[#f08121] hover:bg-[#e07420] text-white font-semibold py-3 rounded-xl">
                    <Download className="w-4 h-4 mr-2" />
                    Download KoraBuild App
                  </Button>
                  <Button variant="outline" className="w-full border-[#f08121] text-[#f08121] hover:bg-[#f08121] hover:text-white py-3 rounded-xl">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Topics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Can Help</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team provides comprehensive assistance across all aspects of your construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportTopics.map((topic, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-[#f08121]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <topic.icon className="w-8 h-8 text-[#f08121]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about KoraBuild services and the app.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I get started with KoraBuild?",
                  answer: "Download the KoraBuild app, create your account, and set up your first project. Our team will guide you through the initial setup and project planning."
                },
                {
                  question: "What services does KoraBuild provide?",
                  answer: "We offer complete construction management including project planning, materials procurement, contractor management, quality assurance, and regulatory compliance."
                },
                {
                  question: "Can I use KoraBuild if I'm building from abroad?",
                  answer: "Yes! We specialize in serving diaspora clients with enhanced communication, local representation, and comprehensive project oversight from anywhere in the world."
                },
                {
                  question: "How do I track my project progress?",
                  answer: "The KoraBuild app provides real-time updates, photo documentation, milestone tracking, and direct communication with your project team."
                },
                {
                  question: "What payment options are available?",
                  answer: "We offer flexible payment arrangements including milestone-based payments, budget tracking, and transparent financial management through the app."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
