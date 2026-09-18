import PageHeader from "@/components/layout/PageHeader";
import GalleryGrid from "@/features/galeri/components/GalleryGrid";
import GalleryViewer from "@/features/galeri/components/GalleryViewer";
import { albums } from "@/features/galeri/data/gallery";

export const metadata = {
  title: "Galeri",
  description: "Dokumentasi kegiatan BEM KM SV.",
};

export default function GaleriPage() {
  // return (
  //   <>
  //     <PageHeader
  //       title="Galeri"
  //       description="Dokumentasi kegiatan dan acara BEM KM SV."
  //     />
  //     <div className="container">
  //       <GalleryGrid albums={albums} />
  //       <GalleryViewer />
  //     </div>
  //   </>
  // );
}
