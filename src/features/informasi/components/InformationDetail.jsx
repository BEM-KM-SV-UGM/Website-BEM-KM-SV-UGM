import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils/format";

// Detail satu informasi. Data diambil dari service di page (server component).

export default function InformationDetail({ information }) {
  return (
    <article>
      <Badge>{information.category}</Badge>
      <h1>{information.title}</h1>
      <p>{formatDate(information.date)}</p>
      <div>
        {information.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
