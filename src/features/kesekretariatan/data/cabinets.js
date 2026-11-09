// Data kabinet BEM KM SV UGM dari tahun ke tahun sesuai IA.
// Data ini bersifat dinamis agar kabinet baru dapat ditambahkan tanpa mengubah struktur halaman.

export const cabinets = [
  {
    id: 1,
    year: "2026",
    status: "Kabinet Aktif",
    period: "2025/2026",
    name: "Kabinet Pijar Resonansi",
    slug: "kabinet-2026",
    tagline: "Bersama Melangkah, Nyata Berdampak",
    heroImage: "/images/Kesekretariatan/hero.jpg",
    logo: "/images/Kesekretariatan/logo.png",
    videoUrl: "https://www.youtube.com/watch?v=efGuRedKxmM",
    description:
      "Gemilang Aradhana terdiri atas dua kata dengan maknanya masing-masing. Gemilang menggambarkan kejayaan, keberhasilan, dan pencapaian yang luar biasa. Kata ini mencerminkan harapan bahwa kabinet ini akan membawa perubahan positif, kemajuan, serta prestasi yang membanggakan. Sedangkan, Aradhana yang berasal dari bahasa Sansekerta memiliki makna pengabdian atau persembahan. Hal tersebut melambangkan dedikasi dan kerja keras dalam melayani serta mewujudkan visi yang lebih besar untuk kepentingan bersama.",
    vision:
      "Mewujudkan BEM KM SV UGM sebagai ruang yang inklusif dan responsif terhadap kebutuhan mahasiswa, sehingga dapat menciptakan wadah aspiratif yang mendukung kolaborasi lintas disiplin ilmu, serta minat dan bakat, yang mampu membangun sinergi antar mahasiswa.",
    missions: [
      "Mengakomodasi aspirasi mahasiswa yang efektif & transparan, serta memberikan respons yang cepat & solutif.",
      "Mendorong pengembangan minat & bakat serta memberikan akses yang seluas-luasnya terhadap sumber daya yang dapat membantu mahasiswa berkembang.",
      "Menjalin kerja sama yang erat antar-organisasi dan komunitas mahasiswa di lingkungan SV UGM, sehingga terciptanya sinergi yang kuat dan harmonis.",
      "Memperkuat keterhubungan antara mahasiswa & industri melalui program magang dan pelatihan.",
    ],
    lpj: {
      midYear: {
        title: "Laporan Pertanggung Jawaban Tengah Tahun",
        period: "Periode 2025/2026 (Semester Ganjil)",
        fileUrl: "/documents/lpj-tengah-tahun-2025-2026.pdf",
        stats: {
          totalPrograms: 48,
          completedPrograms: 48,
          percentage: "100%",
          studentsImpacted: "5.420+",
          budgetRealization: "96.4%",
        },
        highlights: [
          "Pelaksanaan Vokasi Fest & Expo Kolaborasi Terbuka",
          "Penyaluran dan Advokasi Aspirasi Mahasiswa SV 100% Terselesaikan",
          "Program Inkubasi Inovasi & Minat Bakat Vokasional",
          "Konsolidasi Akbar 16 Himpunan Mahasiswa Departemen",
        ],
      },
      endYear: {
        title: "Laporan Pertanggung Jawaban Akhir Tahun",
        period: "Periode 2025/2026 (Semester Genap)",
        fileUrl: "/documents/lpj-akhir-tahun-2025-2026.pdf",
        stats: {
          totalPrograms: 96,
          completedPrograms: 95,
          percentage: "98.9%",
          studentsImpacted: "12.800+",
          budgetRealization: "98.2%",
        },
        highlights: [
          "Kongres Mahasiswa Vokasi & Serah Terima Laporan Terbuka",
          "Kemitraan Strategis Bersama Mitra Industri Nasional",
          "Pengembangan Ekosistem Digital Kemahasiswaan Terpadu",
          "Apresiasi Insan Berprestasi Sekolah Vokasi UGM",
        ],
      },
    },
    structure: [
      {
        department: "Kemenkoan Internal",
        lead: "Menteri Koordinator Internal",
        divisions: [
          "Kementerian Pengembangan Sumber Daya Manusia",
          "Kementerian Hubungan Internal Organisasi",
        ],
      },
      {
        department: "Kemenkoan Pergerakan & Advokasi",
        lead: "Menteri Koordinator Pergerakan",
        divisions: [
          "Kementerian Advokasi dan Kesejahteraan Mahasiswa",
          "Kementerian Kajian dan Aksi Strategis",
        ],
      },
      {
        department: "Kemenkoan Relasi & Media",
        lead: "Menteri Koordinator Relasi",
        divisions: [
          "Kementerian Komunikasi dan Informasi",
          "Kementerian Hubungan Luar",
        ],
      },
      {
        department: "Kemenkoan Karya & Minat Bakat",
        lead: "Menteri Koordinator Karya",
        divisions: [
          "Kementerian Seni dan Olahraga",
          "Kementerian Riset dan Inovasi",
        ],
      },
    ],
  },
  {
    id: 2,
    year: "2025",
    status: "Kabinet arsip",
    period: "2024/2025",
    name: "Kabinet Nawasena Cipta",
    slug: "kabinet-2025",
    tagline: "Merajut Asa, Mengabdi Sepenuh Hati",
    description:
      "Kabinet BEM KM SV UGM Tahun 2025 yang membawa semangat pengabdian masyarakat dan sinergi aktif seluruh elemen mahasiswa vokasi.",
    vision:
      "Menjadikan BEM KM SV UGM wadah aspirasi yang adaptif, berintegritas, dan berkontribusi nyata bagi almamater dan masyarakat.",
    missions: [
      "Meningkatkan kualitas pelayanan advokasi yang cepat dan tanggap terhadap isu mahasiswa.",
      "Mendorong partisipasi aktif mahasiswa vokasi dalam kegiatan keilmuan dan kepemudaan.",
      "Menguatkan sinergi antar Keluarga Mahasiswa (KM) dan Badan Semi Otonom (BSO) di Sekolah Vokasi.",
    ],
    structure: [
      {
        department: "Kemenkoan Harmonisasi Kampus",
        lead: "Menteri Koordinator Harmonisasi",
        divisions: ["Kementerian PSDM", "Kementerian Advokasi Kesejahteraan"],
      },
      {
        department: "Kemenkoan Luar Kampus & Karya",
        lead: "Menteri Koordinator Eksternal",
        divisions: [
          "Kementerian Media & Komunikasi",
          "Kementerian Sosial Masyarakat",
        ],
      },
    ],
  },
  {
    id: 3,
    year: "2024",
    status: "Kabinet arsip",
    period: "2025/2026",
    name: "Kabinet Danadyaksa",
    slug: "kabinet-2024",
    tagline: "Dedikasi Tanpa Batas, Harmoni Vokasi",
    description:
      "Kabinet BEM KM SV UGM Tahun 2024 sebagai pondasi kokoh pergerakan dan pelayanan mahasiswa vokasi.",
    vision:
      "Mewujudkan BEM KM SV UGM yang berdaya saing, berakar pada integritas moral, dan berdampak bagi kemajuan bersama.",
    missions: [
      "Membangun komunikasi harmonis antar ormawa Sekolah Vokasi.",
      "Memperjuangkan hak-hak akademik dan fasilitas mahasiswa melalui advokasi berkelanjutan.",
    ],
    structure: [
      {
        department: "Kemenkoan Advokasi & Relasi",
        lead: "Menteri Koordinator",
        divisions: ["Kementerian Advokasi", "Kementerian Humas"],
      },
    ],
  },
];

// Kabinet aktif saat ini (Kabinet pertama dalam daftar)
export const activeCabinet = cabinets[0];
