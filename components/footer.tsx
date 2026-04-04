import Link from "next/link"
import { Mail, Phone, MapPin, Briefcase } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-6 h-6 text-white" />
              <span className="text-white font-bold">HMCFO LTD</span>
            </div>
            <p className="text-sm leading-relaxed">
              Your trusted partner in business growth, efficiency, and success.
            </p>
            <p className="text-xs mt-3 text-gray-500">Co no. 16814928 — Registered in England & Wales</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Administrative Support</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Business Consultancy</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">HR & Staffing</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">Marketing & Branding</Link></li>
              <li><Link href="/services" className="text-sm hover:text-white transition-colors">IT & Digital Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-sm hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+16468205995" className="text-sm hover:text-white transition-colors">+1 (646) 820 5995</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@customerhelp.cc" className="text-sm hover:text-white transition-colors">contact@customerhelp.cc</a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <p className="text-xs leading-relaxed">
                  Silverstream House, Fitzroy Street, Fitzrovia, London W1T 6EB, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} HMCFO LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
