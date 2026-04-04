import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, CheckCircle2, MapPin, Briefcase } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-blue-600" strokeWidth={2} />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 leading-tight">HMCFO LTD</span>
              <span className="text-xs text-gray-600 leading-tight">Business Solutions</span>
              <span className="text-xs text-gray-500 leading-tight">#16814928</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
            Your Trusted Partner in{" "}
            <span className="text-blue-600">Business Growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
            HMCFO LTD provides comprehensive business support services to help your company thrive. From administrative
            support to financial management, we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/services">Explore Our Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>UK Registered Company</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Professional Services</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-balance">Comprehensive Business Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-pretty">
              We offer a wide range of professional services designed to support every aspect of your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Administrative Support",
                desc: "Virtual assistance, document management, and office workflow optimisation.",
                icon: "📝",
              },
              {
                title: "Business Consultancy",
                desc: "Strategic planning, market research, and operational efficiency reviews.",
                icon: "💼",
              },
              {
                title: "Human Resources & Staffing",
                desc: "Recruitment, HR policy creation, payroll, and employee relations.",
                icon: "👔",
              },
              {
                title: "Marketing & Branding",
                desc: "Brand strategy, SEO, social media management, and email campaigns.",
                icon: "📢",
              },
              {
                title: "IT & Digital Solutions",
                desc: "Website development, cloud infrastructure, and cybersecurity.",
                icon: "💻",
              },
              {
                title: "Compliance & Legal Administration",
                desc: "Regulatory compliance, GDPR, contract management, and policy review.",
                icon: "⚖️",
              },
            ].map((service) => (
              <Card key={service.title} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-balance">
                Why Choose HMCFO LTD?
              </h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Experienced Professionals",
                    desc: "Our team brings years of expertise across multiple business disciplines.",
                  },
                  {
                    title: "Tailored Solutions",
                    desc: "We customise our services to meet your specific business needs and goals.",
                  },
                  {
                    title: "Cost-Effective",
                    desc: "Get premium business support without the overhead of full-time employees.",
                  },
                  {
                    title: "UK Registered",
                    desc: "Fully registered company in England & Wales (Co no. 16814928).",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+16468205995" className="hover:underline">+1 (646) 820 5995</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:contact@customerhelp.cc" className="hover:underline">contact@customerhelp.cc</a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm">Silverstream House, Fitzroy Street, Fitzrovia, London W1T 6EB, United Kingdom</p>
                </div>
              </div>
              <Button asChild className="mt-6 bg-white text-blue-600 hover:bg-gray-100 w-full">
                <Link href="/contact">Send Us a Message</Link>
              </Button>
            </div>
          </div>
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
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/services" className="text-sm hover:text-white transition-colors">Administrative Support</Link></li>
                <li><Link href="/services" className="text-sm hover:text-white transition-colors">Business Consultancy</Link></li>
                <li><Link href="/services" className="text-sm hover:text-white transition-colors">HR & Staffing</Link></li>
                <li><Link href="/services" className="text-sm hover:text-white transition-colors">Marketing & Branding</Link></li>
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
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+16468205995" className="text-sm hover:text-white transition-colors">+1 (646) 820 5995</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@customerhelp.cc" className="text-sm hover:text-white transition-colors">contact@customerhelp.cc</a>
                </div>
                <div className="flex items-start gap-2 mt-2">
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
