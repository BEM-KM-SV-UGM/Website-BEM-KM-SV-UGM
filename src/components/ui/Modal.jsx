"use client";

// Component modal generik yang dikontrol dari parent lewat props `open`.
// Bisa dipadukan dengan hook useModal dari src/hooks/useModal.js.
// TODO (COMP-004): tambahkan overlay, tutup via ESC/backdrop, dan focus trap.

export default function Modal({ open, onClose, title, children }) {
  if (!open) {
    return null;
  }

  return (
    <div role="dialog" aria-modal="true" aria-label={title}>
      <div>{title}</div>
      <button type="button" onClick={onClose}>
        Tutup
      </button>
      <div>{children}</div>
    </div>
  );
}
