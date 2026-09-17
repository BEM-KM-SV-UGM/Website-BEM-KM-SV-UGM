# Information Architecture (IA)

Dokumen ini menjelaskan struktur informasi website BEM KM SV: route,
hubungan antar halaman, dan pembagian jenis halaman.

## Peta Route

```text
/
├── /kementerian
│   └── /kementerian/[slug]
├── /visi-misi
├── /informasi
│   └── /informasi/[slug]
├── /aspirasi
├── /faq
├── /galeri
├── /media-partner
└── /admin
    ├── /admin/login
    ├── /admin/informasi
    ├── /admin/galeri
    ├── /admin/kementerian
    └── /admin/aspirasi
```

## Halaman Publik

| Route | File | Deskripsi |
|---|---|---|
| `/` | `src/app/page.js` | Homepage: hero, pengenalan BEM, preview informasi dan galeri. |
| `/kementerian` | `src/app/kementerian/page.js` | Daftar kementerian. |
| `/kementerian/[slug]` | `src/app/kementerian/[slug]/page.js` | Detail satu kementerian. |
| `/visi-misi` | `src/app/visi-misi/page.js` | Visi dan misi BEM. |
| `/informasi` | `src/app/informasi/page.js` | Daftar informasi dengan search, filter kategori, dan pagination. |
| `/informasi/[slug]` | `src/app/informasi/[slug]/page.js` | Detail satu informasi. |
| `/faq` | `src/app/faq/page.js` | Pertanyaan yang sering diajukan. |
| `/galeri` | `src/app/galeri/page.js` | Album dan dokumentasi kegiatan. |
| `/media-partner` | `src/app/media-partner/page.js` | Informasi dan formulir kerja sama media partner. |

## Halaman Interactive/Action

| Route | Deskripsi |
|---|---|
| `/aspirasi` | Formulir pengiriman aspirasi, cek status via nomor tiket, dan riwayat aspirasi terbaru. |

## Halaman Admin

Area admin terpisah dari website publik dan memiliki `layout.js` sendiri
di `src/app/admin/layout.js`.

| Route | Deskripsi |
|---|---|
| `/admin` | Dashboard admin dengan menu pengelolaan. |
| `/admin/login` | Login admin. |
| `/admin/informasi` | Kelola informasi (belum diimplementasikan). |
| `/admin/galeri` | Kelola galeri (belum diimplementasikan). |
| `/admin/kementerian` | Kelola kementerian (belum diimplementasikan). |
| `/admin/aspirasi` | Kelola aspirasi (belum diimplementasikan). |

## Hubungan Antar Halaman

- Navbar (dari `src/config/navigation.js`) menghubungkan semua halaman publik.
- Homepage menampilkan preview informasi yang menuju `/informasi/[slug]`
  dan preview galeri yang menuju `/galeri`.
- Daftar kementerian menuju `/kementerian/[slug]`.
- Homepage mengarahkan user ke `/aspirasi` untuk menyampaikan aspirasi.
- Semua halaman admin dijangkau dari dashboard `/admin`.
