// Data kabinet BEM KM SV UGM dari tahun ke tahun sesuai IA.
// Data ini bersifat dinamis agar kabinet baru dapat ditambahkan tanpa mengubah struktur halaman.

export const cabinets = [
  {
    id: 1,
    year: "2026",
    name: "Kabinet Arkatama Swakarsa",
    slug: "kabinet-2026",
    tagline: "Bersama Melangkah, Nyata Berdampak",
    description:
      "Kabinet BEM KM SV UGM Tahun 2026 yang berfokus pada kolaborasi inklusif, penguatan advokasi mahasiswa, serta inovasi karya vokasional.",
    vision:
      "Terwujudnya BEM KM SV UGM yang inklusif, responsif, dan progresif sebagai katalisator karya dan perjuangan mahasiswa Sekolah Vokasi.",
    missions: [
      "Membangun internal kabinet yang solid, profesional, dan berlandaskan kekeluargaan.",
      "Mengoptimalkan peran advokasi mahasiswa yang solutif, transparan, dan berkeadilan.",
      "Mewadahi dan mengakselerasi potensi minat, bakat, serta inovasi karya mahasiswa vokasi.",
      "Memperluas jejaring kolaborasi strategis dengan stakeholder internal maupun eksternal.",
    ],
    structure: [
      {
        department: "Kemenkoan Internal",
        lead: "Menteri Koordinator Internal",
        divisions: ["Kementerian Pengembangan Sumber Daya Manusia", "Kementerian Hubungan Internal Organisasi"],
      },
      {
        department: "Kemenkoan Pergerakan & Advokasi",
        lead: "Menteri Koordinator Pergerakan",
        divisions: ["Kementerian Advokasi dan Kesejahteraan Mahasiswa", "Kementerian Kajian dan Aksi Strategis"],
      },
      {
        department: "Kemenkoan Relasi & Media",
        lead: "Menteri Koordinator Relasi",
        divisions: ["Kementerian Komunikasi dan Informasi", "Kementerian Hubungan Luar"],
      },
      {
        department: "Kemenkoan Karya & Minat Bakat",
        lead: "Menteri Koordinator Karya",
        divisions: ["Kementerian Seni dan Olahraga", "Kementerian Riset dan Inovasi"],
      },
    ],
  },
  {
    id: 2,
    year: "2025",
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
        divisions: ["Kementerian Media & Komunikasi", "Kementerian Sosial Masyarakat"],
      },
    ],
  },
  {
    id: 3,
    year: "2024",
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
