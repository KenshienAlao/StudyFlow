export function HowItWorksSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            How it works
          </p>
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
            <div
              key={n}
              className="relative flex flex-col items-center text-center pt-2"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-background ring-1 ring-border/40 flex items-center justify-center mb-6 relative z-10">
                <span className="text-xs font-black text-primary">{n}</span>
              </div>
              <h3 className="text-lg font-black tracking-tight mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
