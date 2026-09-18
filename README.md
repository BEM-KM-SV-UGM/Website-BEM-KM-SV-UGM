# BEM KM SV Website

Frontend website resmi BEM KM SV — dibangun dengan **Next.js (App Router)** dan
**JavaScript** (tanpa TypeScript), styling memakai CSS variables global +
CSS Module per component.

## Struktur IA (Information Architecture)

Sumber lengkap: [`IA_Website_BEM.md`](./IA_Website_BEM.md). Ringkasannya:

| Halaman | Tipe Konten | Isi |
|---|---|---|
| Beranda | Static | Hero, Tentang BEM, Informasi/Highlight |
| Kesekretariatan | Daftar Kabinet **Dynamic**, Detail Kabinet Static | Daftar kabinet per tahun → detail kabinet (visi-misi, struktur) |
| Vokasipedia | **Dynamic** | Daftar artikel (search/filter) → detail artikel |
| Uni-Vokasi | Static | Keluarga Mahasiswa & Badan Semi Otonom (BSO) |
| Aduan Vokasi | Static | Akses Survei Kepuasan & Aduan Vokasi (link eksternal) |
| Galeri | **Dynamic** | Grid dokumentasi foto kegiatan |
| Narahubung | Static / External | Bukan halaman — button di navbar menuju WhatsApp |

Navigasi utama tersedia di **Navbar** pada seluruh halaman:
Beranda, Kesekretariatan, Vokasipedia, Uni-Vokasi, Aduan Vokasi, Galeri,
plus button Narahubung di kanan.

## Design System (Patokan Wajib)

Sumber lengkap: [`docs/design.md`](./docs/design.md), sudah diimplementasikan
sebagai CSS variables di `src/app/globals.css`. **Design system ini sudah final
dan selalu menjadi patokan** — jangan pakai raw hex atau ukuran hardcode,
selalu referensikan token.

- **Warna** — keluarga token: `primary` (biru, `--primary-400` = `#174DDA`),
  `secondary` (kuning, `--secondary-100` = `#FFF3CF`, `--secondary-500` =
  `#D68200`), `neutral` (abu kebiruan, `--neutral-1000` = `#2B4774` untuk teks),
  plus `green`, `red`, `yellow`.
- **Tipografi** — font **Plus Jakarta Sans**. Heading `H-1`–`H-7` (68px–22px,
  Bold), Body `B-1`–`B-5` (18px–10px). Token: `--text-b3` = 14px,
  `--lh-b3` = 21px, dst.
- **Spacing** — `--spacing-0` (2px) s/d `--spacing-10` (56px), satuan dasar 2px.
- **Radius** — `--radius-1` (4px) s/d `--radius-7` (32px), `--radius-full` (999px).
- **Stroke** — `--stroke-0` (1px) s/d `--stroke-3` (6px).
- **Shadow** — `--shadow-e1`, `--shadow-e2`, `--shadow-e3` (semakin besar
  semakin menonjol).

## Komponen

Komponen reusable ada di `src/components/` (`ui/` untuk komponen dasar,
`layout/` untuk navbar & footer, `shared/` untuk state umum). Semua styling
memakai CSS Module yang hanya mereferensikan token design system.

### 1. Button — `src/components/ui/Button.jsx`

Button serbaguna: render `<a>` jika diberi `href`, render `<button>` jika tidak.
Ikon opsional lewat prop `icon` (menerima JSX/component, dirender sebelum teks).

**Tampilan:** tombol biru primary dengan teks putih, rounded 12px, teks
semibold 16px, ikon dan teks berjarak 8px. Saat hover, warna memudar lebih gelap.

#### a. Dengan Link (href) + Ikon — pola "Narahubung"

Sesuai desain navbar: button biru dengan ikon chat yang membuka WhatsApp.

```jsx
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

<Button
  href={siteConfig.whatsappUrl}
  target="_blank"
  rel="noopener noreferrer"
  icon={<ChatIcon />}   // ikon SVG custom, lihat Navbar.jsx
>
  Narahubung
</Button>
```

Hasil: `[ (ikon chat) Narahubung ]` — dirender sebagai `<a href="...">`.
Semua props tambahan (`target`, `rel`, `onClick`, dll.) diteruskan ke tag.

#### b. Tanpa aksi khusus & tanpa ikon

Cukup teks; dirender sebagai `<button>` standar — dipakai untuk submit form,
toggle, atau aksi dalam halaman.

```jsx
<Button onClick={handleSubmit}>Kirim</Button>
```

#### c. Dengan ikon custom

Prop `icon` menerima SVG/ikon apa pun, jadi bisa bebas mengganti ikon sesuai
konteks (panah, unduh, dsb.).

```jsx
const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

<Button href="/aduan-vokasi" icon={<ArrowIcon />}>
  Ajukan Aduan
</Button>
```

#### d. Tanpa href, tanpa ikon, tanpa onClick

Button bisa juga dipakai murni sebagai elemen visual dengan `children` saja —
berguna untuk placeholder/prototyping sebelum aksi didefinisikan.

```jsx
<Button>Button</Button>
```

### 2. Article Card — `src/components/ui/ArticleCard.jsx`

Kartu artikel untuk daftar konten (Vokasipedia, beranda, dsb.).

**Tampilan:** kartu putih dengan sudut membulat 16px (`--radius-4`), border tipis,
shadow lembut (`--shadow-e2`); saat hover naik 4px dengan shadow lebih kuat.
Struktur atas ke bawah: **thumbnail** (tinggi 220px, `object-fit: cover`) →
**baris Chip** kementerian/biro (variant kuning) → **judul** (B-2, Bold 16px,
jadi link ke detail jika `href` valid) → **excerpt** (B-3, 14px) →
**link "Selengkapnya ↗"** rata kanan berwarna primary.

