import Link from "next/link";
import Card from "@/components/ui/Card";

// TODO (PAGE-002): tambahkan foto/logo kementerian dari public/images/kementerian.

export default function MinistryCard({ ministry }) {
  return (
    <Card>
      <h3>{ministry.name}</h3>
      <p>{ministry.shortDescription}</p>
      <Link href={`/kementerian/${ministry.slug}`}>Lihat detail</Link>
    </Card>
  );
}
