import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWaitlistConfirmation(email: string) {
  await resend.emails.send({
    from: "SummitHQ <support@summithq.dev>",
    to: email,
    subject: "You’re on the SummitHQ early access list 🎉",
    text: `
Hey 👋

Thanks for joining the SummitHQ early access list.

SummitHQ is being built to give solo business owners a calmer way to run their work —
from clients and projects to invoices, taxes, and everything in between.

You’re now on the list, and we’ll email you as soon as early access opens.
We’ll also send the occasional update as things progress.

No spam. No noise.

If you have any questions, just reply to this email — we read every message.

— SummitHQ
`,
  });
}
