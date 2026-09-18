import { notFound } from "next/navigation";
import ArticleDetail from "@/features/vokasipedia/components/ArticleDetail";
import { getArticleBySlug, getArticles } from "@/features/vokasipedia/services/article.service";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Artikel Tidak Ditemukan | BEM KM SV UGM" };
  }

  return {
    title: `${article.title} | Vokasipedia BEM KM SV UGM`,
    description: article.excerpt,
  };
}

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return <ArticleDetail article={article} />;
}
