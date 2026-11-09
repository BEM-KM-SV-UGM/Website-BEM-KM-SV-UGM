"use client";

import { useState } from "react";
import { DownloadSquareIcon } from "@solar-icons/react/bold-duotone/download-square";
import styles from "./Kesekretariatan.module.css";

export default function CabinetLpj({ lpj, reports, cabinetName = "Kabinet Pijar Resonansi" }) {
  const [activeTab, setActiveTab] = useState("midYear");

  const sourceData = lpj ?? reports;
  const reportData = sourceData?.[activeTab] || {
    fileUrl:
      activeTab === "midYear"
        ? "/documents/lpj-tengah-tahun-2025-2026.pdf"
        : "/documents/lpj-akhir-tahun-2025-2026.pdf",
  };

  const handleDownload = () => {
    const rawUrl = reportData.fileUrl;
    const isSafeDownloadUrl =
      typeof rawUrl === "string" && (rawUrl.startsWith("/") || /^https:\/\//i.test(rawUrl.trim()));

    if (isSafeDownloadUrl) {
      window.open(rawUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className={`container ${styles.lpjSection}`} aria-label="Laporan Pertanggung Jawaban">
      {/* Judul & Subjudul */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Laporan Pertanggung Jawaban</h2>
        <p className={styles.sectionSubtitle}>
          Temukan jawaban cepat mengenai advokasi, organisasi, kegiatan kemahasiswaan, dan layanan BEM KM SV UGM.</p>
      </div>

      {/* Wadah Tabel Laporan Terpadu (Table Default di Figma) */}
      <div className={styles.lpjTableCard}>
        {/* Toolbar: Tabs & Tombol Unduh */}
        <div className={styles.lpjToolbar}>
          <div className={styles.tabGroup} role="tablist" aria-label="Pilihan Laporan">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "midYear"}
              className={`${styles.tabBtn} ${
                activeTab === "midYear" ? styles.tabBtnActive : styles.tabBtnInactive
              }`}
              onClick={() => setActiveTab("midYear")}
            >
              Laporan Tengah Tahun
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "endYear"}
              className={`${styles.tabBtn} ${
                activeTab === "endYear" ? styles.tabBtnActive : styles.tabBtnInactive
              }`}
              onClick={() => setActiveTab("endYear")}
            >
              Laporan Akhir Tahun
            </button>
          </div>

          <button
            type="button"
            onClick={handleDownload}
            className={styles.downloadBtn}
            aria-label="Unduh Dokumen Laporan Pertanggung Jawaban (PDF)"
          >
            <DownloadSquareIcon size={20} className={styles.downloadIcon} />
            <span>Unduh PDF</span>
          </button>
        </div>

        {/* Kontainer Viewer Dokumen (Dua panel abu-abu netral dalam wadah putih) */}
        <div className={styles.lpjViewerContainer}>
          <div className={styles.spreadGrid}>
            <div className={styles.pdfPlaceholderPanel} aria-label="Preview Laporan Halaman 1" />
            <div className={styles.pdfPlaceholderPanel} aria-label="Preview Laporan Halaman 2" />
          </div>
        </div>
      </div>
    </section>
  );
}
