# Frontend Architecture & Folder Structure
## BEM Website - Next.js JavaScript

> Dokumen ini adalah instruksi untuk AI/developer yang bertugas menyiapkan struktur awal frontend.
> Gunakan **Next.js App Router + JavaScript + JSX**. Jangan menggunakan TypeScript.

---

# 1. Tujuan

Buat fondasi frontend website BEM yang:

- mudah dipahami oleh developer pemula React/Next.js;
- tetap memiliki struktur yang rapi dan scalable;
- mudah dibagi menjadi banyak task untuk beberapa anggota tim;
- setiap fitur memiliki area kerja yang jelas;
- halaman, component, business logic, API, dan asset tidak tercampur;
- mudah dikerjakan secara paralel menggunakan Git branch;
- memiliki placeholder yang jelas untuk bagian yang belum dikerjakan.

Project ini akan dikembangkan oleh beberapa anggota tim. Karena sebagian developer belum menguasai TypeScript, seluruh source code harus menggunakan JavaScript.

---

# 2. Teknologi

Gunakan:

- Next.js
- React
- JavaScript
- JSX
- CSS sesuai kebutuhan project
- Next.js App Router

Jangan gunakan:

- TypeScript
- file `.ts`
- file `.tsx`

Gunakan:

```text
.js   → logic, page, config, utility
.jsx  → React component
```

Contoh:

```text
page.js
layout.js
navigation.js

Navbar.jsx
Button.jsx
Hero.jsx
```

---

# 3. Prinsip Arsitektur

Gunakan pembagian berikut:

```text
ROUTE
  ↓
src/app/

FEATURE / BUSINESS LOGIC
  ↓
src/features/

REUSABLE UI
  ↓
src/components/

GLOBAL LOGIC / UTILITIES
  ↓
src/hooks/
src/lib/
src/config/

TASK / PEMBAGIAN PEKERJAAN
  ↓
tasks/

DOKUMENTASI
  ↓
docs/
```

## Aturan penting

### `app/`
Hanya menangani routing dan entry point halaman.

Jangan menaruh seluruh UI halaman langsung di `page.js`.

### `features/`
Tempat component dan logic yang spesifik terhadap suatu fitur.

### `components/`
Tempat component yang digunakan oleh banyak halaman/fitur.

### `hooks/`
Custom React hooks yang bersifat reusable.

### `lib/`
Utility, API client, helper, dan konfigurasi teknis.

### `tasks/`
Dokumentasi pekerjaan yang bisa diberikan kepada anggota tim.

### `docs/`
Dokumentasi arsitektur dan aturan development.

---

# 4. Struktur Folder Utama

Buat struktur berikut:

```text
project/
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── kementerian/
│   │   ├── kegiatan/
│   │   ├── galeri/
│   │   └── news/
│   │
│   ├── icons/
│   └── fonts/
│
├── src/
│   │
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   ├── globals.css
│   │   │
│   │   ├── kementerian/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   ├── visi-misi/
│   │   │   └── page.js
│   │   │
│   │   ├── informasi/
│   │   │   ├── page.js
│   │   │   └── [slug]/
│   │   │       └── page.js
│   │   │
│   │   ├── aspirasi/
│   │   │   └── page.js
│   │   │
│   │   ├── faq/
│   │   │   └── page.js
│   │   │
│   │   ├── galeri/
│   │   │   └── page.js
│   │   │
│   │   ├── media-partner/
│   │   │   └── page.js
│   │   │
│   │   └── admin/
│   │       ├── page.js
│   │       ├── login/
│   │       │   └── page.js
│   │       ├── informasi/
│   │       ├── galeri/
│   │       ├── kementerian/
│   │       └── aspirasi/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── shared/
│   │
│   ├── features/
│   │   ├── home/
│   │   ├── kementerian/
│   │   ├── visi-misi/
│   │   ├── informasi/
│   │   ├── aspirasi/
│   │   ├── faq/
│   │   ├── galeri/
│   │   └── media-partner/
│   │
│   ├── hooks/
│   ├── lib/
│   └── config/
│
├── tasks/
│   ├── README.md
│   ├── BACKLOG.md
│   ├── pages/
│   ├── components/
│   └── features/
│
├── docs/
│   ├── README.md
│   ├── IA.md
│   ├── ARCHITECTURE.md
│   ├── COMPONENTS.md
│   ├── CONTRIBUTING.md
│   └── OWNERS.md
│
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.mjs
├── package.json
└── README.md
```

