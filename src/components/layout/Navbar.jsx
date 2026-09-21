"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "@/components/layout/MobileMenu";
import Button from "@/components/ui/Button";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Navbar.module.css";
import { ChatSquareCallIcon } from '@solar-icons/react/bold-duotone/chat-square-call'

function isActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

function ChatIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
        fill="currentColor"
        opacity="0.25"
      />
      <path
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 9.5V12.5M12 7.5V14.5M16 9.5V12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="Beranda Badan Eksekutif Mahasiswa">
          <Image
            src="/icons/Logo.webp"
            alt="Logo BEM KM SV UGM"
            width={44}
            height={44}
            className={styles.logoImage}
            priority
          />
          <div className={styles.brandText}>
            <span className={styles.brandTitle}>{siteConfig.name}</span>
            <span className={styles.brandSubtitle}>{siteConfig.subtitle}</span>
          </div>
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
            icon={<ChatSquareCallIcon size={24} />}
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

