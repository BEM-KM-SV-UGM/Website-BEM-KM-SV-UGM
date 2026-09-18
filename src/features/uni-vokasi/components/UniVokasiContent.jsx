"use client";

import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import OrganizationCard from "./OrganizationCard";
import { keluargaMahasiswa, badanSemiOtonom } from "../data/organizations";
import styles from "./UniVokasiContent.module.css";

export default function UniVokasiContent() {
  const [activeTab, setActiveTab] = useState("km"); // "km" | "bso"

  return (
    <div className="container" style={{ paddingBlock: "var(--spacing-8)" }}>
      <SectionTitle
        title="Uni-Vokasi"
        subtitle="Informasi Keluarga Mahasiswa (KM) dan Badan Semi Otonom (BSO) di lingkungan Sekolah Vokasi UGM di bawah naungan BEM."
      />

      <div className={styles.tabNav} role="tablist" aria-label="Kategori Organisasi">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "km"}
          className={`${styles.tabBtn} ${activeTab === "km" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("km")}
        >
          Keluarga Mahasiswa ({keluargaMahasiswa.length})
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === "bso"}
          className={`${styles.tabBtn} ${activeTab === "bso" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("bso")}
        >
          Badan Semi Otonom (BSO) ({badanSemiOtonom.length})
        </button>
      </div>

      {activeTab === "km" ? (
        <section aria-label="Daftar Keluarga Mahasiswa">
          <div className={styles.grid}>
            {keluargaMahasiswa.map((km) => (
              <OrganizationCard
                key={km.id}
                name={km.name}
                subtitle={km.department}
                description={km.description}
                tag="Keluarga Mahasiswa"
              />
            ))}
          </div>
        </section>
      ) : (
        <section aria-label="Daftar Badan Semi Otonom">
          <div className={styles.grid}>
            {badanSemiOtonom.map((bso) => (
              <OrganizationCard
                key={bso.id}
                name={bso.name}
                subtitle={bso.focus}
                description={bso.description}
                tag="BSO"
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
