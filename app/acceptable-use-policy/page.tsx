export default function AcceptableUsePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-light text-white">Acceptable Use Policy</h1>
        <p className="mb-12 text-center text-gray-400">Last Updated: November 2025</p>

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
              This Acceptable Use Policy (AUP) establishes guidelines for the appropriate and ethical use of HMCFO LTD&apos;s website, services, and resources. By accessing and using our website or services, you agree to comply with this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Prohibited Activities</h2>
            <p className="mb-4 leading-relaxed">Users must not:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Attempt to gain unauthorised access to our website or any connected systems.</li>
              <li>Disrupt or interfere with the normal operation of our website or services.</li>
              <li>Post, upload, or distribute illegal, defamatory, abusive, or harmful content.</li>
              <li>Use our website for phishing, fraud, or any malicious purposes.</li>
              <li>Violate any applicable laws, regulations, or third-party rights.</li>
              <li>Engage in harassment, discrimination, or hate speech of any kind.</li>
              <li>Attempt to scrape, spider, or automatically collect data from our website without permission.</li>
              <li>Use our website to distribute malware, viruses, or any harmful code.</li>
              <li>Impersonate another person or organisation.</li>
              <li>Post spam or unsolicited advertising content.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. Responsible Use</h2>
            <p className="mb-4 leading-relaxed">Users should:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Use our website and services only for legitimate, lawful purposes.</li>
              <li>Respect intellectual property rights and confidential information.</li>
              <li>Maintain the security of your account credentials and notify us immediately of any unauthorised access.</li>
              <li>Report any suspected violations of this policy to our compliance team.</li>
              <li>Comply with all applicable laws and regulations in your jurisdiction.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. Intellectual Property Protection</h2>
            <p className="leading-relaxed">
              All content on our website, including text, images, videos, logos, and designs, is protected by intellectual property laws. Users may not reproduce, distribute, or modify this content without our explicit written permission. Unauthorised use may result in legal action.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. User-Generated Content</h2>
            <p className="leading-relaxed">
              If you submit any content to our website (such as feedback, comments, or inquiries), you grant HMCFO LTD the right to use, publish, and modify this content for business purposes. You warrant that any content you submit is original, does not infringe third-party rights, and is not defamatory or illegal.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Monitoring and Enforcement</h2>
            <p className="leading-relaxed">
              HMCFO LTD reserves the right to monitor user activity and enforce this policy. We may take appropriate action, including suspension or termination of access, against users who violate this policy. We may also cooperate with law enforcement authorities if necessary.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. Third-Party Services</h2>
            <p className="leading-relaxed">
              Our website may include links to third-party websites and services. This policy does not apply to those external sites. We are not responsible for the content or practices of third-party websites and encourage you to review their terms of use and privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. Disclaimer of Warranties</h2>
            <p className="leading-relaxed">
              Our website and services are provided &quot;as is&quot; without any warranties or guarantees. HMCFO LTD does not warrant that our website will be error-free, secure, or continuously available. Users assume all risks associated with their use of our website and services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, HMCFO LTD shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of our website or services, even if we have been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">10. Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Acceptable Use Policy periodically. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of our website following any updates constitutes your acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Acceptable Use Policy, please contact us at:
              <br />
              <span className="inline-block pt-2">📧 info@hmcfo.cc</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
