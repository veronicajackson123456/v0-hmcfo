import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
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

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Disclaimer</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">General Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed">
              The information provided on this website by HMCFO LTD is for general informational purposes only. While
              we strive to keep the information up to date and accurate, we make no representations or warranties of any
              kind about the completeness, accuracy, reliability, or suitability of the information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Advice</h2>
            <p className="text-gray-700 leading-relaxed">
              The content on this website does not constitute professional legal, financial, or business advice. You
              should always seek independent professional advice before making any decisions based on information found
              on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall HMCFO LTD be liable for any loss or damage including, without limitation, indirect or
              consequential loss or damage, arising from the use of this website or from reliance on information
              contained within it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">External Links</h2>
            <p className="text-gray-700 leading-relaxed">
              This website may contain links to external sites. HMCFO LTD has no control over the content or
              availability of those sites and does not endorse or accept responsibility for any information found on
              linked websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions regarding this disclaimer, contact us at:{" "}
              <a href="mailto:contact@customerhelp.cc" className="text-blue-600 hover:underline">contact@customerhelp.cc</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