---

# 5. Penjelasan `public/`

Folder `public/` berisi asset statis yang dapat diakses langsung oleh browser.

```text
public/
├── images/
├── icons/
└── fonts/
```

## `public/images/hero/`

Asset untuk hero/banner.

Contoh:

```text
hero/
├── homepage-hero.webp
└── vision-hero.webp
```

## `public/images/kementerian/`

Foto atau asset kementerian.

## `public/images/kegiatan/`

Asset kegiatan BEM.

## `public/images/galeri/`

Foto galeri.

## `public/images/news/`

Thumbnail informasi/news.

## `public/icons/`

Icon yang digunakan secara statis.

## `public/fonts/`

Font lokal jika project menggunakan font yang disimpan sendiri.

---

# 6. Penjelasan `src/app/`

`src/app/` adalah routing utama Next.js App Router.

Setiap folder route mewakili URL.

Contoh:

```text
app/
└── informasi/
    └── page.js
```

berarti:

```text
/informasi
```

---

## `app/layout.js`

Root layout seluruh aplikasi.

Digunakan untuk:

- global provider;
- metadata;
- font;
- struktur HTML;
- global layout.

Jangan memasukkan UI halaman tertentu ke sini.

---

## `app/page.js`

Homepage:

```text
/
```

Page ini sebaiknya hanya menjadi entry point dan memanggil component dari feature home.

Contoh:

```jsx
import HomePage from "@/features/home/components/HomePage";

export default function Page() {
  return <HomePage />;
}
```

---

## `app/globals.css`

Global CSS.

Gunakan untuk:

- CSS reset;
- CSS variable;
- global typography;
- global utility yang memang diperlukan.

Jangan memasukkan style khusus satu component di sini jika bisa menggunakan CSS module atau styling component.

---

# 7. Route Website

Buat route sesuai IA website.

## Homepage

```text
/
```

File:

```text
src/app/page.js
```

## Kementerian

```text
/kementerian
/kementerian/[slug]
```

File:

```text
src/app/kementerian/page.js
src/app/kementerian/[slug]/page.js
```

`[slug]` digunakan untuk detail kementerian.

---

## Visi & Misi

```text
/visi-misi
```

---

## Informasi

```text
/informasi
/informasi/[slug]
```

Halaman list:

```text
/informasi
```

Halaman detail:

```text
/informasi/[slug]
```

---

## Aspirasi

```text
/aspirasi
```

Halaman ini bersifat interactive/action.

---

## FAQ

```text
/faq
```

---

## Galeri

```text
/galeri
```

---

## Media Partner

```text
/media-partner
```

---

# 8. Admin

Admin memiliki area sendiri:

```text
/admin
/admin/login
/admin/informasi
/admin/galeri
/admin/kementerian
/admin/aspirasi
```

Area admin harus dipisahkan secara jelas dari public website.

Gunakan warna/visual/admin layout yang berbeda hanya jika sudah ditentukan oleh desain.

Jangan mencampur component admin dengan component public jika component tersebut memang spesifik admin.

---

# 9. `src/components/`

Folder ini berisi component reusable.

Bagi menjadi:

```text
components/
├── ui/
├── layout/
└── shared/
```

---

# 10. `components/ui/`

Berisi component UI generik.

Contoh:

```text
ui/
├── Button.jsx
├── Input.jsx
├── Select.jsx
├── Modal.jsx
├── Card.jsx
├── Badge.jsx
├── Accordion.jsx
├── Table.jsx
├── Pagination.jsx
└── Skeleton.jsx
```

Component di sini tidak boleh bergantung pada fitur tertentu.

Contoh Button:

```jsx
export default function Button({ children, ...props }) {
  return (
    <button {...props}>
      {children}
    </button>
  );
}
```

Jangan membuat:

```text
ui/AspirationButton.jsx
```

karena itu sudah spesifik terhadap feature.

---

# 11. `components/layout/`

Berisi component layout global:

```text
layout/
├── Navbar.jsx
├── Footer.jsx
├── MobileMenu.jsx
└── PageHeader.jsx
```

Component di sini dapat digunakan oleh banyak halaman.

---

# 12. `components/shared/`

Berisi component yang reusable tetapi bukan UI primitive.

Contoh:

```text
shared/
├── Loading.jsx
├── EmptyState.jsx
├── ErrorState.jsx
└── SectionTitle.jsx
```

