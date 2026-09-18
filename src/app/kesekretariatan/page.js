import CabinetList from "@/features/kesekretariatan/components/CabinetList";
import { getCabinets } from "@/features/kesekretariatan/services/cabinet.service";

export const metadata = {
  title: "Kesekretariatan | BEM KM SV UGM",
  description: "Daftar kabinet Badan Eksekutif Mahasiswa KM Sekolah Vokasi UGM dari masa ke masa.",
};

export default async function KesekretariatanPage() {
  const cabinets = await getCabinets();
  // return <CabinetList cabinets={cabinets} />;
}
