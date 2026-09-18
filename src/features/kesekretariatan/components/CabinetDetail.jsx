import Link from "next/link";
import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./CabinetDetail.module.css";

export default function CabinetDetail({ cabinet }) {
  if (!cabinet) {
    return (
      <div className="container" style={{ padding: "var(--spacing-8) 0" }}>
        <p>Kabinet tidak ditemukan.</p>
        <Link href="/kesekretariatan">&larr; Kembali ke Kesekretariatan</Link>
      </div>
    );
  }

  return (
    <article className="container" style={{ paddingBlock: "var(--spacing-8)" }}>
      <div className={styles.backLink}>
        <Link href="/kesekretariatan">&larr; Kembali ke Daftar Kabinet</Link>
      </div>

      <header className={styles.header}>
        <Chip variant="primary">Kabinet Tahun {cabinet.year}</Chip>
        <h1 className={styles.title}>{cabinet.name}</h1>
        <p className={styles.tagline}>"{cabinet.tagline}"</p>
        <p className={styles.description}>{cabinet.description}</p>
      </header>

      {/* Visi & Misi */}
      <section className={styles.section}>
        <SectionTitle title="Visi & Misi" />
        <div className={styles.visionMissionGrid}>
          <Card className={styles.visionCard}>
            <h3 className={styles.cardHeading}>Visi</h3>
            <p>{cabinet.vision}</p>
          </Card>
          <Card className={styles.missionCard}>
            <h3 className={styles.cardHeading}>Misi</h3>
            <ol className={styles.missionList}>
              {cabinet.missions?.map((mission, index) => (
                <li key={index}>{mission}</li>
              ))}
            </ol>
          </Card>
        </div>
      </section>

      {/* Struktur Kepengurusan */}
      <section className={styles.section}>
        <SectionTitle title="Struktur Kepengurusan" subtitle="Kemenkoan dan kementerian di bawah naungan kabinet." />
        <div className={styles.structureGrid}>
          {cabinet.structure?.map((dept, index) => (
            <Card key={index} className={styles.deptCard}>
              <h4 className={styles.deptName}>{dept.department}</h4>
              <p className={styles.deptLead}>{dept.lead}</p>
              <ul className={styles.deptDivisions}>
                {dept.divisions.map((div, dIndex) => (
                  <li key={dIndex}>{div}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </article>
  );
}