---

# 13. `src/features/`

Ini adalah bagian utama untuk pengembangan fitur.

Struktur:

```text
features/
├── home/
├── kementerian/
├── visi-misi/
├── informasi/
├── aspirasi/
├── faq/
├── galeri/
└── media-partner/
```

Setiap feature memiliki area kerja sendiri.

---

# 14. Feature Home

```text
features/home/
├── components/
│   ├── HomePage.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── FeaturedInformation.jsx
│   └── FeaturedGallery.jsx
└── data/
```

### `HomePage.jsx`

Component utama homepage.

### `Hero.jsx`

Hero section.

### `About.jsx`

Section pengenalan BEM.

### `FeaturedInformation.jsx`

Preview informasi.

### `FeaturedGallery.jsx`

Preview galeri.

---

# 15. Feature Kementerian

```text
features/kementerian/
├── components/
│   ├── MinistryCard.jsx
│   ├── MinistryList.jsx
│   ├── MinistryDetail.jsx
│   └── MinistryStructure.jsx
├── services/
└── data/
```

Component hanya berisi kebutuhan kementerian.

---

# 16. Feature Informasi

```text
features/informasi/
├── components/
│   ├── InformationCard.jsx
│   ├── InformationList.jsx
│   ├── InformationDetail.jsx
│   └── InformationFilter.jsx
├── services/
└── data/
```

Contoh fungsi:

- menampilkan daftar informasi;
- filtering;
- search;
- detail informasi;
- pagination.

---

# 17. Feature Aspirasi

```text
features/aspirasi/
├── components/
│   ├── AspirationForm.jsx
│   ├── AspirationStatus.jsx
│   └── AspirationHistory.jsx
├── services/
└── data/
```

Feature ini merupakan interactive/action feature.

---

# 18. Feature FAQ

```text
features/faq/
└── components/
    └── FAQAccordion.jsx
```

---

# 19. Feature Galeri

```text
features/galeri/
├── components/
│   ├── GalleryCard.jsx
│   ├── GalleryGrid.jsx
│   └── GalleryViewer.jsx
└── data/
```

---

# 20. Feature Media Partner

```text
features/media-partner/
├── components/
│   ├── MediaPartnerInfo.jsx
│   └── MediaPartnerForm.jsx
└── data/
```

Sesuaikan component dengan requirement final IA/Figma.

---

# 21. `hooks/`

Untuk custom React hooks yang digunakan lintas feature.

Contoh:

```text
hooks/
├── useDebounce.js
├── useModal.js
└── usePagination.js
```

Jangan memasukkan hook yang hanya digunakan satu feature.

Jika hanya digunakan aspirasi:

```text
features/aspirasi/hooks/
```

lebih baik daripada:

```text
hooks/
```

---

# 22. `lib/`

Untuk utility teknis dan API.

Contoh:

```text
lib/
├── api/
│   ├── client.js
│   └── endpoints.js
├── utils/
│   └── format.js
└── constants/
    └── index.js
```

## `api/client.js`

Tempat konfigurasi HTTP/API client.

## `api/endpoints.js`

Daftar endpoint API jika dibutuhkan.

Jangan menaruh API URL langsung berulang-ulang di component.

Gunakan environment variable.

---

# 23. `config/`

Konfigurasi aplikasi.

```text
config/
├── navigation.js
└── site.js
```

## `navigation.js`

Daftar menu website.

Contoh:

```jsx
export const navigation = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Kementerian",
    href: "/kementerian",
  },
  {
    label: "Informasi",
    href: "/informasi",
  },
];
```

Dengan cara ini Navbar tidak perlu memiliki daftar menu hardcoded.

---

# 24. `tasks/`

Folder ini sangat penting karena project dikerjakan oleh banyak orang.

```text
tasks/
├── README.md
├── BACKLOG.md
├── pages/
├── components/
└── features/
```

Setiap task harus menjelaskan:

- apa yang harus dikerjakan;
- lokasi file;
- PIC;
- status;
- requirement;
- acceptance criteria;
- referensi desain.

---

# 25. Template Task

Buat contoh:

```text
tasks/pages/PAGE-001-home.md
tasks/pages/PAGE-002-kementerian.md
tasks/pages/PAGE-003-visi-misi.md
tasks/pages/PAGE-004-informasi.md
tasks/pages/PAGE-005-aspirasi.md
tasks/pages/PAGE-006-faq.md
tasks/pages/PAGE-007-galeri.md
tasks/pages/PAGE-008-media-partner.md
```

