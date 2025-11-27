"use client";

import { useState } from "react";
import Link from "next/link";
import { Surat } from "@/types/quran";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch"; 
import { Label } from "@/components/ui/label";   
import { ChevronLeft, ChevronRight } from "lucide-react"; 
import { Button, buttonVariants } from "@/components/ui/button"; 
import { cn } from "@/lib/utils";

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
  };
}

export default function HeaderDetail({ data, settings }: HeaderProps) {
  const [selectedQori, setSelectedQori] = useState("05");
  const audioUrl =
    data.audioFull[selectedQori] || Object.values(data.audioFull)[0];
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
    <div className="text-center mb-8 bg-green-50 p-2 rounded-lg border border-green-100 sticky top-0 z-20 shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="flex justify-between items-center mb-4">
        <div className="w-24 text-left">
          {data.nomor > 1 && (
            <Link href={`/surat/${prevNomor}`}>
              <Button variant="ghost" size="sm" className="text-xs gap-1 cursor-pointer">
                <ChevronLeft className="h-4 w-4" /> Prev
              </Button>
            </Link>
          )}
        </div>

        <div>
          <h1 className="text-3xl font-bold">{data.namaLatin}</h1>
          <p className="text-lg font-serif text-gray-600">{data.nama}</p>
        </div>

        <div className="w-24 text-right">
          {data.nomor < 114 && (
            <Link href={`/surat/${nextNomor}`}>
              <Button variant="ghost" size="sm" className="text-xs gap-1 cursor-pointer">
                Next <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-center gap-2 text-sm text-gray-500 mb-6 border-b pb-4 border-green-200">
        <span>{data.arti}</span>
        <span>•</span>
        <span>{data.jumlahAyat} Ayat</span>
        <span>•</span>
        <span>{data.tempatTurun}</span>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500">Ayat:</span>
            <Select onValueChange={handleScrollToAyat}>
              <SelectTrigger className="w-[100px] bg-white h-8 text-xs">
                <SelectValue placeholder="Go" />
              </SelectTrigger>
              <SelectContent>
                {listAyat.map((nomor) => (
                  <SelectItem key={nomor} value={nomor.toString()}>
                    {nomor}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500">Qori:</span>
            <Select value={selectedQori} onValueChange={setSelectedQori}>
              <SelectTrigger className="w-[180px] bg-white h-8 text-xs">
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
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">Qori:</span>
              <Switch id="latin-mode" checked={settings.showLatin} onCheckedChange={settings.setShowLatin} className="data-[state=checked]:bg-green-600 cursor-pointer"/>
              <Label htmlFor="latin-mode" className="text-sm cursor-pointer font-medium text-gray-700">
                  Latin
              </Label>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">Qori:</span>
              <Switch id="terjemahan-mode" checked={settings.showTerjemahan} onCheckedChange={settings.setShowTerjemahan} className="data-[state=checked]:bg-green-600 cursor-pointer"/>
              <Label htmlFor="terjemahan-mode" className="text-sm cursor-pointer font-medium text-gray-700">
                  Terjemahan
              </Label>
            </div>
          </div>
        </div>

        <audio controls className="w-full h-8 mt-2" key={audioUrl}>
          <source src={audioUrl} type="audio/mpeg" />
          Browser tidak support audio.
        </audio>
      </div>
    </div>
  );
}