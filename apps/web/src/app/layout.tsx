import type { ReactNode } from "react";
import "../styles/globals.css";

export const metadata = {
  title: "USC AI Social Work Simulations",
  description: "Secure AI-powered simulation platform for USC SSW"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <header className="mb-6 border-b border-slate-800 pb-4">
            <h1 className="text-2xl font-semibold">
              USC AI Social Work Simulations
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              Internal prototype · Do not expose secrets to client.
            </p>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
