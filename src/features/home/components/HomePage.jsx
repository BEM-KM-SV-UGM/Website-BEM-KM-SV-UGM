import Hero from "./Hero";
import About from "./About";
import FeaturedInformation from "./FeaturedInformation";
import FeaturedGallery from "./FeaturedGallery";
import Button from "@/components/ui/Button";

// Component utama homepage. Page di src/app/page.js hanya memanggil component ini.

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <About />
      <FeaturedInformation />
      <FeaturedGallery /> */}
    </>
  );
}
