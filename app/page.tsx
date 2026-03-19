import Image from "next/image";
import { AnimatedSection } from "./components/AnimatedSection";
import { Screenshot } from "./components/Screenshot";
import { Nav } from "./components/Nav";

const NAV_CTA = "https://app.summithq.co.uk/signup";

const featureSections = [
  {
    headline: "See the real profit on every project",
    body: "Open any project and instantly see what you've invoiced, what's been paid, what you've spent, and your actual profit — calculated automatically.",
    points: [
      "Project value, revenue and expenses in one view",
      "Profit margin calculated for you",
      "Outstanding invoices tracked per project",
    ],
    screenshot: "/screens/hero.png",
    alt: "Project financial overview in SummitHQ",
  },
  {
    headline: "Know exactly what's paid and what's outstanding",
    body: "Create and send invoices in seconds. See every invoice — paid, outstanding, overdue — across all your clients in one place.",
    screenshot: "/screens/invoices-new.png",
    alt: "Invoices page in SummitHQ",
  },
  {
    headline: "Track every cost that eats into your margin",
    body: "Log expenses against projects as you go. See your total spend, what's VAT-reclaimable, and exactly how much each cost is affecting your profit.",
    screenshot: "/screens/expenses.png",
    alt: "Expenses dashboard in SummitHQ",
  },
  {
    headline: "Your whole business, at a glance",
    body: "The SummitHQ dashboard shows income, expenses, net profit, outstanding invoices, and business health — all in one view. No switching tabs, no manual calculations.",
    screenshot: "/screens/business-dashboard.png",
    alt: "SummitHQ business dashboard",
  },
];

