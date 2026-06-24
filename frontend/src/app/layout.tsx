import type { Metadata } from "next";
import "./globals.css";

// Provider
import {QueryProvider} from "@/provider";

// Config
import { APP_NAME, APP_DESCRIPTION } from "@/config";

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
};

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider, NavbarProvider } from "@/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <ThemeProvider>
            <NavbarProvider>
            {children}
          </NavbarProvider>
          </ThemeProvider>
        </QueryProvider>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={true} closeOnClick={true} rtl={false} pauseOnFocusLoss={true} draggable={true} pauseOnHover={false} />
      </body>
    </html>
  );
}
