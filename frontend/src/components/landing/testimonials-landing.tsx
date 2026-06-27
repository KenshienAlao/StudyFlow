import { TESTIMONIALS } from "@/config/landing.config";

export function TestimonialsSection() {
  return (
    <section className="py-28 bg-muted/20 border-y border-border/30">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Testimonials
          </p>
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
                  <svg
                    key={i}
                    className="w-4 h-4 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
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
  );
}
