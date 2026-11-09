import Image from "next/image";
import Chip from "@/components/ui/Chip";
import styles from "./Kesekretariatan.module.css";

export default function CabinetProfile({ cabinet }) {
  if (!cabinet) return null;

  return (
    <section className={`container ${styles.profileSection}`} aria-label="Profil Kabinet">
      <div className={styles.profileGrid}>
        <div className={styles.logoWrapper}>
          {cabinet.logo ? (
            <Image
              src={cabinet.logo}
              alt={`Logo ${cabinet.name}`}
              width={280}
              height={280}
              priority
              className={styles.profileLogo}
            />
          ) : (
            <div className={styles.logoPlaceholder} />
          )}
        </div>

        <div className={styles.profileDetails}>
          <div className={styles.badgeRow}>
            {cabinet.status && (
              <Chip variant="warning" className={styles.statusChip}>
                {cabinet.status}
              </Chip>
            )}
            <span className={styles.periodText}>
              Periode {cabinet.period ?? cabinet.year}
            </span>
          </div>

          <h1 className={styles.profileTitle}>{cabinet.name}</h1>
          <p className={styles.profileDesc}>{cabinet.description}</p>
        </div>
      </div>
    </section>
  );
}
