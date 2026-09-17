import { ministries } from "../data/ministries";

// Service layer kementerian. Component tidak boleh mengakses data/API langsung.
// TODO: ganti isi fungsi dengan pemanggilan API (src/lib/api/client.js + endpoints)
// ketika backend tersedia, tanpa mengubah component.

export function getMinistries() {
  return ministries;
}

export function getMinistryBySlug(slug) {
  if (!slug) {
    return null;
  }

  return ministries.find((ministry) => ministry.slug === slug) ?? null;
}
