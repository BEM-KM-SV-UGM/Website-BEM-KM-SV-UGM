import Link from "next/link";
import Chip from "@/components/ui/Chip";
import ArticleCard from "./ArticleCard";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./ArticleDetail.module.css";

export default function ArticleDetail({ article }) {
  if (!article) {
    return (
      <div className="container" style={{ padding: "var(--spacing-8) 0" }}>
        <p>Artikel tidak ditemukan.</p>
        <Link href="/vokasipedia">&larr; Kembali ke Vokasipedia</Link>
      </div>
    );
  }

  return (
    <article className="container" style={{ paddingBlock: "var(--spacing-8)" }}>
      <div className={styles.backLink}>
        <Link href="/vokasipedia">&larr; Kembali ke Vokasipedia</Link>
      </div>

      <header className={styles.header}>
        <div className={styles.meta}>
          <Chip variant="primary">{article.category}</Chip>
          <time dateTime={article.date} className={styles.date}>
            {new Date(article.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.author}>Penulis: <strong>{article.author}</strong></p>
      </header>

      {/* Thumbnail placeholder */}
      <div className={styles.thumbnailWrapper}>
        <div className={styles.thumbnailPlaceholder}>
          <span>{article.title}</span>
        </div>
      </div>

      {/* Isi artikel */}
      <div className={styles.content}>
        {article.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Artikel Terkait */}
      {article.relatedArticles && article.relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <SectionTitle title="Artikel Terkait" />
          <div className={styles.relatedGrid}>
            {article.relatedArticles.map((rel) => (
              <ArticleCard key={rel.id} article={rel} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
