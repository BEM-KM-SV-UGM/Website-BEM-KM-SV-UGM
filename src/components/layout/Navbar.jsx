"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Beranda BEM KM SV UGM">
          <span className={styles.brandTitle}>{siteConfig.name}</span>
          <span className={styles.brandSubtitle}>{siteConfig.fullName}</span>
        </Link>
        <nav className={styles.nav} aria-label="Navigasi utama">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(pathname, item.href) ? styles.active : styles.link}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <Button
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.narahubungBtn}
          >
            Narahubung
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}

