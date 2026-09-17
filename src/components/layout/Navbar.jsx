"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";

// TODO (COMP-001): lengkapi styling, logo, dan aksesibilitas sesuai desain.

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
        <Link href="/" className={styles.brand}>
          {siteConfig.name}
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
        <MobileMenu />
      </div>
    </header>
  );
}
