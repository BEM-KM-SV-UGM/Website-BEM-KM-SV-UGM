# Dokumentasi

Kumpulan dokumentasi project website BEM KM SV.

- `IA.md` — Information Architecture: daftar route dan hubungan antar halaman.
- `ARCHITECTURE.md` — struktur folder dan aturan penggunaan setiap folder.
- `COMPONENTS.md` — daftar reusable component, hook, dan helper beserta cara pakainya.
- `CONTRIBUTING.md` — aturan branch, commit, pull request, naming, dan code style.
- `OWNERS.md` — daftar PIC setiap area.

## Ringkasan Aturan Penting

1. Project ini menggunakan **JavaScript + JSX** (App Router). Tidak ada file `.ts`/`.tsx`.
2. `src/app/` hanya routing dan entry point. UI halaman ada di `src/features/`.
3. Component reusable ada di `src/components/`, dummy data di `src/features/[feature]/data/`.
4. Selalu pakai import alias `@/` untuk lintas folder.
5. Kerjakan tugas berdasarkan task di `tasks/` dan ikuti `docs/CONTRIBUTING.md`.
