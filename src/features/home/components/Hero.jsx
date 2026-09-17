import Link from "next/link";
import { homeContent } from "../data/home";
import styles from "./Hero.module.css";
import Button from "@/components/ui/Button";

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
      </div>
    </section>
  );
}
