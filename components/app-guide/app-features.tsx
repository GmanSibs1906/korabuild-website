import { LayoutDashboard, Camera, CreditCard, MessageCircle, FileText, Package, Calendar, Shield, Home, Users, Smartphone, Clock, Search, Bell, Settings, HelpCircle, Lock, Database, CheckCircle, Download, Upload, Target, Wrench } from "lucide-react"

const appSections = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Main Dashboard",
    subtitle: "Your project overview center",
    image: "/images/app-dashboard.jpeg",
    features: [
      {
        icon: Home,
        title: "Project Overview Card",
        description: "View your project name, address, progress bar, timeline status, and contract value in one place."
      },
      {
        icon: CreditCard,
        title: "Financial Summary",
        description: "Track cash available, current phase costs, payment due dates, and overall financial health."
      },
      {
        icon: Bell,
        title: "Quick Actions",
        description: "Access progress updates, recent activity, and important notifications instantly."
      }
    ]
  },
  {
    id: "progress",
    icon: Camera,
    title: "My Build (Progress Tracking)",
    subtitle: "Real-time project monitoring",
    image: "/images/phonePro.png",
    features: [
      {
        icon: CheckCircle,
        title: "Milestone Overview",
        description: "See completion status, current milestones, and timeline comparisons with visual progress indicators."
      },
      {
        icon: Camera,
        title: "Project Photos",
        description: "View photos organized by construction phase with before/after comparisons and full-screen viewing."
      },
      {
        icon: LayoutDashboard,
        title: "Progress Statistics",
        description: "Track overall progress percentages, phase breakdowns, and quality inspection scores."
      }
    ]
  },
  {
    id: "finance",
    icon: CreditCard,
    title: "Finance Management",
    subtitle: "Complete financial transparency",
    image: "/images/phoneFinance.png",
    features: [
      {
        icon: LayoutDashboard,
        title: "Financial Dashboard",
        description: "Monitor budget overview, payment tracking, credit account status, and financial health indicators."
      },
      {
        icon: FileText,
        title: "Payment History",
        description: "Access complete transaction logs, payment categories, digital receipts, and detailed expense analysis."
      },
      {
        icon: Bell,
        title: "Budget Monitoring",
        description: "Receive real-time updates, budget alerts, payment schedules, and cost analysis reports."
      }
    ]
  },
  {
    id: "communication",
    icon: MessageCircle,
    title: "Communication Hub",
    subtitle: "Stay connected with your team",
    image: "/images/phoneMess.png",
    features: [
      {
        icon: MessageCircle,
        title: "Conversation Management",
        description: "Manage project discussions, direct messages, real-time messaging, and complete conversation history."
      },
      {
        icon: FileText,
        title: "Message Features",
        description: "Send text messages with read receipts, file attachments, message reactions, editing, and threading."
      },
      {
        icon: Search,
        title: "Communication Tools",
        description: "Customize notifications, highlight priority messages, search conversations, and access offline."
      }
    ]
  },
  {
    id: "documents",
    icon: FileText,
    title: "Document Management",
    subtitle: "Centralized document storage",
    image: "/images/phoneDoc.png",
    features: [
      {
        icon: Upload,
        title: "Document Upload",
        description: "Upload multiple formats (PDF, images, Office docs), use camera capture, and organize by categories."
      },
      {
        icon: Search,
        title: "Document Organization",
        description: "Filter by categories, search documents, sort by date, and manage files with version control."
      },
      {
        icon: Download,
        title: "Document Sharing",
        description: "Share documents instantly, download locally, control permissions, and backup to cloud storage."
      }
    ]
  },
  {
    id: "orders",
    icon: Package,
    title: "Orders & Materials",
    subtitle: "Material tracking and coordination",
    image: "/images/orders.jpeg",
    features: [
      {
        icon: Package,
        title: "Order Management",
        description: "Track materials needed, view order history, monitor deliveries, and access complete order dashboard."
      },
      {
        icon: CheckCircle,
        title: "Approval Process",
        description: "Review and approve material orders, validate financial impact, request modifications, and prioritize urgent orders."
      },
      {
        icon: Calendar,
        title: "Delivery Coordination",
        description: "Schedule deliveries, coordinate site logistics, confirm received materials, and verify quality."
      }
    ]
  },
  {
    id: "request",
    icon: Target,
    title: "Request Services & Materials",
    subtitle: "Submit requests and get expert support",
    image: "/images/request.jpeg",
    features: [
      {
        icon: Wrench,
        title: "Service Requests",
        description: "Request architectural plans, bill of quantities, project management, consultation, quality inspection, and site visits."
      },
      {
        icon: Package,
        title: "Material Requests",
        description: "Request foundation materials, super-structure elements, roofing materials, and finishing materials for your project."
      },
      {
        icon: Clock,
        title: "Request Tracking",
        description: "Track request status, receive updates, coordinate delivery schedules, and monitor completion progress."
      }
    ]
  }
  // {
  //   id: "security",
  //   icon: Shield,
  //   title: "Security & Features",
  //   subtitle: "Privacy and additional tools",
  //   image: "/images/security.jpg",
  //   features: [
  //     {
  //       icon: Lock,
  //       title: "Security Features",
  //       description: "4-digit PIN protection, biometric login support, auto-lock timeout, and secure session management."
  //     },
  //     {
  //       icon: Bell,
  //       title: "Notification System",
  //       description: "Real-time alerts, push notifications when app is closed, categorized notifications, and notification history."
  //     },
  //     {
  //       icon: Settings,
  //       title: "Settings & Profile",
  //       description: "Manage personal information, account settings, PIN management, request history, and app preferences."
  //     }
  //   ]
  // }
]

