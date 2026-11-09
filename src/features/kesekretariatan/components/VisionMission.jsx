import styles from "./Kesekretariatan.module.css";

export default function VisionMission({ vision, missions = [] }) {
  return (
    <section className={`container ${styles.visionMissionSection}`} aria-label="Visi dan Misi Kabinet">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Visi &amp; Misi</h2>
        <p className={styles.sectionSubtitle}>
          Temukan jawaban cepat mengenai advokasi, organisasi, kegiatan kemahasiswaan, dan layanan BEM KM SV UGM.
        </p>
      </div>

      <div className={styles.cardsStack}>
        <div className={styles.blueCard}>
          <h3 className={styles.blueCardTitle}>Visi</h3>
          <p className={styles.blueCardContent}>{vision}</p>
        </div>

        <div className={styles.blueCard}>
          <h3 className={styles.blueCardTitle}>Misi</h3>
          <ol className={styles.missionList}>
            {missions.map((mission, index) => (
              <li key={index} className={styles.missionItem}>
                {mission}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
