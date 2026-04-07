export default function FinancialCrimePrevention() {
  return (
    <div className="min-h-screen bg-[#0a0e27]">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="mb-8 text-center text-5xl font-light text-white">Financial Crime Prevention</h1>
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
              HMCFO LTD is committed to maintaining the highest standards of integrity and ethics in all business operations. This Financial Crime Prevention Procedure establishes the framework for preventing, detecting, and responding to financial crime, including money laundering, fraud, bribery, and terrorist financing.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">2. Purpose</h2>
            <p className="mb-4 leading-relaxed">The purpose of this procedure is to:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Protect HMCFO LTD, its employees, clients, and stakeholders from financial crime.</li>
              <li>Ensure compliance with all applicable laws and regulations, including the UK Money Laundering Regulations 2017 and the Proceeds of Crime Act 2002.</li>
              <li>Promote a culture of transparency, accountability, and vigilance.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">3. Scope</h2>
            <p className="leading-relaxed">
              This procedure applies to all directors, employees, contractors, and third-party partners of HMCFO LTD.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">4. Definitions</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Financial Crime:</strong> Any unlawful activity intended to result in financial gain.</li>
              <li><strong>Money Laundering:</strong> The process of concealing the origins of illegally obtained money.</li>
              <li><strong>Fraud:</strong> Dishonest activity intended to secure unfair or unlawful gain.</li>
              <li><strong>Bribery & Corruption:</strong> Offering, giving, receiving, or soliciting something of value to influence a decision improperly.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">5. Responsibilities</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li><strong>Board of Directors:</strong> Overall responsibility for oversight of financial crime prevention.</li>
              <li><strong>Compliance Officer:</strong> Responsible for monitoring compliance, implementing controls, and reporting suspicious activities.</li>
              <li><strong>Employees:</strong> Must report any suspicious activities immediately and adhere to this procedure.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">6. Customer Due Diligence (CDD)</h2>
            <p className="mb-4 leading-relaxed">HMCFO LTD will:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Conduct risk-based CDD on all clients, including identification and verification of beneficial ownership.</li>
              <li>Maintain records of all CDD measures and transactions.</li>
              <li>Review and update CDD information regularly, with heightened scrutiny for high-risk clients.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">7. Reporting Suspicious Activity</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Employees must report any suspicious transactions to the Compliance Officer immediately.</li>
              <li>Reports will be reviewed, and if necessary, reported to the relevant regulatory authorities.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">8. Record Keeping</h2>
            <p className="mb-4 leading-relaxed">HMCFO LTD will maintain records of:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Customer identification and verification documents.</li>
              <li>Transaction records and risk assessments.</li>
              <li>Reports of suspicious activity and internal investigations.</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              Records will be retained for a minimum of 5 years or as required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">9. Training and Awareness</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>All employees will receive regular training on financial crime prevention.</li>
              <li>The Compliance Officer will ensure training programs are updated according to regulatory changes.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">10. Review of Procedure</h2>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>This procedure will be reviewed at least annually or sooner if required by regulatory changes or operational developments.</li>
              <li>The Compliance Officer is responsible for ensuring the procedure remains effective.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-light text-white">11. Contact Us</h2>
            <p className="leading-relaxed">
              If you have any questions or concerns about this Financial Crime Prevention Policy, please contact us at:
              <br />
              <span className="inline-block pt-2">📧 info@hmcfo.cc</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
