"use client";

import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { useNavbar } from "@/provider/navbar.provider";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function Structure({ children }: DashboardLayoutProps) {
  const { open } = useNavbar();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main
        className={cn("transition-all duration-300", open ? "ml-64" : "ml-20")}
      >
        {/* profile soon */}

        {/* Content */}
        <div className="p-8">{children}</div>
      </main>
    </div>
  );
}
