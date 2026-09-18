# Information Architecture

## 1. Global Navigation

Navbar menjadi navigasi utama yang tersedia pada seluruh halaman website.

### Navbar Structure

- **Logo**
  - Logo BEM
  - Teks: Badan Eksekutif Mahasiswa

- **Navigation Menu**
  - Beranda
  - Kesekretariatan
  - Vokasipedia
  - Uni-Vokasi
  - Aduan Vokasi
  - Galeri

- **Narahubung**
  - Button Narahubung
  - Mengarahkan pengguna ke WhatsApp narahubung
  - Untuk sementara menggunakan dummy WhatsApp link

---

# 2. Beranda

**Type:** Static

Beranda merupakan halaman utama website yang berisi beberapa section informasi mengenai BEM.

### Structure

- Hero Section
- Tentang BEM
- Informasi / Highlight
- Section pendukung lainnya
- Footer

---

# 3. Kesekretariatan

**Type:** Dynamic pada daftar kabinet  
**Detail kabinet:** Static per kabinet

Halaman Kesekretariatan berisi informasi mengenai kabinet-kabinet BEM yang pernah berjalan dari tahun ke tahun.

### Structure

- Daftar Kabinet
  - Kabinet Tahun 2026
  - Kabinet Tahun 2025
  - Kabinet Tahun 2024
  - dan seterusnya
- Detail Kabinet
  - Informasi kabinet
  - Visi dan misi
  - Struktur kepengurusan
  - Informasi terkait kabinet

### Flow

`Kesekretariatan → Daftar Kabinet → Detail Kabinet`

> Daftar kabinet bersifat dinamis agar kabinet baru dapat ditambahkan tanpa mengubah struktur halaman.  
> Halaman detail kabinet bersifat static berdasarkan data kabinet yang tersedia.

---

# 4. Vokasipedia

**Type:** Dynamic

Vokasipedia merupakan pusat artikel dan informasi yang dibuat oleh BEM.

### Structure

- Daftar Artikel
  - Artikel terbaru
  - Artikel berdasarkan kategori
  - Search / filter artikel
- Detail Artikel
  - Judul
  - Thumbnail
  - Penulis
  - Tanggal publikasi
  - Isi artikel
  - Artikel terkait

### Flow

`Vokasipedia → Daftar Artikel → Detail Artikel`

> Konten Vokasipedia bersifat dinamis karena artikel dapat ditambahkan, diperbarui, dan dihapus melalui sistem pengelolaan konten.

---

# 5. Uni-Vokasi

**Type:** Static

Uni-Vokasi berisi informasi mengenai organisasi mahasiswa yang berada di lingkungan Sekolah Vokasi UGM di bawah naungan BEM.

### Structure

- Keluarga Mahasiswa
  - Daftar Keluarga Mahasiswa
  - Informasi singkat masing-masing organisasi
- Badan Semi Otonom (BSO)
  - Daftar BSO
  - Informasi singkat masing-masing BSO

> Seluruh konten Uni-Vokasi bersifat static dan diperbarui secara manual apabila terdapat perubahan data.

---

# 6. Aduan Vokasi

**Type:** Static

Aduan Vokasi menjadi halaman akses layanan aspirasi dan evaluasi mahasiswa.

### Structure

- Survei Kepuasan
  - Deskripsi singkat
  - Button / Link Survei
- Aduan Vokasi
  - Deskripsi singkat
  - Button / Link Aduan

### Interaction

Pengguna memilih layanan melalui dropdown:

`Aduan Vokasi → Pilih Layanan → Akses Form`

> Halaman dan pilihan layanan bersifat static. Form survei dan aduan dapat diarahkan ke layanan eksternal.

---

# 7. Galeri

**Type:** Dynamic

Galeri berisi dokumentasi foto berbagai kegiatan BEM.

### Structure

- Gallery Grid
- Foto kegiatan
- Detail / Preview Foto
- Filter berdasarkan kegiatan atau tahun (opsional)

> Data foto bersifat dinamis agar dokumentasi kegiatan baru dapat ditambahkan secara berkala.

---

# 8. Narahubung

**Type:** Static / External Link

Narahubung bukan merupakan halaman khusus, melainkan button pada navbar.

### Flow

`Narahubung → WhatsApp`

Button akan mengarahkan pengguna langsung menuju WhatsApp narahubung terkait.

Untuk tahap awal, URL WhatsApp dapat menggunakan **dummy link**.

---

# 9. Sitemap

```text
Website BEM
│
├── Beranda [Static]
│   ├── Hero
│   ├── Tentang BEM
│   └── Informasi / Highlight
│
├── Kesekretariatan
│   ├── Daftar Kabinet [Dynamic]
│   │   ├── Kabinet 2026
│   │   ├── Kabinet 2025
│   │   └── Kabinet ...
│   │
│   └── Detail Kabinet [Static]
│       ├── Informasi Kabinet
│       ├── Visi & Misi
│       └── Struktur Kepengurusan
│
├── Vokasipedia [Dynamic]
│   ├── Daftar Artikel
│   └── Detail Artikel [Dynamic]
│
├── Uni-Vokasi [Static]
│   ├── Keluarga Mahasiswa
│   └── Badan Semi Otonom (BSO)
│
├── Aduan Vokasi [Static]
│   ├── Survei Kepuasan
│   └── Aduan Vokasi
│
├── Galeri [Dynamic]
│   └── Dokumentasi Kegiatan
│
└── Narahubung
    └── WhatsApp [External Link]
```

## Content Type Overview

| Section | Content Type | Keterangan |
|---|---|---|
| Beranda | Static | Homepage dan section informasi |
| Kesekretariatan - Daftar Kabinet | **Dynamic** | Kabinet dapat ditambahkan dari tahun ke tahun |
| Kesekretariatan - Detail Kabinet | Static | Halaman informasi masing-masing kabinet |
| Vokasipedia | **Dynamic** | Artikel dapat ditambah dan dikelola |
| Uni-Vokasi | Static | Data KM dan BSO |
| Aduan Vokasi | Static | Akses survei dan aduan |
| Galeri | **Dynamic** | Dokumentasi foto dapat ditambahkan |
| Narahubung | Static | Link menuju WhatsApp |
