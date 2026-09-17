import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Informasi - Admin",
};

// TODO: implementasi CRUD informasi (task akan dibuat di tasks/).

export default function AdminInformasiPage() {
  return (
    <>
      <PageHeader title="Kelola Informasi" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola informasi akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
