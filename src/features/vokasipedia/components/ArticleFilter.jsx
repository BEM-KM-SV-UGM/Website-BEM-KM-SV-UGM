"use client";

import styles from "./ArticleFilter.module.css";

export default function ArticleFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}) {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Cari artikel di Vokasipedia..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
          aria-label="Cari artikel"
        />
      </div>
      <div className={styles.categoryPills} role="tablist" aria-label="Kategori artikel">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={selectedCategory === category}
            onClick={() => onSelectCategory(category)}
            className={`${styles.pill} ${
              selectedCategory === category ? styles.activePill : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
