import { FEATURES } from "@/config/landing.config";

export function FeatureSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-[-0.02em] leading-tight mb-4">
            Everything you need to excel
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Built around how deep focus and memory retention actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {FEATURES[0] &&
            (() => {
              const { icon: Icon, title, description } = FEATURES[0];
              return (
                <div className="md:col-span-2 group relative bg-card border border-border/50 rounded-2xl p-10 overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/8 transition-colors" />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-black tracking-tight mb-3">
                      {title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md">
                      {description}
                    </p>
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
                <h3 className="text-lg font-black tracking-tight mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {description}
                </p>
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
              <h3 className="text-lg font-black tracking-tight mb-2">
                {title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
