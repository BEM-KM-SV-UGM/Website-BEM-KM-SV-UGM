# Feature Tasks

Area kerja untuk setiap feature. Task per halaman ada di `tasks/pages/`
dan task per component ada di `tasks/components/`.

| Feature | Folder | Component Utama | Status | PIC |
|---|---|---|---|---|
| Home | `src/features/home/` | HomePage, Hero, About, FeaturedInformation, FeaturedGallery | TODO | - |
| Kementerian | `src/features/kementerian/` | MinistryCard, MinistryList, MinistryDetail, MinistryStructure | TODO | - |
| Visi & Misi | `src/features/visi-misi/` | VisiMisiContent | TODO | - |
| Informasi | `src/features/informasi/` | InformationCard, InformationList, InformationDetail, InformationFilter | TODO | - |
| Aspirasi | `src/features/aspirasi/` | AspirationForm, AspirationStatus, AspirationHistory | TODO | - |
| FAQ | `src/features/faq/` | FAQAccordion | TODO | - |
| Galeri | `src/features/galeri/` | GalleryCard, GalleryGrid, GalleryViewer | TODO | - |
| Media Partner | `src/features/media-partner/` | MediaPartnerInfo, MediaPartnerForm | TODO | - |

## Catatan

- Semua feature sudah memiliki placeholder component yang valid dan bisa dijalankan.
- Dummy data ada di `src/features/[feature]/data/` dan akan diganti service API
  di `src/features/[feature]/services/` ketika backend tersedia.
- Buat file `FEATURE-XXX-nama-pekerjaan.md` di folder ini untuk pekerjaan besar
  yang tidak tercakup oleh satu halaman saja.
