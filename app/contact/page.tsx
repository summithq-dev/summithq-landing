export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center">
      <main className="max-w-3xl w-full px-6">
        <div className="bg-white rounded-2xl ring-1 ring-slate-200 p-8 md:p-12 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Contact</h1>

          <p className="mt-4 text-slate-600">
            Have a question, feedback, or want to get in touch?
          </p>

          <p className="mt-6 text-slate-600">Email us at:</p>

          <a
            href="mailto:support@summithq.dev"
            className="mt-2 inline-block text-lg font-medium text-indigo-600 hover:underline"
          >
            support@summithq.dev
          </a>
        </div>
      </main>
    </div>
  );
}
