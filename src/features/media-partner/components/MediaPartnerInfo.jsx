import SectionTitle from "@/components/shared/SectionTitle";
import { partners } from "../data/partners";

// Informasi kerja sama media partner.
// TODO (PAGE-008): lengkapi benefit, ketentuan, dan styling sesuai IA/Figma.

export default function MediaPartnerInfo() {
  return (
    <section>
      <SectionTitle
        title="Tentang Media Partner"
        description="BEM KM SV terbuka untuk kerja sama dengan media internal maupun eksternal."
      />
      <h3>Mitra Kami</h3>
      <ul>
        {partners.map((partner) => (
          <li key={partner.name}>
            <strong>{partner.name}</strong> — {partner.field}
          </li>
        ))}
      </ul>
    </section>
  );
}
