"use client";

import { useState } from "react";
import { Surat } from "@/types/quran";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, BookOpen, Type } from "lucide-react";
import Link from "next/link";

const QORI_NAMES: Record<string, string> = {
  "01": "Abdullah Al-Juhany",
  "02": "Abdul Muhsin Al-Qasim",
  "03": "Abdurrahman as-Sudais",
  "04": "Ibrahim Al-Dossari",
  "05": "Misyari Rasyid Al-Afasy",
};

interface HeaderProps {
  data: Surat;
  settings: {
    showLatin: boolean;
    setShowLatin: (v: boolean) => void;
    showTerjemahan: boolean;
    setShowTerjemahan: (v: boolean) => void;
  }
}

export default function HeaderDetail({ data, settings }: HeaderProps) {
  const [selectedQori, setSelectedQori] = useState("05");
  const audioUrl = data.audioFull[selectedQori] || Object.values(data.audioFull)[0];
  const prevNomor = data.nomor - 1;
  const nextNomor = data.nomor + 1;

  const handleScrollToAyat = (nomorAyat: string) => {
    const element = document.getElementById(`ayat-${nomorAyat}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const listAyat = Array.from({ length: data.jumlahAyat }, (_, i) => i + 1);

  return (
    <div className="text-center mb-8 bg-green-50 p-6 rounded-xl border border-green-100 sticky top-1 z-10 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="flex justify-between">
        <div>
          <Link href={`/surat/${prevNomor}`}>sebelumnya</Link>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">{data.namaLatin}</h1>
          <p className="text-xl font-serif text-gray-600 mb-2">{data.nama}</p>
        </div>
        <div>
          <Link href={`/surat/${nextNomor}`}>selanjutnya</Link>
        </div>
      </div>
      
      <div className="flex justify-center gap-2 text-sm text-gray-500 mb-6">
        <span>{data.arti}</span><span>•</span>
        <span>{data.jumlahAyat} Ayat</span><span>•</span>
        <span>{data.tempatTurun}</span>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span>Ayat: </span>
          <Select onValueChange={handleScrollToAyat}>
            <SelectTrigger className="w-[140px] bg-white">
              <SelectValue placeholder="Ke Ayat..." />
            </SelectTrigger>
            <SelectContent>
                {listAyat.map((nomor) => (
                    <SelectItem key={nomor} value={nomor.toString()}>
                        Ayat {nomor}
                    </SelectItem>
                ))}
            </SelectContent>
          </Select>
          <span>Qori: </span>
          <Select value={selectedQori} onValueChange={setSelectedQori}>
            <SelectTrigger className="w-[180px] bg-white">
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
          <div className="flex flex-wrap items-center justify-center gap-3">
              <Button variant={settings.showLatin ? "default" : "outline"} size="sm" onClick={() => settings.setShowLatin(!settings.showLatin)} className={settings.showLatin ? "bg-green-600 hover:bg-green-700" : ""}>
                  <Type className="w-4 h-4 mr-2" />
                  Latin {settings.showLatin ? "On" : "Off"}
              </Button>

              <Button variant={settings.showTerjemahan ? "default" : "outline"} size="sm" onClick={() => settings.setShowTerjemahan(!settings.showTerjemahan)} className={settings.showTerjemahan ? "bg-green-600 hover:bg-green-700" : ""}>
                  <BookOpen className="w-4 h-4 mr-2" />
                  Arti {settings.showTerjemahan ? "On" : "Off"}
              </Button>
          </div>
        </div>

        <audio controls className="w-full h-10 mt-2" key={audioUrl}>
          <source src={audioUrl} type="audio/mpeg" />
          Browser tidak support audio.
        </audio>
      </div>
    </div>
  );
}