"use client";

import Link from "next/link";
import { useNavbar } from "@/provider";
import { cn } from "@/lib";
import { Menu, Settings, LogOut } from "lucide-react";
import { NAV_ITEMS, navItems } from "@/config";

export function Navbar() {
  const { open, toggle } = useNavbar();

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-50",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="p-4 flex items-center justify-between">
        {open && (
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663597445204/PixyURvrA2Q8G3yP56DbCd/studyflow-logo-EymTwqP3GwU3JiLMGMCZZk.webp"
              alt="StudyFlow"
              className="w-8 h-8"
            />
            <span className="font-bold text-foreground">StudyFlow</span>
          </div>
        )}

        <button onClick={toggle} className="p-2 hover:bg-muted rounded-lg transition">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <nav className="mt-8 space-y-2 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition text-foreground"
          >
            <item.icon className="w-5 h-5 text-primary" />
            {open && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-4 left-2 right-2 space-y-2">
        <Link
          href={NAV_ITEMS.SETTINGS}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition text-foreground"
        >
          <Settings className="w-5 h-5" />
          {open && <span className="text-sm">Settings</span>}
        </Link>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-destructive/10 transition text-destructive">
          <LogOut className="w-5 h-5" />
          {open && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </aside>
  );
}