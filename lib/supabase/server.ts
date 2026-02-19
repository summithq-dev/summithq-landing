import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

export async function createClient() {
  // cookies() RETURNS A PROMISE IN YOUR VERSION OF NEXT.JS
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value ?? "";
        },
        set() {
          // Next.js automatically sets cookies
        },
        remove() {
          // Next.js automatically removes cookies
        },
      },
    }
  );
}
