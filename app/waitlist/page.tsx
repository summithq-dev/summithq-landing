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
      <main
        className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
        style={{
          backgroundImage: "url('/clouds/sky-clouds-full.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative w-full max-w-md text-center">
          {/* Glow */}
          <div className="absolute inset-0 rounded-[32px] bg-white/40 blur-3xl" />

          {/* Glass card */}
          <div
            className="
              relative
              rounded-[28px]
              bg-white/70
              backdrop-blur-3xl
              ring-1 ring-white/60
              shadow-[0_40px_120px_rgba(15,23,42,0.25)]
              p-8
            "
          >
            <h1 className="text-2xl font-semibold text-slate-900">
              You’re on the list 🎉
            </h1>

            <p className="mt-4 text-slate-700">
              We’ll email you when early access opens.
            </p>

            <Link
              href="/"
              className="
                inline-flex
                mt-8
                items-center
                justify-center
                rounded-full
                bg-indigo-600
                px-8
                py-3
                text-sm
                font-semibold
                text-white
                shadow-[0_20px_60px_rgba(79,70,229,0.4)]
                transition
                hover:scale-[1.05]
                hover:bg-indigo-700
              "
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
    <main
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-6"
      style={{
        backgroundImage: "url('/clouds/sky-clouds-full.png')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative w-full max-w-md">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[32px] bg-white/40 blur-3xl" />

        {/* Glass card */}
        <form
          onSubmit={handleSubmit}
          className="
            relative
            rounded-[28px]
            bg-white/70
            backdrop-blur-3xl
            ring-1 ring-white/60
            shadow-[0_40px_120px_rgba(15,23,42,0.25)]
            p-8
          "
        >
          <h1 className="text-xl font-semibold text-slate-900">
            Join the SummitHQ waitlist
          </h1>

          <p className="mt-3 text-sm text-slate-700">
            Get early access to a calmer way to run your business.
          </p>

          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="
              mt-6
              w-full
              rounded-xl
              border
              border-slate-300
              bg-white
              px-4
              py-3
              text-sm
              focus:outline-none
              focus:ring-2
              focus:ring-indigo-500
            "
          />

          {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

          <button
            disabled={loading}
            className="
              mt-5
              w-full
              rounded-full
              bg-slate-900
              py-3
              text-sm
              font-semibold
              text-white
              shadow
              transition
              hover:bg-slate-800
              disabled:opacity-60
            "
          >
            {loading ? "Joining..." : "Join the waitlist"}
          </button>

          <p className="mt-4 text-center text-xs text-slate-500">
            No spam. Just early access.
          </p>
        </form>
      </div>
    </main>
  );
}
