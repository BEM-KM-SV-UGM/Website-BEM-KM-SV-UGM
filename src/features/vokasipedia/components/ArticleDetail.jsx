"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@solar-icons/react/line-duotone/arrow-left";
import { ArrowRightIcon } from "@solar-icons/react/line-duotone/arrow-right";
import Chip from "@/components/ui/Chip";
import styles from "./ArticleDetail.module.css";

// Card kecil khusus sidebar "Baca Lainnya" — hanya dipakai di halaman ini
function SidebarCard({ article }) {
  const chips = [article.ministry, article.division].filter(Boolean);
  return (
    <div className={styles.sidebarCard}>
      <div className={styles.sidebarCardImage}>
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          sizes="430px"
          className={styles.sidebarCardImg}
        />
      </div>
      <div className={styles.sidebarCardBody}>
        {chips.length > 0 && (
          <div className={styles.sidebarCardChips}>
            {chips.map((chip) => (
              <Chip key={chip} variant="warning">{chip}</Chip>
            ))}
          </div>
        )}
        <h3 className={styles.sidebarCardTitle}>{article.title}</h3>
        <p className={styles.sidebarCardExcerpt}>{article.excerpt}</p>
        <Link href={`/vokasipedia/${article.slug}`} className={styles.sidebarCardLink}>
          <span>Selengkapnya</span>
          <ArrowRightIcon size={16} />
        </Link>
      </div>
    </div>
  );
}

export default function ArticleDetail({ article }) {
  if (!article) {
    return (
      <div className="container" style={{ padding: "var(--spacing-8) 0" }}>
        <p>Artikel tidak ditemukan.</p>
        <Link href="/vokasipedia">Kembali ke Vokasipedia</Link>
      </div>
    );
  }

  const chips = [article.ministry, article.division].filter(Boolean);
  const related = article.relatedArticles ?? [];

  return (
    <main className={styles.page}>
      {/* ── Hero Image full-width ── */}
      <div className={styles.heroWrapper}>
        <Image
          src={article.thumbnail}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className={styles.heroImage}
        />
      </div>

      {/* ── Layout 2 kolom ── */}
      <div className={`container ${styles.layout}`}>

        {/* Kolom kiri: konten artikel */}
        <div className={styles.mainContent}>

          {/* Tombol Kembali */}
          <Link href="/vokasipedia" className={styles.backBtn}>
            <ArrowLeftIcon size={16} />
            <span>Kembali</span>
          </Link>

          {/* Chips kementerian / biro */}
          {chips.length > 0 && (
            <div className={styles.chips}>
              {chips.map((chip) => (
                <Chip key={chip} variant="warning">{chip}</Chip>
              ))}
            </div>
          )}

          {/* Judul — H-3 */}
          <h1 className={styles.title}>{article.title}</h1>

          {/* Penulis — B-1 Neutral-800 */}
          <p className={styles.author}>
            Penulis: <span>{article.author}</span>
          </p>

          {/* Isi artikel — B-1 Neutral-900 */}
          <div className={styles.content}>
            {article.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Kolom kanan: sidebar Baca Lainnya */}
        {related.length > 0 && (
          <aside className={styles.sidebar}>
            <h2 className={styles.sidebarTitle}>Baca Lainnya</h2>
            <div className={styles.sidebarList}>
              {related.map((rel) => (
                <SidebarCard key={rel.id} article={rel} />
              ))}
            </div>
          </aside>
        )}
      </div>
    </main>
  );
}
