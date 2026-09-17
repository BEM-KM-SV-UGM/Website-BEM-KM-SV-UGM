// Layout khusus area admin, terpisah dari halaman publik.
// TODO: ketika desain admin sudah ditentukan, berikan chrome/layout khusus
// admin di sini (sidebar, warna, dsb.) sesuai desain.

export default function AdminLayout({ children }) {
  return <div className="container">{children}</div>;
}
