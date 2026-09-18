import { articles } from "../data/articles";

export async function getArticles({ category = "Semua", query = "" } = {}) {
  return articles.filter((article) => {
    const matchCategory =
      category === "Semua" ||
      article.category.toLowerCase() === category.toLowerCase();
    const matchQuery =
      !query ||
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCategory && matchQuery;
  });
}

export async function getArticleBySlug(slug) {
  const article = articles.find((item) => item.slug === slug);
  if (!article) return null;

  // Sertakan objek artikel terkait
  const relatedArticles = articles.filter((item) =>
    article.relatedSlugs?.includes(item.slug)
  );

  return {
    ...article,
    relatedArticles,
  };
}

export async function getCategories() {
  const categories = Array.from(
    new Set(articles.map((item) => item.category))
  );
  return ["Semua", ...categories];
}
