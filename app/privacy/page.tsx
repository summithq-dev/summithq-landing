export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <main className="max-w-3xl w-full px-6">
        <div className="bg-white rounded-2xl ring-1 ring-slate-200 p-8 md:p-12">
          <h1 className="text-3xl font-semibold text-slate-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-600">
            SummitHQ respects your privacy. This policy explains how we collect
            and use your information.
          </p>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-lg font-medium">Information we collect</h2>
              <p className="mt-2 text-slate-600">
                When you join the SummitHQ waitlist, we collect your email
                address so we can notify you about early access and product
                updates.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">
                How we use your information
              </h2>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>Notify you when early access opens</li>
                <li>Send occasional product updates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium">Data storage</h2>
              <p className="mt-2 text-slate-600">
                Your email address is securely stored using Supabase. We do not
                sell or share your data with third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium">Contact</h2>
              <p className="mt-2 text-slate-600">
                Questions? Email{" "}
                <a
                  href="mailto:support@summithq.dev"
                  className="font-medium text-indigo-600 hover:underline"
                >
                  support@summithq.dev
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
