"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Download, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Our Services", href: "/services" },
  { name: "Who We Serve", href: "/who-we-serve" },
  { name: "Why Choose Us", href: "/why-korabuild" },
  { name: "App Guide", href: "/how-to-use" },
  { name: "Support", href: "/contact" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-6 left-6 right-6 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-gradient-to-r from-[#f08121] to-[#e07420] backdrop-blur-xl shadow-2xl shadow-black/10"
          : "bg-gradient-to-r from-[#f08121]/95 to-[#e07420]/95 backdrop-blur-lg shadow-xl shadow-black/5"
      } rounded-3xl border border-white/20`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <img
                src="/images/korabuild-logo.svg"
                alt="KoraBuild Logo"
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-3 text-sm font-medium rounded-2xl transition-all duration-300 relative overflow-hidden group ${
                  pathname === item.href
                    ? "text-white bg-white/20 shadow-lg shadow-white/10"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
           {/*<div className="hidden md:flex items-center flex-1 max-w-sm mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60 group-focus-within:text-white transition-colors duration-300" />
              <input
                type="text"
                placeholder="Search projects, services..."
                className="w-full pl-12 pr-4 py-3 text-sm rounded-2xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/10 transition-all duration-300 backdrop-blur-md"
              />
            </div>
          </div>*/}

          {/* CTA Buttons */}
           <div className="hidden lg:flex items-center space-x-4">
            {/*<Link href="/contact">
              <Button
                variant="ghost"
                className="font-medium text-white/90 hover:text-white hover:bg-white/15 px-6 py-3 rounded-2xl transition-all duration-300"
              >
                Get Started
              </Button>
            </Link>*/}
            <Button className="bg-white text-[#f08121] hover:bg-white/90 font-semibold px-8 py-3 rounded-2xl shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/20 transition-all duration-300 transform hover:scale-105">
              <Download className="w-4 h-4 mr-2" />
              Get the App
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-2xl text-white/90 hover:bg-white/15 hover:text-white transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-4 text-base font-medium rounded-2xl transition-all duration-300 ${
                    pathname === item.href
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
               {/*<div className="pt-6 space-y-3">
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className="w-full border-white/30 text-white hover:bg-white hover:text-[#f08121] rounded-2xl py-3 bg-transparent"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </Link>
                <Button className="w-full bg-white text-[#f08121] hover:bg-white/90 rounded-2xl py-3">
                  <Download className="w-4 h-4 mr-2" />
                  Get the App
                </Button>
              </div>*/}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
