import SurahList from "@/components/quran/SurahList";
import { getAllSurat } from "@/lib/api";

export default async function Home() {
  const dataSurat = await getAllSurat();
  return (
    <div className="container md:mx-auto md:px-0 px-4">
      <SurahList dataSurat={dataSurat} />
    </div>
  );
}
