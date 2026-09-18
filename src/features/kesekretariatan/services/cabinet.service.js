import { cabinets } from "../data/cabinets";

export async function getCabinets() {
  return cabinets;
}

export async function getCabinetBySlug(slug) {
  const cabinet = cabinets.find((item) => item.slug === slug);
  return cabinet || null;
}
