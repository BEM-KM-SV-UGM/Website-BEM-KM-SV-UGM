// Header standar untuk halaman publik (judul + deskripsi opsional).
// Pemakaian: <PageHeader title="Informasi" description="..." />

export default function PageHeader({ title, description }) {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
    </header>
  );
}
