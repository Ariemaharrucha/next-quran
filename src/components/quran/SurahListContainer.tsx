import { getAllSurat } from "@/lib/api";
import SurahList from "./SurahList";

export default async function SurahListContainer() {
  const dataSurat = await getAllSurat();

  return <SurahList dataSurat={dataSurat} />;
}
