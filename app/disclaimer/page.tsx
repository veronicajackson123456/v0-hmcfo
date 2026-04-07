export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-light text-white">Disclaimer</h1>
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
            <h2 className="mb-4 text-2xl font-light text-white">1. General Disclaimer</h2>
            <p className="leading-relaxed">
              The information, materials, and services provided on this website are provided &quot;as is&quot; without any warranties, express or implied. HMCFO LTD makes no representations or warranties regarding the accuracy, completeness, reliability, or suitability of the information on this website for any purpose.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Use at Your Own Risk</h2>
            <p className="leading-relaxed">
              Your use of this website and any information or materials contained herein is entirely at your own risk. HMCFO LTD shall not be liable for any loss or damage arising from your reliance on information provided on this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. No Professional Advice</h2>
            <p className="leading-relaxed">
              The content on this website is for informational purposes only and should not be construed as professional advice. If you require professional advice (legal, financial, technical, or otherwise), please consult with a qualified professional. HMCFO LTD does not provide legal, financial, or other professional advice through this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. No Warranty of Uninterrupted Service</h2>
            <p className="leading-relaxed">
              While we strive to maintain continuous and uninterrupted service, we do not warrant that our website will be available at all times without interruption or error. We reserve the right to modify, suspend, or discontinue our website or any services at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. Third-Party Content and Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites and may include content from external sources. HMCFO LTD does not endorse, warrant, or assume responsibility for the accuracy, legality, or appropriateness of any third-party content or websites. Your access to and use of third-party websites are at your own risk and subject to the terms and conditions of those websites.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, HMCFO LTD shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, arising from your use of or inability to use this website or any services provided, even if HMCFO LTD has been advised of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. Accuracy of Information</h2>
            <p className="leading-relaxed">
              While we endeavour to maintain accurate and current information on this website, we make no guarantees regarding the accuracy, currency, or completeness of any information. Information may become outdated without notice. HMCFO LTD is not obligated to update information on this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. User Responsibilities</h2>
            <p className="leading-relaxed">
              Users are responsible for ensuring their use of this website complies with all applicable laws and regulations. Users agree to indemnify and hold HMCFO LTD harmless from any claims, damages, or liabilities arising from your breach of this disclaimer or any applicable laws.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Changes to Disclaimer</h2>
            <p className="leading-relaxed">
              HMCFO LTD reserves the right to modify this disclaimer at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website following any changes constitutes your acceptance of the revised disclaimer.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">10. Governing Law</h2>
            <p className="leading-relaxed">
              This disclaimer is governed by the laws of England and Wales. Any disputes arising from or related to this disclaimer shall be resolved in the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">11. Severability</h2>
            <p className="leading-relaxed">
              If any provision of this disclaimer is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the full extent permitted by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">12. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions about this Disclaimer, please contact us at:
              <br />
              <span className="inline-block pt-2">📧 info@hmcfo.cc</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
