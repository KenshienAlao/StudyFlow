"use client";

import { Button } from "@/components/ui";
import { BENEFITS, FEATURES, ROUTES, TESTIMONIALS } from "@/config";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const go = (path: string) => router.push(path);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden">

      <nav className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/70 backdrop-blur-2xl">
        <div className="container py-3.5 flex items-center justify-between">
          <div
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => go("/")}
          >
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-sm shadow-primary/30 group-hover:scale-105 transition-transform">
              <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span className="text-[1.05rem] font-black tracking-tight">
              Study<span className="text-primary">Flow</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <span className="hover:text-foreground cursor-pointer transition-colors">Features</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">How it works</span>
            <span className="hover:text-foreground cursor-pointer transition-colors">Testimonials</span>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-sm font-medium hover:bg-muted/60 h-9 px-4" onClick={() => go(ROUTES.LOGIN)}>
              Sign in
            </Button>
            <Button
              className="text-sm font-semibold h-9 px-4 bg-primary text-white hover:bg-primary/90 shadow-sm shadow-primary/25 rounded-lg"
              onClick={() => go(ROUTES.REGISTER)}
            >
              Get started free
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,hsl(var(--primary)/0.12),transparent)]" />

        <div className="relative container text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-8 rounded-full bg-primary/8 border border-primary/20 text-xs font-semibold text-primary tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Trusted by 50,000+ students worldwide
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-[-0.03em] leading-[1.08] mb-6">
            The study companion<br />
            <span className="relative inline-block">
              <span className="relative z-10 text-primary">built for clarity.</span>
              <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 300 6" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5 Q75 1 150 4 Q225 7 300 3" stroke="#6FAF8F" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            Stop losing track of what matters. StudyFlow structures your subjects, micro-tracks your progress, and keeps your momentum compounding — day by day.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-20">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 h-12 bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25 font-semibold rounded-xl text-[0.95rem] transition-all hover:-translate-y-px hover:shadow-xl hover:shadow-primary/30"
              onClick={() => go(ROUTES.REGISTER)}
            >
              Start for free — no card needed
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 h-12 border-border hover:bg-muted/50 font-semibold rounded-xl text-[0.95rem]"
              onClick={() => go(ROUTES.LOGIN)}
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

      <section className="py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Features</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] leading-tight mb-4">
              Everything you need to excel
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Built around how deep focus and memory retention actually work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {FEATURES[0] && (() => {
              const { icon: Icon, title, description } = FEATURES[0];
              return (
                <div className="md:col-span-2 group relative bg-card border border-border/50 rounded-2xl p-10 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/8 transition-colors" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-3">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">{description}</p>
                    <span className="inline-flex items-center gap-1 mt-6 text-xs font-bold text-primary uppercase tracking-wider">
                      Learn more →
                    </span>
                  </div>
                </div>
              );
            })()}

            <div className="flex flex-col gap-5">
              {FEATURES.slice(1, 3).map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="group flex-1 bg-card border border-border/50 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            {FEATURES.slice(3).map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group bg-card border border-border/50 rounded-2xl p-7 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-muted/20 border-y border-border/30">
        <div className="container grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 shadow-2xl shadow-black/10 border border-border/40">
              <Image
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=900&q=85"
                fill
                className="object-cover"
                alt="Student in deep focused study session"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-6 md:-right-6 bg-card border border-border/60 rounded-xl shadow-xl shadow-black/8 p-4 min-w-[160px]">
              <p className="text-2xl font-black text-primary">+43%</p>
              <p className="text-xs font-semibold text-muted-foreground mt-0.5">avg. grade improvement<br />reported after 30 days</p>
            </div>
            <div className="absolute -top-5 -left-5 md:-top-6 md:-left-6 bg-card border border-border/60 rounded-xl shadow-xl shadow-black/8 p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-lg">🔥</div>
              <div>
                <p className="text-sm font-black text-foreground">21-day streak</p>
                <p className="text-xs text-muted-foreground">Keep going!</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-lg">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Deep work framework</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-[-0.02em] leading-tight mb-6">
              Study with pure,<br />absolute clarity.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              No more executive dysfunction or context-switching chaos. StudyFlow's structured hierarchy lets you drop straight into distraction-free focus cycles the moment you open the app.
            </p>

            <ul className="space-y-4">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-md bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-foreground/90 leading-snug">{b}</span>
                </li>
              ))}
            </ul>

            <Button
              className="mt-10 h-11 px-7 bg-primary text-white hover:bg-primary/90 rounded-xl font-semibold shadow-md shadow-primary/20 transition-all hover:-translate-y-px hover:shadow-lg hover:shadow-primary/25"
              onClick={() => go(ROUTES.REGISTER)}
            >
              Start your first session →
            </Button>
          </div>
        </div>
      </section>

      <section className="py-28 bg-background">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] leading-tight mb-4">
              Up and studying in minutes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-10 relative">
            <div className="hidden md:block absolute top-9 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-border/60" />

            {[
              {
                n: "01",
                title: "Add your subjects",
                desc: "Create subjects, topics, and subtopics in seconds. StudyFlow builds your personal knowledge map.",
              },
              {
                n: "02",
                title: "Log each session",
                desc: "Record what you studied, how long, and how well. Micro-progress compounds into visible growth.",
              },
              {
                n: "03",
                title: "Watch habits form",
                desc: "Streaks, insights, and adaptive reminders keep momentum alive — automatically.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="relative flex flex-col items-center text-center pt-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-background ring-1 ring-border/40 flex items-center justify-center mb-6 relative z-10">
                  <span className="text-xs font-black text-primary">{n}</span>
                </div>
                <h3 className="text-lg font-black tracking-tight mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-muted/20 border-y border-border/30">
        <div className="container">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] leading-tight mb-4">
              Loved by focused students
            </h2>
            <p className="text-muted-foreground">
              Real results from students who replaced chaos with clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border/50 rounded-2xl p-8 flex flex-col justify-between hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.358 2.44a1 1 0 00-.364 1.118l1.286 3.947c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.286-3.947a1 1 0 00-.364-1.118L2.075 9.375c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.948z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground/85 text-sm leading-relaxed mb-6 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-border/40">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-xs font-black text-primary uppercase">
                    {t.name.slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,hsl(var(--primary)/0.09),transparent)]" />
        <div className="relative container text-center max-w-2xl">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-[-0.03em] leading-none mb-6">
            Ready to study<br />
            <span className="text-primary">smarter?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md mx-auto">
            Join 50,000+ students who turned their study habits into a system. Free forever, no credit card required.
          </p>

          <Button
            size="lg"
            className="px-10 h-14 bg-primary text-white hover:bg-primary/90 font-bold rounded-xl shadow-xl shadow-primary/25 text-base transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/30"
            onClick={() => go(ROUTES.REGISTER)}
          >
            Get started free →
          </Button>

          <p className="text-xs text-muted-foreground mt-5 font-medium">
            No credit card · Cancel anytime · Free forever plan available
          </p>
        </div>
      </section>

      <footer className="border-t border-border/30 py-8 bg-background">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
              <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.966 8.966 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <span>© {new Date().getFullYear()} StudyFlow. All rights reserved.</span>
          </div>
          <div className="flex gap-6 tracking-wide">
            {/* TODO: make clickable soon */}
            <span className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-primary cursor-pointer transition-colors">Support</span>
          </div>
        </div>  
      </footer>
    </div>
  );
}