import type { Metadata } from "next";
import "./globals.css";

// Provider
import QueryProvider from "@/provider/query.provider";

export const metadata: Metadata = {
  title: "StudyFlow",
  description: "Helps you study better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
