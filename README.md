# 🏛️ Website BEM KM Sekolah Vokasi UGM

[![Next.js](https://img.shields.io/badge/Next.js-15.5.25-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Solar Icons](https://img.shields.io/badge/Solar_Icons-2.3.0-FF6B00?style=for-the-badge)](https://solar-icons.com/)
[![Design System](https://img.shields.io/badge/Design_System-Plus_Jakarta_Sans-174DDA?style=for-the-badge)](./docs/design.md)

Frontend website resmi **Badan Eksekutif Mahasiswa Keluarga Mahasiswa Sekolah Vokasi Universitas Gadjah Mada (BEM KM SV UGM)**. Dibangun menggunakan Next.js App Router, JavaScript modern, dan CSS Modules murni yang berpijak pada Design System terstandarisasi.

---

## 📑 Daftar Isi

- [Arsitektur Informasi (IA)](#-arsitektur-informasi-ia)
- [Design System & Token](#-design-system--token)
- [Panduan Solar Icons](#-panduan-solar-icons)
- [Katalog Komponen & Tampilan Visual](#-katalog-komponen--tampilan-visual)
  - [1. Button Component](#1-button--srccomponentsuibuttonjsx)
  - [2. Chip Component](#2-chip--srccomponentsuichipjsx)
  - [3. Article Card Component](#3-article-card--srccomponentsuiarticlecardjsx)
  - [4. Navbar Component](#4-navbar--srccomponentslayoutnavbarjsx)
  - [5. Footer Component](#5-footer--srccomponentslayoutfooterjsx)
- [Struktur Direktori](#-struktur-direktori)
- [Cara Menjalankan Project](#-cara-menjalankan-project)

---

## 🗺️ Arsitektur Informasi (IA)

Navigasi dan routing mengacu pada dokumen [`IA_Website_BEM.md`](./IA_Website_BEM.md):

| Halaman | Tipe Konten | Rute URL | Deskripsi Utama |
|---|---|---|---|
| **Beranda** | Static | `/` | Hero parallax, profil BEM, highlight artikel, dan dokumentasi |
| **Kesekretariatan** | Dynamic (List) / Static (Detail) | `/kesekretariatan` & `/[slug]` | Arsip kabinet per tahun, visi-misi, dan struktur organisasi |
| **Vokasipedia** | Dynamic (List & Detail) | `/vokasipedia` & `/[slug]` | Portal artikel berita, opini, dan informasi mahasiswa vokasi |
| **Uni-Vokasi** | Static | `/uni-vokasi` | Direktori Keluarga Mahasiswa Departemen (KMD) & BSO |
| **Aduan Vokasi** | Interactive / External | `/aduan-vokasi` | Hub layanan survei kepuasan dan form aduan mahasiswa |
| **Galeri** | Dynamic | `/galeri` | Dokumentasi visual kegiatan vokasi |
| **Narahubung** | External Link | *Action Button* | Menghubungkan langsung ke WhatsApp resmi BEM |

---

## 🎨 Design System & Token

> **Aturan Wajib:** Jangan menggunakan nilai HEX mentah (*hardcoded*) di dalam komponen. Selalu gunakan variabel CSS dari `src/app/globals.css`.

### 1. Token Warna Utama
```
┌─────────────────┬─────────────────┬─────────────────┬─────────────────┐
│ Primary (Biru)  │ Secondary (Oren)│ Neutral (Teks)  │ Neutral (Latar) │
├─────────────────┼─────────────────┼─────────────────┼─────────────────┤
│ --primary-400   │ --secondary-500 │ --neutral-1000  │ --neutral-100   │
│ #174DDA (Brand) │ #D68200 (Aksen) │ #2B4774 (Heading│ #FFFFFF (Putih) │
│ --primary-500   │ --secondary-100 │ --neutral-900   │ --neutral-300   │
│ #103BBB (Hover) │ #FFF3CF (Badge) │ #475F8C (Body)  │ #F6F8FD (Surface│
└─────────────────┴─────────────────┴─────────────────┴─────────────────┘
```

### 2. Token Tipografi & Spacing
- **Font Utama:** `Plus Jakarta Sans`
- **Heading:** `H-1` (68px) s/d `H-7` (22px) dengan bobot **Bold (700)**
- **Body:** `B-1` (18px), `B-2` (16px), `B-3` (14px), `B-4` (12px), `B-5` (10px)
- **Radius:** `--radius-2` (8px), `--radius-3` (12px), `--radius-4` (16px), `--radius-full` (999px)
- **Elevation Shadow:** `--shadow-e1` (halus), `--shadow-e2` (sedang/kartu), `--shadow-e3` (tinggi)

---

## ☀️ Panduan Solar Icons

Proyek ini telah terintegrasi dengan paket `@solar-icons/react` untuk ikon modern yang seragam di seluruh antarmuka.

### 1. Gaya Ikon (Icon Styles)
Solar Icons menyediakan beberapa varian gaya melalui *subpath import*:
- `line-duotone`: Garis outline modern dengan aksen opacity 2-warna (pilihan utama UI).
- `bold-duotone`: Bentuk solid tebal dengan aksen opacity 2-warna (bagus untuk tombol utama / navbar).
- `linear`: Garis outline clean dengan satu ketebalan.
- `bold`: Solid penuh satu warna.

### 2. Cara Import yang Benar
Gunakan path import spesifik agar bundle aplikasi tetap ringan (*tree-shaking*):

```jsx
// ✅ Direkomendasikan: Import dari subpath style ikon
import { ArrowRightUpIcon } from '@solar-icons/react/line-duotone/arrow-right-up';
import { ChatSquareCallIcon } from '@solar-icons/react/bold-duotone/chat-square-call';
import { MagniferIcon } from '@solar-icons/react/linear/magnifer';
import { DocumentTextIcon } from '@solar-icons/react/bold-duotone/document-text';
```

> ⚠️ **Penting:** Pastikan akhiran nama ikon menggunakan `Icon` (misal: `ChatSquareCallIcon`, bukan `ChatSquareCallBoldDuotone`).

### 3. Contoh Penggunaan Props Ikon
```jsx
// Ukuran default 24px, dapat diatur melalui prop size dan color
<ArrowRightUpIcon size={20} />
<ChatSquareCallIcon size={24} color="var(--primary-400)" />
```

---

## 📦 Katalog Komponen & Tampilan Visual

Berikut adalah contoh visual (*mockup preview*) dari tampilan komponen beserta kode JSX penggunaannya.

---

### 1. Button — `src/components/ui/Button.jsx`

Komponen tombol multifungsi. Secara otomatis merender tag `<a>` jika memiliki `href`, atau tag `<button>` jika tidak ada `href`. Dilengkapi dengan animasi hover, active scale, dan transisi halus.

#### A. Varian Tombol (Visual & Code)

##### 🔹 Primary (`variant="primary"`) — Default
Tampilan tombol solid biru dengan teks putih. Cocok untuk Call-to-Action utama.
```
┌──────────────────────────────────────────────┐
│  TAMPILAN DI BROWSER:                        │
│                                              │
│   [ ↗  Layanan Aduan Vokasi ]                 │
│   • Background: #174dda (Biru Utama)         │
│   • Teks & Ikon: Putih Solid                 │
│   • Hover: #103bbb + Glow Shadow Lembut      │
│   • Active: Transform scale(0.98)            │
└──────────────────────────────────────────────┘
```
```jsx
import Button from "@/components/ui/Button";
import { ArrowRightUpIcon } from "@solar-icons/react/line-duotone/arrow-right-up";

<Button href="/aduan-vokasi" icon={<ArrowRightUpIcon size={20} />}>
  Layanan Aduan Vokasi
</Button>
```

##### 🔹 Outline (`variant="outline"`)
Tampilan tombol berlatar putih dengan border dan teks biru primary.
```
┌──────────────────────────────────────────────┐
│  TAMPILAN DI BROWSER:                        │
│                                              │
│   ┌──────────────────────────────────────┐   │
│   │   Narahubung & Media Partner         │   │
│   └──────────────────────────────────────┘   │
│   • Background: #ffffff (Putih)              │
│   • Border: 1px solid #e0e5f2 (Neutral)      │
│   • Teks: #174dda (Biru Primary)             │
│   • Hover: Background #f6f8fd + Teks #103bbb │
└──────────────────────────────────────────────┘
```
```jsx
<Button
  href="https://wa.me/6281234567890"
  target="_blank"
  rel="noopener noreferrer"
  variant="outline"
>
  Narahubung & Media Partner
</Button>
```

##### 🔹 Secondary (`variant="secondary"`)
Tombol aksen *tinted* biru lembut dengan teks biru tua.
```
┌──────────────────────────────────────────────┐
│  TAMPILAN DI BROWSER:                        │
│                                              │
│   [ 📄  Unduh Dokumen ]                      │
│   • Background: #cfe1fd (Primary-100)        │
│   • Teks & Ikon: #0b2b9c (Primary-600)       │
│   • Hover: #a1c1fb (Primary-200)             │
└──────────────────────────────────────────────┘
```
```jsx
<Button variant="secondary" icon={<DocumentTextIcon size={20} />}>
  Unduh Dokumen
</Button>
```

#### B. Ukuran Button (`size`)
Tersedia tiga ukuran proporsional:
```
[ sm: Kecil ]   [ md: Standar (Default) ]   [ lg: Besar / Hero CTA ]
```
```jsx
<Button size="sm">Tombol Kecil</Button>
<Button size="md">Tombol Standar</Button>
<Button size="lg">Tombol Besar</Button>
```

---

### 2. Chip — `src/components/ui/Chip.jsx`

Badge berbentuk kapsul (*pill*) untuk kategori, kementerian, status, atau tag berita.

```
┌────────────────────────────────────────────────────────────────────────┐
│  TAMPILAN DI BROWSER:                                                  │
│                                                                        │
│   ( 🏷️ Kementerian Sosial )   ( 🔵 Vokasipedia )   ( ⚪ Draft Status )  │
│      [variant="warning"]          [variant="primary"]  [variant="outline"] │
│      Bg: Kuning Muda #FFF3CF      Bg: Biru Muda        Border: Abu-abu     │
│      Teks: Coklat Emas #D68200    Teks: Biru Tua       Teks: Gelap         │
└────────────────────────────────────────────────────────────────────────┘
```

```jsx
import Chip from "@/components/ui/Chip";
import { TagIcon } from "@solar-icons/react/linear/tag";

// Default: variant="warning" (kuning lembut sesuai desain BEM)
<Chip>Kementerian Sosial Masyarakat</Chip>

// Varian Biru
<Chip variant="primary">Vokasipedia</Chip>

// Varian Outline
<Chip variant="outline">Arsip 2025</Chip>

// Chip sebagai Tautan (Interaktif)
<Chip href="/vokasipedia?tag=kegiatan" icon={<TagIcon size={16} />}>
  Kegiatan
</Chip>
```

---

### 3. Article Card — `src/components/ui/ArticleCard.jsx`

Kartu artikel responsif untuk menampilkan feed berita, opini, dan artikel Vokasipedia.

```
┌──────────────────────────────────────────────────────────────────┐
│  TAMPILAN STRUKTUR KARTU (ArticleCard):                          │
│                                                                  │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                                                            │  │
│  │                 [ FOTO KEGIATAN / THUMBNAIL ]              │  │
│  │                        (Tinggi: 220px)                     │  │
│  │                                                            │  │
│  └────────────────────────────────────────────────────────────┘  │
│   ( Kementerian Sosial Masyarakat )  ( Biro PSDM )               │
│                                                                  │
│   Pekan Olahraga Vokasi dan Vocational Art (PORVO)               │
│   Kegiatan tahunan olahraga dan pentas seni mahasiswa sekolah    │
│   vokasi resmi dibuka dengan meriah...                           │
│                                                                  │
│                                              Selengkapnya ↗      │
└──────────────────────────────────────────────────────────────────┘
```

```jsx
import ArticleCard from "@/components/ui/ArticleCard";

<ArticleCard
  image="/images/news/porvo.jpg"
  imageAlt="Pembukaan Pekan Olahraga Vokasi"
  chips={["Kementerian Sosial Masyarakat", "Biro PSDM"]}
  title="Pekan Olahraga Vokasi dan Vocational Art (PORVO) 2026"
  excerpt="Kegiatan tahunan olahraga dan pentas seni mahasiswa sekolah vokasi resmi dibuka dengan meriah di Lapangan SV UGM..."
  href="/vokasipedia/pekan-olahraga-vokasi-2026"
/>
```

---

### 4. Navbar — `src/components/layout/Navbar.jsx`

Header navigasi yang responsif, *sticky*, dan memusatkan menu di titik tengah layar.

```
┌───────────────────────────────────────────────────────────────────────────────────────────────┐
│  TAMPILAN DI DESKTOP:                                                                         │
│                                                                                               │
│  [🏛️ BEM KM SV]               Beranda  Kesekretariatan  Vokasipedia              [ 📞 Narahubung ] │
│   Sekolah Vokasi UGM           Uni-Vokasi  Aduan Vokasi  Galeri                               │
│                                                                                               │
│  ◄──── SISI KIRI ────►        ◄────────── TENGAH LAYAR (CENTER) ──────────►      ◄── SISI KANAN ──► │
│    Brand & Logo                  Menu Navigasi Terpusat Seimbang                  Action Button       │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Pusat Navigasi:** Menu utama selalu berada tepat di tengah layar (50% horizontal center).
- **Data Dinamis:** Daftar menu dikelola di `src/config/navigation.js`. Tidak perlu mengubah komponen untuk menambah halaman baru.
- **Mobile Menu:** Otomatis beralih ke drawer menu pada layar tablet/ponsel (≤ 1080px).

```jsx
import Navbar from "@/components/layout/Navbar";

// Dipasang sekali di src/app/layout.js
<Navbar />
```

---

### 5. Footer — `src/components/layout/Footer.jsx`

Footer komprehensif yang menampilkan identitas lembaga, tautan sosial media, kontak, dan tautan sitemap navigasi.

```
┌───────────────────────────────────────────────────────────────────────────────────────────────┐
│  TAMPILAN FOOTER:                                                                             │
│                                                                                               │
│  [🏛️ BEM KM SV]               Tautan Cepat      Layanan           Departemen        Media     │
│   Keluarga Mahasiswa           • Beranda         • Aduan Vokasi    • KMD TEDI        • YouTube │
│   Sekolah Vokasi UGM           • Kesekretariatan • Kalender        • KMD DBS         • Instagram│
│                                • Vokasipedia     • Aspirasi        • KMD DEB         • TikTok  │
│  ✉️ bem.sv@ugm.ac.id                                                                          │
│  [YouTube] [Instagram] [TikTok]                                                               │
└───────────────────────────────────────────────────────────────────────────────────────────────┘
```

Semua data kontak dan tautan sosial media terpusat di `src/config/site.js`.

---

## 📂 Struktur Direktori

```text
src/
├── app/                  # App Router: Entry point setiap rute halaman Next.js
│   ├── layout.js         # Root layout (Navbar, Footer, Font Plus Jakarta Sans)
│   ├── globals.css       # Token warna, tipografi, spacing, reset global
│   ├── page.js           # Halaman utama (Home)
│   ├── kesekretariatan/  # Halaman arsip kabinet & detail slug
│   ├── vokasipedia/      # Halaman artikel & pencarian
│   ├── uni-vokasi/       # Halaman direktori KMD & BSO
│   ├── aduan-vokasi/     # Halaman layanan aduan mahasiswa
│   └── galeri/           # Halaman dokumentasi foto
│
├── components/           # Komponen reusable global
│   ├── ui/               # Komponen UI atomik (Button, Chip, Card, ArticleCard, dll)
│   ├── layout/           # Navbar, Footer, MobileMenu, PageHeader
│   └── shared/           # Komponen pembantu (SectionTitle, ErrorState, dll)
│
├── features/             # Logika, komponen khusus, dan mock data per fitur
│   ├── home/             # Hero banner, About section, Highlight info
│   ├── kesekretariatan/  # List kabinet, card kabinet, struktur organisasi
│   ├── vokasipedia/      # Filter artikel, search, detail artikel
│   └── aduan-vokasi/     # Hub layanan aduan
│
├── config/               # Konfigurasi situs & navigasi
│   ├── navigation.js     # Array link menu navigasi navbar
│   └── site.js           # Nama instansi, kontak WA, email, akun sosmed
│
└── lib/                  # Helper utilities, constants, & formatter
```

---

## 🚀 Cara Menjalankan Project

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Menjalankan Server Development
```bash
npm run dev
```
Buka browser dan akses [http://localhost:3000](http://localhost:3000).

### 3. Perintah Tersedia Lainnya
| Perintah | Keterangan |
|---|---|
| `npm run dev` | Menjalankan Next.js development server dengan Hot Reload |
| `npm run build` | Menjalankan validasi linting, compile, dan optimasi build produksi |
| `npm run start` | Menjalankan server hasil produksi build lokal |
| `npm run lint` | Menjalankan pemeriksaan kode ESLint |

---

## 💡 Tips & Panduan Tambahan

> [!TIP]
> **Menambahkan Ikon Solar Baru:**
> Kunjungi [Solar Icons](https://solar-icons.com/) untuk melihat katalog lengkap nama-nama ikon. Anda dapat mengimpor ikon pilihan Anda melalui pola `@solar-icons/react/<style>/<nama-icon>`.

> [!IMPORTANT]
> **Konsistensi Desain:**
> Jangan menimpa style komponen dengan inline-style sembarangan. Jika memerlukan style khusus pada halaman tertentu, gunakan CSS Module lokal dan kombinasikan dengan prop `className` atau `variant`.
