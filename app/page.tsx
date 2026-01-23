import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================= HERO CLOUD SECTION ================= */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/clouds/sky-clouds-full.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Bottom fade to white */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white" />

        {/* ================= HERO ================= */}
        <section className="px-4 pt-24 pb-12 text-center sm:pt-32 sm:pb-20">
          <h1 className="mx-auto max-w-3xl text-[38px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-6xl">
            Run your freelance business without the chaos.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base text-slate-700 sm:mt-6 sm:max-w-xl sm:text-lg">
            Clients, projects, invoices, and taxes — finally all working
            together.
          </p>
        </section>

        {/* ================= DASHBOARD ================= */}
        <section className="px-4 pt-6 sm:pt-10">
          <div className="mx-auto max-w-[1100px]">
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-white/40 blur-3xl" />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[36px]
                  bg-white/55
                  backdrop-blur-3xl
                  ring-1 ring-white/50
                  shadow-[0_60px_160px_rgba(15,23,42,0.35)]
                "
              >
                <Image
                  src="/dashboard-hero.png"
                  alt="SummitHQ dashboard"
                  width={1600}
                  height={1000}
                  priority
                  sizes="(max-width: 768px) 100vw, 1100px"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="px-4 pt-10 pb-32 text-center">
          <a
            href="/waitlist"
            className="
              inline-flex
              items-center
              justify-center
              rounded-full
              bg-indigo-600
              px-14
              py-5
              text-base
              font-semibold
              text-white
              shadow-[0_25px_80px_rgba(79,70,229,0.45)]
              transition
              hover:scale-[1.05]
              hover:bg-indigo-700
            "
          >
            Get Early Access
          </a>

          <p className="mt-6 text-sm text-slate-700">
            Built for freelancers &amp; solo business owners
          </p>
        </section>
      </div>

      {/* ================= VALUE PROPS (WHITE) ================= */}
      <section className="px-6 pb-36 pt-24 bg-white">
        <div className="mx-auto max-w-xl space-y-20 text-center sm:max-w-5xl sm:grid sm:grid-cols-3 sm:gap-16 sm:space-y-0 sm:text-left">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Everything in one place
            </h3>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              No more juggling tools. Clients, projects, tasks, and finances
              live together.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Built for freelancers
            </h3>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              Designed to reduce overwhelm, not add to it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Know where you stand
            </h3>
            <p className="mt-4 text-base text-slate-700 leading-relaxed">
              Instantly see what’s been sent, paid, and still outstanding.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INVOICES ================= */}
      <section className="px-4 pb-32 bg-white">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Simple, professional invoicing
          </h2>

          <p className="mt-4 text-base text-slate-700">
            Create, send, and track invoices without spreadsheets or guesswork.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1000px]">
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-white/60 blur-3xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                bg-white
                ring-1 ring-slate-200
                shadow-[0_40px_120px_rgba(15,23,42,0.18)]
              "
            >
              <Image
                src="/screens/invoices.png"
                alt="Invoice management in SummitHQ"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= TAXES ================= */}
      <section className="px-4 pb-40 bg-white">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900">
            Stay on top of taxes
          </h2>

          <p className="mt-4 text-base text-slate-700">
            See what you owe, what’s set aside, and what’s safe to spend.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-[1000px]">
          <div className="relative">
            <div className="absolute inset-0 rounded-[32px] bg-white/60 blur-3xl" />

            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                bg-white
                ring-1 ring-slate-200
                shadow-[0_40px_120px_rgba(15,23,42,0.18)]
              "
            >
              <Image
                src="/screens/taxes.png"
                alt="Tax overview and tracking in SummitHQ"
                width={1600}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ================= FINAL CTA + FOOTER ================= */}
      <footer className="px-4 pb-20 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
            Take control of your freelance business
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-slate-700">
            Clients, projects, invoices, and taxes — all working together in one
            calm, simple system.
          </p>

          <a
            href="/waitlist"
            className="
        mt-10
        inline-flex
        items-center
        justify-center
        rounded-full
        bg-indigo-600
        px-14
        py-5
        text-base
        font-semibold
        text-white
        shadow-[0_25px_80px_rgba(79,70,229,0.45)]
        transition
        hover:scale-[1.05]
        hover:bg-indigo-700
      "
          >
            Get Early Access
          </a>
        </div>

        <div className="mx-auto mt-20 max-w-5xl border-t border-white/40 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 text-sm text-slate-600 sm:flex-row">
            <p>© {new Date().getFullYear()} SummitHQ</p>

            <div className="flex items-center gap-6">
              <a href="/contact" className="transition hover:text-slate-900">
                Contact
              </a>

              <a href="/privacy" className="transition hover:text-slate-900">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
