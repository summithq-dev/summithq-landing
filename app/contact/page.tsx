export default function ContactPage() {
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
      <div className="relative w-full max-w-3xl">
        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-white/40 blur-3xl" />

        {/* Glass card */}
        <div
          className="
            relative
            rounded-[32px]
            bg-white/70
            backdrop-blur-3xl
            ring-1 ring-white/60
            shadow-[0_40px_120px_rgba(15,23,42,0.25)]
            p-8
            md:p-12
            text-center
          "
        >
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>

          <p className="mt-4 text-slate-700">
            Have a question, feedback, or want to get in touch?
          </p>

          <p className="mt-6 text-slate-600">Email us at:</p>

          <a
            href="mailto:support@summithq.dev"
            className="
              mt-2
              inline-block
              text-lg
              font-medium
              text-indigo-600
              hover:underline
            "
          >
            support@summithq.dev
          </a>
        </div>
      </div>
    </main>
  );
}
