import { redirect } from "next/navigation"

        {/* Company Info Banner */}
        <div className="mb-12 border-2 border-[#d4a574] bg-[#d4a574]/5 p-6">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d4a574]">Company Name</p>
              <p className="mt-1 text-white">HMCFO LTD</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d4a574]">Company Registration</p>
              <p className="mt-1 text-lg font-semibold text-[#d4a574]">Co no. 16814928</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#d4a574]">Jurisdiction</p>
              <p className="mt-1 text-white">England & Wales</p>
            </div>
          </div>
        </div>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="mb-4 text-2xl font-light text-white">1. Introduction</h2>
            <p className="leading-relaxed">
              At HMCFO Ltd, we are committed to protecting your privacy. This Privacy Policy explains how we collect,
              use, and protect your personal information when you visit our website or engage with our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Information We Collect</h2>
            <p className="mb-4 leading-relaxed">We may collect the following information:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Personal details such as your name, email address, and phone number.</li>
              <li>Company or business information when you contact us for services.</li>
              <li>Usage data, such as IP address, browser type, and pages visited on our website.</li>
              <li>Information submitted through contact or inquiry forms.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. How We Use Your Information</h2>
            <p className="mb-4 leading-relaxed">We use the collected information to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Respond to your inquiries or service requests.</li>
              <li>Provide and improve our advertising and creative services.</li>
              <li>Manage client relationships and project communication.</li>
              <li>Send updates, proposals, or relevant marketing content (if you opt-in).</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. Cookies and Tracking Technologies</h2>
            <p className="leading-relaxed">
              Our website may use cookies to enhance user experience and analyse site traffic. You can choose to disable
              cookies in your browser settings, but this may affect website functionality.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed">
              We do not sell or rent personal information to third parties. However, we may share limited data with
              trusted service providers (such as analytics or hosting partners) who assist us in running our website and
              delivering services. All such partners are required to handle your data securely and in compliance with
              applicable privacy laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your information only for as long as necessary to fulfil the purposes outlined in this policy or
              as required by law. Information related to business transactions may be stored for accounting and
              record-keeping purposes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. Your Rights</h2>
            <p className="mb-4 leading-relaxed">Under applicable data protection laws, you have the right to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Access, update, or delete your personal data.</li>
              <li>Withdraw consent to receive marketing communications.</li>
              <li>Request information on how your data is being processed.</li>
              <li>File a complaint with the UK Information Commissioner's Office (ICO).</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. Security of Your Information</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organisational measures to protect your data against loss, misuse,
              or unauthorised access. While we take all reasonable precautions, no system can guarantee complete
              security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Links to Other Websites</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or
              content of those sites. We encourage you to review their privacy policies before sharing any personal
              information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">10. Updates to This Policy</h2>
            <p className="leading-relaxed">
              HMCFO may update this Privacy Policy periodically. Any changes will be posted on this page with an updated
              "Last Updated" date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Privacy Policy, please contact us at:
              <br />📧 info@hmcfo.cc
              <br />🌐 www.hmcfo.co.uk
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
