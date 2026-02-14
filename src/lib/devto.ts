export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
  positive_reactions_count: number;
  comments_count: number;
}

const DEV_TO_USERNAME = "godwinmanu";

export async function fetchArticles(): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${DEV_TO_USERNAME}&per_page=6`
    );
    if (!response.ok) throw new Error("Failed to fetch articles");
    const articles: DevToArticle[] = await response.json();
    return articles.sort((a, b) => b.positive_reactions_count - a.positive_reactions_count);
  } catch (error) {
    console.error("Error fetching dev.to articles:", error);
    return [];
  }
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
