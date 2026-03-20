"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  function paginate(newDirection: number) {
    setDirection(newDirection);
    setIndex((i) => (i + newDirection + testimonials.length) % testimonials.length);
  }

  return (
    <section className="px-6 py-20 sm:py-24">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          What freelancers say
        </p>

        <div className="relative mt-8 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) paginate(1);
                else if (info.offset.x > 50) paginate(-1);
              }}
            >
              <blockquote className="cursor-grab select-none text-xl font-medium leading-relaxed text-slate-800 sm:text-2xl active:cursor-grabbing">
                &ldquo;{testimonials[index].quote}&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-500">{testimonials[index].author}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-slate-700" : "w-1.5 bg-slate-300"}`}
            />
          ))}
        </div>
      </AnimatedSection>
    </section>
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
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[520px_1fr] lg:gap-12 lg:pl-12 lg:pr-0 xl:pl-20">

          {/* Left: Text */}
          <AnimatedSection className="lg:pr-0">
            <p className="mb-4 text-sm text-gray-500">
              SummitHQ — Business clarity for freelancers
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-gray-900 md:text-5xl">
              Finally know exactly what your business is making.
            </h1>

            <p className="mb-5 text-lg leading-relaxed text-gray-700">
              No more digging through spreadsheets and bank statements. See your real profit, automatically.
            </p>

            <a
              href={NAV_CTA}
              className="inline-block rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(79,70,229,0.35)] transition hover:bg-indigo-700"
            >
              Get your free financial dashboard →
            </a>

            <p className="mt-2 text-sm text-gray-500">
              No credit card • Takes 2 minutes
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              <p className="text-sm font-medium text-gray-600">
                Used by <span className="text-gray-900">5,000+ freelancers</span> who finally understand their business
              </p>
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
            <div className="flex gap-2 sm:gap-4">

              {/* Column A — standard width, starts mid */}
              <div className="flex flex-1 flex-col gap-2 sm:gap-5 sm:pt-8">

                {/* Google Sheets */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 sm:p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#0F9D58"/>
                      <rect x="6" y="6" width="12" height="2" rx="0.5" fill="white" opacity="0.9"/>
                      <rect x="6" y="10" width="12" height="2" rx="0.5" fill="white" opacity="0.7"/>
                      <rect x="6" y="14" width="8" height="2" rx="0.5" fill="white" opacity="0.7"/>
                    </svg>
                    <span className="hidden text-xs text-gray-500 sm:inline">Google Sheets</span>
                  </div>
                  <p className="text-xs text-gray-800 sm:text-sm">Expenses tracker</p>
                  <span className="text-[10px] text-gray-400">Manual</span>
                </div>

                {/* Stripe — dimmed */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 sm:p-5 opacity-80 shadow-md">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#635BFF"/>
                      <path d="M10.5 9.5c0-.8.7-1.1 1.8-.9 1.5.3 3 1 4 1.8V7c-1.3-.5-2.6-.8-4-.8-3.3 0-5.5 1.7-5.5 4.5 0 4.4 6 3.7 6 5.6 0 .9-.8 1.2-2 1-1.6-.3-3.2-1.1-4.3-2v3.4c1.4.6 2.8.9 4.3.9 3.4 0 5.7-1.7 5.7-4.5-.1-4.7-6.1-3.9-6-5.6z" fill="white"/>
                    </svg>
                    <span className="hidden text-xs text-gray-500 sm:inline">Stripe</span>
                  </div>
                  <p className="text-xs text-gray-800 sm:text-sm">Payments</p>
                  <span className="text-[10px] text-gray-400">Separate</span>
                </div>

              </div>

              {/* Column B — wide card size, starts at top */}
              <div className="flex w-[42%] flex-col gap-2 sm:gap-5">

                {/* Notion */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 sm:p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#191919"/>
                      <text x="7.5" y="16" fontSize="9" fontWeight="700" fill="white" fontFamily="serif">N</text>
                    </svg>
                    <span className="hidden text-xs text-gray-500 sm:inline">Notion</span>
                  </div>
                  <p className="text-xs text-gray-800 sm:text-sm">Project notes</p>
                  <span className="text-[10px] text-gray-400">Not synced</span>
                </div>

                {/* Gmail */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 sm:p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#EA4335"/>
                      <path d="M4 8l8 5 8-5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      <rect x="4" y="8" width="16" height="9" rx="1" stroke="white" strokeWidth="1.5" fill="none"/>
                    </svg>
                    <span className="hidden text-xs text-gray-500 sm:inline">Gmail</span>
                  </div>
                  <p className="text-xs text-gray-800 sm:text-sm">Client comms</p>
                  <span className="text-[10px] text-gray-400">Separate</span>
                </div>

                {/* Trello */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 sm:p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#0052CC"/>
                      <rect x="5" y="5" width="5" height="9" rx="1" fill="white"/>
                      <rect x="14" y="5" width="5" height="6" rx="1" fill="white"/>
                    </svg>
                    <span className="hidden text-xs text-gray-500 sm:inline">Trello</span>
                  </div>
                  <p className="text-xs text-gray-800 sm:text-sm">Somewhere…</p>
                  <span className="text-[10px] text-gray-400">Not synced</span>
                </div>

              </div>

              {/* Column C — standard width, starts low */}
              <div className="flex flex-1 flex-col gap-2 sm:gap-5 sm:pt-12">

                {/* QuickBooks */}
                <div className="flex flex-col gap-2 rounded-xl border border-gray-200 bg-white p-3 sm:p-5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none">
                      <rect width="24" height="24" rx="4" fill="#2CA01C"/>
                      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="1.8" fill="none"/>
                      <circle cx="12" cy="12" r="2" fill="white"/>
                    </svg>
                    <span className="hidden text-xs text-gray-500 sm:inline">QuickBooks</span>
                  </div>
                  <p className="text-xs text-gray-800 sm:text-sm">No idea</p>
                  <span className="text-[10px] text-gray-400">Manual</span>
                </div>

              </div>

            </div>
          </AnimatedSection>

        </div>
      </section>

      {/* ===== MID CTA ===== */}
      <section className="px-6 py-12">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-lg font-medium text-gray-800">
            There&apos;s a simpler way. One dashboard, all your numbers, no manual work.
          </p>
          <a
            href={NAV_CTA}
            className="inline-block rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(79,70,229,0.35)] transition hover:bg-indigo-700"
          >
            Get your free financial dashboard →
          </a>
        </AnimatedSection>
      </section>

      {/* ===== CORE FEATURES ===== */}
      <section className="mx-auto max-w-[1200px] px-6 py-32">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">How it works</p>
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">Everything you need, in one place</h2>
        </AnimatedSection>
        <div className="space-y-24">

          {/* Feature 1: Invoicing — text above, image below (Option A) */}
          <AnimatedSection>
            <div className="flex flex-col gap-8">
              {/* Text — compact intro, aligned to image left edge */}
              <div className="max-w-[520px] lg:relative lg:right-[-80px]">
                <h2 className="mb-3 text-2xl font-semibold text-gray-900 md:text-3xl">
                  Send invoices in minutes, not hours.
                </h2>
                <p className="text-base leading-relaxed text-gray-600">
                  Create, send, and track invoices in one place — without jumping between tools.
                </p>
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
      <TestimonialsSection />

      {/* ===== FINAL CTA ===== */}
      <section className="px-6 py-28 text-center">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold leading-snug text-slate-900 sm:text-4xl">
            Your finances shouldn&apos;t be a mystery.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            SummitHQ fixes that in minutes — free forever to get started.
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
              Get your free financial dashboard →
            </a>
          </div>

          <p className="mt-3 text-sm text-slate-400">Free to start. Upgrade only when it&apos;s worth it to you.</p>
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
