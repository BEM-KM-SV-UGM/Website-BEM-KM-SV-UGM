# Tasks

Folder ini berisi dokumentasi pekerjaan yang bisa diberikan kepada anggota tim.
Setiap task adalah satu file markdown, sehingga pembagian kerja bisa dilakukan
tanpa setiap orang harus memahami seluruh codebase.

## Cara Pakai

1. Pilih task dari `tasks/pages/` atau `tasks/components/`, atau lihat `tasks/BACKLOG.md`.
2. Ubah Status menjadi `IN PROGRESS` dan isi PIC dengan namamu.
3. Buat branch baru mengikuti aturan di `docs/CONTRIBUTING.md`.
4. Kerjakan task sesuai bagian Requirements.
5. Pastikan semua Acceptance Criteria terpenuhi sebelum lapor selesai.
6. Ubah Status menjadi `REVIEW`, lalu buat Pull Request ke `develop`.
7. Setelah PR di-merge, ubah Status menjadi `DONE`.

## Arti Status

- `TODO` — belum dikerjakan.
- `IN PROGRESS` — sedang dikerjakan.
- `REVIEW` — menunggu review / Pull Request.
- `DONE` — selesai dan sudah di-merge.
- `BLOCKED` — terkendala (wajib mencantumkan alasannya).

## Format Penamaan File

- `tasks/pages/PAGE-XXX-nama-halaman.md` — pekerjaan satu halaman.
- `tasks/components/COMP-XXX-nama-component.md` — pekerjaan satu component.
- `tasks/features/` — pekerjaan lintas halaman dalam satu feature.

## Membuat Task Baru

Salin struktur dari task yang sudah ada. Setiap task minimal menjelaskan:
apa yang dikerjakan, lokasi file, PIC, status, requirement, acceptance
criteria, dan referensi desain.
