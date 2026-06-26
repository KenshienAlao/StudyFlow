"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { cn } from "@/lib";
import { useNavbar } from "@/provider";

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
