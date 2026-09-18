import { notFound } from "next/navigation";
import CabinetDetail from "@/features/kesekretariatan/components/CabinetDetail";
import { getCabinetBySlug, getCabinets } from "@/features/kesekretariatan/services/cabinet.service";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cabinet = await getCabinetBySlug(slug);

  if (!cabinet) {
    return { title: "Kabinet Tidak Ditemukan | BEM KM SV UGM" };
  }

  return {
    title: `${cabinet.name} (${cabinet.year}) | BEM KM SV UGM`,
    description: cabinet.description,
  };
}

export async function generateStaticParams() {
  const cabinets = await getCabinets();
  return cabinets.map((cabinet) => ({
    slug: cabinet.slug,
  }));
}

export default async function CabinetDetailPage({ params }) {
  const { slug } = await params;
  const cabinet = await getCabinetBySlug(slug);

  if (!cabinet) {
    notFound();
  }

  return <CabinetDetail cabinet={cabinet} />;
}
