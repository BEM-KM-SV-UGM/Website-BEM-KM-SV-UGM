import Link from "next/link";
import SectionTitle from "@/components/shared/SectionTitle";
import { homeContent } from "../data/home";

// TODO (PAGE-001): sesuaikan isi dan styling section pengenalan BEM dengan Figma.

export default function About() {
  return (
    <section className="container">
      <SectionTitle title={homeContent.about.title} />
      <p>{homeContent.about.description}</p>
      <p>
        <Link href="/visi-misi">Baca visi dan misi kami</Link>
      </p>
    </section>
  );
}
