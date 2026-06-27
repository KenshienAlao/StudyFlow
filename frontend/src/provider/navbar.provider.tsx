"use client";
import { createContext, ReactNode, use, useState } from "react";

type NavbarContextType = {
  open: boolean;
  toggle: () => void;
};

const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

export function NavbarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ open, toggle }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const ctx = use(NavbarContext);
  if (!ctx) throw new Error("useNavbar must be inside NavbarProvider");
  return ctx;
}
