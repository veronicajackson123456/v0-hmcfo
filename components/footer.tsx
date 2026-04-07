import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">HMCFO LTD</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Comprehensive business support services for UK companies. Professional solutions designed for growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Administrative Support
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Business Consultancy
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  HR & Staffing
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Marketing & Branding
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Credentials
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-[#d4a574]" />
                <a href="mailto:info@hmcfo.cc" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  info@hmcfo.cc
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[#d4a574]" />
                <a href="tel:+447407730791" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  +44 7400 730791
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#d4a574]" />
                <span className="text-gray-400">
                  HMCFO LTD
                  <br />
                  Silverstream House
                  <br />
                  Fitzroy Street
                  <br />
                  Fitzrovia, London
                  <br />
                  W1T 6EB
                </span>
              </li>
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">Company Details</h3>
            <div className="space-y-4">
              <div className="border border-[#d4a574] bg-[#d4a574]/10 px-4 py-3">
                <p className="text-xs text-gray-400">Company Registration</p>
                <p className="text-lg font-semibold text-[#d4a574]">Co no. 16814928</p>
              </div>
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">HMCFO LTD</p>
                <p>UK Registered Company</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2025 HMCFO Ltd — All Rights Reserved.</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#d4a574]">
              Privacy
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/terms-conditions" className="transition-colors hover:text-[#d4a574]">
              Terms
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/cookie-policy" className="transition-colors hover:text-[#d4a574]">
              Cookies
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/data-protection-gdpr" className="transition-colors hover:text-[#d4a574]">
              GDPR
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/acceptable-use-policy" className="transition-colors hover:text-[#d4a574]">
              AUP
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/financial-crime-prevention" className="transition-colors hover:text-[#d4a574]">
              Compliance
            </Link>
            <span className="text-gray-700">•</span>
            <Link href="/disclaimer" className="transition-colors hover:text-[#d4a574]">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
