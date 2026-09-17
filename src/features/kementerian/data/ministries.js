// Data dummy kementerian.
// TODO: ganti dengan data dari API (src/lib/api/client.js) ketika backend tersedia.

export const ministries = [
  {
    slug: "kementerian-pendidikan",
    name: "Kementerian Pendidikan",
    shortDescription:
      "Mengembangkan prestasi akademik mahasiswa Sekolah Vokasi.",
    description:
      "Kementerian Pendidikan berfokus pada pengembangan akademik mahasiswa melalui study club, seminar, dan perlombaan.",
    structure: ["Menteri", "Sekretaris", "Staff Ahli", "Staff Anggota"],
  },
  {
    slug: "kementerian-kaderisasi",
    name: "Kementerian Kaderisasi",
    shortDescription: "Membina kader dan kepemimpinan mahasiswa.",
    description:
      "Kementerian Kaderisasi membina soft skill dan kepemimpinan mahasiswa melalui pelatihan dan workshop.",
    structure: ["Menteri", "Sekretaris", "Staff Anggota"],
  },
  {
    slug: "kementerian-media-informasi",
    name: "Kementerian Media dan Informasi",
    shortDescription: "Mengelola publikasi dan informasi BEM.",
    description:
      "Kementerian Media dan Informasi mengelola media sosial, website, dan publikasi kegiatan BEM.",
    structure: ["Menteri", "Sekretaris", "Staff Desain", "Staff Konten"],
  },
];
