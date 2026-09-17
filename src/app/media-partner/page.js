import PageHeader from "@/components/layout/PageHeader";
import MediaPartnerForm from "@/features/media-partner/components/MediaPartnerForm";
import MediaPartnerInfo from "@/features/media-partner/components/MediaPartnerInfo";
import SectionTitle from "@/components/shared/SectionTitle";

export const metadata = {
  title: "Media Partner",
  description: "Kerja sama media partner dengan BEM KM SV.",
};

export default function MediaPartnerPage() {
  return (
    <>
      <PageHeader
        title="Media Partner"
        description="Informasi dan formulir kerja sama media partner."
      />
      <div className="container">
        <MediaPartnerInfo />
        <section>
          <SectionTitle title="Ajukan Kerja Sama" />
          <MediaPartnerForm />
        </section>
      </div>
    </>
  );
}
