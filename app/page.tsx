import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-72">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Copy */}
            <div>
              <h1 className="text-5xl font-semibold leading-tight">
                One dashboard to run
                <br />
                your entire business
              </h1>

              <p className="mt-6 text-lg text-slate-600 max-w-md">
                Clients, projects, tasks, invoices, and taxes — without juggling
                tools or tabs.
              </p>

              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="/waitlist"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition"
                >
                  Get early access
                </Link>
              </div>

              <p className="mt-4 text-xs text-slate-500">
                Built for freelancers and solo business owners.
              </p>
            </div>

            {/* HERO IMAGE */}
            <div className="relative lg:-mr-64">
              <div className="relative aspect-[20/9] -mb-56">
                <Image
                  src="/dashboard-hero.png"
                  alt="SummitHQ dashboard"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fade hero into white */}
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
      </section>

      {/* PROBLEM */}
      <section className="bg-white pt-32">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-12 items-start">
            <div className="hidden md:block w-px bg-slate-200 mt-3" />

            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold text-slate-900">
                Running a business shouldn’t feel scattered.
              </h2>

              <p className="mt-6 text-lg text-slate-600">
                Most freelancers and solo business owners aren’t disorganised —
                their tools are.
              </p>

              <p className="mt-4 text-lg text-slate-600">
                Clients in one app. Projects in another. Invoices somewhere
                else. Taxes tracked in spreadsheets.
              </p>

              <p className="mt-4 text-lg text-slate-600">
                Everything works — just not together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
            <h2 className="text-3xl font-semibold text-slate-900">
              Everything you need — in one calm workspace
            </h2>

            <p className="text-lg text-slate-600 max-w-md">
              SummitHQ replaces multiple business tools with a single dashboard
              built for solo businesses — without clutter, noise, or feature
              overload.
            </p>
          </div>

          {/* SOLUTION IMAGE */}
          <div className="relative -mx-6 lg:-mx-48 mb-32">
            <div className="relative aspect-[21/9]">
              <Image
                src="/client-workflow.png"
                alt="Clients, projects, invoices, and taxes connected in SummitHQ"
                fill
                sizes="(max-width: 1024px) 100vw, 1400px"
                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.06)]"
              />
            </div>

            {/* Fade image into slate */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none" />
          </div>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg ring-1 ring-slate-200">
              <p className="font-medium">
                Clients, projects, and tasks — connected
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Everything related to a client lives in one place, from work to
                billing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg ring-1 ring-slate-200">
              <p className="font-medium">
                Create invoices where the work lives
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Generate invoices directly from clients or projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg ring-1 ring-slate-200">
              <p className="font-medium">Taxes without the stress</p>
              <p className="mt-2 text-sm text-slate-600">
                Track income, expenses, and tax totals automatically — no
                spreadsheets required.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg ring-1 ring-slate-200">
              <p className="font-medium">See what needs attention</p>
              <p className="mt-2 text-sm text-slate-600">
                Know what’s drafted, sent, paid, or overdue at a glance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA — MIRROR OF HERO */}
      <section className="relative overflow-hidden">
        {/* Gradient (same as hero) */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
        <div className="absolute inset-0 bg-white/70" />

        {/* TOP FADE: white → transparent (reveals gradient gradually) */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-white to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 py-40 text-center">
          <h2 className="text-3xl font-semibold text-slate-900">
            Get early access to SummitHQ
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            A calmer way to run your business — from first client to tax time.
          </p>

          <div className="mt-10">
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white text-sm font-semibold shadow hover:bg-indigo-700 transition"
            >
              Get early access
            </Link>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            No credit card. Early access only.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500 flex justify-between">
          <span>© SummitHQ</span>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-700 transition">
              Privacy
            </Link>
            <span>·</span>
            <Link href="/contact" className="hover:text-slate-700 transition">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
