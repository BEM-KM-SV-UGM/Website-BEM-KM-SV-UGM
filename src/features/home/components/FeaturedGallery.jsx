import Link from "next/link";
import Card from "@/components/ui/Card";
import SectionTitle from "@/components/shared/SectionTitle";
import { homeContent } from "../data/home";

// Preview galeri di homepage.
// TODO (PAGE-001): hubungkan dengan feature galeri dan tampilkan thumbnail
// dari public/images/galeri ketika asset tersedia.

export default function FeaturedGallery() {
  return (
    <section className="container">
      <SectionTitle title="Galeri Terbaru" />
      <div>
        {homeContent.featuredGallery.map((item) => (
          <Card key={item.slug}>
            <div aria-hidden="true">{/* TODO: thumbnail album */}</div>
            <h3>
              <Link href="/galeri">{item.title}</Link>
            </h3>
          </Card>
        ))}
      </div>
      <p>
        <Link href="/galeri">Lihat semua galeri</Link>
      </p>
    </section>
  );
}
