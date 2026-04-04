import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase } from "lucide-react"

export function Navigation() {
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
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
        </nav>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </header>
  )
}