Isi template:

```md
# PAGE-001 Home

## Status

TODO

## PIC

-

## Priority

HIGH

## Route

/

## Main File

src/app/page.js

## Feature

src/features/home/

## Requirements

- [ ] Implement layout
- [ ] Implement responsive design
- [ ] Connect required components
- [ ] Follow Figma

## Reference

Figma:
-

## Acceptance Criteria

- [ ] Desktop responsive
- [ ] Mobile responsive
- [ ] Tidak ada console error
- [ ] Tidak ada ESLint error
- [ ] Tidak merusak halaman lain
- [ ] Component menggunakan struktur project yang benar
```

---

# 26. Component Tasks

Buat:

```text
tasks/components/
├── COMP-001-navbar.md
├── COMP-002-footer.md
├── COMP-003-button.md
├── COMP-004-modal.md
└── COMP-005-card.md
```

Contoh:

```md
# COMP-001 Navbar

## Status

TODO

## PIC

-

## Location

src/components/layout/Navbar.jsx

## Requirements

- [ ] Desktop navigation
- [ ] Mobile navigation
- [ ] Active state
- [ ] Responsive
- [ ] Menggunakan navigation config

## Reference

Figma:
-

## Acceptance Criteria

- [ ] Responsive
- [ ] Reusable
- [ ] Tidak hardcode route jika tidak diperlukan
- [ ] Tidak ada console error
```

---

# 27. Placeholder

Untuk file yang belum dikerjakan, buat placeholder sederhana.

Contoh:

```jsx
export default function InformationCard() {
  return (
    <div>
      {/* TODO: Implement InformationCard */}
    </div>
  );
}
```

Jangan membuat implementasi palsu yang terlalu kompleks.

Tujuannya agar:

1. file sudah tersedia;
2. import tidak membingungkan;
3. developer tahu bagian yang harus dikerjakan;
4. task dapat langsung diberikan kepada anggota tim.

---

# 28. Dokumentasi

Buat:

```text
docs/
├── README.md
├── IA.md
├── ARCHITECTURE.md
├── COMPONENTS.md
├── CONTRIBUTING.md
└── OWNERS.md
```

## `IA.md`

Dokumentasikan Information Architecture website berdasarkan IA yang telah diberikan.

Jelaskan:

- route;
- hubungan halaman;
- public page;
- interactive/action page;
- admin page.

## `ARCHITECTURE.md`

Jelaskan struktur folder dan aturan penggunaan setiap folder.

## `COMPONENTS.md`

Daftar reusable component dan cara penggunaannya.

## `CONTRIBUTING.md`

Aturan contribution:

- branch;
- commit;
- pull request;
- naming;
- code style;
- task workflow.

## `OWNERS.md`

Daftar PIC tiap area.

Contoh:

```md
| Area | PIC |
|---|---|
| Home | @username |
| Kementerian | @username |
| Informasi | @username |
| Aspirasi | @username |
| Galeri | @username |
| UI Components | @username |
```

---

# 29. Git Workflow

Gunakan:

```text
main
└── develop
    ├── feature/home
    ├── feature/kementerian
    ├── feature/informasi
    ├── feature/aspirasi
    └── feature/galeri
```

Developer tidak boleh langsung push ke `main`.

Workflow:

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

Kemudian buat Pull Request ke:

```text
develop
```

---

# 30. Naming Convention

Gunakan:

### React Component

```text
PascalCase.jsx
```

Contoh:

```text
Navbar.jsx
InformationCard.jsx
AspirationForm.jsx
GalleryGrid.jsx
```

### Page

```text
page.js
```

### Layout

```text
layout.js
```

### Hook

```text
useSomething.js
```

### Utility

```text
camelCase.js
```

### Folder

Gunakan lowercase/kebab-case:

```text
media-partner/
visi-misi/
```

---

# 31. Import Alias

Konfigurasikan alias:

```text
@/*
```

Sehingga:

```jsx
import Navbar from "@/components/layout/Navbar";
```

bukan:

```jsx
import Navbar from "../../../components/layout/Navbar";
```

---

# 32. Aturan Component

Component harus:

- memiliki satu tanggung jawab utama;
- reusable jika memungkinkan;
- tidak memiliki logic yang tidak berkaitan;
- tidak mengakses API secara sembarangan;
- tidak menulis data dummy langsung di banyak tempat.

