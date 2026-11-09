"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PlayIcon } from "@solar-icons/react/bold-duotone/play";
import { CloseCircleIcon } from "@solar-icons/react/bold-duotone/close-circle";
import styles from "./Kesekretariatan.module.css";

export default function CabinetHero({ image, videoUrl, cabinet }) {
  const [open, setOpen] = useState(false);

  const heroImage = image ?? cabinet?.heroImage;
  const rawVideoUrl = videoUrl ?? cabinet?.videoUrl;

  // Validasi keamanan: hanya izinkan URL berbasis HTTPS terpercaya (mencegah javascript: URI / XSS)
  const isSafeVideoUrl =
    typeof rawVideoUrl === "string" && /^https:\/\//i.test(rawVideoUrl.trim());

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <section className={styles.heroSection} aria-label="Hero Kabinet BEM KM SV UGM">
      <div className={styles.heroImageWrapper}>
        {heroImage ? (
          <Image
            src={heroImage}
            alt="Foto Pengurus Kabinet BEM KM SV UGM"
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
        ) : (
          <div className={styles.heroFallback} />
        )}
        <div className={styles.heroOverlay} />
      </div>

      {isSafeVideoUrl && (
        <div className={styles.videoBtnContainer}>
          <button
            type="button"
            className={styles.videoProfileBtn}
            onClick={() => setOpen(true)}
            aria-label="Putar Video Profile Kabinet"
          >
            <PlayIcon size={20} className={styles.playIcon} />
            <span>Video Profile</span>
          </button>
        </div>
      )}

      {open && isSafeVideoUrl && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Video Profile Modal"
        >
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Tutup Video Modal"
            >
              <CloseCircleIcon size={28} />
            </button>
            <div className={styles.iframeWrapper}>
              <iframe
                src={rawVideoUrl}
                title="Video Profile Kabinet"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
