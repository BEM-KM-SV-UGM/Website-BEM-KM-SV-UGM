# 🏛️ Website BEM KM Sekolah Vokasi UGM

[![Next.js](https://img.shields.io/badge/Next.js-15.5.25-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Solar Icons](https://img.shields.io/badge/Solar_Icons-2.3.0-FF6B00?style=for-the-badge)](https://solar-icons.com/)
[![Design System](https://img.shields.io/badge/Design_System-Plus_Jakarta_Sans-174DDA?style=for-the-badge)](./docs/design.md)

Frontend website resmi **Badan Eksekutif Mahasiswa Keluarga Mahasiswa Sekolah Vokasi Universitas Gadjah Mada (BEM KM SV UGM)**. Dibangun menggunakan Next.js App Router, JavaScript modern, dan CSS Modules murni yang berakar pada Design System terstandarisasi.

---

## 📑 Daftar Isi

- [Arsitektur Informasi (IA)](#-arsitektur-informasi-ia)
- [Design System & Palet Warna](#-design-system--palet-warna)
- [Hierarki Tipografi (Headlines & Body)](#-hierarki-tipografi-headlines--body)
- [Panduan Solar Icons](#-panduan-solar-icons)
- [Katalog Komponen & Tampilan Visual Browser (HTML)](#-katalog-komponen--tampilan-visual-browser-html)
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

## 🎨 Design System & Palet Warna

> **Aturan Wajib:** Jangan menggunakan nilai HEX mentah (*hardcoded*) di dalam komponen. Selalu gunakan variabel CSS dari `src/app/globals.css`.

### 1. Palet Warna Utama (Tampilan Visual Langsung)

#### A. Primary (Biru Brand)
| Warna Visual | Nama Token | Variabel CSS | Nilai Hex | Peruntukan Utama |
| :---: | :--- | :--- | :--- | :--- |
| ![#174DDA](https://img.shields.io/badge/-%23174DDA-174DDA?style=for-the-badge) | Primary 400 | `--primary-400` | `#174DDA` | Warna Brand utama BEM, Button Primary, Tautan aktif |
| ![#103BBB](https://img.shields.io/badge/-%23103BBB-103BBB?style=for-the-badge) | Primary 500 | `--primary-500` | `#103BBB` | Efek Hover button primary, penutup parallax hero |
| ![#0B2B9C](https://img.shields.io/badge/-%230B2B9C-0B2B9C?style=for-the-badge) | Primary 600 | `--primary-600` | `#0B2B9C` | Efek Active (saat diklik), teks button secondary |
| ![#709CF3](https://img.shields.io/badge/-%23709CF3-709CF3?style=for-the-badge) | Primary 300 | `--primary-300` | `#709CF3` | Aksen ilustrasi & border fokus |
| ![#CFE1FD](https://img.shields.io/badge/-%23CFE1FD-CFE1FD?style=for-the-badge) | Primary 100 | `--primary-100` | `#CFE1FD` | Background badge / button secondary |

#### B. Secondary (Aksen Oranye / Kuning)
| Warna Visual | Nama Token | Variabel CSS | Nilai Hex | Peruntukan Utama |
| :---: | :--- | :--- | :--- | :--- |
| ![#D68200](https://img.shields.io/badge/-%23D68200-D68200?style=for-the-badge) | Secondary 500 | `--secondary-500` | `#D68200` | Teks chip kategori berita, aksen highlight |
| ![#FEE1A0](https://img.shields.io/badge/-%23FEE1A0-FEE1A0?style=for-the-badge) | Secondary 200 | `--secondary-200` | `#FEE1A0` | State hover chip tag/kategori |
| ![#FFF3CF](https://img.shields.io/badge/-%23FFF3CF-FFF3CF?style=for-the-badge) | Secondary 100 | `--secondary-100` | `#FFF3CF` | Background standar Chip kategori/kementerian |

#### C. Neutral (Teks, Permukaan, & Border)
| Warna Visual | Nama Token | Variabel CSS | Nilai Hex | Peruntukan Utama |
| :---: | :--- | :--- | :--- | :--- |
| ![#2B4774](https://img.shields.io/badge/-%232B4774-2B4774?style=for-the-badge) | Neutral 1000 | `--neutral-1000` | `#2B4774` | Teks judul utama (Headings `H-1` s/d `H-7`) |
| ![#475F8C](https://img.shields.io/badge/-%23475F8C-475F8C?style=for-the-badge) | Neutral 900 | `--neutral-900` | `#475F8C` | Teks body paragraf, tautan menu biasa |
| ![#7085AE](https://img.shields.io/badge/-%237085AE-7085AE?style=for-the-badge) | Neutral 800 | `--neutral-800` | `#7085AE` | Subtitle hero, deskripsi singkat, teks sekunder |
| ![#E0E5F2](https://img.shields.io/badge/-%23E0E5F2-E0E5F2?style=for-the-badge) | Neutral 600 | `--neutral-600` | `#E0E5F2` | Garis batas (border) kartu & button outline |
| ![#F6F8FD](https://img.shields.io/badge/-%23F6F8FD-F6F8FD?style=for-the-badge) | Neutral 300 | `--neutral-300` | `#F6F8FD` | Latar belakang surface kartu & container halus |
| ![#FFFFFF](https://img.shields.io/badge/-%23FFFFFF-FFFFFF?style=for-the-badge&logoColor=000000) | Neutral 100 | `--neutral-100` | `#FFFFFF` | Latar belakang halaman utama, navbar, kartu |

#### D. Status Colors (Feedback / Aksen)
| Warna Visual | Token | Nilai Hex | Peruntukan |
| :---: | :--- | :--- | :--- |
| ![#1FC16B](https://img.shields.io/badge/-%231FC16B-1FC16B?style=for-the-badge) | Green 200 | `#1FC16B` | Status berhasil, aktif, valid |
| ![#FB3748](https://img.shields.io/badge/-%23FB3748-FB3748?style=for-the-badge) | Red 100 | `#FB3748` | Status error, penting, bahaya |
| ![#FFDB43](https://img.shields.io/badge/-%23FFDB43-FFDB43?style=for-the-badge) | Yellow 100 | `#FFDB43` | Peringatan, notice, highlight |

---

## 🔤 Hierarki Tipografi (Headlines & Body)

Font standar project adalah **Plus Jakarta Sans**. Semua ukuran dan line-height telah dipetakan ke dalam token sistem:

### 1. Headings (Judul) — Bobot Bold (700)

<table>
  <thead>
    <tr>
      <th>Tingkat</th>
      <th>Token CSS</th>
      <th>Ukuran / Line-Height</th>
      <th>Pratinjau Tampilan Visual</th>
      <th>Contoh Penggunaan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>H-1</b></td>
      <td><code>--text-h1</code> / <code>--lh-h1</code></td>
      <td>68px / 102px</td>
      <td><h1 style="margin:0; font-size: 32px;">Judul Utama Terbesar</h1></td>
      <td>Hero banner display besar di desktop</td>
    </tr>
    <tr>
      <td><b>H-2</b></td>
      <td><code>--text-h2</code> / <code>--lh-h2</code></td>
      <td>56px / 84px</td>
      <td><h2 style="margin:0; font-size: 28px;">Judul Hero & Section Unggulan</h2></td>
      <td>Heading utama beranda BEM KM SV</td>
    </tr>
    <tr>
      <td><b>H-3</b></td>
      <td><code>--text-h3</code> / <code>--lh-h3</code></td>
      <td>46px / 69px</td>
      <td><h3 style="margin:0; font-size: 24px;">Judul Halaman (Page Title)</h3></td>
      <td>Halaman Vokasipedia, Kesekretariatan</td>
    </tr>
    <tr>
      <td><b>H-4</b></td>
      <td><code>--text-h4</code> / <code>--lh-h4</code></td>
      <td>38px / 57px</td>
      <td><h4 style="margin:0; font-size: 20px;">Sub-Section & Kategori Utama</h4></td>
      <td>Heading bagian dalam section konten</td>
    </tr>
    <tr>
      <td><b>H-5</b></td>
      <td><code>--text-h5</code> / <code>--lh-h5</code></td>
      <td>32px / 48px</td>
      <td><h5 style="margin:0; font-size: 18px;">Judul Dialog Modal & Card Besar</h5></td>
      <td>Section title pada layar tablet / kartu kabinet</td>
    </tr>
    <tr>
      <td><b>H-6</b></td>
      <td><code>--text-h6</code> / <code>--lh-h6</code></td>
      <td>26px / 39px</td>
      <td><h6 style="margin:0; font-size: 16px;">Judul Kartu Berita & Sub-Item</h6></td>
      <td>Judul artikel pada feed berita</td>
    </tr>
    <tr>
      <td><b>H-7</b></td>
      <td><code>--text-h7</code> / <code>--lh-h7</code></td>
      <td>22px / 33px</td>
      <td><b style="font-size: 15px;">Judul Card Kecil & Widget</b></td>
      <td>Header kolom footer, mini alert title</td>
    </tr>
  </tbody>
</table>

### 2. Body Text (Isi Teks Paragraf & Label)

<table>
  <thead>
    <tr>
      <th>Tingkat</th>
      <th>Token CSS</th>
      <th>Ukuran / Line-Height</th>
      <th>Bobot (Weight)</th>
      <th>Pratinjau Tampilan Visual</th>
      <th>Contoh Penggunaan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>B-1</b></td>
      <td><code>--text-b1</code> / <code>--lh-b1</code></td>
      <td>18px / 27px</td>
      <td>Medium (500)</td>
      <td><span style="font-size: 18px;">Paragraf lead pembuka atau pengantar hero banner</span></td>
      <td>Lead paragraph, sub-heading deskriptif</td>
    </tr>
    <tr>
      <td><b>B-2</b></td>
      <td><code>--text-b2</code> / <code>--lh-b2</code></td>
      <td>16px / 24px</td>
      <td>Regular (400)</td>
      <td><span style="font-size: 16px;">Teks dasar artikel, deskripsi umum kabinet, dan isi form</span></td>
      <td><b>Default Body Text</b> untuk seluruh website</td>
    </tr>
    <tr>
      <td><b>B-3</b></td>
      <td><code>--text-b3</code> / <code>--lh-b3</code></td>
      <td>14px / 21px</td>
      <td>Regular / Semi (600)</td>
      <td><span style="font-size: 14px;">Excerpt ringkasan berita, teks button, dan label chip</span></td>
      <td>Ringkasan artikel, teks Button, Chip pills</td>
    </tr>
    <tr>
      <td><b>B-4</b></td>
      <td><code>--text-b4</code> / <code>--lh-b4</code></td>
      <td>12px / 18px</td>
      <td>Regular (400)</td>
      <td><span style="font-size: 12px; color: #7085AE;">Tanggal publikasi, petunjuk input form, dan copyright</span></td>
      <td>Metadata tanggal, keterangan input helper</td>
    </tr>
    <tr>
      <td><b>B-5</b></td>
      <td><code>--text-b5</code> / <code>--lh-b5</code></td>
      <td>10px / 15px</td>
      <td>Regular (400)</td>
      <td><span style="font-size: 10px; color: #7085AE;">Badge status mikro dan teks disclaimer legal</span></td>
      <td>Micro-copy, caption foto kecil</td>
    </tr>
  </tbody>
</table>

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

## 📦 Katalog Komponen & Tampilan Visual Browser (HTML)

Berikut adalah contoh langsung bagaimana komponen di-render secara visual di browser beserta kode implementasinya.

---

### 1. Button — `src/components/ui/Button.jsx`

Komponen tombol multifungsi. Secara otomatis merender tag `<a>` jika memiliki prop `href`, atau tag `<button>` jika tidak ada `href`. Dilengkapi dengan transisi halus, micro-interaction scale, dan efek hover yang terpadu.

#### A. Tabel Varian & Pratinjau Tampilan Visual Langsung

<table>
  <thead>
    <tr>
      <th>Varian</th>
      <th>Tampilan Visual (Render HTML)</th>
      <th>Karakteristik Gaya</th>
      <th>Kode Penggunaan JSX</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Primary</b><br><i>(Default)</i></td>
      <td>
        <a href="#preview">
          <img src="https://img.shields.io/badge/%E2%86%97%20Layanan%20Aduan%20Vokasi-174DDA?style=for-the-badge&logoColor=white" alt="Button Primary" />
        </a>
      </td>
      <td>
        • Background: <code>#174DDA</code> (Biru Solid)<br>
        • Teks: Putih (<code>#FFFFFF</code>)<br>
        • Hover: <code>#103BBB</code> + Soft Shadow<br>
        • Active: Scale <code>0.98</code>
      </td>
      <td>
<pre lang="jsx">
&lt;Button
  href="/aduan-vokasi"
  icon={&lt;ArrowRightUpIcon size={20} /&gt;}
&gt;
  Layanan Aduan Vokasi
&lt;/Button&gt;
</pre>
      </td>
    </tr>
    <tr>
      <td><b>Outline</b></td>
      <td>
        <a href="#preview">
          <img src="https://img.shields.io/badge/Narahubung%20%26%20Media%20Partner-white?style=for-the-badge&labelColor=white&color=174DDA" alt="Button Outline" />
        </a>
      </td>
      <td>
        • Background: Putih (<code>#FFFFFF</code>)<br>
        • Border: 1px Solid Neutral 600<br>
        • Teks: Biru (<code>#174DDA</code>)<br>
        • Hover: Surface Neutral 300
      </td>
      <td>
<pre lang="jsx">
&lt;Button
  href={siteConfig.whatsappUrl}
  target="_blank"
  variant="outline"
&gt;
  Narahubung &amp; Media Partner
&lt;/Button&gt;
</pre>
      </td>
    </tr>
    <tr>
      <td><b>Secondary</b></td>
      <td>
        <a href="#preview">
          <img src="https://img.shields.io/badge/%F0%9F%93%84%20Unduh%20Dokumen-CFE1FD?style=for-the-badge&labelColor=CFE1FD&color=0B2B9C" alt="Button Secondary" />
        </a>
      </td>
      <td>
        • Background: Tinted Biru Muda <code>#CFE1FD</code><br>
        • Teks &amp; Ikon: Biru Tua <code>#0B2B9C</code><br>
        • Hover: <code>#A1C1FB</code>
      </td>
      <td>
<pre lang="jsx">
&lt;Button
  variant="secondary"
  icon={&lt;DocumentTextIcon size={20} /&gt;}
&gt;
  Unduh Dokumen
&lt;/Button&gt;
</pre>
      </td>
    </tr>
    <tr>
      <td><b>White</b></td>
      <td>
        <a href="#preview">
          <img src="https://img.shields.io/badge/Jelajahi%20Fitur-FFFFFF?style=for-the-badge&labelColor=FFFFFF&color=174DDA" alt="Button White" />
        </a>
      </td>
      <td>
        • Background: Putih Bersih (<code>#FFFFFF</code>)<br>
        • Teks: Biru (<code>#174DDA</code>)<br>
        • Cocok di atas latar belakang biru tua
      </td>
      <td>
<pre lang="jsx">
&lt;Button variant="white"&gt;
  Jelajahi Fitur
&lt;/Button&gt;
</pre>
      </td>
    </tr>
  </tbody>
</table>

#### B. Ukuran Tombol (`size`)
<table>
  <thead>
    <tr>
      <th>Ukuran</th>
      <th>Pratinjau Ukuran</th>
      <th>Padding / Font</th>
      <th>Contoh Penggunaan</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>sm</code></td>
      <td><img src="https://img.shields.io/badge/Tombol%20Kecil-174DDA?style=flat&logoColor=white" /></td>
      <td>6px 14px (Font 14px)</td>
      <td><code>&lt;Button size="sm"&gt;Kecil&lt;/Button&gt;</code></td>
    </tr>
    <tr>
      <td><code>md</code> (Default)</td>
      <td><img src="https://img.shields.io/badge/Tombol%20Standar-174DDA?style=flat-square&logoColor=white" /></td>
      <td>10px 20px (Font 16px)</td>
      <td><code>&lt;Button size="md"&gt;Standar&lt;/Button&gt;</code></td>
    </tr>
    <tr>
      <td><code>lg</code></td>
      <td><img src="https://img.shields.io/badge/Tombol%20Besar-174DDA?style=for-the-badge&logoColor=white" /></td>
      <td>14px 28px (Font 18px)</td>
      <td><code>&lt;Button size="lg"&gt;Besar&lt;/Button&gt;</code></td>
    </tr>
  </tbody>
</table>

---

### 2. Chip — `src/components/ui/Chip.jsx`

Badge berbentuk kapsul (*pill*) untuk menampilkan status, kementerian, biro, atau kategori berita.

<table>
  <thead>
    <tr>
      <th>Varian</th>
      <th>Tampilan Visual (Render HTML)</th>
      <th>Token Warna</th>
      <th>Kode Penggunaan JSX</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><b>warning</b><br><i>(Default)</i></td>
      <td>
        <img src="https://img.shields.io/badge/Kementerian%20Sosial%20Masyarakat-FFF3CF?style=flat-square&color=D68200&labelColor=FFF3CF" alt="Chip Warning" />
      </td>
      <td>
        • Background: <code>#FFF3CF</code> (Secondary-100)<br>
        • Teks: <code>#D68200</code> (Secondary-500)
      </td>
      <td>
<pre lang="jsx">
&lt;Chip&gt;
  Kementerian Sosial Masyarakat
&lt;/Chip&gt;
</pre>
      </td>
    </tr>
    <tr>
      <td><b>primary</b></td>
      <td>
        <img src="https://img.shields.io/badge/%F0%9F%93%B0%20Vokasipedia-CFE1FD?style=flat-square&color=0B2B9C&labelColor=CFE1FD" alt="Chip Primary" />
      </td>
      <td>
        • Background: <code>#CFE1FD</code> (Primary-100)<br>
        • Teks: <code>#0B2B9C</code> (Primary-600)
      </td>
      <td>
<pre lang="jsx">
&lt;Chip variant="primary"&gt;
  Vokasipedia
&lt;/Chip&gt;
</pre>
      </td>
    </tr>
    <tr>
      <td><b>outline</b></td>
      <td>
        <img src="https://img.shields.io/badge/Arsip%20Kabinet%202025-FAFCFE?style=flat-square&color=475F8C&labelColor=FAFCFE" alt="Chip Outline" />
      </td>
      <td>
        • Border: 1px Solid Neutral-500<br>
        • Teks: <code>#475F8C</code> (Neutral-900)
      </td>
      <td>
<pre lang="jsx">
&lt;Chip variant="outline"&gt;
  Arsip Kabinet 2025
&lt;/Chip&gt;
</pre>
      </td>
    </tr>
  </tbody>
</table>

---

### 3. Article Card — `src/components/ui/ArticleCard.jsx`

Kartu artikel responsif untuk menampilkan feed berita, opini, dan artikel Vokasipedia.

#### Pratinjau Tampilan Visual Kartu (Render HTML Langsung):

<table>
  <tr>
    <td width="380" style="background-color: #ffffff; border-radius: 16px; padding: 16px; box-shadow: 0 16px 32px -12px rgba(88, 92, 95, 0.1);">
      <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80" width="100%" style="border-radius: 12px;" alt="Kegiatan PORVO" /><br><br>
      <img src="https://img.shields.io/badge/Kementerian%20Sosial%20Masyarakat-FFF3CF?style=flat-square&color=D68200&labelColor=FFF3CF" />
      <img src="https://img.shields.io/badge/Biro%20PSDM-FFF3CF?style=flat-square&color=D68200&labelColor=FFF3CF" />
      <h3 style="color: #2B4774; margin: 12px 0 6px 0;">Pekan Olahraga Vokasi dan Vocational Art (PORVO)</h3>
      <p style="color: #475F8C; font-size: 14px; line-height: 1.5; margin: 0 0 16px 0;">
        Pekan olahraga dan seni mahasiswa vokasi resmi dibuka dengan penuh kemeriahan dan antusiasme tinggi seluruh departemen...
      </p>
      <table width="100%">
        <tr>
          <td align="right">
            <a href="#selengkapnya" style="color: #174DDA; font-weight: 700; text-decoration: none;">
              Selengkapnya ↗
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>

#### Kode Penggunaan JSX:
```jsx
import ArticleCard from "@/components/ui/ArticleCard";

<ArticleCard
  image="/images/news/porvo.jpg"
  imageAlt="Kegiatan PORVO"
  chips={["Kementerian Sosial Masyarakat", "Biro Pengembangan Sumber Daya"]}
  title="Pekan Olahraga Vokasi dan Vocational Art (PORVO)"
  excerpt="Pekan olahraga dan seni mahasiswa vokasi resmi dibuka dengan penuh kemeriahan dan antusiasme tinggi seluruh departemen..."
  href="/vokasipedia/pekan-olahraga-vokasi"
/>
```

---

### 4. Navbar — `src/components/layout/Navbar.jsx`

Header navigasi yang responsif, *sticky*, dan memusatkan seluruh menu tepat di titik tengah horizontal layar.

#### Pratinjau Tampilan Visual Navbar (Render HTML):

<table width="100%" style="background-color: #ffffff; border-bottom: 1px solid #E0E5F2; padding: 12px 24px;">
  <tr>
    <td align="left" width="28%">
      <b>🏛️ BEM KM SV UGM</b><br>
      <small style="color: #7085AE;">Sekolah Vokasi Universitas Gadjah Mada</small>
    </td>
    <td align="center" width="44%">
      <span style="color: #174DDA; font-weight: 700;"><u>Beranda</u></span> &nbsp;&nbsp;
      <span style="color: #475F8C;">Kesekretariatan</span> &nbsp;&nbsp;
      <span style="color: #475F8C;">Vokasipedia</span> &nbsp;&nbsp;
      <span style="color: #475F8C;">Uni-Vokasi</span> &nbsp;&nbsp;
      <span style="color: #475F8C;">Aduan Vokasi</span> &nbsp;&nbsp;
      <span style="color: #475F8C;">Galeri</span>
    </td>
    <td align="right" width="28%">
      <a href="#narahubung">
        <img src="https://img.shields.io/badge/%F0%9F%93%9E%20Narahubung-174DDA?style=flat-square&logoColor=white" alt="Button Narahubung" />
      </a>
    </td>
  </tr>
</table>

- **Pusat Navigasi:** Menu tautan utama selalu terpusat secara matematis di tengah layar (`position: absolute; left: 50%; transform: translate(-50%, -50%)`).
- **Data Dinamis:** Daftar tautan dikelola di `src/config/navigation.js`.
- **Mobile Menu:** Otomatis beralih ke mobile drawer menu pada layar tablet/ponsel (≤ 1080px).

---

### 5. Footer — `src/components/layout/Footer.jsx`

Footer komprehensif yang menampilkan identitas resmi BEM, kontak, dan tautan sitemap navigasi.

#### Pratinjau Tampilan Visual Footer (Render HTML):

<table width="100%" style="background-color: #FAFCFE; border-top: 1px solid #E0E5F2; padding: 24px;">
  <tr>
    <td width="35%" valign="top">
      <h4 style="color: #2B4774; margin: 0 0 8px 0;">Badan Eksekutif Mahasiswa</h4>
      <p style="color: #7085AE; font-size: 13px; margin: 0 0 12px 0;">
        Keluarga Mahasiswa Sekolah Vokasi<br>Universitas Gadjah Mada
      </p>
      <p style="font-size: 13px; color: #174DDA;">✉️ bem.sv@ugm.ac.id</p>
      <p>
        <img src="https://img.shields.io/badge/YouTube-FF0000?style=flat-square&logo=youtube&logoColor=white" />
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white" />
        <img src="https://img.shields.io/badge/TikTok-000000?style=flat-square&logo=tiktok&logoColor=white" />
      </p>
    </td>
    <td width="20%" valign="top">
      <b style="color: #2B4774;">Tautan Cepat</b><br><br>
      <small style="color: #475F8C; line-height: 2;">
        • Beranda<br>
        • Kesekretariatan<br>
        • Vokasipedia<br>
        • Galeri Kegiatan
      </small>
    </td>
    <td width="22%" valign="top">
      <b style="color: #2B4774;">Layanan Mahasiswa</b><br><br>
      <small style="color: #475F8C; line-height: 2;">
        • Aduan Vokasi<br>
        • Survei Kepuasan<br>
        • Media Partner
      </small>
    </td>
    <td width="23%" valign="top">
      <b style="color: #2B4774;">Keluarga Mahasiswa</b><br><br>
      <small style="color: #475F8C; line-height: 2;">
        • KMD Departemen TEDI<br>
        • KMD Departemen DBS<br>
        • Badan Semi Otonom (BSO)
      </small>
    </td>
  </tr>
</table>

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
