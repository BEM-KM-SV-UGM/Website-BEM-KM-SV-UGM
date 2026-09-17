import PageHeader from "@/components/layout/PageHeader";
import FAQAccordion from "@/features/faq/components/FAQAccordion";

export const metadata = {
  title: "FAQ",
  description: "Pertanyaan yang sering diajukan seputar BEM KM SV.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="FAQ"
        description="Pertanyaan yang sering diajukan seputar BEM KM SV."
      />
      <div className="container">
        <FAQAccordion />
      </div>
    </>
  );
}
