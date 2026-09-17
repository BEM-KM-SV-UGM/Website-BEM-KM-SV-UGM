"use client";

import Accordion from "@/components/ui/Accordion";
import EmptyState from "@/components/shared/EmptyState";
import { faqs } from "../data/faq";

// FAQ memakai component Accordion generik dari components/ui.

export default function FAQAccordion() {
  if (!faqs.length) {
    return <EmptyState title="Belum ada pertanyaan" />;
  }

  return (
    <Accordion
      items={faqs.map((faq) => ({
        title: faq.question,
        content: faq.answer,
      }))}
    />
  );
}
