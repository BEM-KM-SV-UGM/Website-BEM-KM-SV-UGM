import CabinetCard from "./CabinetCard";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./CabinetList.module.css";

export default function CabinetList({ cabinets }) {
  return (
    <section className="container" style={{ paddingBlock: "var(--spacing-8)" }}>
      <SectionTitle
        title="Kesekretariatan BEM KM SV"
        subtitle="Daftar kabinet Badan Eksekutif Mahasiswa KM Sekolah Vokasi UGM dari masa ke masa."
      />
      <div className={styles.grid}>
        {cabinets.map((cabinet) => (
          <CabinetCard key={cabinet.id} cabinet={cabinet} />
        ))}
      </div>
    </section>
  );
}
