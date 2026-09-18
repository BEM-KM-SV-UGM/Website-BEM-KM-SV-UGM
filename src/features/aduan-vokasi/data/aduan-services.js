// Data layanan Aduan Vokasi sesuai IA_Website_BEM.md
// Meliputi Survei Kepuasan dan Aduan Vokasi dengan akses ke form eksternal.

export const aduanServices = [
  {
    id: "survei-kepuasan",
    name: "Survei Kepuasan Mahasiswa",
    type: "Survei Kepuasan",
    description:
      "Survei berkala untuk mengukur kepuasan mahasiswa Sekolah Vokasi terhadap fasilitas kampus, kebijakan akademik, serta kinerja BEM KM SV UGM.",
    formUrl: "https://forms.gle/dummySurveiSV2026",
    actionLabel: "Isi Form Survei Kepuasan",
    notes: "Data responden dijamin kerahasiaannya dan digunakan untuk perbaikan layanan mahasiswa.",
  },
  {
    id: "aduan-aspirasi",
    name: "Aduan & Aspirasi Mahasiswa Vokasi",
    type: "Aduan Vokasi",
    description:
      "Layanan penerimaan aspirasi, pengaduan fasilitas, kendala biaya kuliah/UKT, dan advokasi akademik mahasiswa Sekolah Vokasi UGM.",
    formUrl: "https://forms.gle/dummyAduanSV2026",
    actionLabel: "Kirim Aduan / Aspirasi",
    notes: "Aduan akan ditindaklanjuti langsung oleh Kementerian Advokasi dan Kesejahteraan Mahasiswa.",
  },
];
