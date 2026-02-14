import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { services, stats } from "@/data/constants";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Turning ideas into reality
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - About Text */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <p className="text-muted text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Emmanuel Godwin HOUENOU</span>,
              a Software Engineer based in Benin, specializing in full-stack development
              with a focus on cloud-oriented solutions.
            </p>
            <p className="text-muted leading-relaxed">
              With a background in Computer Science from the Polytechnic School of
              Abomey-Calavi, I've developed expertise in building end-to-end web applications.
              My thesis on "Distributed Cache Systems with Automatic Invalidation" was published
              in an international journal, reflecting my interest in system optimization.
            </p>
            <p className="text-muted leading-relaxed">
              I prioritize adaptability and collaboration, ensuring every project benefits
              from continuous improvement and modern practices. Whether it's crafting
              intuitive interfaces or architecting robust backend systems, I'm dedicated
              to delivering impactful results.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "transition-all duration-500",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <span className="text-3xl font-heading font-bold text-primary">
                    {stat.value}
                  </span>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Services */}
          <div className="grid sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={cn(
                  "p-6 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all duration-500 group hover:shadow-lg",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
