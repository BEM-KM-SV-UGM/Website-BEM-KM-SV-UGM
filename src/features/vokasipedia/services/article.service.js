import { articles, articleDivisions } from "../data/articles";

// Artikel terbaru tampil paling atas.
const byNewest = (a, b) => new Date(b.date) - new Date(a.date);

export async function getArticles({ category = "Semua", query = "" } = {}) {
  return articles
    .filter((article) => {
      const matchCategory =
        category === "Semua" ||
        article.category.toLowerCase() === category.toLowerCase();
      const matchQuery =
        !query ||
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    })
    .sort(byNewest);
}

// Artikel unggulan untuk hero carousel.
export async function getFeaturedArticles(limit = 5) {
  return articles
    .filter((article) => article.featured)
    .sort(byNewest)
    .slice(0, limit);
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

// Opsi dropdown filter (Pengurus Inti + biro-biro).
export async function getDivisions() {
  return articleDivisions;
}
