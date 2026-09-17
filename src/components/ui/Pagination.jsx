"use client";

// Component pagination generik.
// `onChange` dipanggil dengan nomor halaman berikutnya.

export default function Pagination({ page, totalPages, onChange }) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav aria-label="Pagination">
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
      >
        Sebelumnya
      </button>
      <span>
        Halaman {page} dari {totalPages}
      </span>
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        Berikutnya
      </button>
    </nav>
  );
}