Hindari component seperti:

```text
DashboardEverything.jsx
```

atau:

```text
HomePageAllInOne.jsx
```

Pecah menjadi component yang lebih kecil.

---

# 33. Aturan Data

Untuk data dummy selama frontend belum terhubung backend, boleh membuat:

```text
features/[feature]/data/
```

Contoh:

```text
features/informasi/data/information.js
```

Jangan menyebarkan dummy data ke banyak component.

---

# 34. API

Jika backend belum tersedia, component tetap dibuat menggunakan struktur yang nantinya mudah dihubungkan ke API.

Contoh:

```text
features/informasi/
├── components/
├── services/
│   └── information.service.js
└── data/
    └── information.js
```

Ketika backend sudah tersedia, data dummy dapat diganti dengan service API tanpa mengubah seluruh UI.

---

# 35. Prinsip untuk Developer Pemula

Jangan membuat arsitektur terlalu kompleks.

Developer harus cukup memahami:

```text
page.js
↓
component
↓
props
↓
state
↓
event
↓
API
```

Tidak perlu mempelajari TypeScript terlebih dahulu.

Tidak perlu membuat abstraction jika belum dibutuhkan.

Prioritaskan:

- readable code;
- component sederhana;
- folder jelas;
- task jelas;
- Git workflow jelas.

---

# 36. Checklist Implementasi Awal

AI/developer yang menyiapkan project harus:

- [ ] Membuat project Next.js
- [ ] Menggunakan JavaScript
- [ ] Menggunakan JSX
- [ ] Menggunakan App Router
- [ ] Tidak membuat `.ts`
- [ ] Tidak membuat `.tsx`
- [ ] Membuat struktur `src/app`
- [ ] Membuat struktur `src/components`
- [ ] Membuat struktur `src/features`
- [ ] Membuat `hooks`
- [ ] Membuat `lib`
- [ ] Membuat `config`
- [ ] Membuat `tasks`
- [ ] Membuat `docs`
- [ ] Membuat placeholder setiap page utama
- [ ] Membuat placeholder component utama
- [ ] Membuat alias `@/`
- [ ] Membuat README
- [ ] Membuat CONTRIBUTING
- [ ] Membuat template task
- [ ] Menjelaskan setiap folder/file

---

# 37. Instruksi Khusus untuk AI / Antigravity

Saat membaca dokumen ini:

1. Jangan hanya membuat folder kosong.
2. Buat file placeholder yang memang diperlukan.
3. Isi setiap placeholder dengan implementasi minimal yang valid.
4. Pastikan project dapat dijalankan setelah struktur dibuat.
5. Jangan menggunakan TypeScript.
6. Jangan mengubah arsitektur menjadi struktur TypeScript.
7. Jangan membuat terlalu banyak abstraction.
8. Ikuti route yang sudah ditentukan.
9. Gunakan `features/` untuk logic yang spesifik terhadap fitur.
10. Gunakan `components/` hanya untuk reusable component.
11. Buat dokumentasi untuk developer berikutnya.
12. Buat task template agar setiap bagian dapat diberikan kepada anggota tim.
13. Jangan menghapus folder hanya karena belum memiliki implementasi.
14. Gunakan TODO placeholder untuk bagian yang belum dikerjakan.
15. Jangan mengarang fitur baru yang tidak terdapat pada IA tanpa menandainya sebagai proposal.

---

# 38. Target Akhir

Setelah tahap setup selesai, repository harus sudah memiliki:

```text
Next.js
    +
JavaScript / JSX
    +
App Router
    +
Feature-based architecture
    +
Reusable components
    +
Placeholder pages
    +
Task management
    +
Documentation
    +
Git workflow
```

Tujuan utama struktur ini adalah agar project dapat dikembangkan oleh banyak anggota tim tanpa setiap orang harus memahami seluruh codebase.

Seorang developer seharusnya dapat menerima satu task seperti:

```text
PAGE-004
Information Page
```

kemudian langsung mengetahui:

```text
Route:
src/app/informasi/page.js

Feature:
src/features/informasi/

Components:
InformationCard.jsx
InformationList.jsx
InformationFilter.jsx

Task:
tasks/pages/PAGE-004-informasi.md
```

Dengan demikian, pembagian kerja frontend menjadi jelas dan terisolasi.