```jsx
import ArticleCard from "@/components/ui/ArticleCard";

// Lengkap: thumbnail + chips + judul ter-link
<ArticleCard
  image="/images/news/pose.jpg"
  imageAlt="Kegiatan PORVO"
  chips={["Kementerian Sosial Masyarakat", "Biro Pengembangan Sumber Daya"]}
  title="Pekan Olahraga Vokasi dan Vocational Art"
  excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
  href="/vokasipedia/pekan-olahraga-vokasi"
/>
```

Kemungkinan lain:

```jsx
// Tanpa image → tampil placeholder "Foto Kegiatan"
// (gradasi abu + ikon gambar), cocok saat data belum ada thumbnail
<ArticleCard title="Judul Artikel" href="/vokasipedia/judul-artikel" />

// chips berupa string tunggal (otomatis dibungkus jadi array)
<ArticleCard image="/images/news/a.jpg" chips="Kementerian Medinfo" />

// Ubah label aksi & sisipkan konten tambahan lewat children
<ArticleCard
  title="Judul Artikel"
  href="/vokasipedia/judul-artikel"
  actionLabel="Baca Artikel"
>
  <p className={styles.tanggal}>12 September 2026</p>
</ArticleCard>

// href="#" (default) → judul tidak dijadikan Link (kartu non-klik)
<ArticleCard title="Draft Artikel" href="#" />
```

### 3. Chip — `src/components/ui/Chip.jsx`

Label kecil berbentuk pill untuk kategori/tag (kementerian, biro, status).

**Tampilan:** pill (`border-radius: 9999px`), padding 6px × 14px, teks
semibold 14px (B-3), tidak pernah wrap. Mendukung `icon` dan `href`
(dengan `href` render `<a>`, tanpa `href` render `<span>`).

```jsx
import Chip from "@/components/ui/Chip";

<Chip>Kementerian Sosial Masyarakat</Chip>          // default: variant "warning"
<Chip variant="primary">Vokasipedia</Chip>          // biru muda
<Chip variant="outline">Draft</Chip>                // outline abu
<Chip href="/vokasipedia" icon={<TagIcon />}>Tag</Chip> // jadi link
```

**Tampilan per variant:**
- `warning` (default, alias `yellow`/`secondary`) — latar kuning muda
  `--secondary-100` (#FFF3CF), teks kuning tua `--secondary-500` (#D68200).
  Hover: latar jadi `--secondary-200`. Inilah variant yang dipakai ArticleCard.
- `primary` — latar `--primary-100`, teks `--primary-600`.
- `outline` — transparan dengan border 1px `--neutral-500`, teks `--neutral-900`.

### 4. Navbar — `src/components/layout/Navbar.jsx`

Client component yang dipasang di `src/app/layout.js`, tampil di semua halaman.

**Tampilan:** header putih dengan container di dalamnya berisi tiga bagian:
kiri **brand** (logo BEM 44px + teks dua baris: nama situs & subtitle),
tengah **menu navigasi** (link aktif diberi gaya berbeda berdasarkan
`usePathname`), kanan **button Narahubung** (biru + ikon chat, lihat Button di
atas) dan **MobileMenu** untuk layar kecil.

Data menu **tidak di-hardcode** — diambil dari `src/config/navigation.js`
(Beranda, Kesekretariatan, Vokasipedia, Uni-Vokasi, Aduan Vokasi, Galeri),
nama/deskripsi/link WhatsApp dari `src/config/site.js`. Cara pakai cukup:

```jsx
import Navbar from "@/components/layout/Navbar";

<Navbar />
```

Untuk menambah/mengubah menu, edit `src/config/navigation.js` — tidak perlu
menyentuh komponen.

### 5. Footer — `src/components/layout/Footer.jsx`

Server component, dipasang di `src/app/layout.js` tepat setelah konten halaman.

**Tampilan:** footer dengan dua area. Kolom kiri berisi **brand** (logo + nama +
subtitle), **deskripsi singkat** situs, baris **email** (ikon amplop + link
`mailto:`), dan tiga tombol bulat **sosial media** (YouTube, Instagram, TikTok).
Kolom kanan berisi **grid 4 kolom** berisi judul kolom + daftar link navigasi.

Semua data (nama, deskripsi, email, URL sosial media) diambil dari
`src/config/site.js`. Daftar link kolom kanan saat ini masih placeholder
(`footerColumns` di `Footer.jsx`) — isi dengan link sesuai IA saat konten final.

```jsx
import Footer from "@/components/layout/Footer";

<Footer />
```

## Menjalankan Project

```bash
npm install
npm run dev      # buka http://localhost:3000
```

| Script | Fungsi |
|---|---|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run start` | Menjalankan hasil production build |
| `npm run lint` | ESLint |

## Struktur Singkat

```text
src/
├── app/          # Routing (App Router) — hanya entry point halaman
├── components/   # Reusable component (ui, layout, shared)
├── features/     # Component + services + data per fitur
├── hooks/        # Custom hooks lintas feature
├── lib/          # API client, utils, constants
└── config/       # navigation.js & site.js
```

Dokumentasi lanjutan: `docs/` (architecture, design, components, contributing).
Sebelum mulai coding, baca `docs/CONTRIBUTING.md` dan `docs/ARCHITECTURE.md`.
