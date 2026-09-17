import PageHeader from "@/components/layout/PageHeader";
import InformationList from "@/features/informasi/components/InformationList";
import { getInformations } from "@/features/informasi/services/information.service";

export const metadata = {
  title: "Informasi",
  description: "Kumpulan informasi, pengumuman, dan agenda BEM KM SV.",
};

export default function InformasiPage() {
  const informations = getInformations();

  return (
    <>
      <PageHeader
        title="Informasi"
        description="Informasi, pengumuman, dan agenda dari BEM KM SV."
      />
      <div className="container">
        <InformationList informations={informations} />
      </div>
    </>
  );
}
