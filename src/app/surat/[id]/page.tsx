import { getSuratDetail } from "@/lib/api";
import SuratViewer from "@/components/quran/SuratViewer";   

interface PageProps { params: Promise<{ id: string }> }

export default async function SuratDetailPage({ params }: PageProps) {
  const { id } = await params;
  const surat = await getSuratDetail(parseInt(id));

  return (
    <main className="p-4 container mx-auto max-w-4xl">
      <SuratViewer data={surat} />
    </main>
  );
}