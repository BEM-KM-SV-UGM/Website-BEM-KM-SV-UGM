import Link from "next/link";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import styles from "./CabinetCard.module.css";

export default function CabinetCard({ cabinet }) {
  return (
    <Card className={styles.card}>
      <div className={styles.header}>
        <Chip variant="primary">Tahun {cabinet.year}</Chip>
        <span className={styles.tagline}>{cabinet.tagline}</span>
      </div>
      <h3 className={styles.name}>{cabinet.name}</h3>
      <p className={styles.description}>{cabinet.description}</p>
      <div className={styles.footer}>
        <Link href={`/kesekretariatan/${cabinet.slug}`} className={styles.link}>
          Lihat Detail Kabinet &rarr;
        </Link>
      </div>
    </Card>
  );
}
