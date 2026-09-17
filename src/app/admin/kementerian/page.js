import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Kementerian - Admin",
};

// TODO: implementasi CRUD kementerian (task akan dibuat di tasks/).

export default function AdminKementerianPage() {
  return (
    <>
      <PageHeader title="Kelola Kementerian" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola kementerian akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
