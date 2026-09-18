import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import { homeContent } from "../data/home";

// Preview informasi terbaru di homepage.
// TODO (PAGE-001): hubungkan dengan feature informasi (service API) ketika backend tersedia.

export default function FeaturedInformation() {
  return (
    <section className="container">
      <SectionTitle title="Vokasipedia Terbaru" />
      <div>
        {homeContent.featuredInformation.map((item) => (
          <Card key={item.slug}>
            <h3>
              <Link href={`/vokasipedia/${item.slug}`}>{item.title}</Link>
            </h3>
            <p>{item.excerpt}</p>
          </Card>
        ))}
      </div>
      <p>
        <Link href="/vokasipedia">Lihat semua artikel di Vokasipedia</Link>
      </p>
    </section>
  );
}
