"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatedSection } from "./components/AnimatedSection";
import { Screenshot } from "./components/Screenshot";
import { Nav } from "./components/Nav";
import { MobileBanner } from "./components/MobileBanner";
import { MobileStickyCTA } from "./components/MobileStickyCTA";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";

const NAV_CTA = "https://app.summithq.co.uk/signup";

const featureSections = [
  {
    headline: "See the real profit on every project",
    body: "Open any project and see exactly what you invoiced, what you spent, and what you actually kept. No spreadsheets. No mental arithmetic.",
    points: [
      "Real profit calculated automatically",
      "Expenses tracked per project",
      "Outstanding invoices visible at a glance",
    ],
    screenshot: "/screens/hero.png",
    alt: "Project financial overview in SummitHQ",
  },
  {
    headline: "Know what's paid and what's still owed",
    body: "Create and send invoices in seconds. Every invoice — paid, outstanding, overdue — across all your clients in one place.",
    screenshot: "/screens/invoices-new.png",
    alt: "Invoices page in SummitHQ",
  },
  {
    headline: "See every cost that cuts into your profit",
    body: "Log expenses against projects as you go. See exactly how much each cost is eating into your margin — before it becomes a problem.",
    screenshot: "/screens/expenses.png",
    alt: "Expenses dashboard in SummitHQ",
  },
  {
    headline: "A calm command center for your business",
    body: "Income, expenses, profit, what's still owed — one screen, no mental arithmetic. Built for freelancers who want clarity, not complexity.",
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

const testimonials = [
  {
    quote: "I always knew roughly what I was earning. SummitHQ showed me I was leaving more on the table than I thought.",
    author: "James, freelance web developer",
  },
  {
    quote: "Before SummitHQ I had no idea which projects were actually profitable. Now I can see it at a glance and price my work properly.",
    author: "Sarah, independent graphic designer",
  },
  {
    quote: "Chasing invoices used to stress me out. Now I can see exactly what's outstanding and follow up without digging through emails.",
    author: "Tom, freelance copywriter",
  },
];

function TestimonialsSection() {
  return (
    <section className="px-6 py-20 sm:py-24">
      <AnimatedSection className="mx-auto max-w-5xl">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          What freelancers say
        </p>
        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-2xl border border-slate-200 bg-white/80 px-6 py-7">
              <blockquote className="text-base font-medium leading-relaxed text-slate-800">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-500">{t.author}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

const faqs = [
  {
    q: "Is this just another tool I have to keep updated?",
    a: "No. SummitHQ does the work for you. Log a project, add invoices and expenses as you go, and your profit is calculated automatically. There's no manual reconciliation or data entry routine to maintain.",
  },
  {
    q: "What does free actually mean?",
    a: "Free means no credit card and no time limit — your account won't expire. The free plan gives you enough to see exactly what SummitHQ does and whether it's right for you. Paid plans unlock higher limits and additional features when you're ready to go further.",
  },
  {
    q: "How long does setup take?",
    a: "Most freelancers are up and running in under 5 minutes. Create an account, add your first project, and your financial overview is ready. No integrations to configure, no historical data to import.",
  },
  {
    q: "Do I need to be good with numbers or accounting?",
    a: "Not at all. SummitHQ does the maths for you. If you can read a number, you can use it. We built it specifically for freelancers who want clarity — not another accounting package.",
  },
  {
    q: "Is my financial data safe?",
    a: "Yes. Your data is encrypted in transit and at rest. We never share or sell your information. You can export or delete your data at any time.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 sm:py-24">
      <AnimatedSection className="mx-auto max-w-2xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-400">
          Common questions
        </p>
        <h2 className="mb-10 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
          Everything you need to know
        </h2>
        <div className="divide-y divide-slate-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className="text-base font-medium text-slate-900">{faq.q}</span>
                <svg
                  className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20" fill="none"
                >
                  <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {open === i && (
                <p className="pb-5 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}

export default function LandingPage() {
  return (
    <main className="relative min-h-screen pb-20 text-slate-900 sm:pb-0">
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

      <MobileBanner />
      <Nav />

      {/* ===== HERO ===== */}
      <section className="overflow-hidden py-16 sm:py-24">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[520px_1fr] lg:gap-12 lg:pl-12 lg:pr-0 xl:pl-20">

          {/* Left: Text */}
          <AnimatedSection className="lg:pr-0">
            <p className="mb-4 text-sm text-gray-500">
              SummitHQ — Profit clarity for freelancers
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl">
              You made £10k… but how much did you actually keep?
            </h1>

            <p className="mb-5 text-lg leading-relaxed text-gray-700">
              Most freelancers track revenue. Very few track real profit. SummitHQ shows you exactly what you&apos;re making — across every project, client, and expense.
            </p>

            <a
              href={NAV_CTA}
              className="inline-block rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(79,70,229,0.35)] transition hover:bg-indigo-700"
            >
              Get early access
            </a>

            <p className="mt-2 text-sm text-gray-500">
              No spam. No commitment. Just early access.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600">1</span>
                Create your account
              </span>
              <span className="text-gray-300">→</span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600">2</span>
                Add your first project
              </span>
              <span className="text-gray-300">→</span>
              <span className="flex items-center gap-1.5">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-50 text-xs font-semibold text-indigo-600">3</span>
                See your real profit instantly
              </span>
            </div>

          </AnimatedSection>

          {/* Right: Product image */}
          <AnimatedSection delay={0.15} className="relative">
            {/* Radial glow behind image */}
            <div
              className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-40 blur-3xl"
              style={{ background: "radial-gradient(ellipse at center, #bfdbfe 0%, transparent 70%)" }}
            />
            <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-2xl lg:-translate-y-4">
              <Image
                src="/screens/project-profit-v2.png"
                alt="SummitHQ project profit overview — see exactly what you made on every project"
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
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-center gap-16 lg:grid-cols-[460px_1fr]">

          {/* Left: Text */}
          <AnimatedSection className="space-y-6">
            <h2 className="text-3xl font-semibold leading-snug text-gray-900 md:text-4xl">
              Revenue looks good.<br />
              <span className="font-medium text-gray-500">Profit tells the truth.</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              On paper, your business looks like it&apos;s doing well.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              But when you try to answer &ldquo;what did I actually make?&rdquo; — it gets messy fast.
            </p>
            <p className="text-lg font-semibold text-gray-900">
              Most freelancers never find out. They just keep busy and hope.
            </p>
          </AnimatedSection>

          {/* Right: The mental math scenario */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg sm:p-10">
              <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-gray-400">Sound familiar?</p>
              <div className="space-y-3">
                <p className="text-base text-gray-800 sm:text-lg">A project wraps up. You invoiced <span className="font-semibold">£6,000.</span></p>
                <div className="space-y-2 border-l-2 border-red-100 pl-5 text-sm text-gray-500 sm:text-base">
                  <p>— £400 in software and tools</p>
                  <p>— £800 for a contractor you brought in</p>
                  <p>— A 10% discount to close the deal</p>
                  <p>— 6 hours of revisions that weren&apos;t scoped</p>
                </div>
                <p className="pt-3 text-lg font-semibold text-gray-900 sm:text-xl">
                  So what did you actually make?
                </p>
              </div>
              <p className="mt-6 text-sm text-gray-400">If you had to think about it — that&apos;s the problem.</p>
            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ===== BEFORE / AFTER SLIDER ===== */}
      <BeforeAfterSlider />

      {/* ===== MID CTA ===== */}
      <section className="px-6 py-12">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-lg font-medium text-gray-800">
            You work hard. You deserve to know exactly what you&apos;re keeping.
          </p>
          <a
            href={NAV_CTA}
            className="inline-block rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(79,70,229,0.35)] transition hover:bg-indigo-700"
          >
            Get early access
          </a>
        </AnimatedSection>
      </section>

      {/* ===== CORE FEATURES ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-32">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">One clear view of your business</p>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Everything you need. Nothing you don&apos;t.</h2>
        </AnimatedSection>
        <div className="space-y-24">

          {/* Feature 1: Invoicing — text above, image below (Option A) */}
          <AnimatedSection>
            <div className="flex flex-col gap-8">
              {/* Text — compact intro, aligned to image left edge */}
              <div className="max-w-[520px] lg:relative lg:right-[-80px]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-indigo-500">Invoicing</p>
                <h2 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl">
                  Get paid. Know you got paid.
                </h2>
                <p className="mb-5 text-base leading-relaxed text-gray-600">
                  Create and send professional invoices in seconds. Every invoice — paid, outstanding, overdue — tracked automatically so nothing slips through.
                </p>
                <ul className="space-y-2">
                  {[
                    "Send invoices in seconds, not minutes",
                    "See paid, outstanding and overdue at a glance",
                    "Never lose track of what you're owed",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7" fill="#EEF2FF"/>
                        <path d="M5 8l2 2 4-4" stroke="#6366F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image — dominant, bleeds right */}
              <div className="w-full max-w-full overflow-hidden rounded-2xl ring-1 ring-gray-200 shadow-xl lg:relative lg:right-[-80px]">
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
                  Always know what&apos;s yours to keep.
                </h2>
                <p className="mb-6 text-base leading-relaxed text-gray-600">
                  Stop guessing if you can afford to pay yourself. SummitHQ keeps your numbers current so you know what&apos;s safe to spend — and what&apos;s set aside for tax.
                </p>
                <ul className="space-y-2">
                  {[
                    "See what's safe to spend at any time",
                    "Tax set-asides calculated automatically",
                    "No surprises at year end",
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
            Make better decisions, faster
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Know which clients are worth keeping",
                body: "You can only price the next project right if you know what the last one actually made you. Now you will.",
              },
              {
                title: "Spot problems before they cost you",
                body: "Every unpaid invoice is visible. See what's overdue and follow up before it becomes a cash flow problem.",
              },
              {
                title: "Plan with confidence instead of guessing",
                body: "No more rough estimates. No spreadsheet archaeology. Just the truth about your business, always there when you need it.",
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
      <TestimonialsSection />

      {/* ===== FAQ ===== */}
      <FAQSection />

      {/* ===== FINAL CTA ===== */}
      <section className="px-6 py-28 text-center">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
            Stop guessing your numbers.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            Join early access and start seeing your real profit clearly.
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
              Get early access
            </a>
          </div>

          <p className="mt-3 text-sm text-slate-400">Takes 30 seconds. No commitment.</p>
        </AnimatedSection>
      </section>

      {/* ===== STICKY MOBILE CTA ===== */}
      <MobileStickyCTA />

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-slate-100 px-6 pb-24 pt-10 sm:pb-10">
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
