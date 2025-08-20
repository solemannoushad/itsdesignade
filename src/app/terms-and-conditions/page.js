import React from 'react'

export const metadata = {
  title: 'Terms & Conditions | ThinkLoom',
  description: 'The terms that govern your use of ThinkLoom website and services.'
}

function page() {
  return (
    <main className="min-h-screen bg-white text-black pt-40 pb-24">
      <div className="w-[90%] md:w-[70%] mx-auto space-y-8">
        <h1 className="text-5xl font-bold">Terms & Conditions</h1>
        <p className="text-gray-700">Last updated: August 20, 2025</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms & Conditions
            ("Terms"). If you do not agree, please discontinue use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Services</h2>
          <p>
            We provide creative, branding, and digital services as described on our website and in specific proposals.
            The scope, deliverables, and timelines for any engagement are defined in the signed Statement of Work
            (SOW) or proposal.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Proposals, Fees, and Payments</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fees, milestones, and payment schedules are defined in the SOW/proposal.</li>
            <li>Invoices are due as stated on the invoice; late payments may incur fees or pause of services.</li>
            <li>Deposits and retainers are non-refundable unless otherwise agreed in writing.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Client Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide timely access to information, assets, and feedback.</li>
            <li>Ensure that any provided materials do not infringe third-party rights.</li>
            <li>Designate a single point of contact for approvals and decisions.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>We retain ownership of our pre-existing IP, tools, and know-how.</li>
            <li>Upon full payment, rights to final deliverables are transferred as defined in the SOW/proposal.</li>
            <li>We may showcase non-confidential work in our portfolio unless otherwise agreed.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Revisions and Change Requests</h2>
          <p>
            Revisions are limited to the number specified in the SOW/proposal. Additional or out-of-scope changes
            may be billed separately and may impact timelines.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Confidentiality</h2>
          <p>
            Both parties agree to keep confidential information private and to use it only for the purposes of the
            project. This obligation survives termination.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Warranties and Disclaimers</h2>
          <p>
            Services are provided on an "as is" basis. We do not warrant uninterrupted or error-free operation.
            To the fullest extent permitted by law, we disclaim implied warranties of merchantability, fitness for a
            particular purpose, and non-infringement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, in no event shall we be liable for any indirect, incidental,
            special, consequential, or punitive damages, or lost profits, arising out of or related to the services.
            Our total liability shall not exceed the fees paid to us in the three (3) months preceding the claim.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Termination</h2>
          <p>
            Either party may terminate an engagement for material breach if not cured within a reasonable notice
            period. Upon termination, you agree to pay for work performed up to the termination date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Non-Solicitation</h2>
          <p>
            During the engagement and for twelve (12) months thereafter, you agree not to directly solicit our
            employees or contractors who worked on your project, without prior written consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws applicable in our principal place of business, without regard to
            conflict of laws principles, unless otherwise stated in the SOW.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">13. Changes to Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our website or services following a change
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">14. Contact</h2>
          <p>
            Questions about these Terms? Reach out via our <a href="/#contact" className="underline">contact form</a>.
          </p>
        </section>
      </div>
    </main>
  )
}

export default page
