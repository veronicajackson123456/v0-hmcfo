import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase } from "lucide-react"

export default function TermsPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms & Conditions</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using the services of HMCFO LTD (Company No. 16814928), registered in England and Wales,
              you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms,
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-700 leading-relaxed">
              HMCFO LTD provides comprehensive business support services including administrative support, business
              consultancy, human resources, marketing, IT solutions, and more. All services are subject to separate
              service agreements outlining specific terms, deliverables, and pricing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Website</h2>
            <p className="text-gray-700 leading-relaxed mb-4">When using our website, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide accurate and truthful information</li>
              <li>Not engage in any unlawful or harmful activities</li>
              <li>Not attempt to gain unauthorised access to our systems</li>
              <li>Not reproduce or distribute our content without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of HMCFO LTD
              and is protected by applicable intellectual property laws. You may not reproduce, distribute, or use any
              content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Payment terms for services are outlined in individual service agreements. All invoices are due within the
              timeframe specified. Late payments may incur additional charges. HMCFO LTD reserves the right to suspend
              services for overdue accounts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, HMCFO LTD shall not be liable for any indirect, incidental,
              special, or consequential damages arising from the use of our services or website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions are governed by the laws of England and Wales. Any disputes shall be subject to
              the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms & Conditions, contact us at:{" "}
              <a href="mailto:contact@customerhelp.cc" className="text-blue-600 hover:underline">contact@customerhelp.cc</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
