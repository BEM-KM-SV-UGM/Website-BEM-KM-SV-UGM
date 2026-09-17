// Judul section yang dipakai berulang di banyak halaman.

export default function SectionTitle({ title, description }) {
  return (
    <div>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
