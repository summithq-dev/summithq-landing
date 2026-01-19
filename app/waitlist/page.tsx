"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions/join-waitlist";
import Link from "next/link";

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const result = await joinWaitlist(email);

    if (result?.error) {
      setError(result.error);
    } else {
      setSuccess(true);
    }

    setLoading(false);
  }

  /* ---------------- SUCCESS STATE ---------------- */
  if (success) {
    return (
      <main className="relative min-h-screen overflow-hidden">
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500" />
        <div className="absolute inset-0 bg-white/70" />

        <div className="relative flex min-h-screen items-center justify-center px-6 text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-semibold">You’re on the list 🎉</h1>

            <p className="mt-4 text-slate-600">
              We’ll email you when early access opens.
            </p>

            <Link
              href="/"
              className="inline-flex mt-8 items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700 transition"
            >
              Back to homepage
            </Link>

            <p className="mt-6 text-xs text-slate-500">
              Thanks for your interest in SummitHQ.
            </p>
          </div>
        </div>
      </main>
    );
  }

  /* ---------------- FORM STATE ---------------- */
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Gradient backdrop (match hero exactly) */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500" />
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative flex min-h-screen items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm rounded-xl bg-white p-6 ring-1 ring-slate-200 shadow-xl"
        >
          <h1 className="text-xl font-semibold">Join the SummitHQ waitlist</h1>

          <p className="mt-2 text-sm text-slate-600">
            Get early access to a calmer way to run your business.
          </p>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-6 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <button
            disabled={loading}
            className="mt-4 w-full rounded-lg bg-slate-900 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-60 transition"
          >
            {loading ? "Joining..." : "Join the waitlist"}
          </button>

          <p className="mt-3 text-center text-xs text-slate-500">
            No spam. Just early access.
          </p>
        </form>
      </div>
    </main>
  );
}
