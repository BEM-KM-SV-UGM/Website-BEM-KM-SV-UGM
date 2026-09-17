# Components

Daftar reusable component, hook, dan helper beserta cara penggunaannya.

## `src/components/ui/` — Component UI Generik

Component di sini tidak boleh bergantung pada fitur tertentu.

| Component | Fungsi | Status |
|---|---|---|
| `Button.jsx` | Tombol, menerima semua atribut button standar. | Placeholder, styling menyusul (COMP-003). |
| `Input.jsx` | Input text dengan label opsional. | Placeholder. |
| `Textarea.jsx` | Textarea dengan label opsional. | Placeholder. |
| `Select.jsx` | Select dengan `options` array `{ value, label }`. | Placeholder. |
| `Card.jsx` | Kartu generik, isi fleksibel via children. | Placeholder, styling menyusul (COMP-005). |
| `Badge.jsx` | Label kecil untuk kategori/status. | Placeholder. |
| `Modal.jsx` | Dialog terkontrol via props `open`/`onClose`. | Placeholder, overlay menyusul (COMP-004). |
| `Accordion.jsx` | Accordion dengan `items` array `{ title, content }`. | Berfungsi, styling menyusul. |
| `Table.jsx` | Tabel generik dengan `columns` `{ key, label }` dan `rows`. | Placeholder. |
| `Pagination.jsx` | Navigasi halaman dengan props `page`, `totalPages`, `onChange`. | Berfungsi, styling menyusul. |
| `Skeleton.jsx` | Placeholder loading. | Placeholder. |

Contoh pemakaian:

```jsx
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";

const options = [
  { value: "all", label: "Semua" },
  { value: "news", label: "Berita" },
];

<Button type="submit" disabled={loading}>Kirim</Button>
<Select id="kategori" label="Kategori" options={options} />
```

## `src/components/layout/` — Layout Global

| Component | Fungsi |
|---|---|
| `Navbar.jsx` | Navigasi utama, membaca menu dari `@/config/navigation.js`, active state via `usePathname`. |
| `MobileMenu.jsx` | Menu mobile dengan toggle. |
| `Footer.jsx` | Footer dengan menu navigasi dan copyright dari `@/config/site.js`. |
| `PageHeader.jsx` | Header standar halaman: `<PageHeader title="Informasi" description="..." />`. |

## `src/components/shared/` — Shared Component

| Component | Fungsi |
|---|---|
| `Loading.jsx` | Indikator loading sederhana. |
| `EmptyState.jsx` | State kosong untuk list/grid tanpa data. |
| `ErrorState.jsx` | Pesan kegagalan (misalnya fetch error). |
| `SectionTitle.jsx` | Judul section yang dipakai berulang. |

## `src/hooks/` — Custom Hooks

| Hook | Fungsi |
|---|---|
| `useDebounce.js` | `useDebounce(value, delay)` — nilai tertunda untuk search input. |
| `useModal.js` | `useModal()` — state `{ isOpen, open, close, toggle }` untuk Modal. |
| `usePagination.js` | `usePagination(totalItems, itemsPerPage)` — state `{ page, totalPages, goTo, next, previous }`. |

Contoh:

```jsx
"use client";

import usePagination from "@/hooks/usePagination";

const { page, totalPages, goTo } = usePagination(items.length, 9);
```

## `src/lib/` — Utility & API

| File | Fungsi |
|---|---|
| `lib/api/client.js` | `apiFetch(path, options)` — wrapper fetch dengan base URL dari env. |
| `lib/api/endpoints.js` | Daftar endpoint API. |
| `lib/utils/format.js` | `formatDate(value)` — format tanggal `id-ID`. |
| `lib/constants/index.js` | Konstanta lintas feature (kategori informasi, kategori/status aspirasi). |

## `src/config/` — Konfigurasi

| File | Fungsi |
|---|---|
| `navigation.js` | Daftar menu website; Navbar/Footer membaca dari sini. |
| `site.js` | Nama, deskripsi, url, email, sosial media situs. |

## Aturan Menambah Component Baru

1. Reusable dan generik → `src/components/ui/` atau `src/components/shared/`.
2. Hanya dipakai satu fitur → `src/features/[feature]/components/`.
3. Nama file `PascalCase.jsx`, satu tanggung jawab utama.
4. Wajib lolos ESLint dan tidak menimbulkan console error.
