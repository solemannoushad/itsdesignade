import Footer from '@/components/Footer'
import TextBgAnimation from '@/components/TextBgAnimation'
import React from 'react'

export const metadata = {
  title: 'Privacy Policy | ThinkLoom',
  description: 'How ThinkLoom collects, uses, and protects your information.'
}

function page() {
  return (
    <>
      <main className="before-footer bg-black text-white pt-64 pb-24">
      <div className="w-[90%] md:w-[70%] mx-auto space-y-8">
      <TextBgAnimation bgColor="#ffc519" className="text-6xl font-bold text-black" text={"Privacy Policy"} />

        <p>
          This Privacy Policy explains how ThinkLoom ("we", "us", "our") collects, uses, discloses, and safeguards
          your information when you visit our website and use our services. By accessing or using our services, you
          agree to the terms of this Policy.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium">Contact information</span> such as name, company, email address, and phone number.</li>
            <li><span className="font-medium">Project details</span> you share via our forms or during discovery calls.</li>
            <li><span className="font-medium">Usage data</span> including pages visited, interactions, and device/browser information.</li>
            <li><span className="font-medium">Cookies and tracking</span> to enable site functionality and analyze performance.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and improve our services and website.</li>
            <li>To respond to inquiries, proposals, and support requests.</li>
            <li>To personalize content and measure site performance.</li>
            <li>To comply with legal obligations and enforce our agreements.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Legal Bases for Processing</h2>
          <p>
            Where applicable (e.g., the EU/UK), we process personal data based on consent, legitimate interests
            (such as service improvement and security), performance of a contract, and compliance with legal obligations.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Cookies</h2>
          <p>
            We use essential and analytics cookies to operate and improve the site. You can control cookies through
            your browser settings. Disabling certain cookies may affect site functionality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Data Retention</h2>
          <p>
            We retain personal data only as long as necessary for the purposes described in this Policy, to comply
            with our legal obligations, resolve disputes, and enforce our agreements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Sharing and Disclosure</h2>
          <p>
            We do not sell your personal information. We may share information with trusted service providers who
            assist us in operating our website or delivering services (e.g., hosting, analytics), under appropriate
            confidentiality and data protection obligations. We may disclose information if required by law or to
            protect our rights, users, or the public.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. International Transfers</h2>
          <p>
            Your information may be processed in countries other than your own. Where required, we implement
            appropriate safeguards to protect your information in accordance with applicable law.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Your Rights</h2>
          <p>
            Depending on your location, you may have rights to access, correct, delete, or restrict processing of
            your personal data, as well as the right to object and to data portability. To exercise these rights,
            please reach out via our <a href="/#contact" className="underline">contact form</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Security</h2>
          <p>
            We implement reasonable technical and organizational measures to protect your information. However, no
            method of transmission or storage is 100% secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Children’s Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13, and we do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post the updated version on this page and
            update the “Last updated” date above.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">12. Contact Us</h2>
          <p>
            If you have any questions about this Policy or our data practices, please contact us via the
            <a href="/#contact" className="underline"> contact form</a> on our website.
          </p>
        </section>
      </div>
    </main>
    <Footer />
    </>
  )
}

export default page
