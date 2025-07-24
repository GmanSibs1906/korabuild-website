import { Download, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Kora</span>
              <span className="text-[#f08121]">Build</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your homebuilding partner, in your pocket. Building dreams with confidence, transparency, and professional
              support.
            </p>
            <Button className="bg-[#f08121] hover:bg-[#e07420] text-white">
              <Download className="w-4 h-4 mr-2" />
              Download App
            </Button>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a href="#services" className="block text-gray-400 hover:text-[#f08121] transition-colors">
                Services
              </a>
              <a href="#who-we-serve" className="block text-gray-400 hover:text-[#f08121] transition-colors">
                Who We Serve
              </a>
              <a href="#why-korabuild" className="block text-gray-400 hover:text-[#f08121] transition-colors">
                Why KoraBuild
              </a>
              <a href="#app-guide" className="block text-gray-400 hover:text-[#f08121] transition-colors">
                How It Works
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Materials Procurement</p>
              <p>Contractor Management</p>
              <p>Project Oversight</p>
              <p>Budget Management</p>
              <p>Document Management</p>
              <p>Progress Tracking</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@korabuild.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Building across Africa</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 KoraBuild. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#f08121] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f08121] text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#f08121] text-sm transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
