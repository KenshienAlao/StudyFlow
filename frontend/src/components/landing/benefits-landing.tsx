import { ROUTES } from "@/config/route.config";
import { BENEFITS } from "@/config/landing.config";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function BenefitsSection() {
  const router = useRouter();
  return (
    <section className="py-28 bg-muted/20 border-y border-border/30">
      <div className="container grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl shadow-black/10 border border-border/40">
            <Image
              src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=85"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              alt="Student in deep focused study session"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-card border border-border/60 rounded-xl shadow-xl shadow-black/8 p-4 min-w-[160px]">
            <p className="text-2xl font-black text-primary">+43%</p>
            <p className="text-xs font-semibold text-muted-foreground mt-0.5">
              avg. grade improvement
              <br />
              reported after 30 days
            </p>
          </div>
          <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 bg-card border border-border/60 rounded-xl shadow-xl shadow-black/8 p-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg">
              🔥
            </div>
            <div>
              <p className="text-sm font-black text-foreground">
                21-day streak
              </p>
              <p className="text-xs text-muted-foreground">Keep going!</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 max-w-lg">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">
            Deep work framework
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-tight mb-6">
            Study with pure,
            <br />
            absolute clarity.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            No more executive dysfunction or context-switching chaos.
            StudyFlow's structured hierarchy lets you drop straight into
            distraction-free focus cycles the moment you open the app.
          </p>

          <ul className="space-y-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3.5">
                <div className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-base font-medium text-foreground/90 leading-snug">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <Button
            className="mt-10 h-11 px-7 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-md shadow-primary/20 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-primary/25"
            onClick={() => router.push(ROUTES.REGISTER)}
          >
            Start your first session →
          </Button>
        </div>
      </div>
    </section>
  );
}
