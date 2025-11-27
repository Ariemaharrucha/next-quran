"use client";

import { useState } from "react";
import { SuratDetail, Ayat, Surat } from "@/types/quran";
import HeaderDetail from "./HeaderDetail";
import { Card, CardContent } from "@/components/ui/card";

export default function SuratViewer({ data, allSurat }: { data: SuratDetail; allSurat: Surat[] }) {
  const [showLatin, setShowLatin] = useState(true);
  const [showTerjemahan, setShowTerjemahan] = useState(true);

  return (
    <div className="space-y-6">
      <HeaderDetail data={data} allSurat={allSurat} settings={{ showLatin, setShowLatin, showTerjemahan, setShowTerjemahan }} />

      <div className="space-y-4">
        {data.ayat.map((item: Ayat) => (
          <Card
            id={`ayat-${item.nomorAyat}`} 
            key={item.nomorAyat}
            className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow scroll-mt-64 border-t-0 border-r-0 border-b-0 rounded-r-xl" 
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-blue-50 w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold text-blue-600 border border-blue-100">
                  {item.nomorAyat}
                </span>
                
                <div className="text-right w-full pl-4">
                  <p className="text-3xl font-serif leading-[2.5] mb-2 text-slate-800">
                    {item.teksArab}
                  </p>
                </div>
              </div>
              
              <div className="text-sm space-y-2">
                {showLatin && (
                  <p className="text-blue-600 font-medium tracking-wide">{item.teksLatin}</p>
                )}
                {showTerjemahan && (
                  <p className="text-slate-500 italic leading-relaxed">{item.teksIndonesia}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}