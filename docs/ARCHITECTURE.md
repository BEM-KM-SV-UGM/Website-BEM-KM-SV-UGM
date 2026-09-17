# Architecture

Struktur folder dan aturan penggunaan setiap folder di project ini.

## Prinsip Arsitektur

```text
ROUTE                  → src/app/
FEATURE/BUSINESS LOGIC → src/features/
REUSABLE UI            → src/components/
GLOBAL LOGIC/UTILITIES → src/hooks/, src/lib/, src/config/
PEMBAGIAN PEKERJAAN    → tasks/
DOKUMENTASI            → docs/
```

## Struktur Folder

```text
project/
├── public/                  # Asset statis (images, icons, fonts)
├── src/
│   ├── app/                 # Routing (App Router), hanya entry point halaman
│   │   ├── layout.js        # Root layout: metadata, Navbar, Footer
│   │   ├── page.js          # Homepage (/)
│   │   ├── globals.css      # Reset, CSS variables, typography dasar
│   │   ├── kementerian/     # /kementerian dan /kementerian/[slug]
│   │   ├── visi-misi/
│   │   ├── informasi/       # /informasi dan /informasi/[slug]
│   │   ├── aspirasi/
│   │   ├── faq/
│   │   ├── galeri/
│   │   ├── media-partner/
│   │   └── admin/           # Area admin dengan layout.js sendiri
│   ├── components/
│   │   ├── ui/              # Component UI generik (Button, Card, Modal, ...)
│   │   ├── layout/          # Navbar, Footer, MobileMenu, PageHeader
│   │   └── shared/          # Loading, EmptyState, ErrorState, SectionTitle
│   ├── features/
│   │   └── [feature]/
│   │       ├── components/  # Component spesifik fitur
│   │       ├── services/    # Service layer (data/API) bila dibutuhkan
│   │       └── data/        # Dummy data
│   ├── hooks/               # Custom hooks lintas feature
│   ├── lib/                 # API client, endpoint, utils, constants
│   └── config/              # navigation.js, site.js
├── tasks/                   # Dokumentasi pekerjaan per task
└── docs/                    # Dokumentasi arsitektur dan aturan
```

## Aturan per Folder

### `src/app/`

- Hanya routing dan entry point halaman.
- `page.js` cukup memanggil component dari feature, contoh:

```jsx
import HomePage from "@/features/home/components/HomePage";

export default function Page() {
  return <HomePage />;
}
```

- Root `layout.js` untuk metadata, font, dan global layout (Navbar/Footer).
- Admin memiliki `layout.js` sendiri agar terpisah dari halaman publik.
- Dynamic route memakai folder `[slug]`; `params` di Next.js 15+ berupa
  Promise, jadi baca dengan `await params` di server component.

### `src/features/`

- Semua component, service, dan data spesifik fitur ada di sini.
- Alur data: `page.js` → component feature → `services/` → `data/` atau API.
- `services/` adalah satu-satunya tempat memanggil API; ketika backend jadi,
  isi service diganti tanpa mengubah component.
- Dummy data hanya ditulis di `data/`, tidak disebar di component.

### `src/components/`

- `ui/` component generik yang tidak boleh bergantung pada fitur tertentu.
- `layout/` component global (Navbar, Footer, dst).
- `shared/` component reusable non-primitive (EmptyState, SectionTitle, dst).

### `src/hooks/`, `src/lib/`, `src/config/`

- `hooks/` hanya untuk hook lintas feature. Hook khusus satu feature
  diletakkan di `src/features/[feature]/hooks/`.
- `lib/api/client.js` tempat konfigurasi HTTP; URL API dari environment
  variable `NEXT_PUBLIC_API_BASE_URL`. Endpoint terdaftar di
  `lib/api/endpoints.js`.
- `config/` untuk menu navigasi dan konfigurasi situs; Navbar/Footer tidak
  hardcode menu.

## Konvensi

- **JavaScript + JSX**: `.js` untuk logic/page/config, `.jsx` untuk component.
  Dilarang membuat `.ts`/`.tsx`.
- **Import alias**: `@/*` menuju `src/*` (lihat `jsconfig.json`).
- **Naming**: component `PascalCase.jsx`, hook `useSomething.js`, utility
  `camelCase.js`, folder `kebab-case`.
- **Design system**: sumber kebenaran token ada di `docs/design.md`. Semua token
  (warna, tipografi, spacing, radius, stroke, shadow) didefinisikan sebagai CSS
  variables di `src/app/globals.css` — dilarang memakai nilai hex/ukuran mentah
  di component; selalu referensikan token (contoh: `var(--primary-400)`,
  `var(--spacing-4)`, `var(--radius-2)`, `var(--shadow-e1)`).
- **Font utama**: Plus Jakarta Sans dari Google Fonts, dipasang via
  `next/font` di `src/app/layout.js` dan dipakai global melalui `--font-sans`.
- **Styling component** memakai CSS module (`Component.module.css`).
- **Placeholder**: file yang belum dikerjakan berisi implementasi minimal
  yang valid + komentar `// TODO:`. Jangan membuat folder kosong.

## Catatan Admin

Desain admin belum ada, sehingga saat ini admin memakai layout sederhana dan
masih berada di bawah root layout yang sama. Ketika desain admin final,
berikan chrome khusus admin di `src/app/admin/layout.js` (atau pisahkan
sepenuhnya dengan route group) tanpa mengubah URL.
