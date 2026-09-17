# Contributing

Aturan berkontribusi pada project website BEM KM SV. Bacalah
`docs/ARCHITECTURE.md` untuk memahami struktur folder sebelum mulai.

## Branch

Model branch:

```text
main
└── develop
    ├── feature/home
    ├── feature/kementerian
    ├── feature/informasi
    ├── feature/aspirasi
    └── feature/galeri
```

- Developer **tidak boleh push langsung ke `main`** (juga ke `develop`).
- Nama branch: `feature/nama-feature`, `fix/nama-bug`, `docs/nama-dokumen`.

## Alur Kerja

```bash
git checkout develop
git pull

git checkout -b feature/nama-feature
```

Setelah selesai:

```bash
git add .
git commit -m "feat: implement information page"
git push origin feature/nama-feature
```

Kemudian buat Pull Request ke `develop`.

## Commit

Format: `type: deskripsi singkat dalam bahasa Inggris atau Indonesia`.

| Type | Kegunaan |
|---|---|
| `feat` | fitur baru |
| `fix` | perbaikan bug |
| `docs` | dokumentasi |
| `style` | styling/format, tanpa perubahan logic |
| `refactor` | refactor tanpa mengubah perilaku |
| `chore` | perawatan (dependency, config, dsb.) |

## Pull Request

- Target PR selalu `develop`.
- Judul PR menyebutkan task terkait, contoh: `PAGE-004: Information page`.
- Checklist sebelum minta review:
  - [ ] Semua Acceptance Criteria pada task terpenuhi.
  - [ ] `npm run lint` tanpa error.
  - [ ] `npm run build` sukses.
  - [ ] Tidak ada console error saat dijalankan.
  - [ ] Tidak merusak halaman lain.

## Naming

- Component: `PascalCase.jsx` — contoh `InformationCard.jsx`.
- Page/layout: `page.js`, `layout.js`.
- Hook: `useSomething.js`.
- Utility: `camelCase.js`.
- Folder: `kebab-case` — contoh `media-partner/`.
- Branch: `feature/nama-feature`.

## Code Style

- JavaScript + JSX; **dilarang membuat file `.ts`/`.tsx`**.
- Gunakan import alias `@/` untuk lintas folder, bukan relative path panjang.
- Satu component satu tanggung jawab; pecah component yang terlalu besar.
- Dummy data hanya di `src/features/[feature]/data/`; akses data/API hanya
  lewat `services/` atau `lib/`.
- Style component memakai CSS module; CSS global hanya untuk reset/variables.
- Beri komentar `// TODO:` pada bagian yang belum dikerjakan.

## Task Workflow

1. Pilih task di `tasks/pages/`, `tasks/components/`, atau `tasks/BACKLOG.md`.
2. Ubah Status jadi `IN PROGRESS`, isi PIC.
3. Kerjakan sesuai Requirements dengan branch sesuai aturan di atas.
4. Cek Acceptance Criteria, ubah Status jadi `REVIEW`.
5. Buat Pull Request ke `develop`; setelah merge, ubah Status jadi `DONE`.
