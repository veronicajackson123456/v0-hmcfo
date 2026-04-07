import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Briefcase } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-blue-600">About</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Page Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About HMCFO LTD</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Your trusted partner in business growth, efficiency, and success.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                HMCFO LTD is a comprehensive business support services company registered in England & Wales (Company
                No. 16814928). We are dedicated to helping businesses of all sizes achieve their goals through expert
                professional services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team of experienced professionals provides tailored solutions across a wide range of business
                functions, from administrative support to human resources and digital transformation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every business deserves access to high-quality professional services, regardless of
                their size or budget. That&apos;s why we offer flexible, cost-effective solutions that can be customised to
                meet your specific needs.
              </p>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Company Registration</h3>
                  <p className="text-gray-600">HMCFO LTD — Co no. 16814928</p>
                  <p className="text-gray-600">Registered in England & Wales</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Registered Address</h3>
                  <p className="text-gray-600">Silverstream House, Fitzroy Street</p>
                  <p className="text-gray-600">Fitzrovia, London W1T 6EB</p>
                  <p className="text-gray-600">United Kingdom</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower businesses with the professional support they need to grow, operate efficiently, and
                    achieve sustainable success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Professionalism", desc: "We maintain the highest standards in everything we do, delivering quality results you can rely on." },
              { title: "Integrity", desc: "We operate with transparency and honesty, building trust with every client we work with." },
              { title: "Excellence", desc: "We are committed to continuous improvement and delivering exceptional results for our clients." },
            ].map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us today to discuss how HMCFO LTD can help your business grow and succeed.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-6 h-6 text-white" />
                <span className="text-white font-bold">HMCFO LTD</span>
              </div>
              <p className="text-sm">Your trusted partner in business growth, efficiency, and success.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-sm hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-sm hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <p className="text-xs leading-relaxed">Silverstream House, Fitzroy Street, Fitzrovia, London W1T 6EB, United Kingdom</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} HMCFO LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
