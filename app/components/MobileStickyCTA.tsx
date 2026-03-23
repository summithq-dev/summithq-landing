"use client";

import { useState } from "react";

export function MobileStickyCTA() {
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
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur-sm sm:hidden">
      {sent ? (
        <p className="text-center text-sm text-slate-500 py-1">
          Reminder sent — open it on your desktop when you&apos;re ready.
        </p>
      ) : !showInput ? (
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-slate-500">Best experienced on desktop</p>
          <button
            onClick={() => setShowInput(true)}
            className="block w-full rounded-full bg-indigo-600 py-3.5 text-center text-sm font-semibold text-white shadow-[0_4px_20px_rgba(79,70,229,0.4)] transition hover:bg-indigo-700"
          >
            Email me a reminder for desktop →
          </button>
        </div>
      ) : (
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <input
            type="email"
            required
            autoFocus
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-indigo-400"
          />
          <button
            type="submit"
            className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
}