const gettingStartedSteps = [
  {
    step: "1",
    icon: Download,
    title: "Download & Install",
    description: "Get KoraBuild from your app store and install it on your device."
  },
  {
    step: "2", 
    icon: Users,
    title: "Registration",
    description: "Sign up with your email address and complete email verification."
  },
  {
    step: "3",
    icon: Lock,
    title: "Set Up Security",
    description: "Set up a 4-digit PIN for app security (required) or enable biometric login."
  },
  {
    step: "4",
    icon: Smartphone,
    title: "First Login",
    description: "Use your email to sign in and access the app with your secure PIN."
  }
]

export default function AppFeatures() {
  return (
    <>
      {/* Getting Started Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#f08121]/10 rounded-full text-[#f08121] text-sm font-semibold mb-6">
              <Smartphone className="w-4 h-4 mr-2" />
              Getting Started
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Your Construction Project
              <span className="block text-[#f08121]">Management Partner</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              KoraBuild provides real-time transparency, financial tracking, and seamless communication for your construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {gettingStartedSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-[#f08121]">
                    <span className="text-xs sm:text-sm font-bold text-[#f08121]">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed App Features */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Complete App Feature Guide</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover every feature designed to give you complete control and visibility over your construction project.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {appSections.map((section, sectionIndex) => (
              <div key={section.id} className={`${sectionIndex % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-8 lg:gap-12 items-center`}>
                {/* Content */}
                <div className="flex-1 space-y-6 sm:space-y-8 order-2 lg:order-1">
                  <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-[#f08121] to-[#e07420] rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <section.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">{section.title}</h3>
                      <p className="text-base sm:text-lg text-gray-500">{section.subtitle}</p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    {section.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">{feature.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phone Mockup Visual Element */}
                <div className="flex-1 flex justify-center order-1 lg:order-2">
                  <div className="relative max-w-xs">
                    <div className="w-60 sm:w-70 h-[400px] sm:h-[510px] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden bg-white">
                      <img 
                        src={section.image} 
                        alt={section.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
                      <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#f08121] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Need Help Getting Started?</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Our support team is here to help you make the most of your KoraBuild app experience. Access support directly through the app or contact us for assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center">
                <div className="text-center">
                  <div className="text-base sm:text-lg font-semibold text-white">In-App Support</div>
                  <div className="text-xs sm:text-sm text-gray-400">Message our team directly through the Communication tab</div>
                </div>
                <div className="text-center">
                  <div className="text-base sm:text-lg font-semibold text-white">Request System</div>
                  <div className="text-xs sm:text-sm text-gray-400">Submit service requests through the floating action button</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
