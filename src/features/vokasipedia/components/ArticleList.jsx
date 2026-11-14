"use client";

import { useMemo, useRef, useState } from "react";
import ArticleCard from "@/components/ui/ArticleCard";
import Button from "@/components/ui/Button";
import EmptyState from "@/components/shared/EmptyState";
import useDebounce from "@/hooks/useDebounce";
import { AltArrowDownIcon } from "@solar-icons/react/line-duotone/alt-arrow-down";
import ArticleFilter from "./ArticleFilter";
import styles from "./ArticleList.module.css";

// Jumlah card per "halaman" (3 kolom x 3 baris sesuai Figma).
const PAGE_SIZE = 9;

export default function ArticleList({ initialArticles, divisions }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDivisions, setSelectedDivisions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const gridRef = useRef(null);

  const debouncedQuery = useDebounce(searchQuery, 250);

  const filteredArticles = useMemo(() => {
    const query = debouncedQuery.trim().toLowerCase();

    return initialArticles.filter((article) => {
      const matchDivision =
        selectedDivisions.length === 0 ||
        selectedDivisions.includes(article.division);

      const searchable = [
        article.title,
        article.excerpt,
        article.ministry,
        article.division,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return matchDivision && (!query || searchable.includes(query));
    });
  }, [initialArticles, debouncedQuery, selectedDivisions]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = filteredArticles.length > visibleArticles.length;
  const isFiltering = searchQuery.trim() !== "" || selectedDivisions.length > 0;

  // Setiap perubahan pencarian/filter mengembalikan daftar ke halaman pertama.
  const handleSearchChange = (value) => {
    setSearchQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  const handleToggleDivision = (division) => {
    setSelectedDivisions((current) =>
      current.includes(division)
        ? current.filter((item) => item !== division)
        : [...current, division]
    );
    setVisibleCount(PAGE_SIZE);
  };

  const handleClearDivisions = () => {
    setSelectedDivisions([]);
    setVisibleCount(PAGE_SIZE);
  };

  const handleResetAll = () => {
    setSearchQuery("");
    handleClearDivisions();
  };

  const handleLoadMore = () => {
    const previousCount = visibleCount;
    setVisibleCount(previousCount + PAGE_SIZE);

    // Bila tombol akan hilang (semua artikel sudah tampil), pindahkan fokus
    // ke artikel pertama yang baru muncul agar pengguna keyboard tidak "tersesat".
    const willBeExhausted = filteredArticles.length <= previousCount + PAGE_SIZE;
    if (willBeExhausted) {
      requestAnimationFrame(() => {
        gridRef.current?.children[previousCount]
          ?.querySelector("a")
          ?.focus({ preventScroll: true });
      });
    }
  };

  return (
    <section className={styles.section} aria-label="Daftar artikel">
      <div className={`container ${styles.inner}`}>
        <ArticleFilter
          divisions={divisions}
          selectedDivisions={selectedDivisions}
          onToggleDivision={handleToggleDivision}
          onClearDivisions={handleClearDivisions}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />

        <p className={styles.srOnly} role="status" aria-live="polite">
          Menampilkan {visibleArticles.length} dari {filteredArticles.length}{" "}
          artikel
        </p>

        {visibleArticles.length === 0 ? (
          <div className={styles.empty}>
            <EmptyState
              title="Artikel tidak ditemukan"
              description="Coba kata kunci lain atau atur ulang filter."
            />
            {isFiltering && (
              <Button variant="outline" onClick={handleResetAll}>
                Atur ulang pencarian
              </Button>
            )}
          </div>
        ) : (
          <div className={styles.grid} ref={gridRef}>
            {visibleArticles.map((article) => (
              <ArticleCard
                key={article.id}
                image={article.thumbnail}
                imageAlt={`Dokumentasi: ${article.title}`}
                chips={[article.ministry, article.division].filter(Boolean)}
                title={article.title}
                excerpt={article.excerpt}
                href={`/vokasipedia/${article.slug}`}
              />
            ))}
          </div>
        )}

        {hasMore && (
          <div className={styles.loadMoreWrap}>
            <button
              type="button"
              className={styles.loadMore}
              onClick={handleLoadMore}
            >
              <span>Tampilkan Lebih Banyak</span>
              <AltArrowDownIcon size={20} className={styles.loadMoreIcon} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
