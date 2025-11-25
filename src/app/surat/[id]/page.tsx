import { Card, CardContent } from "@/components/ui/card";
import { getSuratDetail } from "@/lib/api";

export default async function SuratDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const surat = await getSuratDetail(parseInt(id));
  return (
    <main className="p-4">
      <div className="text-center mb-8 bg-green-50 p-6 rounded-xl border border-green-100">
        <h1 className="text-3xl font-bold mb-2">{surat.namaLatin}</h1>
        <p className="text-xl font-serif text-gray-600 mb-2">{surat.nama}</p>
        <div className="flex justify-center gap-2 text-sm text-gray-500">
          <span>{surat.arti}</span>
          <span>•</span>
          <span>{surat.jumlahAyat} Ayat</span>
          <span>•</span>
          <span>{surat.tempatTurun}</span>
        </div>

        <audio controls className="w-full mt-6 h-10">
          <source src={surat.audioFull["05"]} type="audio/mpeg" />
          Browser tidak support audio.
        </audio>
      </div>

      <div className="space-y-4">
        {surat.ayat.map((item) => (
          <Card
            key={item.nomorAyat}
            className="border-l-4 border-l-green-500 shadow-sm"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="bg-gray-100 w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold">
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
