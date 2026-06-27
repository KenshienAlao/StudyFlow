import { ROUTES } from "@/config/route.config";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  const router = useRouter();
  return (
    <section className="py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(var(--primary)/0.09),transparent)]" />
      <div className="relative container text-center max-w-2xl">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <svg
            className="w-7 h-7 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>

        <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-none mb-6">
          Ready to study
          <br />
          <span className="text-primary">smarter?</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Join 50,000+ students who turned their study habits into a system.
          Free forever, no credit card required.
        </p>

        <Button
          size="lg"
          className="px-10 h-14 bg-primary text-white hover:bg-primary/90 font-bold rounded-xl shadow-xl shadow-primary/25 text-base transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30"
          onClick={() => router.push(ROUTES.REGISTER)}
        >
          Get started free →
        </Button>

        <p className="text-xs text-muted-foreground mt-5 font-medium">
          No credit card · Cancel anytime · Free forever plan available
        </p>
      </div>
    </section>
  );
}
