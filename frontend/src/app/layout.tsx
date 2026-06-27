import type { Metadata } from "next";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import { APP_DESCRIPTION, APP_NAME } from "@/config/app.config";
import { QueryProvider } from "@/provider/query.provider";
import { ThemeProvider } from "@/provider/theme.provider";
import { NavbarProvider } from "@/provider/navbar.provider";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <QueryProvider>
          <ThemeProvider>
            <NavbarProvider>{children}</NavbarProvider>
          </ThemeProvider>
        </QueryProvider>

        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="colored"
          toastClassName="relative flex items-center gap-3 min-h-11 w-auto max-w-xs mx-auto pl-4 pr-5 py-3 rounded-2xl cursor-pointer bg-white/80 dark:bg-zinc-950/70 backdrop-blur-xl border border-zinc-200/40 dark:border-zinc-800/40 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)] text-xs font-semibold tracking-wide text-zinc-900 dark:text-zinc-100 transition-all duration-300 hover:scale-[1.02]"
          className="flex items-center gap-3 p-0 m-0"
        />
      </body>
    </html>
  );
}
