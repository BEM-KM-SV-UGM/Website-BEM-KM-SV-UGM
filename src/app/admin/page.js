import Link from "next/link";
import PageHeader from "@/components/layout/PageHeader";

export const metadata = {
  title: "Admin",
};

const adminMenus = [
  { href: "/admin/kesekretariatan", label: "Kelola Kesekretariatan & Kabinet" },
  { href: "/admin/vokasipedia", label: "Kelola Vokasipedia (Artikel)" },
  { href: "/admin/aduan-vokasi", label: "Kelola Aduan & Survei Vokasi" },
  { href: "/admin/galeri", label: "Kelola Galeri" },
];

// TODO: implementasi proteksi route dan autentikasi admin (menunggu backend).

export default function AdminPage() {
  return (
    <>
      <PageHeader
        title="Dashboard Admin"
        description="Area khusus pengelolaan konten website."
      />
      <ul>
        {adminMenus.map((menu) => (
          <li key={menu.href}>
            <Link href={menu.href}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
