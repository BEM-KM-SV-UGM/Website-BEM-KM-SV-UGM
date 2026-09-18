import EmptyState from "@/components/shared/EmptyState";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Kelola Vokasipedia - Admin",
};

export default function AdminVokasipediaPage() {
  return (
    <>
      <PageHeader title="Kelola Vokasipedia" />
      <EmptyState
        title="Belum diimplementasikan"
        description="Halaman kelola artikel Vokasipedia akan dikerjakan pada task tersendiri."
      />
    </>
  );
}
