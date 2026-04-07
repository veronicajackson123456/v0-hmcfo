import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CheckCircle2, MapPin } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-balance">
            Your Trusted Partner in{" "}
            <span className="text-blue-600">Business Growth</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed text-pretty">
            HMCFO LTD provides comprehensive business support services to help your company thrive. From administrative
            support to human resources and more, we&apos;ve got you covered.
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

      <Footer />
    </div>
  )
}
