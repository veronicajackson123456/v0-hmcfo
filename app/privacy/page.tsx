import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase } from "lucide-react"

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: January 2025</p>

        <div className="prose prose-gray max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              HMCFO LTD (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your personal information and your right to
              privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Personal identification information (name, email address, phone number)</li>
              <li>Business information (company name, job title)</li>
              <li>Communication data (messages sent through our contact form)</li>
              <li>Usage data (how you interact with our website)</li>
              <li>Technical data (IP address, browser type, device information)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide and improve our business support services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send relevant business communications</li>
              <li>Comply with legal obligations</li>
              <li>Analyse website usage to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or rent your personal information to third parties. We may share data with trusted
              service providers who assist us in operating our website and providing services, subject to confidentiality
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organisational security measures to protect your personal
              information against unauthorised access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Access:</strong> Request copies of your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your information to another service</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:contact@customerhelp.cc" className="text-blue-600 hover:underline">contact@customerhelp.cc</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
