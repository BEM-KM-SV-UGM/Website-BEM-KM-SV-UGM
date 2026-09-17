import Link from "next/link";
import { navigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import styles from "./Footer.module.css";

// TODO (COMP-002): lengkapi styling, logo, kontak, dan link sosial media sesuai desain.

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.brand}>{siteConfig.name}</p>
        <nav aria-label="Navigasi footer">
          <ul className={styles.menu}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {siteConfig.name}. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
