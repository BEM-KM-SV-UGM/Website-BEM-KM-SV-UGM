import PageHeader from "@/components/layout/PageHeader";
import AspirationForm from "@/features/aspirasi/components/AspirationForm";
import AspirationHistory from "@/features/aspirasi/components/AspirationHistory";
import AspirationStatus from "@/features/aspirasi/components/AspirationStatus";
import SectionTitle from "@/components/shared/SectionTitle";

// Halaman aspirasi bersifat interactive/action.

export const metadata = {
  title: "Aspirasi",
  description: "Salurkan aspirasi Anda dan pantau statusnya.",
};

export default function AspirasiPage() {
  return (
    <>
      <PageHeader
        title="Aspirasi"
        description="Sampaikan aspirasi Anda untuk kemajuan mahasiswa Sekolah Vokasi."
      />
      <div className="container">
        <section>
          <SectionTitle title="Kirim Aspirasi" />
          <AspirationForm />
        </section>
        <section>
          <SectionTitle title="Cek Status Aspirasi" />
          <AspirationStatus />
        </section>
        <AspirationHistory />
      </div>
    </>
  );
}
