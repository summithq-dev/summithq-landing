export default function PrivacyPage() {
  return (
    <main
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/clouds/sky-clouds-full.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-3xl">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-white/40 blur-3xl" />

        {/* Glass card */}
        <div
          className="
            relative
            rounded-[32px]
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
            SummitHQ respects your privacy. This policy explains how we collect
            and use your information.
          </p>

          <section className="mt-10 space-y-8 text-slate-700">
            <div>
              <h2 className="text-lg font-medium text-slate-900">
                Information we collect
              </h2>
              <p className="mt-2 text-slate-600">
                When you join the SummitHQ waitlist, we collect your email
                address so we can notify you about early access and product
                updates.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-slate-900">
                How we use your information
              </h2>
              <ul className="mt-2 list-disc pl-5 text-slate-600">
                <li>Notify you when early access opens</li>
                <li>Send occasional product updates</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-slate-900">
                Data storage
              </h2>
              <p className="mt-2 text-slate-600">
                Your email address is securely stored using Supabase. We do not
                sell or share your data with third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-medium text-slate-900">Contact</h2>
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
      </div>
    </main>
  );
}
