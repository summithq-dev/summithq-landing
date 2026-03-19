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
      {/* Cloud background */}
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

      <Nav />

      {/* ===== HERO ===== */}
      <section className="px-6 pt-24 pb-16 text-center sm:pt-32 sm:pb-20">
        <AnimatedSection className="mx-auto max-w-3xl">
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-indigo-500">
            For freelancers &amp; consultants
          </p>

          <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight text-slate-900 sm:text-[56px]">
            That £8,000 project —{" "}
            <span className="text-indigo-600">what did you actually make?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            SummitHQ shows you exactly what you earned from every client project
            — after expenses, after invoices, in real time.
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
              alt="SummitHQ project financial overview showing profit"
              width={1600}
              height={1000}
              priority
              sizes="(max-width: 768px) 100vw, 1100px"
              className="w-full h-auto"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* ===== PAIN SECTION ===== */}
      <section className="px-6 py-20 sm:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            You&apos;re probably not as sure as you think
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            You charged £8k. But what did you spend on tools, contractors, or
            software for that project? What&apos;s still outstanding? What did
            you actually pocket?
          </p>

          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Most freelancers have a rough idea. Invoices are in one place,
            expenses in another, and profit is never really calculated at all.
          </p>

          <p className="mt-6 text-base font-medium text-slate-800">
            SummitHQ gives you the exact number.
          </p>
        </AnimatedSection>
      </section>

      {/* ===== FEATURE SECTIONS ===== */}
      <FeatureSections items={featureSections} />

      {/* ===== REALISATION SECTION ===== */}
      <section className="px-6 py-20 sm:py-28">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-indigo-500">
            The maths you never do
          </p>

          <h2 className="mt-4 text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
            That £10,000 project? You actually made £3,040.
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            SummitHQ does this automatically for every project — so you always
            know what you&apos;re actually earning, not just what you&apos;ve invoiced.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mx-auto mt-12 max-w-lg" delay={0.1}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {[
              { label: "Project value", value: "£10,000", muted: false, subtract: false },
              { label: "Expenses", value: "−£1,000", muted: false, subtract: true },
              { label: "Still outstanding", value: "−£4,240", muted: false, subtract: true },
            ].map((row, i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-slate-100 px-6 py-4"
              >
                <span className="text-sm text-slate-600">{row.label}</span>
                <span className={`text-sm font-medium ${row.subtract ? "text-red-500" : "text-slate-900"}`}>
                  {row.value}
                </span>
              </div>
            ))}
            <div className="flex items-center justify-between bg-green-50 px-6 py-5">
              <span className="text-sm font-semibold text-slate-900">Profit</span>
              <span className="text-xl font-bold text-green-700">£3,040</span>
            </div>
          </div>
        </AnimatedSection>
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
