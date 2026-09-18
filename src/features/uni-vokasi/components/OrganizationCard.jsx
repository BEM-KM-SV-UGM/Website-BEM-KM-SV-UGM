import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import styles from "./OrganizationCard.module.css";

export default function OrganizationCard({ name, subtitle, description, tag }) {
  return (
    <Card className={styles.card}>
      {tag && (
        <div className={styles.tagWrapper}>
          <Chip variant="outline">{tag}</Chip>
        </div>
      )}
      <h3 className={styles.name}>{name}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <p className={styles.description}>{description}</p>
    </Card>
  );
}
