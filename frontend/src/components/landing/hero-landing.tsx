import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/route.config";
import { useRouter } from "next/navigation";
import { MoveRight } from "lucide-react";

export function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]" />

      <div className="relative container text-center max-w-3xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full bg-primary/8 border border-primary/20 text-xs font-semibold text-primary tracking-wide uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Trusted by 50,000+ students worldwide
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] leading-[1.08] mb-6">
          The study companion
          <br />
          <span className="relative inline-block">
            <span className="relative z-10 text-primary">
              built for clarity.
            </span>
            <svg
              className="absolute -bottom-1 left-0 w-full"
              height="6"
              viewBox="0 0 300 6"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5 Q75 1 150 4 Q225 7 300 3"
                stroke="#6FAF8F"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
              />
            </svg>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
          Stop losing track of what matters. StudyFlow structures your subjects,
          micro-tracks your progress, and keeps your momentum compounding — day
          by day.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
          <Button
            size="lg"
            className="w-full sm:w-auto px-8 h-12 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 font-semibold rounded-xl text-[0.95rem] transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-primary/30"
            onClick={() => router.push(ROUTES.REGISTER)}
          >
            Start for free — no card needed
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto px-8 h-12 border-border hover:bg-muted/50 font-semibold rounded-xl text-[0.95rem]"
            onClick={() => router.push(ROUTES.LOGIN)}
          >
            Get started <MoveRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-4 bg-primary/8 rounded-3xl blur-2xl" />
          <div className="relative rounded-2xl border border-border/60 bg-card p-1.5 shadow-2xl shadow-black/10">
            <div className="overflow-hidden rounded-xl aspect-video relative bg-muted/20">
              <Image
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1400&q=85"
                alt="StudyFlow — clean workspace interface"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-card/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
