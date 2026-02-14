import { ArrowUpRight, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { projects } from "@/data/constants";

function ProjectCard({
  project,
  isVisible,
  delay,
  size = "small",
}: {
  project: (typeof projects)[0];
  isVisible: boolean;
  delay: number;
  size?: "large" | "small";
}) {
  return (
    <article
      className={cn(
        "group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-xl h-full",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className={cn("relative overflow-hidden", size === "large" ? "h-72" : "h-44")}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />

        {/* Links overlay */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 rounded-lg hover:bg-background transition-colors"
              aria-label="View on GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 rounded-lg hover:bg-background transition-colors"
              aria-label="View live"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className={cn("font-heading font-semibold text-foreground", size === "large" ? "text-xl" : "text-base")}>
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[11px] font-medium bg-primary/10 text-primary rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className={cn("text-muted leading-relaxed", size === "large" ? "text-sm" : "text-xs line-clamp-2")}>
          {project.description}
        </p>
      </div>
    </article>
  );
}

export function Works() {
  const { ref, isVisible } = useScrollAnimation();

  const [first, second, ...rest] = projects;

  return (
    <section id="works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={ref}
          className={cn(
            "mb-12 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Latest Works
          </h2>
          <p className="text-muted mt-2">
            Selected projects for digital experiences
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Left — large card */}
          <ProjectCard project={first} isVisible={isVisible} delay={200} size="large" />

          {/* Right — two stacked cards */}
          <div className="flex flex-col gap-5">
            <ProjectCard project={second} isVisible={isVisible} delay={300} size="small" />
            {rest[0] && (
              <ProjectCard project={rest[0]} isVisible={isVisible} delay={400} size="small" />
            )}
          </div>
        </div>

        {/* Extra projects below if any */}
        {rest.length > 1 && (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5">
            {rest.slice(1).map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                isVisible={isVisible}
                delay={500 + index * 100}
                size="small"
              />
            ))}
          </div>
        )}

        {/* View all link */}
        <div className="mt-10">
          <a
            href="https://github.com/godwinmanu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium uppercase tracking-wide text-sm hover:underline"
          >
            All Projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
