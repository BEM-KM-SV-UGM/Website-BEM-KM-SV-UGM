import { informations } from "../data/information";

// Service layer informasi. Component tidak boleh mengakses data/API langsung.
// TODO: ganti isi fungsi dengan pemanggilan API (src/lib/api/client.js + endpoints)
// ketika backend tersedia, tanpa mengubah component.

export function getInformations() {
  return informations;
}

export function getInformationBySlug(slug) {
  if (!slug) {
    return null;
  }

  return informations.find((item) => item.slug === slug) ?? null;
}
