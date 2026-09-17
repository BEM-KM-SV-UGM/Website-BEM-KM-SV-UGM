import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { formatDate } from "@/lib/utils/format";

// TODO (PAGE-004): tambahkan thumbnail dari public/images/news sesuai desain.

export default function InformationCard({ information }) {
  return (
    <Card>
      <Badge>{information.category}</Badge>
      <h3>
        <Link href={`/informasi/${information.slug}`}>
          {information.title}
        </Link>
      </h3>
      <p>{formatDate(information.date)}</p>
      <p>{information.excerpt}</p>
    </Card>
  );
}
