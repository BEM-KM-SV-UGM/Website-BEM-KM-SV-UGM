"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { homeContent } from "../data/home";
import styles from "./Hero.module.css";

// Ikon panah keluar (↗) untuk button "Layanan Aduan Vokasi".
function ExternalArrowIcon() {
  return (
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
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

// Progress scroll 0 → 1 (0 saat hero masih di puncak viewport, 1 saat
// hero habis terlewat) disimpan sebagai CSS variable --parallax pada section,
// dipakai CSS module untuk menggerakkan penutup biru secara parallax.
export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return undefined;

    let raf = null;
    const update = () => {
      raf = null;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      hero.style.setProperty("--parallax", progress.toFixed(4));
    };

    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={`container ${styles.inner}`}>
        {/* Brand: logo + nama + subtitle */}
        <div className={styles.brand}>
          <Image
            src="/icons/Logo.webp"
            alt="Logo BEM KM SV UGM"
            width={48}
            height={48}
            className={styles.logo}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}><strong>Badan Eksekutif Mahasiswa</strong></span>
            <span className={styles.brandSubtitle}>
              Keluarga Mahasiswa Sekolah Vokasi Universitas Gadjah Mada
            </span>
          </div>
        </div>

        {/* Judul utama (H-2): bagian tebal di tengah kalimat */}
        <h1 className={styles.heading}>
          Katalisator <strong>Perubahan &amp; Ruang Kolaborasi</strong> Mahasiswa
          Vokasi UGM
        </h1>

        <p className={styles.subtitle}>{homeContent.hero.subtitle}</p>

        <div className={styles.actions}>
          <Button
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnOutline}
          >
            Narahubung &amp; Media Partner
          </Button>
          <Button href="/aduan-vokasi" icon={<ExternalArrowIcon />}>
            Layanan Aduan Vokasi
          </Button>
        </div>
      </div>

      {/* Gradasi dari aset public/hero/gradation.png + penutup biru parallax */}
      <div className={styles.visual} aria-hidden="true">
        <Image
          src="/hero/gradation.png"
          alt=""
          fill
          sizes="100vw"
          className={styles.gradation}
          priority
        />
        <div className={styles.closing}>
          <span className={styles.scrollCue}>
            <ChevronDownIcon />
          </span>
        </div>
      </div>
    </section>
  );
}
