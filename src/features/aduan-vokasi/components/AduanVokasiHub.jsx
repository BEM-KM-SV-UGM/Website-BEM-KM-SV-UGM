"use client";

import { useState } from "react";
import SectionTitle from "@/components/shared/SectionTitle";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import { aduanServices } from "../data/aduan-services";
import styles from "./AduanVokasiHub.module.css";

export default function AduanVokasiHub() {
  const [selectedServiceId, setSelectedServiceId] = useState(aduanServices[0].id);

  const selectedService =
    aduanServices.find((s) => s.id === selectedServiceId) || aduanServices[0];

  return (
    <div className="container" style={{ paddingBlock: "var(--spacing-8)" }}>
      <SectionTitle
        title="Aduan Vokasi"
        subtitle="Akses layanan aspirasi, aduan mahasiswa, dan survei kepuasan Sekolah Vokasi UGM."
      />

      <div className={styles.wrapper}>
        {/* Dropdown pemilih layanan sesuai IA */}
        <div className={styles.selectorWrapper}>
          <label htmlFor="service-select" className={styles.label}>
            Pilih Layanan:
          </label>
          <select
            id="service-select"
            value={selectedServiceId}
            onChange={(e) => setSelectedServiceId(e.target.value)}
            className={styles.select}
          >
            {aduanServices.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name} ({service.type})
              </option>
            ))}
          </select>
        </div>

        {/* Card Layanan Terpilih */}
        <Card className={styles.serviceCard}>
          <div className={styles.badge}>
            <Chip variant="primary">{selectedService.type}</Chip>
          </div>
          <h2 className={styles.serviceTitle}>{selectedService.name}</h2>
          <p className={styles.serviceDesc}>{selectedService.description}</p>
          <div className={styles.notesBox}>
            <p className={styles.notesText}>{selectedService.notes}</p>
          </div>
          <div className={styles.actionRow}>
            <Button
              href={selectedService.formUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.submitBtn}
            >
              {selectedService.actionLabel} &rarr;
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
