import { ArrowRight } from "lucide-react";
import profileImage from "@/assets/images/profile.webp";
import { skills } from "@/data/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated blob shapes */}
        <svg
          className="absolute -top-40 -right-40 w-150 h-150 text-primary/10 animate-blob"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M47.5,-57.2C59.9,-46.7,67.5,-30.5,71.1,-13.1C74.7,4.3,74.3,22.9,66.3,37.5C58.3,52.1,42.7,62.7,25.7,68.5C8.7,74.3,-9.7,75.3,-26.4,69.8C-43.1,64.3,-58.1,52.3,-67.3,36.5C-76.5,20.7,-79.9,1.1,-75.6,-16.1C-71.3,-33.3,-59.3,-48.1,-44.8,-58.2C-30.3,-68.3,-13.3,-73.7,2.4,-76.6C18.1,-79.5,35.1,-67.7,47.5,-57.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute -bottom-20 -left-20 w-125 h-125 text-accent/10 animate-blob animation-delay-200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M39.9,-47.7C52.8,-38.9,65.1,-27.5,70.2,-13.1C75.3,1.3,73.2,18.7,65.3,33.1C57.4,47.5,43.7,58.9,28.1,65.1C12.5,71.3,-5,72.3,-21.8,68.1C-38.6,63.9,-54.7,54.5,-64.2,40.6C-73.7,26.7,-76.6,8.3,-73.1,-8.5C-69.6,-25.3,-59.7,-40.5,-46.4,-49.2C-33.1,-57.9,-16.6,-60.1,-1.4,-58.4C13.8,-56.7,27,-56.5,39.9,-47.7Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute top-1/3 left-1/4 w-100 h-100 text-primary/5 animate-blob animation-delay-400"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M44.7,-51.2C57.3,-42.3,66.5,-27.5,69.8,-11.3C73.1,4.9,70.5,22.5,61.8,36.5C53.1,50.5,38.3,60.9,22,67.1C5.7,73.3,-12.1,75.3,-28.5,70.1C-44.9,64.9,-59.9,52.5,-68.5,36.5C-77.1,20.5,-79.3,0.9,-74.4,-16.1C-69.5,-33.1,-57.5,-47.5,-43.2,-56.1C-28.9,-64.7,-12.3,-67.5,2.3,-70.3C16.9,-73.1,32.1,-60.1,44.7,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 animate-fade-in-up">
              <p className="text-muted font-medium tracking-wide uppercase text-sm">
                Hello, I'm
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
                <span className="text-foreground">GODWIN</span>
                <span className="text-primary">.</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-foreground/80">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-muted text-lg leading-relaxed max-w-lg animate-fade-in-up animation-delay-100">
              I craft engaging front-end experiences with React while building
              robust back-end systems with Django. Passionate about creating
              user-friendly, efficient, and maintainable web solutions.
            </p>

            {/* CTA Button */}
            <div className="animate-fade-in-up animation-delay-200">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all group"
              >
                <span>Got a project? Let's discuss</span>
                <ArrowRight className="w-5 h-5 group-hover:animate-bounce-x" />
              </a>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-4 animate-fade-in-up animation-delay-300">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm font-medium bg-card border border-border rounded-full text-muted hover:text-foreground hover:border-primary/50 transition-colors cursor-default"
                  style={{ animationDelay: `${400 + index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Photo with organic shape */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-200">
            {/* Organic blob behind photo */}
            <svg
              className="absolute w-112.5 h-137.5 text-primary/20 -z-10"
              viewBox="0 0 200 250"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M47.5,-57.2C59.9,-46.7,67.5,-30.5,71.1,-13.1C74.7,4.3,74.3,22.9,66.3,37.5C58.3,52.1,42.7,62.7,25.7,68.5C8.7,74.3,-9.7,75.3,-26.4,69.8C-43.1,64.3,-58.1,52.3,-67.3,36.5C-76.5,20.7,-79.9,1.1,-75.6,-16.1C-71.3,-33.3,-59.3,-48.1,-44.8,-58.2C-30.3,-68.3,-13.3,-73.7,2.4,-76.6C18.1,-79.5,35.1,-67.7,47.5,-57.2Z"
                transform="translate(100 125) scale(1.1)"
              />
            </svg>

            {/* Photo container */}
            <div className="relative">
              <div className="w-80 h-105 sm:w-96 sm:h-125 rounded-2xl overflow-hidden border-4 border-card shadow-2xl">
                <img
                  src={profileImage}
                  alt="Emmanuel Godwin HOUENOU"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating cards */}
              <div className="absolute -left-8 top-1/4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                  <span className="text-sm font-medium text-foreground">
                    Available for work
                  </span>
                </div>
              </div>

              <div className="absolute -right-4 bottom-1/4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float animation-delay-500">
                <div className="text-center">
                  <span className="text-2xl font-bold text-primary">4+</span>
                  <p className="text-xs text-muted">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
