// Indikator loading sederhana.

export default function Loading({ label = "Memuat..." }) {
  return <p role="status">{label}</p>;
}
