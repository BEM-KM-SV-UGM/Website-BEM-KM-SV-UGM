import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Aspirasi - Admin",
};

// TODO: implementasi pengelolaan aspirasi (task akan dibuat di tasks/).

export default function AdminAspirasiPage() {
  return (
    <>
      <PageHeader title="Kelola Aspirasi" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola aspirasi akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