function FeatureSections({ items }: { items: typeof featureSections }) {
  return (
    <div className="divide-y divide-slate-100/70">
      {items.map((section, i) => {
        const isEven = i % 2 === 0;
        return (
          <section key={i} className="px-6 py-20 sm:py-28">
            <div
              className={`mx-auto flex max-w-6xl flex-col items-center gap-12 sm:gap-16 lg:flex-row lg:items-center ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              <AnimatedSection className="w-full shrink-0 lg:w-[380px] xl:w-[420px]">
                <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
                  {section.headline}
                </h2>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {section.body}
                </p>

                {"points" in section && section.points && (
                  <ul className="mt-6 space-y-2.5">
                    {section.points.map((point: string) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-sm text-slate-700"
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <circle cx="8" cy="8" r="7" fill="#EEF2FF" />
                          <path
                            d="M5 8l2 2 4-4"
                            stroke="#6366F1"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </AnimatedSection>

              <AnimatedSection className="w-full min-w-0 flex-1" delay={0.1}>
                <Screenshot src={section.screenshot} alt={section.alt} />
              </AnimatedSection>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen text-slate-900">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        {/* Cloud overlay — soft, atmospheric */}
        <Image
          src="/clouds/sky-clouds-full.png"
          alt=""
          fill
          className="object-cover object-top opacity-40"
          priority
        />
        {/* Fade clouds out before the content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>

      <Nav />

      {/* ===== HERO ===== */}
      <section className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 pl-6 lg:grid-cols-[520px_1fr] lg:gap-12 lg:pl-12 xl:pl-20">

          {/* Left: Text */}
          <AnimatedSection className="pr-6 lg:pr-0">
            <p className="mb-4 text-sm text-gray-500">
              SummitHQ — Business clarity for freelancers
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl">
              From scattered tools to one clear view of your business.
            </h1>

            <p className="mb-2 text-lg leading-relaxed text-gray-700">
              SummitHQ brings your numbers, projects, tasks, and clients into one calm dashboard — so you can finally see what&apos;s going on.
            </p>

            <p className="mb-5 text-base text-gray-700">
              No more guessing what you&apos;re actually earning.
            </p>

            <a
              href={NAV_CTA}
              className="inline-block rounded-2xl bg-black px-7 py-3.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Get started for free →
            </a>

            <p className="mt-2 text-sm text-gray-500">
              No credit card • Takes 2 minutes
            </p>
          </AnimatedSection>

          {/* Right: Product image */}
          <AnimatedSection delay={0.15} className="relative">
            {/* Radial glow behind image */}
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, #bfdbfe 0%, transparent 70%)" }}
            />
            <div className="lg:-translate-y-4 overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-2xl">
              <Image
                src="/hero-dashboard.png"
                alt="SummitHQ business dashboard — financial snapshot for freelancers"
                width={1366}
                height={900}
                priority
                sizes="(max-width: 1024px) 100vw, 1000px"
                className="block w-full h-auto contrast-[1.05] saturate-[1.1]"
              />
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[460px_1fr]">

          {/* Left: Text */}
          <AnimatedSection className="space-y-5">
            <h2 className="mb-10 text-3xl font-semibold leading-snug text-gray-900 md:text-4xl">
              Everything looks fine on the surface.<br />
              <span className="font-medium text-gray-500">Until you try to understand your numbers.</span>
            </h2>
            <p className="mb-4 text-lg leading-relaxed text-gray-600">
              But behind the scenes, your business is spread across tools that don&apos;t talk to each other.
            </p>
            <p className="text-lg font-medium text-gray-800">
              So you never get a clear picture.
            </p>
          </AnimatedSection>

          {/* Right: Tool cards — controlled messy layout */}
          <AnimatedSection delay={0.1}>
            <div className="flex gap-4">

              {/* Column A — standard width, starts mid */}
              <div className="flex flex-1 flex-col gap-5 pt-8">

                {/* Google Sheets */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#0F9D58"/>
                      <rect x="6" y="6" width="12" height="2" rx="0.5" fill="white" opacity="0.9"/>
                      <rect x="6" y="10" width="12" height="2" rx="0.5" fill="white" opacity="0.7"/>
                      <rect x="6" y="14" width="8" height="2" rx="0.5" fill="white" opacity="0.7"/>
                    </svg>
                    <span className="text-xs text-gray-500">Google Sheets</span>
                  </div>
                  <p className="text-sm text-gray-800">Expenses tracker</p>
                  <span className="text-[10px] text-gray-400">Manual</span>
                </div>

                {/* Stripe — dimmed */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 opacity-80 shadow-md">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#635BFF"/>
                      <path d="M10.5 9.5c0-.8.7-1.1 1.8-.9 1.5.3 3 1 4 1.8V7c-1.3-.5-2.6-.8-4-.8-3.3 0-5.5 1.7-5.5 4.5 0 4.4 6 3.7 6 5.6 0 .9-.8 1.2-2 1-1.6-.3-3.2-1.1-4.3-2v3.4c1.4.6 2.8.9 4.3.9 3.4 0 5.7-1.7 5.7-4.5-.1-4.7-6.1-3.9-6-5.6z" fill="white"/>
                    </svg>
                    <span className="text-xs text-gray-500">Stripe</span>
                  </div>
                  <p className="text-sm text-gray-800">Payments</p>
                  <span className="text-[10px] text-gray-400">Separate</span>
                </div>

              </div>

              {/* Column B — wide card size, starts at top */}
              <div className="flex w-[42%] flex-col gap-5">

                {/* Notion */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#191919"/>
                      <text x="7.5" y="16" fontSize="9" fontWeight="700" fill="white" fontFamily="serif">N</text>
                    </svg>
                    <span className="text-xs text-gray-500">Notion</span>
                  </div>
                  <p className="text-sm text-gray-800">Project notes</p>
                  <span className="text-[10px] text-gray-400">Not synced</span>
                </div>

                {/* Gmail */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#EA4335"/>
                      <path d="M4 8l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="4" y="8" width="16" height="9" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span className="text-xs text-gray-500">Gmail</span>
                  </div>
                  <p className="text-sm text-gray-800">Client comms</p>
                  <span className="text-[10px] text-gray-400">Separate</span>
                </div>

                {/* Trello */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#0052CC"/>
                      <rect x="5" y="5" width="5" height="9" rx="1" fill="white"/>
                      <rect x="14" y="5" width="5" height="6" rx="1" fill="white"/>
                    </svg>
                    <span className="text-xs text-gray-500">Trello</span>
                  </div>
                  <p className="text-sm text-gray-800">Somewhere…</p>
                  <span className="text-[10px] text-gray-400">Not synced</span>
                </div>

              </div>

              {/* Column C — standard width, starts low */}
              <div className="flex flex-1 flex-col gap-5 pt-12">

                {/* QuickBooks */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#2CA01C"/>
                      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" fill="none"/>
                      <circle cx="12" cy="12" r="2" fill="white"/>
                    </svg>
                    <span className="text-xs text-gray-500">QuickBooks</span>
                  </div>
                  <p className="text-sm text-gray-800">No idea</p>
                  <span className="text-[10px] text-gray-400">Manual</span>
                </div>

              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ===== SOLUTION SECTION ===== */}
      <section className="px-6 py-32">
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.4fr]">

          {/* Left: Copy */}
          <AnimatedSection className="max-w-[420px] space-y-3">
            <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              See the real profit on every project.
            </h2>

            <p className="max-w-[480px] text-lg leading-relaxed text-gray-700">
              SummitHQ brings your revenue, expenses, and payments together — so you can instantly see what you&apos;ve actually made.
            </p>

            <ul className="space-y-2 pb-2">
              {[
                "Project value, revenue, and expenses in one place",
                "Profit calculated automatically — no spreadsheets",
                "Know what's been paid, what's outstanding, and what's yours",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="#F0FDF4"/>
                    <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <p className="text-sm text-gray-500">
              No setup headaches. Works with how you already run your business.
            </p>
          </AnimatedSection>

          {/* Right: Product image */}
          <AnimatedSection delay={0.15} className="relative right-[-120px] translate-y-6 w-full max-w-[900px] rotate-[-1deg]">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100/40 to-transparent blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-[0_40px_100px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
                style={{ maskImage: "linear-gradient(to bottom, transparent 0%, black 20%)" }}
              >
                <Image
                  src="/screens/project-profit-v2.png"
                  alt="SummitHQ project profit view — financial overview showing revenue, expenses and profit"
                  width={1400}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="block w-full h-auto contrast-[1.05] saturate-[1.05]"
                />
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ===== CORE FEATURES ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-32">
        <div className="space-y-24">

          {/* Feature 1: Invoicing — text above, image below (Option A) */}
          <AnimatedSection>
            <div className="flex flex-col gap-8">
              {/* Text — compact intro, aligned to image left edge */}
              <div className="max-w-[520px] relative right-[-80px]">
                <h2 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl">
                  Send invoices in minutes, not hours.
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  Create, send, and track invoices in one place — without jumping between tools.
                </p>
              </div>

              {/* Image — dominant, bleeds right */}
              <div className="relative right-[-80px] w-full max-w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-xl">
                <Image
                  src="/screens/invoices-v2.png"
                  alt="SummitHQ invoices — create, send and track invoices"
                  width={2048}
                  height={994}
                  sizes="100vw"
                  className="block w-full h-auto contrast-[1.03]"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Feature 2: Financial clarity — image left, text right */}
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg lg:order-first">
                <Image
                  src="/screens/taxes-v2.png"
                  alt="SummitHQ financial dashboard — safe to spend and tax set-asides"
                  width={2146}
                  height={1790}
                  sizes="(max-width: 1024px) 100vw, 580px"
                  className="block w-full h-auto contrast-[1.03]"
                />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold text-gray-900 md:text-3xl">
                  Know exactly what&apos;s yours — and what isn&apos;t.
                </h2>
                <p className="mb-6 text-base leading-relaxed text-gray-600">
                  Your numbers update automatically as money comes in and out — so you always know where you stand.
                </p>
                <ul className="space-y-2">
                  {[
                    "See what's safe to spend at any time",
                    "Automatically calculate tax set-asides",
                    "Avoid surprises at tax time",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" fill="#F0FDF4"/>
                        <path d="M5 8l2 2 4-4" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="px-6 py-20 sm:py-28">
        <AnimatedSection className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            When you know your numbers, everything gets easier
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Quote with confidence",
                body: "See your real margins on past projects before pricing the next one. Stop undercharging.",
              },
              {
                title: "Chase what matters",
                body: "Outstanding invoices are always visible. Know exactly who owes you, and how much.",
              },
              {
                title: "Less guesswork, less stress",
                body: "One clear view of your finances instead of scattered spreadsheets and rough estimates.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-7"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {benefit.body}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="px-6 py-20 sm:py-24">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            What freelancers say
          </p>

          <blockquote className="mt-8 text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
            &ldquo;I always knew roughly what I was earning. SummitHQ showed me
            I was leaving more on the table than I thought.&rdquo;
          </blockquote>

          <p className="mt-4 text-sm text-slate-500">Freelance web developer</p>
        </AnimatedSection>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-6 py-28 text-center">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
            Stop guessing what you&apos;re actually earning
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            SummitHQ gives every freelancer a clear, live view of their project
            finances. Free to start.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={NAV_CTA}
              className="
                rounded-full
                bg-indigo-600
                px-8
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_8px_32px_rgba(79,70,229,0.35)]
                transition
                hover:bg-indigo-700
              "
            >
              Sign up for free
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-100 px-6 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SummitHQ</p>

          <div className="flex items-center gap-6">
            <a href="/contact" className="transition hover:text-slate-900">
              Contact
            </a>
            <a href="/privacy" className="transition hover:text-slate-900">
              Privacy
            </a>
            <a href="/terms" className="transition hover:text-slate-900">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
