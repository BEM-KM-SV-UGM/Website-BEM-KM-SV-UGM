import ArticleHero from "@/features/vokasipedia/components/ArticleHero";
import ArticleList from "@/features/vokasipedia/components/ArticleList";
import {
  getArticles,
  getDivisions,
  getFeaturedArticles,
} from "@/features/vokasipedia/services/article.service";

export const metadata = {
  title: "Vokasipedia | BEM KM SV UGM",
  description: "Pusat artikel, berita, dan informasi BEM KM Sekolah Vokasi UGM.",
};

export default async function VokasipediaPage() {
  const [articles, featuredArticles, divisions] = await Promise.all([
    getArticles(),
    getFeaturedArticles(),
    getDivisions(),
  ]);

  return (
    <>
      <ArticleHero articles={featuredArticles} />
      <ArticleList initialArticles={articles} divisions={divisions} />
    </>
  );
}
