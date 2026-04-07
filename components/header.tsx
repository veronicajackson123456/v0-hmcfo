"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-600" strokeWidth={2} />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray-900 leading-tight">HMCFO LTD</span>
            <span className="text-xs text-gray-600 leading-tight">Business Solutions</span>
            <span className="text-xs text-gray-500 leading-tight">#: 16814928</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                pathname === item.href ? "text-blue-600" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Button asChild className="hidden md:flex bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">Get Started</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`border-b border-gray-100 py-3 text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
