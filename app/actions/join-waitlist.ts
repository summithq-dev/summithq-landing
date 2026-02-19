"use server";

import { createPublicClient } from "@/lib/supabase/public";
import { sendWaitlistConfirmation } from "@/lib/email/send-waitlist-confirmation";

export async function joinWaitlist(email: string) {
  if (!email || !email.includes("@")) {
    return { error: "Invalid email address" };
  }

  const supabase = createPublicClient();

  const { error } = await supabase.from("waitlist").insert({ email });

  if (error) {
    // Duplicate email → treat as success (already on list)
    if (error.code === "23505") {
      return { success: true };
    }

    return { error: "Something went wrong. Please try again." };
  }

  // Fire-and-forget email (do NOT block UX)
  sendWaitlistConfirmation(email).catch(console.error);

  return { success: true };
}
