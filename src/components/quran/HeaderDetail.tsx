"use client";

import { useState } from "react";
import { Surat } from "@/types/quran";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const QORI_NAMES: Record<string, string> = {
  "01": "Abdullah Al-Juhany",
  "02": "Abdul Muhsin Al-Qasim",
  "03": "Abdurrahman as-Sudais",
  "04": "Ibrahim Al-Dossari",
  "05": "Misyari Rasyid Al-Afasy",
};

export default function HeaderDetail({ data }: { data: Surat }) {
  const [selectedQori, setSelectedQori] = useState("05");

  const audioUrl = data.audioFull[selectedQori] || Object.values(data.audioFull)[0];

  return (
    <div className="text-center mb-8 bg-green-50 p-6 rounded-xl border border-green-100">
      <h1 className="text-3xl font-bold mb-2">{data.namaLatin}</h1>
      <p className="text-xl font-serif text-gray-600 mb-2">{data.nama}</p>
      
      <div className="flex justify-center gap-2 text-sm text-gray-500 mb-6">
        <span>{data.arti}</span>
        <span>•</span>
        <span>{data.jumlahAyat} Ayat</span>
        <span>•</span>
        <span>{data.tempatTurun}</span>
      </div>

      {/* Kontrol Audio */}
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-gray-600">Pilih Qori:</span>
            {/* SELECT SHADCN */}
            <Select 
                value={selectedQori} 
                onValueChange={(value) => setSelectedQori(value)}
            >
            <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Pilih Qori" />
            </SelectTrigger>
            <SelectContent>
                {Object.keys(data.audioFull).map((key) => (
                <SelectItem key={key} value={key}>
                    {QORI_NAMES[key] || `Qori ${key}`}
                </SelectItem>
                ))}
            </SelectContent>
            </Select>
        </div>

        <audio controls className="w-full h-10" key={audioUrl}>
          <source src={audioUrl} type="audio/mpeg" />
          Browser tidak support audio.
        </audio>
      </div>
    </div>
  );
}