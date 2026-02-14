import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            "max-w-3xl mx-auto text-center transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Section Header */}
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
            Let's work together
          </h2>
          <p className="text-muted text-lg mb-10">
            Have a project in mind or want to collaborate? I'm always open to discussing
            new opportunities and interesting ideas.
          </p>

          {/* Contact Info */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 transition-all duration-500 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <div className="flex items-center gap-3 text-muted">
              <Mail className="w-5 h-5 text-primary" />
              <a
                href="mailto:godwinemmanuel302@gmail.com"
                className="hover:text-foreground transition-colors"
              >
                godwinemmanuel302@gmail.com
              </a>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-border rounded-full" />
            <div className="flex items-center gap-3 text-muted">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Abomey-Calavi, Benin</span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:godwinemmanuel302@gmail.com"
            className={cn(
              "inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:opacity-90 transition-all text-lg group",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
            style={{ transitionDelay: "400ms", transitionDuration: "500ms" }}
          >
            <span>Got a project? Let's talk</span>
            <ArrowRight className="w-5 h-5 group-hover:animate-bounce-x" />
          </a>
        </div>
      </div>
    </section>
  );
}
