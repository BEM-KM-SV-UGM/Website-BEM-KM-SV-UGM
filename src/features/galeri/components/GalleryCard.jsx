import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/utils/format";

// TODO (PAGE-007): tampilkan thumbnail album dari public/images/galeri.

export default function GalleryCard({ album }) {
  return (
    <Card>
      <div aria-hidden="true">{/* TODO: thumbnail album */}</div>
      <h3>{album.title}</h3>
      <p>{formatDate(album.date)}</p>
      <p>{album.photos.length} foto</p>
    </Card>
  );
}
