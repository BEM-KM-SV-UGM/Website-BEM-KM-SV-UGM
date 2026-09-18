import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

const footerColumns = [
  {
    title: "Lorem ipsum dolor",
    links: [
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
    ],
  },
  {
    title: "Lorem ipsum dolor",
    links: [
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
    ],
  },
  {
    title: "Lorem ipsum dolor",
    links: [
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
    ],
  },
  {
    title: "Lorem ipsum dolor",
    links: [
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
      { label: "Lorem ipsum", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Kolom Kiri: Brand, Deskripsi, Kontak Email, & Sosial Media */}
        <div className={styles.leftCol}>
          <div className={styles.brand}>
            <Image
              src="/icons/Logo.webp"
              alt="Logo BEM KM SV UGM"
              width={44}
              height={44}
              className={styles.logoImage}
            />
            <div className={styles.brandText}>
              <span className={styles.brandTitle}>{siteConfig.name}</span>
              <span className={styles.brandSubtitle}>{siteConfig.subtitle}</span>
            </div>
          </div>

          <p className={styles.description}>{siteConfig.description}</p>

          <div className={styles.emailRow}>
            <span className={styles.emailIconWrapper}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <a href={`mailto:${siteConfig.email}`} className={styles.emailLink}>
              {siteConfig.email}
            </a>
          </div>

          <div className={styles.socials}>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="YouTube BEM KM SV UGM"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram BEM KM SV UGM"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="TikTok BEM KM SV UGM"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.27 6.27 0 0 0 1.87-4.49V8.65a8.28 8.28 0 0 0 4.9 1.58V6.8a4.86 4.86 0 0 1-1-.11z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Kolom Kanan: 4 Kolom Link Navigasi */}
        <div className={styles.linksGrid}>
          {footerColumns.map((col, index) => (
            <div key={index} className={styles.column}>
              <h4 className={styles.columnTitle}>{col.title}</h4>
              <ul className={styles.linkList}>
                {col.links.map((link, lIndex) => (
                  <li key={lIndex}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
