import EmptyState from "@/components/shared/EmptyState";
import MinistryCard from "./MinistryCard";

// Daftar kementerian. Menerima data lewat props agar mudah dipakai ulang.

export default function MinistryList({ ministries }) {
  if (!ministries?.length) {
    return <EmptyState title="Belum ada kementerian" />;
  }

  return (
    <div>
      {ministries.map((ministry) => (
        <MinistryCard key={ministry.slug} ministry={ministry} />
      ))}
    </div>
  );
}
