import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import MinistryDetail from "@/features/kementerian/components/MinistryDetail";
import { getMinistryBySlug } from "@/features/kementerian/services/ministry.service";

// Detail kementerian berdasarkan slug.
// Contoh: /kementerian/kementerian-pendidikan

export const metadata = {
  title: "Detail Kementerian",
};

export default async function KementerianDetailPage({ params }) {
  const { slug } = await params;
  const ministry = getMinistryBySlug(slug);

  if (!ministry) {
    notFound();
  }

  return (
    <>
      <PageHeader title={ministry.name} />
      <div className="container">
        <MinistryDetail ministry={ministry} />
      </div>
    </>
  );
}
