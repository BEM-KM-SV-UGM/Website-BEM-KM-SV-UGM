import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Galeri - Admin",
};

// TODO: implementasi CRUD galeri (task akan dibuat di tasks/).

export default function AdminGaleriPage() {
  return (
    <>
      <PageHeader title="Kelola Galeri" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola galeri akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
