"use client";

import { useState } from "react";

export function MobileBanner() {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    const subject = encodeURIComponent("Check out SummitHQ on your desktop");
    const body = encodeURIComponent(
      "Hey — you visited SummitHQ on mobile but it's built for desktop.\n\nHead here when you're on your laptop or computer:\nhttps://summithq.co.uk?utm_source=mobile-reminder&utm_medium=email&utm_campaign=mobile-handoff\n\nTakes 2 minutes to get started, no credit card needed."
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setSent(true);
    setShowInput(false);
  }

  return (
    <div className="block sm:hidden bg-slate-900 text-white px-4 py-3 text-center text-sm">
      {!sent ? (
        <>
          <p className="font-medium">SummitHQ is designed for desktop</p>
          <p className="mt-0.5 text-slate-400 text-xs">
            You&apos;ll get the full experience on a laptop or computer.
          </p>

          {!showInput ? (
            <button
              onClick={() => setShowInput(true)}
              className="mt-3 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Email me a reminder →
            </button>
          ) : (
            <form
              onSubmit={handleSend}
              className="mt-3 flex items-center justify-center gap-2"
            >
              <input
                type="email"
                required
                autoFocus
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-44 rounded-full bg-white px-3 py-1.5 text-xs text-slate-900 outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-indigo-500 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-600"
              >
                Send
              </button>
            </form>
          )}
        </>
      ) : (
        <p className="text-slate-300 text-xs py-1">
          Reminder sent — open it on your desktop when you&apos;re ready.
        </p>
      )}
    </div>
  );
}
