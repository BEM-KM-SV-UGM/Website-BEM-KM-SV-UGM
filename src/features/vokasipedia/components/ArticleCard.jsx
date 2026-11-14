import Link from "next/link";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import { ArrowRightUpIcon } from "@solar-icons/react/line-duotone/arrow-right-up";
import styles from "./ArticleCard.module.css";

export default function ArticleCard({ article }) {
  return (
    <Card className={styles.card}>
      <div className={styles.meta}>
        <Chip variant="outline">{article.category}</Chip>
        <time className={styles.date} dateTime={article.date}>
          {new Date(article.date).toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </div>
      <h3 className={styles.title}>
        <Link href={`/vokasipedia/${article.slug}`}>{article.title}</Link>
      </h3>
      <p className={styles.excerpt}>{article.excerpt}</p>
      <div className={styles.footer}>
        <span className={styles.author}>Oleh: {article.author}</span>
        <Link href={`/vokasipedia/${article.slug}`} className={styles.readMore}>
          <span>Baca Selengkapnya</span>
          <ArrowRightUpIcon size={16} />
        </Link>
      </div>
    </Card>
  );
}
