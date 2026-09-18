import Link from "next/link";
import { homeContent } from "../data/home";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";
import ArticleCard from "@/components/ui/ArticleCard";

// TODO (PAGE-001): styling hero sesuai Figma, termasuk background image
// dari public/images/hero/homepage-hero.webp.

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        {/* <h1>{homeContent.hero.title}</h1>
        <p>{homeContent.hero.subtitle}</p> */}
        <Button 
            href="https://wa.me/123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            // icon={<MessageSquare size={20} />}
          >
            Narahubung
        </Button>

        {/* Component ArticleCard & Chip untuk dieksplor */}
        <div
          style={{
            marginTop: "var(--spacing-8)",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "var(--spacing-6)",
          }}
        >
          <ArticleCard
            chips={[
              "Kementerian Sosial Masyarakat",
              "Biro Pengembangan Sumber Daya",
            ]}
            title="Pekan Olahraga Vokasi dan Vocational Art"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
            href="/vokasipedia"
          />

          <ArticleCard
            chips={[
              "Kementerian Sosial Masyarakat",
              "Biro Pengembangan Sumber Daya",
            ]}
            title="Vokasi Berkarya untuk Indonesia"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
            href="/vokasipedia"
          />

          <ArticleCard
            chips={[
              "Kementerian Sosial Masyarakat",
              "Biro Pengembangan Sumber Daya",
            ]}
            title="Membangun Potensi Mahasiswa Vokasi"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do..."
            href="/vokasipedia"
          />
        </div>
      </div>
    </section>
  );
}
