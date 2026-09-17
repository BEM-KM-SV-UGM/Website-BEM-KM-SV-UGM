import PageHeader from "@/components/layout/PageHeader";
import MinistryList from "@/features/kementerian/components/MinistryList";
import { getMinistries } from "@/features/kementerian/services/ministry.service";

export const metadata = {
  title: "Kementerian",
  description: "Daftar kementerian di lingkungan BEM KM SV.",
};

export default function KementerianPage() {
  const ministries = getMinistries();

  return (
    <>
      <PageHeader
        title="Kementerian"
        description="Mengenal kementerian-kementerian di lingkungan BEM KM SV."
      />
      <div className="container">
        <MinistryList ministries={ministries} />
      </div>
    </>
  );
}
