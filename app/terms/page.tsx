import { Nav } from "@/app/components/Nav";

export const metadata = {
  title: "Terms of Service | SummitHQ",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
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
            Terms of Service
          </h1>

          <p className="mt-4 text-slate-700">
            These Terms of Service govern your use of SummitHQ. By creating an
            account or using the service, you agree to be bound by these terms.
            If you do not agree, please do not use SummitHQ.
          </p>

          <p className="mt-2 text-sm text-slate-500">Last updated: February 2026</p>

          <section className="mt-10 space-y-10 text-slate-700">

            {/* 1 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">1. About Us</h2>
              <p className="text-slate-600">
                SummitHQ is operated by SummitHQ Ltd, a company registered in
                England and Wales.
              </p>
              <ul className="list-none space-y-1 text-slate-600">
                <li>Company number: 17036574</li>
                <li>Registered office: 118 Hall Lane, Walsall Wood, Walsall, England, WS9 9AP</li>
                <li>
                  Support email:{" "}
                  <a
                    href="mailto:support@summithq.co.uk"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    support@summithq.co.uk
                  </a>
                </li>
              </ul>
              <p className="text-slate-600">
                References to &ldquo;SummitHQ&rdquo;, &ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo; in these terms mean
                SummitHQ Ltd. References to &ldquo;you&rdquo; or
                &ldquo;your&rdquo; mean the individual or entity accessing or
                using the service.
              </p>
            </div>

            {/* 2 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">2. The Service</h2>
              <p className="text-slate-600">
                SummitHQ is a subscription-based software-as-a-service (SaaS)
                platform designed for freelancers and small businesses. It
                provides tools for managing clients, projects, tasks, invoices,
                expenses, and VAT and tax estimates.
              </p>
              <p className="text-slate-600">
                We do not guarantee the accuracy, completeness, or suitability
                of any data, calculations, or outputs produced by the service.
                All features are provided for informational and organisational
                purposes only.
              </p>
            </div>

            {/* 3 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">3. Eligibility</h2>
              <p className="text-slate-600">
                You must be at least 18 years old to use SummitHQ. If you are
                using SummitHQ on behalf of a business or organisation, you
                represent that you have the authority to bind that entity to
                these terms. You are responsible for ensuring that your use of
                SummitHQ complies with all applicable laws in your jurisdiction.
              </p>
            </div>

            {/* 4 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">4. Account Responsibility</h2>
              <p className="text-slate-600">
                You are responsible for safeguarding your account credentials
                and for all activity that occurs under your account. You must
                notify us promptly at{" "}
                <a
                  href="mailto:support@summithq.co.uk"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  support@summithq.co.uk
                </a>{" "}
                if you suspect any unauthorised access. We are not liable for
                any loss or damage arising from your failure to keep your login
                details secure.
              </p>
              <p className="text-slate-600">
                Each account is for a single user. You may not share your
                account credentials with any other person or permit third
                parties to access the service using your account.
              </p>
            </div>

            {/* 5 */}
            <div className="space-y-6">
              <h2 className="text-lg font-medium text-slate-900">
                5. Subscription Plans and Billing
              </h2>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.1 Plans and Pricing</h3>
                <p className="text-slate-600">
                  SummitHQ offers the following plans:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  <li>Free plan — available at no charge, subject to feature and usage limits.</li>
                  <li>Starter plan — billed at £9 per month.</li>
                  <li>Pro plan — billed at £19 per month.</li>
                </ul>
                <p className="text-slate-600">
                  All prices are in pounds sterling (GBP) and are exclusive of
                  VAT unless otherwise stated. You are responsible for any
                  applicable taxes on your subscription.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.2 Automatic Renewal</h3>
                <p className="text-slate-600">
                  Paid subscriptions are billed on a monthly basis and renew
                  automatically at the end of each billing period. By
                  subscribing to a paid plan, you authorise SummitHQ Ltd to
                  charge your payment method on a recurring monthly basis until
                  you cancel. You will not receive a separate reminder before
                  each renewal.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.3 Payment Processing</h3>
                <p className="text-slate-600">
                  All payments are processed by Stripe, Inc. By providing your
                  payment details, you also agree to Stripe&rsquo;s terms and
                  policies. SummitHQ Ltd does not store your full card details.
                  We are not responsible for errors, failures, or disputes
                  arising from Stripe&rsquo;s processing services.
                </p>
                <p className="text-slate-600">
                  You are responsible for keeping your payment details up to
                  date. You can update your payment method at any time from your
                  account settings.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.4 Failed Payments and Suspension</h3>
                <p className="text-slate-600">
                  If a payment fails or is not received, we may make additional
                  collection attempts. If payment remains outstanding, we
                  reserve the right to suspend or restrict access to your
                  account, downgrade your account to the Free plan, or
                  terminate your account entirely. Access will be restored once
                  the outstanding payment matter is resolved to our
                  satisfaction.
                </p>
                <p className="text-slate-600">
                  Suspension for non-payment does not entitle you to a refund
                  or credit for any period during which access was restricted.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.5 Plan Limits</h3>
                <p className="text-slate-600">
                  Each plan includes defined feature and usage limits. If you
                  reach a plan limit, you may be prevented from creating new
                  records (such as clients, invoices, or projects), but your
                  existing data will not be automatically deleted. If you
                  downgrade to a lower plan, access to certain features or the
                  ability to create new items may be restricted until your usage
                  falls within the limits of your current plan.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.6 Free Plan</h3>
                <p className="text-slate-600">
                  The Free plan is offered at SummitHQ Ltd&rsquo;s discretion.
                  Free features and usage limits may change or be withdrawn at
                  any time. No guarantee is made that free access will remain
                  available indefinitely.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium text-slate-800">5.7 Price Changes</h3>
                <p className="text-slate-600">
                  We reserve the right to change subscription prices. We will
                  give you at least 30 days&rsquo; advance notice of any price
                  increase, communicated by email or via an in-app notice. If
                  you do not agree with a price change, you may cancel before
                  the change takes effect.
                </p>
              </div>
            </div>

            {/* 6 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">6. No Refunds</h2>
              <p className="text-slate-600">
                All subscription payments are non-refundable. There are no
                refunds or credits for partial months of service, unused
                features, or periods during which your account was active but
                not used. This applies to all plans, including where you cancel
                mid-period, downgrade to a lower plan, or decide to stop using
                the service.
              </p>
              <p className="text-slate-600">
                If you believe a charge has been made in error, please contact
                us at{" "}
                <a
                  href="mailto:support@summithq.co.uk"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  support@summithq.co.uk
                </a>{" "}
                and we will review the matter in good faith. Nothing in this
                clause affects any statutory rights you may have under
                applicable UK law.
              </p>
            </div>

            {/* 7 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">7. Cancellation</h2>
              <p className="text-slate-600">
                Paid subscriptions renew automatically on a monthly basis. By
                subscribing to a paid plan, you authorise SummitHQ Ltd to
                charge your payment method on a recurring monthly basis until
                you cancel.
              </p>
              <p className="text-slate-600">
                You may cancel your subscription at any time directly from your
                account settings, via the membership page within the platform.
                No further action is required. Cancellation takes effect at the
                end of your current billing period, and you will retain full
                access to your paid plan until that date. Once the period ends,
                your account will revert to the Free plan (or be closed, if you
                have separately requested account deletion). No further charges
                will be made after cancellation takes effect.
              </p>
              <p className="text-slate-600">
                Cancellation does not entitle you to a refund for any unused
                portion of the current billing period. Time remaining on a
                cancelled subscription has no monetary value and will not be
                credited or carried forward.
              </p>
              <p className="text-slate-600">
                If a payment fails or is not received, we may retry the charge
                and, if payment remains outstanding, we reserve the right to
                suspend or restrict your access, downgrade your account to the
                Free plan, or terminate your account. Access will be restored
                once the outstanding payment is resolved. Suspension for
                non-payment does not entitle you to a refund or credit for the
                affected period.
              </p>
            </div>

            {/* 8 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">8. No Professional Advice</h2>
              <p className="text-slate-600">
                SummitHQ does not provide accounting, tax, legal, financial, or
                any other regulated professional advice of any kind. Nothing
                within the service constitutes professional advice, and nothing
                should be construed as such.
              </p>
              <p className="text-slate-600">
                All figures, calculations, VAT summaries, tax estimates, and
                financial data displayed within the service are estimates only
                and are generated automatically based on the information you
                provide. They must not be relied upon for filing returns, making
                financial decisions, or demonstrating compliance with any
                regulatory obligation.
              </p>
              <p className="text-slate-600">
                You are solely responsible for your own tax filings, financial
                decisions, and any obligations to HMRC or other authorities.
                SummitHQ is not a substitute for a qualified accountant, tax
                adviser, or solicitor. We strongly recommend that you seek
                independent professional advice before acting on any information
                provided by the service.
              </p>
              <p className="text-slate-600">
                SummitHQ Ltd accepts no liability whatsoever for errors,
                omissions, penalties, fines, or financial losses of any kind
                arising from reliance on data, calculations, or estimates
                produced by the service.
              </p>
            </div>

            {/* 9 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">9. User Data and Content</h2>
              <p className="text-slate-600">
                You retain full ownership of any data, content, or materials you
                submit to SummitHQ. You are responsible for the legality,
                accuracy, and appropriateness of all data you enter. By using
                the service, you grant SummitHQ Ltd a limited, non-exclusive
                licence to store, process, and display your data solely to the
                extent necessary to provide the service to you.
              </p>
              <p className="text-slate-600">
                We do not sell your data to third parties. Your data is handled
                in accordance with our Privacy Policy, which forms part of these
                terms.
              </p>
              <p className="text-slate-600">
                SummitHQ does not guarantee permanent storage of your data. You
                are responsible for maintaining your own backups of important
                business data. On account closure, your data will be handled as
                described in our Privacy Policy.
              </p>
            </div>

            {/* 10 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">10. Acceptable Use</h2>
              <p className="text-slate-600">
                You agree to use SummitHQ only for lawful purposes and in
                accordance with these terms. You must not:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li>Use the service for any illegal, fraudulent, or unauthorised purpose;</li>
                <li>
                  Attempt to gain unauthorised access to any part of the
                  service, its servers, or its underlying infrastructure;
                </li>
                <li>Transmit any malware, viruses, or other harmful code through the service;</li>
                <li>
                  Disrupt, overload, or compromise the security or integrity of
                  the service or any connected systems;
                </li>
                <li>
                  Use the service to store, transmit, or process data that
                  infringes the intellectual property rights or privacy rights
                  of any third party;
                </li>
                <li>
                  Reproduce, duplicate, copy, sell, or resell any part of the
                  service without our express written permission;
                </li>
                <li>
                  Use the service to process data relating to individuals
                  without a lawful basis under applicable data protection
                  legislation;
                </li>
                <li>
                  Attempt to reverse-engineer, decompile, or extract the source
                  code of any part of the service.
                </li>
              </ul>
              <p className="text-slate-600">
                We reserve the right to suspend or terminate access to any
                account that we reasonably believe has violated these acceptable
                use requirements, without prior notice where necessary to
                protect the service or other users.
              </p>
            </div>

            {/* 11 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">11. Intellectual Property</h2>
              <p className="text-slate-600">
                The SummitHQ service — including its software, design, user
                interface, features, branding, trade marks, and all related
                documentation — is the exclusive property of SummitHQ Ltd and
                is protected by copyright, trade mark, and other applicable
                intellectual property laws. All rights are reserved.
              </p>
              <p className="text-slate-600">
                Subject to your compliance with these terms, SummitHQ Ltd
                grants you a limited, non-exclusive, non-transferable,
                revocable licence to access and use the service for your own
                internal business purposes. This licence does not include any
                right to sublicence, copy, modify, distribute, or create
                derivative works of the service or any part of it.
              </p>
              <p className="text-slate-600">
                The &ldquo;SummitHQ&rdquo; name, logo, and wordmark are trade
                marks of SummitHQ Ltd. You may not use them without our prior
                written consent.
              </p>
            </div>

            {/* 12 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">12. Service Availability</h2>
              <p className="text-slate-600">
                SummitHQ is provided on an &ldquo;as is&rdquo; and &ldquo;as
                available&rdquo; basis. We do not warrant that the service will
                be uninterrupted, error-free, or free from viruses or other
                harmful components. We make no representations about the
                suitability of the service for any particular purpose.
              </p>
              <p className="text-slate-600">
                We may carry out scheduled or emergency maintenance that results
                in the service being temporarily unavailable. Where possible, we
                will provide advance notice of planned downtime. We are not
                liable for any loss or inconvenience resulting from service
                interruptions.
              </p>
              <p className="text-slate-600">
                Features may be added, modified, or removed over time as the
                service develops. We may withdraw or discontinue any feature or
                part of the service at any time. This does not create an
                obligation to maintain any specific feature, integration, or
                level of functionality. We will make reasonable efforts to
                communicate significant changes that materially affect your use
                of the service.
              </p>
            </div>

            {/* 13 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">13. Limitation of Liability</h2>
              <p className="text-slate-600">
                To the fullest extent permitted by the laws of England and
                Wales, SummitHQ Ltd, its directors, employees, agents, and
                affiliates shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages of any kind,
                including but not limited to loss of profits, loss of revenue,
                loss of data, loss of business opportunity, or loss of
                goodwill, arising out of or in connection with your use of or
                inability to use the service.
              </p>
              <p className="text-slate-600">
                Without limiting the above, SummitHQ Ltd accepts no liability
                for missed tax payments, incorrect filings, HMRC penalties,
                compliance failures, or any financial loss of any kind resulting
                from reliance on data, calculations, estimates, or outputs
                produced by the service.
              </p>
              <p className="text-slate-600">
                Our total aggregate liability to you for any and all claims
                arising under or in connection with these terms or your use of
                the service shall not exceed the greater of: (a) the total fees
                actually paid by you to SummitHQ Ltd in the twelve months
                immediately preceding the event giving rise to the claim; or
                (b) one hundred pounds (£100).
              </p>
              <p className="text-slate-600">
                Nothing in these terms excludes or limits our liability for:
                (i) death or personal injury caused by our negligence; (ii)
                fraud or fraudulent misrepresentation; or (iii) any other
                liability that cannot lawfully be excluded or limited under the
                laws of England and Wales.
              </p>
            </div>

            {/* 14 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">14. Termination by SummitHQ</h2>
              <p className="text-slate-600">
                We may suspend, restrict, or terminate your access to SummitHQ
                at any time if we reasonably believe that you have breached
                these terms, engaged in fraudulent or unlawful activity, or
                pose a risk to the security or integrity of the service or
                other users. Where suspension is investigatory, we will seek to
                resolve matters promptly.
              </p>
              <p className="text-slate-600">
                We may also discontinue the service in its entirety on
                reasonable notice. In such circumstances, we will use
                reasonable efforts to notify you at least 30 days in advance,
                and we will not charge you beyond the date of discontinuation.
              </p>
              <p className="text-slate-600">
                Following termination, we may retain certain data for legal,
                regulatory, or legitimate business purposes, as described in
                our Privacy Policy.
              </p>
            </div>

            {/* 15 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">15. Changes to These Terms</h2>
              <p className="text-slate-600">
                We may update these terms from time to time to reflect changes
                in the law, our services, or our business practices. We will
                notify you of material changes by email or via an in-app notice
                at least 14 days before the changes take effect. The &ldquo;last
                updated&rdquo; date at the top of this page will be revised
                accordingly.
              </p>
              <p className="text-slate-600">
                Your continued use of SummitHQ after updated terms take effect
                constitutes your acceptance of the revised terms. If you do not
                agree to any updated terms, you should cancel your subscription
                and stop using the service.
              </p>
            </div>

            {/* 16 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">
                16. Governing Law and Jurisdiction
              </h2>
              <p className="text-slate-600">
                These terms are governed by and construed in accordance with the
                laws of England and Wales. Any dispute arising out of or in
                connection with these terms or your use of SummitHQ shall be
                subject to the exclusive jurisdiction of the courts of England
                and Wales, except where otherwise required by applicable
                consumer protection law.
              </p>
            </div>

            {/* 17 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">17. Entire Agreement</h2>
              <p className="text-slate-600">
                These terms, together with our Privacy Policy, constitute the
                entire agreement between you and SummitHQ Ltd in relation to
                your use of the service and supersede all prior agreements,
                representations, and understandings. If any provision of these
                terms is found to be unenforceable, the remaining provisions
                will continue in full force and effect.
              </p>
              <p className="text-slate-600">
                Our failure to enforce any provision of these terms at any time
                shall not be deemed a waiver of our right to enforce that
                provision in the future.
              </p>
            </div>

            {/* 18 */}
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-slate-900">18. Contact</h2>
              <p className="text-slate-600">
                If you have any questions, concerns, or complaints about these
                terms or our service, please contact us:
              </p>
              <ul className="list-none space-y-1 text-slate-600">
                <li>
                  By email:{" "}
                  <a
                    href="mailto:support@summithq.co.uk"
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    support@summithq.co.uk
                  </a>
                </li>
                <li>
                  By post: SummitHQ Ltd, 118 Hall Lane, Walsall Wood, Walsall,
                  England, WS9 9AP
                </li>
              </ul>
            </div>

          </section>
        </div>
      </div>
      </main>
    </>
  );
}
