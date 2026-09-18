import ArticleList from "@/features/vokasipedia/components/ArticleList";
import { getArticles, getCategories } from "@/features/vokasipedia/services/article.service";

export const metadata = {
  title: "Vokasipedia | BEM KM SV UGM",
  description: "Pusat artikel, berita, dan informasi BEM KM Sekolah Vokasi UGM.",
};

export default async function VokasipediaPage() {
  const [initialArticles, categories] = await Promise.all([
    getArticles(),
    getCategories(),
  ]);

  // return <ArticleList initialArticles={initialArticles} categories={categories} />;
}
