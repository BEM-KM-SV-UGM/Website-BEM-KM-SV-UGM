import EmptyState from "@/components/shared/EmptyState";

// Struktur keorganisasian satu kementerian.
// TODO (PAGE-002): tampilkan foto/fungsi tiap jabatan sesuai desain.

export default function MinistryStructure({ members = [] }) {
  if (!members.length) {
    return <EmptyState title="Struktur belum tersedia" />;
  }

  return (
    <section>
      <h2>Struktur Kementerian</h2>
      <ul>
        {members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </section>
  );
}
