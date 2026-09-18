import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Kesekretariatan - Admin",
};

export default function AdminKesekretariatanPage() {
  return (
    <>
      <PageHeader title="Kelola Kesekretariatan & Kabinet" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola kabinet kesekretariatan akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
