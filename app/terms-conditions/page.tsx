export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-light text-white">Terms & Conditions</h1>
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
            <h2 className="mb-4 text-2xl font-light text-white">1. About Us</h2>
            <p className="leading-relaxed">
              HMCFO Ltd is a UK-based advertising and creative agency specialising in campaigns for the film, cinema,
              and entertainment industries. Our services include strategic campaign planning, digital marketing,
              creative production, cinema advertising, and media placement.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Intellectual Property Rights</h2>
            <p className="leading-relaxed">
              All content on this website, including text, graphics, logos, videos, and images, is the property of HMCFO
              or its licensors. You may not reproduce, distribute, or use any material without prior written consent
              from HMCFO.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. Use of Website</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Do not copy or reuse website material for commercial use.</li>
              <li>Do not hack, disrupt, or damage the website in any way.</li>
              <li>Do not post or transmit malicious, false, or defamatory content.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. Services and Agreements</h2>
            <p className="leading-relaxed">
              All services provided by HMCFO are governed by written contracts or proposals agreed upon between HMCFO
              and the client. These contracts outline project scope, pricing, timelines, and deliverables. HMCFO
              reserves the right to modify or refuse services at any time.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. Payment Terms</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Payments are subject to terms stated in each client agreement.</li>
              <li>A percentage of the project fee is payable upfront.</li>
              <li>Remaining fees are due upon completion or as specified in the invoice.</li>
              <li>Late payments may incur additional charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Limitation of Liability</h2>
            <p className="leading-relaxed">
              HMCFO shall not be liable for any direct, indirect, or consequential damages arising from the use or
              inability to use our website or services. Our total liability will not exceed the total fees paid by the
              client for the specific project.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. Third-Party Links</h2>
            <p className="leading-relaxed">
              Our website may include links to third-party sites. HMCFO is not responsible for the content, accuracy, or
              practices of these external websites.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. Confidentiality</h2>
            <p className="leading-relaxed">
              All client information, creative materials, and campaign details are treated as confidential and will not
              be shared without written consent unless required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Termination</h2>
            <p className="leading-relaxed">
              HMCFO reserves the right to terminate service agreements if clients breach these terms, fail to make
              payments, or engage in unethical activities related to campaigns or brand representation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms & Conditions are governed by the laws of England and Wales. Any disputes shall be resolved in
              the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">11. Contact Us</h2>
            <p className="leading-relaxed">
              For any questions about these Terms & Conditions, contact us:
              <br />📧 info@hmcfo.co.uk
              <br />🌐 www.hmcfo.co.uk
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
