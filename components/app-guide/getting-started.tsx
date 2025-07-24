import { Smartphone, KeySquare } from "lucide-react"

export default function GettingStarted() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Getting&nbsp;Started</h2>
          <ul className="space-y-4 sm:space-y-6">
            {[
              {
                icon: Smartphone,
                title: "Download & Install",
                text: "Find \"KoraBuild\" in your app store and install it on your device.",
              },
              {
                icon: KeySquare,
                title: "Secure Sign-Up",
                text: "Verify your email, then set a 4-digit PIN or enable biometrics for quick, secure access.",
              },
            ].map((step) => (
              <li key={step.title} className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#f08121]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#f08121]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait Phone Mockup */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative max-w-xs">
            <div className="w-64 sm:w-70 h-[450px] sm:h-[510px] rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden bg-white">
              <img 
                src="/images/app-welcome.jpeg" 
                alt="Getting Started" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
