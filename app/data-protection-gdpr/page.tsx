export default function DataProtectionGDPRPage() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-light text-white">Data Protection & GDPR</h1>
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
              HMCFO LTD is committed to compliance with data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. This policy outlines our approach to protecting your personal data and your rights under these regulations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Data Controller Information</h2>
            <div className="my-4 border border-gray-700 bg-black/30 p-4">
              <p className="mb-2 text-sm"><strong>Data Controller:</strong> HMCFO LTD</p>
              <p className="mb-2 text-sm"><strong>Company Registration:</strong> Co no. 16814928</p>
              <p className="mb-2 text-sm"><strong>Address:</strong> Silverstream House, Fitzroy Street, Fitzrovia, London W1T 6EB</p>
              <p className="text-sm"><strong>Contact:</strong> info@hmcfo.cc</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. Legal Basis for Processing</h2>
            <p className="mb-4 leading-relaxed">We process personal data based on the following legal grounds under UK GDPR:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Consent:</strong> You have explicitly consented to the processing of your data.</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfil a contract with you.</li>
              <li><strong>Legal Obligation:</strong> We are required by law to process your data.</li>
              <li><strong>Vital Interests:</strong> Processing is necessary to protect your vital interests.</li>
              <li><strong>Public Task:</strong> Processing is necessary for a task in the public interest.</li>
              <li><strong>Legitimate Interests:</strong> We have a legitimate business interest that does not override your rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. Your Data Protection Rights</h2>
            <p className="mb-4 leading-relaxed">Under UK GDPR, you have the following rights:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Right to Access:</strong> You can request a copy of your personal data held by us.</li>
              <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data.</li>
              <li><strong>Right to Erasure:</strong> You can request deletion of your data (subject to legal requirements).</li>
              <li><strong>Right to Restrict Processing:</strong> You can request limitations on how we use your data.</li>
              <li><strong>Right to Data Portability:</strong> You can request your data in a machine-readable format.</li>
              <li><strong>Right to Object:</strong> You can object to certain types of processing.</li>
              <li><strong>Rights Related to Automated Decision-Making:</strong> You have rights regarding decisions based solely on automated processing.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. How to Exercise Your Rights</h2>
            <p className="leading-relaxed">
              To exercise any of these rights, please contact us in writing at the address or email provided above. We will respond to your request within 30 days (or up to three months for complex requests). You may also lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have violated your data protection rights.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy or as required by law. Specific retention periods depend on the type of data and the purposes for which we hold it. Please refer to our Privacy Policy for more detailed retention information.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. International Data Transfers</h2>
            <p className="leading-relaxed">
              If we transfer your data outside the UK and EU, we ensure that adequate safeguards are in place, such as Standard Contractual Clauses (SCCs) or other approved mechanisms under UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data from loss, misuse, unauthorised access, alteration, and destruction. These measures include encryption, secure access controls, regular security assessments, and staff training.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Data Breaches</h2>
            <p className="leading-relaxed">
              In the event of a confirmed data breach, we will notify affected individuals and the ICO without undue delay, as required by UK GDPR, unless the breach poses low risk to personal rights and freedoms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">10. Children&apos;s Data</h2>
            <p className="leading-relaxed">
              Our website and services are not intended for individuals under 13 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will take steps to delete such information and terminate the child&apos;s access to our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">11. Third-Party Data Processors</h2>
            <p className="leading-relaxed">
              We may engage third-party service providers to process data on our behalf (such as hosting providers, analytics services, and email platforms). These processors are contractually obligated to comply with data protection laws and maintain appropriate security measures.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">12. Contact Information Commissioner&apos;s Office (ICO)</h2>
            <p className="leading-relaxed">
              If you wish to lodge a complaint regarding our data protection practices, you can contact the ICO:
            </p>
            <div className="my-4 border border-gray-700 bg-black/30 p-4 text-sm">
              <p><strong>Information Commissioner&apos;s Office</strong></p>
              <p>Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF</p>
              <p>Phone: 0303 123 1113</p>
              <p>Website: www.ico.org.uk</p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">13. Updates to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Data Protection & GDPR Policy periodically to reflect changes in our practices or in response to legal or regulatory updates. Any changes will be posted on this page with an updated &quot;Last Updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">14. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about our data protection practices or this policy, please contact us at:
              <br />
              <span className="inline-block pt-2">📧 info@hmcfo.cc</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
