import { ROUTES } from "@/config/route.config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const router = useRouter();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/70 backdrop-blur-2xl">
      <div className="container py-3.5 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => router.push(ROUTES.LANDING_PAGE)}
        >
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm shadow-primary/30 group-hover:scale-105 transition-transform">
            <svg
              className="w-4.5 h-4.5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
          </div>
          <span className="text-[1.05rem] font-black tracking-tight">
            Study<span className="text-primary">Flow</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">
            Features
          </span>
          <span className="hover:text-foreground cursor-pointer transition-colors">
            How it works
          </span>
          <span className="hover:text-foreground cursor-pointer transition-colors">
            Testimonials
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm font-medium hover:bg-muted/60 h-9 px-4"
            onClick={() => router.push(ROUTES.LOGIN)}
          >
            Sign in
          </Button>
          <Button
            className="text-sm font-semibold h-9 px-4 bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/25 rounded-lg"
            onClick={() => router.push(ROUTES.REGISTER)}
          >
            Get started free
          </Button>
        </div>
      </div>
    </nav>
  );
}
