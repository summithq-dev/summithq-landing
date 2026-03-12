import Image from "next/image";
import { AnimatedSection } from "./components/AnimatedSection";
import { Screenshot } from "./components/Screenshot";

const NAV_CTA = "https://app.summithq.co.uk/signup";

const sectionsTop = [
  {
    headline: "See exactly how profitable every project is",
    body: "Every project has its own financial overview. See what you've invoiced, what you've been paid, what you've spent, and your actual profit — calculated automatically.",
    points: [
      "Track project revenue and expenses",
      "See profit margin on every project",
      "Monitor outstanding invoices per project",
    ],
    screenshot: "/screens/project-financials.png",
    alt: "Project financial overview in SummitHQ",
  },
  {
    headline: "Stay on budget and protect your margins",
    body: "Set a budget for any project and track spending in real time. SummitHQ shows how much is left and flags when you're close to the limit.",
    screenshot: "/screens/budget-vs-actual.png",
    alt: "Budget vs actual tracker in SummitHQ",
  },
  {
    headline: "Keep the work moving forward",
    body: "Organise project tasks into simple stages — Pending, In Progress, and Done. Always know what's been completed and what's still to do.",
    screenshot: "/screens/task-board.png",
    alt: "Project task board in SummitHQ",
  },
  {
    headline: "Send invoices and track every payment",
    body: "Create and send invoices directly from SummitHQ. See what's been paid, what's outstanding, and what's overdue — across all your clients.",
    screenshot: "/screens/invoices-new.png",
    alt: "Invoices page in SummitHQ",
  },
  {
    headline: "Track every business expense",
    body: "Log expenses and categorise spending as you go. Understand where your money is going and how it affects the profitability of your work.",
    screenshot: "/screens/expenses.png",
    alt: "Expenses dashboard in SummitHQ",
  },
];

const sectionsBottom = [
  {
    headline: "Know what's happening across your business",
    body: "Every invoice sent, payment received, task completed and expense logged is tracked automatically. One clear view of all recent activity.",
    screenshot: "/screens/activity.png",
    alt: "Activity timeline in SummitHQ",
  },
  {
    headline: "Manage all your client projects in one place",
    body: "See the status, value, progress and profitability of every project at a glance. Understand how your client work is performing.",
    screenshot: "/screens/projects-overview.png",
    alt: "Projects overview in SummitHQ",
  },
];


function FeatureSections({
  items,
  indexOffset = 0,
}: {
  items: typeof sectionsTop;
  indexOffset?: number;
}) {
  return (
    <div className="divide-y divide-slate-100/70">
      {items.map((section, i) => {
        const isEven = (i + indexOffset) % 2 === 0;
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
      {/* Cloud background — fixed element avoids iOS background-attachment bug */}
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
        <Image
          src="/clouds/sky-clouds-full.png"
          alt=""
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-white/60" />
      </div>
      {/* ===== NAV ===== */}
      <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            SummitHQ
          </span>

          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="hidden text-sm text-slate-600 transition hover:text-slate-900 sm:block"
            >
              Contact
            </a>
            <a
              href="https://app.summithq.co.uk/login"
              className="hidden text-sm text-slate-600 transition hover:text-slate-900 sm:block"
            >
              Log in
            </a>
            <a
              href={NAV_CTA}
              className="rounded-full bg-slate-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Sign up for free
            </a>
          </div>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="px-6 pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
        <AnimatedSection className="mx-auto max-w-3xl">
          {/* Audience identifier */}
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-indigo-500">
            For freelancers and solo consultants
          </p>

          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-[56px]">
            Know exactly how profitable every client project is
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Track projects, invoices, expenses and profit — without
            spreadsheets.
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
                hover:shadow-[0_8px_32px_rgba(79,70,229,0.5)]
              "
            >
              Sign up for free
            </a>
          </div>
        </AnimatedSection>

        {/* Hero screenshot */}
        <AnimatedSection
          className="mx-auto mt-16 max-w-[1100px] px-2 sm:px-4"
          delay={0.15}
        >
          <div
            className="
              overflow-hidden
              rounded-[28px]
              bg-white
              ring-1 ring-slate-200
              shadow-[0_60px_160px_rgba(15,23,42,0.18)]
            "
          >
            <Image
              src="/screens/hero.png"
              alt="SummitHQ project financial dashboard"
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="w-full h-auto"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ===== PROBLEM SECTION ===== */}
      <section id="problem" className="px-6 py-20 sm:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            Running your freelance business shouldn&apos;t require spreadsheets
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Most freelancers manage their business across a mix of tools that
            don&apos;t talk to each other. Invoices in one place. Expenses
            somewhere else. Project tasks in another tool. And profitability
            tracked manually — if at all.
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            It&apos;s hard to know which projects are actually making money, what
            invoices are outstanding, or how your business is really performing.
          </p>

          <p className="mt-6 text-base font-medium text-slate-800">
            SummitHQ brings it all together in one clear system.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3 text-left sm:grid-cols-4">
            {[
              "Project tracking",
              "Invoicing",
              "Expenses",
              "Profit visibility",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ===== FEATURE SECTIONS (top) ===== */}
      <FeatureSections items={sectionsTop} indexOffset={0} />

      {/* ===== WHOLE PRODUCT SECTION ===== */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-12 text-center sm:mb-16">
            <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
              Your entire business in one place
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              The SummitHQ dashboard combines project management and financial
              tracking in a single view. See your income, expenses, profit,
              outstanding invoices and business health — without switching tabs.
            </p>

            <div className="mx-auto mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
              {["Income", "Expenses", "Net profit", "Outstanding invoices", "Business health score"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {item}
                  </span>
                )
              )}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              className="
                overflow-hidden
                rounded-[28px]
                bg-white
                ring-1 ring-slate-200
                shadow-[0_60px_160px_rgba(15,23,42,0.15)]
              "
            >
              <Image
                src="/screens/business-dashboard.png"
                alt="SummitHQ business dashboard"
                width={1600}
                height={1000}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="w-full h-auto"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FEATURE SECTIONS (bottom) ===== */}
      <FeatureSections items={sectionsBottom} indexOffset={1} />

      {/* ===== SOCIAL PROOF ===== */}
      <section className="px-6 py-20 sm:py-24">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Built for freelancers managing client projects
          </p>

          <blockquote className="mt-8 text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl">
            &ldquo;SummitHQ gives me instant clarity on which projects are
            actually making money.&rdquo;
          </blockquote>

          <p className="mt-4 text-sm text-slate-500">
            Freelance Shopify developer
          </p>
        </AnimatedSection>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="px-6 py-28 text-center">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
            Run your freelance business with clarity
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            SummitHQ gives you a clear view of your projects, finances and
            profitability — without spreadsheets.
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
