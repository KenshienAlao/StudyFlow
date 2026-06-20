"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config";
import {
  BookOpen,
  BarChart3,
  Clock,
  Target,
  Zap,
  Users,
} from "lucide-react";
import { useRouter } from "next/navigation";

const features = [
  {
    icon: BookOpen,
    title: "Organize Subjects",
    description:
      "Keep all your subjects in one place with progress tracking and study hours.",
  },    
  {
    icon: Target,
    title: "Set Goals",
    description:
      "Define clear learning objectives and track your progress toward them.",
  },
  {
    icon: Clock,
    title: "Track Sessions",
    description:
      "Monitor your study sessions and build consistent learning habits.",
  },
  {
    icon: BarChart3,
    title: "Analyze Progress",
    description:
      "Get insights into your productivity with detailed analytics and trends.",
  },
  {
    icon: Zap,
    title: "Quick Tasks",
    description:
      "Create and manage study tasks with priority levels and due dates.",
  },
  {
    icon: Users,
    title: "Stay Focused",
    description:
      "A distraction-free interface designed for deep, focused learning.",
  },
];

const testimonials = [
  {
    name: "Alex Chen",
    role: "Computer Science Student",
    quote:
      "StudyFlow completely transformed how I organize my study time. I've never been more productive.",
  },
  {
    name: "Jordan Martinez",
    role: "Medical Student",
    quote:
      "The analytics dashboard helps me see exactly where I'm spending my study time. Game changer.",
  },
  {
    name: "Casey Williams",
    role: "Engineering Student",
    quote:
      "Finally, a study app that doesn't feel cluttered. It's beautiful and actually useful.",
  },
];

const benefits = [
  "Clean, distraction-free interface",
  "Powerful organization tools",
  "Real-time progress tracking",
  "Beautiful analytics dashboard",
];

export default function Home() {
  const router = useRouter();
  const go = (path: string) => router.push(path);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663597445204/PixyURvrA2Q8G3yP56DbCd/studyflow-logo-EymTwqP3GwU3JiLMGMCZZk.webp"
              className="w-8 h-8"
              alt="StudyFlow"
            />
            <span className="text-xl font-bold">StudyFlow</span>
          </div>

          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" onClick={() => go(ROUTES.LOGIN)}>
              Sign In
            </Button>
            <Button onClick={() => go(ROUTES.REGISTER)}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663597445204/PixyURvrA2Q8G3yP56DbCd/studyflow-hero-bg-gaaMJUZYQ7aWuCaa6W8aRD.webp')",
          }}
        />

        <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Your Focus, <span className="text-primary">Organized</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            StudyFlow helps you organize subjects, track progress, and build productive habits.
          </p>

          <div className="flex gap-4 justify-center">
            <Button size="lg" onClick={() => go(ROUTES.REGISTER)}>
              Start Studying Free
            </Button>
            <Button size="lg" variant="outline" onClick={() => go(ROUTES.LOGIN)}>
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Everything You Need
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card p-8 rounded-xl border hover:shadow-lg transition"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Study With Clarity</h2>

            <p className="text-lg text-muted-foreground mb-6">
              A simple, focused system for learning better.
            </p>

            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663597445204/PixyURvrA2Q8G3yP56DbCd/studyflow-dashboard-accent-6pg2ew4zzQcPKzp5rJpuJT.webp"
            className="rounded-xl shadow-lg"
            alt="Dashboard"
          />
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Loved by Students
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card p-8 rounded-xl border">
                <p className="text-muted-foreground italic mb-6">
                  "{t.quote}"
                </p>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Study Smarter?</h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of students improving their focus.
        </p>

        <Button size="lg" onClick={() => go(ROUTES.REGISTER)}>
          Get Started Free
        </Button>
      </section>

      <footer className="border-t py-12 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} StudyFlow
      </footer>
    </div>
  );
}