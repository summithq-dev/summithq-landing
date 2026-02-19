import "./global.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "SummitHQ Dashboard",
  description: "Modern business dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-50 overflow-x-hidden">
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <Toaster richColors position="top-right" />
        <Analytics />
      </body>
    </html>
  );
}
