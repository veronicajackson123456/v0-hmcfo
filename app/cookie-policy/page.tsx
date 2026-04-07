export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-light text-white">Cookie Policy</h1>
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
            <h2 className="mb-4 text-2xl font-light text-white">1. What Are Cookies?</h2>
            <p className="leading-relaxed">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit our website. They are designed to remember your preferences and enhance your browsing experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Types of Cookies We Use</h2>
            <p className="mb-4 leading-relaxed">Our website uses the following types of cookies:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic functions like navigation and security.</li>
              <li><strong>Performance Cookies:</strong> These cookies help us understand how visitors interact with our website. They collect anonymous data about page visits, navigation patterns, and time spent on pages.</li>
              <li><strong>Marketing Cookies:</strong> These cookies track your activity across websites to deliver targeted advertising content that may be of interest to you.</li>
              <li><strong>Functional Cookies:</strong> These cookies allow us to remember your preferences and provide personalised features.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. Third-Party Cookies</h2>
            <p className="leading-relaxed">
              Our website may include content or tools from third-party providers (such as analytics services, advertising partners, and social media platforms). These third parties may also set cookies on your device. We do not control these third-party cookies, and we encourage you to review their privacy policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. How You Can Control Cookies</h2>
            <p className="mb-4 leading-relaxed">You have the right to choose whether or not to accept cookies. You can:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Refuse cookies through your browser settings.</li>
              <li>Delete cookies that have already been set on your device.</li>
              <li>Use privacy-focused browser extensions to block cookies.</li>
              <li>Opt-out of specific cookie categories through our website preferences.</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Please note that disabling certain cookies may affect the functionality of our website and your user experience.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. Browser Settings</h2>
            <p className="leading-relaxed">
              Most web browsers allow you to control cookies through their settings. You can typically find cookie settings in your browser&apos;s preferences or privacy options. For more information about managing cookies, visit your browser&apos;s help section or the following resources:
            </p>
            <ul className="list-inside list-disc space-y-2 pl-4 pt-3">
              <li>Google Chrome: support.google.com/chrome</li>
              <li>Firefox: support.mozilla.org</li>
              <li>Safari: support.apple.com</li>
              <li>Microsoft Edge: support.microsoft.com</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Cookie Duration</h2>
            <p className="leading-relaxed">
              Some cookies are &quot;session cookies&quot; and are automatically deleted when you close your browser. Others are &quot;persistent cookies&quot; that remain on your device for a specified period, ranging from a few days to several months.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. International Visitors</h2>
            <p className="leading-relaxed">
              If you are located outside the UK, please be aware that this website is subject to UK and EU data protection laws, including the GDPR. By using our website, you consent to the use of cookies as described in this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Cookie Policy periodically to reflect changes in our practices or in response to legal or regulatory updates. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Cookie Policy or our use of cookies, please contact us at:
              <br />
              <span className="inline-block pt-2">📧 info@hmcfo.cc</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
