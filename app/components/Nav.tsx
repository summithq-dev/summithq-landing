import Image from "next/image";

const NAV_CTA = "https://app.summithq.co.uk/signup";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2.5">
          <Image
            src="/logo.jpg"
            alt="SummitHQ"
            width={32}
            height={32}
            className="rounded-md"
          />
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            SummitHQ
          </span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="/contact"
            className="hidden text-sm text-slate-600 transition hover:text-slate-900 sm:block"
          >
            Contact
          </a>
          <a
            href="https://app.summithq.co.uk/login"
            className="text-sm text-slate-600 transition hover:text-slate-900"
          >
            Log in
          </a>
          <a
            href={NAV_CTA}
            className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_8px_32px_rgba(79,70,229,0.35)] transition hover:bg-indigo-700"
          >
            Get early access
          </a>
        </div>
      </div>
    </nav>
  );
}
