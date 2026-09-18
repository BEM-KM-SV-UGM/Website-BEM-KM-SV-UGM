"use client";

import { useState } from "react";
import ArticleCard from "./ArticleCard";
import ArticleFilter from "./ArticleFilter";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./ArticleList.module.css";

export default function ArticleList({ initialArticles, categories }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = initialArticles.filter((article) => {
    const matchCategory =
      selectedCategory === "Semua" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchQuery =
      !searchQuery ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <section className="container" style={{ paddingBlock: "var(--spacing-8)" }}>
      <SectionTitle
        title="Vokasipedia"
        subtitle="Pusat artikel, berita, pengumuman, dan publikasi resmi BEM KM Sekolah Vokasi UGM."
      />

      <ArticleFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {filteredArticles.length === 0 ? (
        <div className={styles.empty}>
          <p>Tidak ada artikel yang cocok dengan filter atau pencarian Anda.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
