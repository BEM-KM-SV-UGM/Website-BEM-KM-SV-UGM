"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Chip from "@/components/ui/Chip";
import { ArrowRightUpIcon } from "@solar-icons/react/line-duotone/arrow-right-up";
import styles from "./ArticleHero.module.css";

const AUTOPLAY_MS = 6000;

// Hero carousel Vokasipedia: menampilkan artikel unggulan satu per satu.
// Berpindah otomatis, berhenti saat di-hover/fokus, dan menghormati
// pengaturan "reduce motion" milik pengguna.
export default function ArticleHero({ articles = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = articles.length;

  useEffect(() => {
    if (total < 2 || paused) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    // `active` ada di dependency agar timer diulang dari nol setelah user memilih slide.
    const timer = setInterval(() => {
      setActive((index) => (index + 1) % total);
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [total, paused, active]);

  if (total === 0) return null;

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Artikel pilihan Vokasipedia"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h1 className={styles.srOnly}>Vokasipedia</h1>

      <div className={styles.slides}>
        {articles.map((article, index) => {
          const isActive = index === active;
          const chips = [article.ministry, article.division].filter(Boolean);

          return (
            <article
              key={article.id}
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} dari ${total}`}
              inert={!isActive}
            >
              <Image
                src={article.thumbnail}
                alt=""
                fill
                priority={index === 0}
                sizes="100vw"
                className={styles.image}
              />

              <div className={`container ${styles.content}`}>
                <div className={styles.text}>
                  {chips.length > 0 && (
                    <div className={styles.chips}>
                      {chips.map((chip) => (
                        <Chip key={chip} variant="warning">
                          {chip}
                        </Chip>
                      ))}
                    </div>
                  )}

                  <h2 className={styles.title}>{article.title}</h2>
                  <p className={styles.excerpt}>{article.excerpt}</p>

                  <Link
                    href={`/vokasipedia/${article.slug}`}
                    className={styles.readMore}
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRightUpIcon size={20} className={styles.readMoreIcon} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {total > 1 && (
        <div className={styles.dots}>
          {articles.map((article, index) => (
            <button
              key={article.id}
              type="button"
              className={`${styles.dot} ${index === active ? styles.dotActive : ""}`}
              aria-label={`Tampilkan artikel ${index + 1}: ${article.title}`}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
