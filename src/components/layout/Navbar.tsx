import { useState, useEffect } from "react";
import { Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { navItems, socialLinks } from "@/data/constants";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [activeItem, setActiveItem] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || mobileMenuOpen
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand - Left */}
          <a
            href="#home"
            className="font-heading font-bold text-lg tracking-tight text-foreground"
          >
            godwinmanu<span className="text-primary">.</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="flex flex-col items-end gap-1.5">
                <span className="block h-0.5 w-6 bg-current rounded-full" />
                <span className="block h-0.5 w-5 bg-current rounded-full" />
                <span className="block h-0.5 w-4 bg-current rounded-full" />
              </div>
            )}
          </button>

          {/* Nav Items - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className="relative py-2 group"
              >
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeItem === item.label
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </span>
                {/* Active dot indicator */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary transition-all",
                    activeItem === item.label
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  )}
                />
              </a>
            ))}
          </div>

          {/* Social Icons + Theme Toggle - Right */}
          <div className="hidden md:flex items-center gap-1">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-border/50"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <div className="w-px h-5 bg-border mx-2" />
            <button
              onClick={toggleTheme}
              className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-border/50"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveItem(item.label);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    activeItem === item.label
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:text-foreground hover:bg-border/50"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="flex items-center justify-between mt-4 px-4">
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-border/50"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="p-2 text-muted hover:text-foreground transition-colors rounded-lg hover:bg-border/50"
                aria-label="Toggle theme"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
