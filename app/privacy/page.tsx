export const metadata = {
  title: "Privacy Policy | SummitHQ",
};

export default function PrivacyPage() {
  return (
    <main
      className="relative min-h-screen px-6 py-20"
      style={{
        backgroundImage: "url('/clouds/sky-clouds-full.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative mx-auto w-full max-w-3xl">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-white/40 blur-3xl" />

        {/* Glass card */}
        <div
          className="
            relative
            rounded-4xl
            bg-white/70
            backdrop-blur-3xl
            ring-1 ring-white/60
            shadow-[0_40px_120px_rgba(15,23,42,0.25)]
            p-8
            md:p-12
          "
        >
          <h1 className="text-3xl font-semibold text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-700">
            SummitHQ is committed to protecting your privacy. This policy
            explains what data we collect, how we use it, and your rights under
            applicable data protection laws, including the UK General Data
            Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <p className="mt-2 text-sm text-slate-500">Last updated: February 2026</p>

          <section className="mt-10 space-y-10 text-slate-700">

            {/* 1 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                1. Data controller
              </h2>
              <p className="text-slate-600">
                For the purposes of the UK GDPR and the Data Protection Act
                2018, the data controller responsible for your personal data is:
              </p>
              <ul className="list-none space-y-1 text-slate-600">
                <li>SummitHQ Ltd</li>
                <li>Registered in England and Wales</li>
                <li>Company number: 17036574</li>
                <li>Registered office: 118 Hall Lane, Walsall Wood, Walsall, England, WS9 9AP</li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:support@summithq.co.uk"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    support@summithq.co.uk
                  </a>
                </li>
              </ul>
              <p className="text-slate-600">
                If you have any questions about how your data is processed,
                please contact us using the details above.
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                2. Data we collect
              </h2>
              <p className="text-slate-600">
                We collect the following categories of data when you use
                SummitHQ:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <span className="font-medium text-slate-700">Account data</span>{" "}
                  — your email address and a securely hashed password, collected
                  when you create an account.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Business data</span>{" "}
                  — information you enter into the service, including client
                  details, project information, invoices, tasks, expenses, and
                  VAT data. If you choose to add bank details, these are
                  provided by you and used solely for display on your invoices.
                  They are not used for payment processing.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Usage data</span>{" "}
                  — limited operational and security-related information, such
                  as pages visited, features used, timestamps, and error logs.
                  This data is collected solely to operate and improve the
                  service. SummitHQ does not use third-party tracking,
                  behavioural analytics, or advertising profiling of any kind.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Payment data</span>{" "}
                  — subscription payments are processed by Stripe, Inc. on our
                  behalf. We do not store your full card number or sensitive
                  payment credentials. We retain only limited billing metadata
                  necessary to manage your subscription, including your Stripe
                  customer ID, subscription status, and billing history. If you
                  also connect a Stripe account to receive invoice payments from
                  your own clients, we additionally store your Stripe account
                  identifier and connection status.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Terms acceptance</span>{" "}
                  — a timestamp and version reference recording when you accepted
                  our Terms of Service.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                3. How we use your data
              </h2>
              <p className="text-slate-600">
                We use your data for the following purposes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>To provide, operate, and maintain the SummitHQ service.</li>
                <li>To authenticate your identity and secure your account.</li>
                <li>To process and display your business data as requested.</li>
                <li>To generate invoices, tax estimates, and expense summaries.</li>
                <li>To improve the service, fix issues, and develop features.</li>
                <li>
                  To communicate with you about your account, service updates,
                  or support requests.
                </li>
                <li>To comply with legal obligations and enforce our terms.</li>
              </ul>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                4. Lawful basis for processing (GDPR)
              </h2>
              <p className="text-slate-600">
                We process your personal data on the following lawful bases:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <span className="font-medium text-slate-700">Contractual necessity</span>{" "}
                  — processing required to provide the service you have signed
                  up for.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Legitimate interest</span>{" "}
                  — limited and proportionate processing for service
                  improvement, security, and fraud prevention, carried out only
                  where our interests do not override your rights and freedoms.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Consent</span>{" "}
                  — where you have opted in to receive marketing or promotional
                  communications. You may withdraw consent at any time.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Legal obligation</span>{" "}
                  — processing required to comply with applicable laws.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                5. Data processors
              </h2>
              <p className="text-slate-600">
                We use the following third-party processors to operate
                SummitHQ. Each processor is bound by data processing agreements
                and appropriate safeguards:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <span className="font-medium text-slate-700">Supabase</span>{" "}
                  — database hosting, authentication, and data storage.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Stripe</span>{" "}
                  — payment processing for invoice payments and subscription
                  billing. Stripe only processes your data where you have
                  enabled payments or connected a Stripe account.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Resend</span>{" "}
                  — transactional email delivery for invoices and notifications.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Vercel</span>{" "}
                  — application hosting and deployment.
                </li>
              </ul>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                6. Data storage and security
              </h2>
              <p className="text-slate-600">
                We implement reasonable technical and organisational safeguards
                to protect your data, including encryption in transit (TLS),
                secure authentication, and access controls. Each user can only
                access their own data — logical access controls are enforced so
                that your information is not visible to other users of the
                service. However, no method of electronic storage or
                transmission is completely secure, and we cannot guarantee
                absolute security. You are responsible for keeping your account
                credentials confidential.
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                7. Data retention
              </h2>
              <p className="text-slate-600">
                We retain your data for as long as your account is active and
                as needed to provide the service. If you close your account, we
                will delete or anonymise your personal data within a reasonable
                timeframe, unless we are required to retain it for legal,
                regulatory, or legitimate business purposes. In particular, we
                may retain certain financial records, invoice data, and
                transaction history to comply with UK accounting, tax, and
                financial record-keeping obligations (including requirements
                under the Companies Act 2006 and HMRC record-keeping rules), or
                to resolve disputes. Where a deletion request conflicts with a
                legal retention obligation, we will retain only the minimum data
                required and will inform you accordingly.
              </p>
            </div>

            {/* 8 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                8. Your rights
              </h2>
              <p className="text-slate-600">
                Under the UK GDPR, you have the following rights in relation to
                your personal data:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>
                  <span className="font-medium text-slate-700">Access</span>{" "}
                  — request a copy of the personal data we hold about you.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Correction</span>{" "}
                  — request correction of inaccurate or incomplete data.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Deletion</span>{" "}
                  — request deletion of your personal data, subject to legal
                  retention requirements.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Data portability</span>{" "}
                  — request a copy of your data in a structured, commonly used
                  format.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Objection</span>{" "}
                  — object to processing based on legitimate interest.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Restriction</span>{" "}
                  — request that we restrict processing in certain
                  circumstances.
                </li>
                <li>
                  <span className="font-medium text-slate-700">Withdraw consent</span>{" "}
                  — where processing is based on consent, withdraw it at any
                  time.
                </li>
              </ul>
              <p className="text-slate-600">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:support@summithq.co.uk"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  support@summithq.co.uk
                </a>
                . We may need to verify your identity before fulfilling your
                request. We will respond within one month, as required by law.
                You also have the right to lodge a complaint with the
                Information Commissioner&rsquo;s Office (ICO) at{" "}
                <a
                  href="https://ico.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  ico.org.uk
                </a>
                .
              </p>
            </div>

            {/* 9 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                9. Automated decision-making
              </h2>
              <p className="text-slate-600">
                SummitHQ does not use automated decision-making or profiling
                that produces legal or similarly significant effects on users.
                Any calculations, estimates, or summaries presented by the
                service are for informational purposes only and do not
                constitute automated decisions about you or your rights.
              </p>
            </div>

            {/* 10 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                10. Cookies
              </h2>
              <p className="text-slate-600">
                SummitHQ uses essential cookies required for the service to
                function, including authentication and session management. We do
                not use third-party advertising or tracking cookies. Essential
                cookies do not require consent under UK GDPR as they are
                strictly necessary for the service to operate.
              </p>
            </div>

            {/* 11 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                11. International data transfers
              </h2>
              <p className="text-slate-600">
                Some of our data processors may store or process data outside
                the United Kingdom or European Economic Area. Where this occurs,
                we ensure appropriate safeguards are in place, such as standard
                contractual clauses or adequacy decisions, to protect your data
                in accordance with UK GDPR requirements.
              </p>
            </div>

            {/* 12 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                12. Data sharing
              </h2>
              <p className="text-slate-600">
                We do not sell, rent, or trade your personal data. We only
                share your data with the third-party processors listed above, as
                necessary to operate the service, or where required by law or
                legal process.
              </p>
            </div>

            {/* 13 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                13. Data breach notification
              </h2>
              <p className="text-slate-600">
                In the event of a personal data breach that poses a risk to
                your rights and freedoms, we will notify affected users and the
                relevant supervisory authority without undue delay, in
                accordance with applicable law.
              </p>
            </div>

            {/* 14 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                14. Changes to this policy
              </h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. We will
                notify you of material changes via email or an in-app notice.
                The &ldquo;last updated&rdquo; date at the top of this page
                will be revised accordingly. Your continued use of SummitHQ
                after changes take effect constitutes acceptance of the updated
                policy.
              </p>
            </div>

            {/* 15 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                15. Contact
              </h2>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy or how we
                handle your data, please contact us at{" "}
                <a
                  href="mailto:support@summithq.co.uk"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  support@summithq.co.uk
                </a>
                .
              </p>
            </div>

          </section>
        </div>
      </div>
    </main>
  );
}
