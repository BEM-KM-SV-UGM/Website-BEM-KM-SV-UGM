import { notFound } from "next/navigation";
import PageHeader from "@/components/layout/PageHeader";
import InformationDetail from "@/features/informasi/components/InformationDetail";
import { getInformationBySlug } from "@/features/informasi/services/information.service";

// Detail informasi berdasarkan slug.
// Contoh: /informasi/rekrutmen-staff-bem-2026

export const metadata = {
  title: "Detail Informasi",
};

export default async function InformasiDetailPage({ params }) {
  const { slug } = await params;
  const information = getInformationBySlug(slug);

  if (!information) {
    notFound();
  }

  return (
    <>
      <PageHeader title="Informasi" />
      <div className="container">
        <InformationDetail information={information} />
      </div>
    </>
  );
}
