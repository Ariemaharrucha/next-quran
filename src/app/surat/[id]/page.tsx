import { getSuratDetail } from "@/lib/api";
import HeaderDetail from "@/components/quran/HeaderDetail"; // Import komponen baru
import { Card, CardContent } from "@/components/ui/card";

interface PageProps { params: Promise<{ id: string }> }

export default async function SuratDetailPage({ params }: PageProps) {
  const { id } = await params;
  const surat = await getSuratDetail(parseInt(id));

  return (
    <main className="p-4 container mx-auto max-w-4xl">
      
      <HeaderDetail data={surat} />

      <div className="space-y-4">
        {surat.ayat.map((item) => (
          <Card
            key={item.nomorAyat}
            className="border-l-4 border-l-green-500 shadow-sm transition hover:shadow-md"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold text-gray-700">
                  {item.nomorAyat}
                </span>
                <div className="text-right w-full pl-4">
                  <p className="text-3xl font-serif leading-loose mb-2 text-foreground">
                    {item.teksArab}
                  </p>
                </div>
              </div>
              <div className="text-sm space-y-1">
                <p className="text-green-700 font-medium">{item.teksLatin}</p>
                <p className="text-gray-600 italic">{item.teksIndonesia}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}