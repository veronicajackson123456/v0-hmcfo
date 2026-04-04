import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Briefcase } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: "📝",
      title: "Administrative Support",
      description: "Keep your operations running smoothly with our efficient administrative services.",
      details: [
        "Virtual assistant and secretarial services",
        "Email and calendar management",
        "Document processing and data entry",
        "CRM and database management",
        "Office workflow setup and optimisation",
      ],
    },
    {
      icon: "💼",
      title: "Business Consultancy",
      description: "Strategic insight for smarter decisions.",
      details: [
        "Business planning and performance improvement",
        "Market research and feasibility studies",
        "Operational efficiency reviews",
        "Risk and compliance assessment",
        "Change management and restructuring",
      ],
    },
    {
      icon: "👔",
      title: "Human Resources & Staffing",
      description: "Build the team your business deserves.",
      details: [
        "Recruitment and onboarding",
        "HR policy creation and compliance",
        "Employee relations and performance management",
        "Payroll and benefits administration",
        "Outsourced HR and interim staffing",
      ],
    },
    {
      icon: "📢",
      title: "Marketing & Branding",
      description: "Grow your audience and strengthen your presence.",
      details: [
        "Brand strategy and visual identity",
        "Website content and SEO",
        "Social media management",
        "Email marketing and campaigns",
        "Market positioning and competitor analysis",
      ],
    },
    {
      icon: "💻",
      title: "IT & Digital Solutions",
      description: "Technology that works for your business.",
      details: [
        "Website design and development",
        "Cloud infrastructure and migration",
        "Cybersecurity and data protection",
        "Software integration and automation",
        "IT support and managed services",
      ],
    },
    {
      icon: "🌐",
      title: "Networking & Business Development",
      description: "Open doors and build lasting partnerships.",
      details: [
        "B2B introductions and partnership facilitation",
        "Industry event representation",
        "Strategic alliance development",
        "Sales pipeline support",
        "Business expansion planning",
      ],
    },
    {
      icon: "⚖️",
      title: "Compliance & Legal Administration",
      description: "Stay protected, stay compliant.",
      details: [
        "Regulatory compliance guidance",
        "GDPR and data protection support",
        "Contract review and drafting assistance",
        "Company secretarial services",
        "Policy development and review",
      ],
    },
    {
      icon: "🏢",
      title: "Virtual Office & Outsourcing",
      description: "A professional presence without the overhead.",
      details: [
        "Registered office address services",
        "Mail handling and forwarding",
        "Call answering and reception services",
        "Meeting room access",
        "Full back-office outsourcing",
      ],
    },
  ]

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
            <Link href="/services" className="text-sm font-medium text-blue-600">Services</Link>
            <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</Link>
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
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Comprehensive business support services tailored to help your company thrive.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{service.icon}</span>
                    <span>{service.title}</span>
                  </CardTitle>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-blue-600 mt-0.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Contact us today to discuss which services are right for your business.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            <Link href="/contact">Contact Us Now</Link>
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
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+16468205995" className="text-sm hover:text-white transition-colors">+1 (646) 820 5995</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:contact@customerhelp.cc" className="text-sm hover:text-white transition-colors">contact@customerhelp.cc</a>
                </div>
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
