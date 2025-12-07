
import SurahListContainer from "@/components/quran/SurahListContainer";
import SurahListSkeleton from "@/components/skeletons/SurahListSkeleton";
import { getAllSurat } from "@/lib/api";
import { Suspense } from "react";

export default async function Home() {
  const dataSurat = await getAllSurat();
  return (
    <div className="container md:mx-auto md:px-0 px-4">
      <Suspense fallback={<SurahListSkeleton/>}>
        <SurahListContainer/>
      </Suspense>
    </div>
  );
}
