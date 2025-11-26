import SurahList from "@/components/quran/SurahList";
import { getAllSurat } from "@/lib/api";
import Footer from "@/components/layout/footer";

export default async function Home() {
  const dataSurat = await getAllSurat();
  return (
    <div className="container mx-auto">
      <SurahList dataSurat={dataSurat} />
      <Footer />
    </div>
  );
}
