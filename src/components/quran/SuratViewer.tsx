"use client";

import { useState } from "react";
import { SuratDetail, Ayat } from "@/types/quran";
import HeaderDetail from "./HeaderDetail";
import { Card, CardContent } from "@/components/ui/card";

export default function SuratViewer({ data }: { data: SuratDetail }) {
  const [showLatin, setShowLatin] = useState(true);
  const [showTerjemahan, setShowTerjemahan] = useState(true);


  return (
    <div className="space-y-6">
      <HeaderDetail data={data} settings={{ showLatin, setShowLatin, showTerjemahan, setShowTerjemahan }} />

      <div className="space-y-4">
        {data.ayat.map((item: Ayat) => (
          <Card
            id={`ayat-${item.nomorAyat}`} 
            key={item.nomorAyat}
            className="border-l-4 border-l-green-500 shadow-sm scroll-mt-64" 
          >
            <CardContent className="p-2">
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
              
              <div className="text-sm space-y-2">
                {showLatin && (
                  <p className="text-green-700 font-medium">{item.teksLatin}</p>
                )}
                {showTerjemahan && (
                  <p className="text-gray-600 italic">{item.teksIndonesia}</p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
    </div>
  );
}