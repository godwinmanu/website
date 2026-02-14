import { useEffect, useState } from "react";
import { ArrowUpRight, Calendar, Clock, Heart, MessageCircle } from "lucide-react";
import { fetchArticles, formatDate, type DevToArticle } from "@/lib/devto";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

export function Blog() {
  const [articles, setArticles] = useState<DevToArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, []);

  return (
    <section id="blog" className="py-24 bg-card/50">
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
            Blog
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Thoughts & Insights
          </h2>
          <p className="text-muted mt-4 max-w-2xl mx-auto">
            I write about web development, software architecture, and lessons learned
            from building real-world applications.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-6 animate-pulse"
              >
                <div className="h-4 bg-border rounded w-20 mb-4" />
                <div className="h-6 bg-border rounded w-full mb-3" />
                <div className="h-4 bg-border rounded w-3/4 mb-2" />
                <div className="h-4 bg-border rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Articles Grid */}
        {!loading && articles.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={article.id}
                className={cn(
                  "group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-lg",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Cover Image */}
                {article.cover_image && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={article.cover_image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  </div>
                )}

                <div className="p-6">
                  {/* Tags */}
                  {article.tag_list.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tag_list.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                    {article.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formatDate(article.published_at)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{article.reading_time_minutes} min</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3.5 h-3.5" />
                        <span>{article.positive_reactions_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{article.comments_count}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read Link */}
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Read article
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* No Articles */}
        {!loading && articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted">No articles found. Check back soon!</p>
          </div>
        )}

        {/* View More Link */}
        {articles.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="https://dev.to/godwinmanu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
            >
              View all articles on dev.to
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
