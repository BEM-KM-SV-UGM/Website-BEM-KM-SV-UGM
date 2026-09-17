# BEM KM SV Website

Frontend website resmi BEM KM SV — dibangun dengan Next.js App Router dan
JavaScript (tanpa TypeScript).

> Struktur project mengikuti `BEM_NEXTJS_FRONTEND_STRUCTURE.md`.
> Dokumentasi lengkap ada di folder `docs/`, pembagian kerja ada di folder `tasks/`.

## Teknologi

- Next.js (App Router)
- React
- JavaScript + JSX — tidak ada file `.ts`/`.tsx`
- CSS: variables global di `globals.css` + CSS module per component

## Menjalankan Project

```bash
# 1. Install dependency
npm install

# 2. Salin environment variable
cp .env.example .env.local

# 3. Jalankan development server
npm run dev
```

Buka http://localhost:3000 di browser.

## Scripts

| Script | Fungsi |
|---|---|
| `npm run dev` | Development server. |
| `npm run build` | Production build. |
| `npm run start` | Menjalankan hasil production build. |
| `npm run lint` | ESLint. |

## Struktur Singkat

```text
src/
├── app/          # Routing (App Router) — hanya entry point halaman
├── components/   # Reusable component (ui, layout, shared)
├── features/     # Component + services + data per fitur
├── hooks/        # Custom hooks lintas feature
├── lib/          # API client, utils, constants
└── config/       # Menu navigasi dan konfigurasi situs
```

Route yang tersedia: `/`, `/kementerian`, `/kementerian/[slug]`, `/visi-misi`,
`/informasi`, `/informasi/[slug]`, `/aspirasi`, `/faq`, `/galeri`,
`/media-partner`, serta area `/admin`.

## Catatan untuk Tim

- **Semua halaman/component masih placeholder minimal** yang valid dan bisa
  dijalankan. Pekerjaan sesungguhnya terdistribusi di `tasks/` — mulai dari
  `tasks/README.md`.
- Dummy data ada di `src/features/[feature]/data/` dan nanti diganti service
  API di `src/features/[feature]/services/` tanpa mengubah component.
- Menu navigasi dikelola di `src/config/navigation.js`, konfigurasi situs di
  `src/config/site.js`.
- Sebelum mulai coding, baca `docs/CONTRIBUTING.md` (branch, commit, PR) dan
  `docs/ARCHITECTURE.md` (aturan folder).
