// src/app/kesekretariatan/page.js
import CabinetHero from "@/features/kesekretariatan/components/CabinetHero";
import CabinetProfile from "@/features/kesekretariatan/components/CabinetProfile";
import VisionMission from "@/features/kesekretariatan/components/VisionMission";
import CabinetLpj from "@/features/kesekretariatan/components/CabinetLpj";
import { activeCabinet } from "@/features/kesekretariatan/data/cabinets";

export const metadata = {
  title: "Kesekretariatan | BEM KM SV UGM",
  description: "Profil kabinet, visi misi, dan laporan pertanggungjawaban BEM KM SV UGM.",
};

export default function KesekretariatanPage() {
  const cabinet = activeCabinet;

  return (
    <>
      <CabinetHero cabinet={cabinet} image={cabinet?.heroImage} videoUrl={cabinet?.videoUrl} />
      <CabinetProfile cabinet={cabinet} />
      <VisionMission vision={cabinet?.vision} missions={cabinet?.missions} />
      <CabinetLpj lpj={cabinet?.lpj} cabinetName={cabinet?.name} />
    </>
  );
}
