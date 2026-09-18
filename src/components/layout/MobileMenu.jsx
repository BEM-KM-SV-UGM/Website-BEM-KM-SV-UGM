"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./MobileMenu.module.css";

// TODO (COMP-001): lengkapi styling dan animasi menu mobile sesuai desain.

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-label="Buka menu navigasi"
        onClick={() => setOpen((previous) => !previous)}
      >
        Menu
      </button>
      {open ? (
        <nav className={styles.menu} aria-label="Navigasi mobile">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{ fontWeight: 600, color: "var(--color-primary)" }}
          >
            Narahubung (WhatsApp)
          </a>
        </nav>
      ) : null}
    </div>
  );
}
