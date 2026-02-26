import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="mb-4 inline-block">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                <span className="text-sm font-semibold text-black">HMCFO</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              Creative advertising solutions for the film and cinema industry.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold tracking-wider text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Film Launch Campaigns
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Cinema Branding
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Digital Advertising
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 transition-colors hover:text-[#d4a574]">
                  Creative Production
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© 2025 HMCFO Ltd — All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-[#d4a574]">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="transition-colors hover:text-[#d4a574]">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
