import Image from "next/image";
import SurahList from "@/components/quran/SurahList";
import { getAllSurat } from "@/lib/api";

export default async function Home() {
  const dataSurat = await getAllSurat();
  return (
    <div className="container mx-auto">
      <SurahList dataSurat={dataSurat} />
    </div>
  );
}
