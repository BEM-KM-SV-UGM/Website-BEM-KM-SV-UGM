import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Chip from './Chip';
import styles from './ArticleCard.module.css';

export default function ArticleCard({
  image,
  imageAlt = 'Thumbnail artikel',
  chips = ['Kementerian Sosial Masyarakat', 'Biro Pengembangan Sumber Daya'],
  title = 'Pekan Olahraga Vokasi dan Vocational Art',
  excerpt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do...',
  href = '#',
  actionLabel = 'Selengkapnya',
  className = '',
  children,
  ...props
}) {
  const combinedClassName = `${styles.card} ${className}`.trim();

  // Konversi chips menjadi array jika berupa string tunggal
  const chipList = Array.isArray(chips) ? chips : [chips];

  return (
    <article className={combinedClassName} {...props}>
      {/* Area Gambar / Thumbnail */}
      <div className={styles.imageWrapper}>
        {image ? (
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className={styles.image}
          />
        ) : (
          <div className={styles.placeholderImage}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.placeholderIcon}
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
            <span className={styles.placeholderText}>Foto Kegiatan</span>
          </div>
        )}
      </div>

      {/* Konten Card */}
      <div className={styles.body}>
        {/* Chips Keterangan Biro / Kementerian */}
        {chipList.length > 0 && (
          <div className={styles.chipsRow}>
            {chipList.map((chip, index) => (
              <Chip key={index} variant="warning">
                {chip}
              </Chip>
            ))}
          </div>
        )}

        {/* Judul Artikel */}
        <h3 className={styles.title}>
          {href && href !== '#' ? (
            <Link href={href} className={styles.titleLink}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>

        {/* Kutipan / Excerpt */}
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}

        {/* Custom children jika diperlukan */}
        {children}

        {/* Action Link: Selengkapnya ↗ */}
        <div className={styles.footer}>
          <Link href={href} className={styles.actionLink}>
            <span>{actionLabel}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={styles.actionIcon}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
