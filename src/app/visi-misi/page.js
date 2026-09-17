import PageHeader from "@/components/layout/PageHeader";
import VisiMisiContent from "@/features/visi-misi/components/VisiMisiContent";

export const metadata = {
  title: "Visi & Misi",
  description: "Visi dan misi BEM KM SV.",
};

export default function VisiMisiPage() {
  return (
    <>
      <PageHeader title="Visi & Misi" />
      <div className="container">
        <VisiMisiContent />
      </div>
    </>
  );
}
