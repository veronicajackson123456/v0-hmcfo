"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Home } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "SERVICES", href: "/services" },
    { name: "ABOUT", href: "/about" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
            <span className="text-sm font-semibold text-black">HMCFO</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm tracking-wider transition-colors hover:text-[#d4a574] ${
                pathname === item.href ? "text-[#d4a574]" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Side - Language & Home */}
        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2">
            <Image src="https://flagcdn.com/w40/gb.png" alt="UK" width={20} height={15} className="h-4 w-auto" />
            <span className="text-sm text-white">UK</span>
            <ChevronDown className="h-4 w-4 text-white" />
          </div>
          <Link href="/" className="text-white transition-colors hover:text-[#d4a574]">
            <Home className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white md:hidden" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 bg-black md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`border-b border-gray-800 py-4 text-sm tracking-wider transition-colors hover:text-[#d4a574] ${
                  pathname === item.href ? "text-[#d4a574]" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
