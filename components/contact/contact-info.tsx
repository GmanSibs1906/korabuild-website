import { Download, Smartphone, HeadphonesIcon, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactInfo() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f08121] via-[#e07420] to-[#f08121] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Get the KoraBuild App for Complete Support</h2>
            <p className="text-xl opacity-90 leading-relaxed max-w-3xl mx-auto">
              Access all KoraBuild features, get instant support, and manage your construction project from anywhere with our mobile app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">In-App Support</h3>
              <p className="text-white/80 leading-relaxed">
                Get direct access to our support team through the app's messaging feature
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Assistance</h3>
              <p className="text-white/80 leading-relaxed">
                Round-the-clock support for urgent project matters and technical issues
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
              <p className="text-white/80 leading-relaxed">
                Professional advice from construction experts and project managers
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Building Experience?</h3>
                <p className="text-white/90 leading-relaxed mb-6">
                  Download the KoraBuild app today and join thousands of satisfied homeowners who have built their dream homes with our professional support and innovative technology.
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Real-time project tracking and updates</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Direct communication with your project team</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Complete financial transparency and control</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span>Expert support whenever you need it</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <Button className="bg-white text-[#f08121] hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg mb-4">
                  <Download className="w-5 h-5 mr-3" />
                  Download KoraBuild App
                </Button>
                <p className="text-white/70 text-sm">
                  Available on iOS and Android
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
