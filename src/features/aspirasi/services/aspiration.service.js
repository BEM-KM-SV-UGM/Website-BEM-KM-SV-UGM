import { recentAspirations } from "../data/aspirations";

// Service layer aspirasi. Component tidak boleh mengakses data/API langsung.
// TODO: ganti isi fungsi dengan pemanggilan API (src/lib/api/client.js + endpoints)
// ketika backend tersedia, tanpa mengubah component.

export function getRecentAspirations() {
  return recentAspirations;
}

export function getAspirationByTicket(ticket) {
  if (!ticket) {
    return null;
  }

  const normalized = ticket.trim().toUpperCase();

  return (
    recentAspirations.find(
      (item) => item.id.toUpperCase() === normalized
    ) ?? null
  );
}

// Simulasi pengiriman aspirasi. TODO: ganti dengan POST ke API backend.
export function submitAspiration(payload) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        ticket: `ASP-${Math.floor(1000 + Math.random() * 9000)}`,
        received: payload,
      });
    }, 500);
  });
}
