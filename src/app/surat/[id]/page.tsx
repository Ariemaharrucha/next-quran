import { getAllSurat, getSuratDetail } from "@/lib/api";
import SuratViewer from "@/components/quran/SuratViewer";   

interface PageProps { params: Promise<{ id: string }> }

export default async function SuratDetailPage({ params }: PageProps) {
  const { id } = await params;
  const [surat, allSurat] = await Promise.all([
    getSuratDetail(parseInt(id)),
    getAllSurat()
  ]);

  return (
    <main className="p-4 container mx-auto max-w-4xl">
      <SuratViewer data={surat} allSurat={allSurat} />
    </main>
  );
}