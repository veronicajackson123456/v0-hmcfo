import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-800 bg-[#0a0e27]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-xl font-light text-white">
              HMCFO<span className="text-[#d4a574]">.</span>
            </div>
          </Link>
          <div className="hidden gap-8 md:flex">
            <Link href="/" className="text-sm text-gray-400 transition-colors hover:text-[#d4a574]">
              Home
            </Link>
            <Link href="/services" className="text-sm text-gray-400 transition-colors hover:text-[#d4a574]">
              Services
            </Link>
            <Link href="/about" className="text-sm text-gray-400 transition-colors hover:text-[#d4a574]">
              About
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 transition-colors hover:text-[#d4a574]">
              Contact
            </Link>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded border border-[#d4a574] px-4 py-2 text-sm font-light text-[#d4a574] transition-all hover:bg-[#d4a574]/10"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-light leading-tight text-white md:text-6xl">
            Your Trusted Partner in <span className="text-[#d4a574]">Business Growth</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 leading-relaxed">
            HMCFO LTD delivers comprehensive business support services designed to help your company thrive in today's competitive landscape.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded bg-[#d4a574] px-8 py-3 font-light text-black transition-all hover:bg-[#d4a574]/90"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded border border-[#d4a574] px-8 py-3 font-light text-[#d4a574] transition-all hover:bg-[#d4a574]/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="border-t border-gray-800 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-light text-white">Our Services</h2>
            <p className="text-gray-400">Comprehensive solutions tailored to your business needs</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Administrative Support',
                desc: 'Virtual assistance and document management to streamline your operations.',
              },
              {
                title: 'Business Consultancy',
                desc: 'Strategic planning and operational efficiency reviews for sustainable growth.',
              },
              {
                title: 'HR & Staffing Solutions',
                desc: 'Recruitment, HR policy creation, and employee relations management.',
              },
              {
                title: 'Marketing & Branding',
                desc: 'Brand strategy, SEO, social media management, and digital campaigns.',
              },
              {
                title: 'IT & Digital Solutions',
                desc: 'Website development, cloud infrastructure, and cybersecurity services.',
              },
              {
                title: 'Compliance & Legal',
                desc: 'Regulatory compliance, GDPR, and comprehensive policy review services.',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border border-gray-800 bg-black/30 p-6 transition-all hover:border-[#d4a574] hover:bg-[#d4a574]/5"
              >
                <h3 className="mb-2 text-lg font-light text-white">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="border-t border-gray-800 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-light text-white">Why Choose HMCFO?</h2>
              <div className="space-y-6">
                {[
                  'Experienced professionals with years of industry expertise',
                  'Tailored solutions customized to your specific business needs',
                  'Cost-effective services without long-term commitments',
                  'UK Registered Company (Co no. 16814928)',
                ].map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#d4a574]" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-2 border-[#d4a574] bg-[#d4a574]/5 p-8">
              <h3 className="mb-6 text-2xl font-light text-white">Ready to Transform Your Business?</h3>
              <p className="mb-8 text-gray-300">
                Let our expert team help you achieve your business objectives with proven strategies and professional support.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full rounded bg-[#d4a574] px-8 py-3 font-light text-black transition-all hover:bg-[#d4a574]/90"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-800 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-light text-white">Let's Grow Together</h2>
          <p className="mb-8 text-gray-400">
            Join businesses across the UK who trust HMCFO LTD for their professional support needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded bg-[#d4a574] px-8 py-3 font-light text-black transition-all hover:bg-[#d4a574]/90"
          >
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
