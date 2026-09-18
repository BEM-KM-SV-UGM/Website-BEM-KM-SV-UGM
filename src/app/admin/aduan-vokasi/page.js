import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Aduan Vokasi - Admin",
};

export default function AdminAduanVokasiPage() {
  return (
    <>
      <PageHeader title="Kelola Aduan & Survei Vokasi" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola layanan aduan dan survei vokasi akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
