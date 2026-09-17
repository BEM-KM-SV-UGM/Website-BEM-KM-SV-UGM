import Badge from "@/components/ui/Badge";
import EmptyState from "@/components/shared/EmptyState";
import SectionTitle from "@/components/shared/SectionTitle";
import { formatDate } from "@/lib/utils/format";
import { getRecentAspirations } from "../services/aspiration.service";

// Daftar aspirasi terbaru yang ditampilkan publik.
// TODO (PAGE-005): hubungkan ke API backend dan tampilkan sesuai desain.

export default function AspirationHistory() {
  const aspirations = getRecentAspirations();

  if (!aspirations.length) {
    return <EmptyState title="Belum ada aspirasi" />;
  }

  return (
    <section>
      <SectionTitle title="Aspirasi Terbaru" />
      <ul>
        {aspirations.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong> — <Badge>{item.status}</Badge>{" "}
            <small>{formatDate(item.date)}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
