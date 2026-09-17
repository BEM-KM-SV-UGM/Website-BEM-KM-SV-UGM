import EmptyState from "@/components/shared/EmptyState";
import GalleryCard from "./GalleryCard";

// Grid album galeri. Data diterima lewat props agar mudah dipakai ulang.

export default function GalleryGrid({ albums }) {
  if (!albums?.length) {
    return <EmptyState title="Belum ada album" />;
  }

  return (
    <div>
      {albums.map((album) => (
        <GalleryCard key={album.slug} album={album} />
      ))}
    </div>
  );
}
