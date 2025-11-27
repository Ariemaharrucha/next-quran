"use client";

import { useState } from "react";
import Link from "next/link";
import { Surat } from "@/types/quran";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch"; 
import { Label } from "@/components/ui/label";   
import { ChevronLeft, ChevronRight, List } from "lucide-react"; 
import { Button } from "@/components/ui/button"; 
import { cn } from "@/lib/utils";
import SurahPickerDialog from "./SurahPickerDialog";

const QORI_NAMES: Record<string, string> = {
  "01": "Abdullah Al-Juhany",
  "02": "Abdul Muhsin Al-Qasim",
  "03": "Abdurrahman as-Sudais",
  "04": "Ibrahim Al-Dossari",
  "05": "Misyari Rasyid Al-Afasy",
};

interface HeaderProps {
  data: Surat;
  allSurat: Surat[];
  settings: {
    showLatin: boolean;
    setShowLatin: (v: boolean) => void;
    showTerjemahan: boolean;
    setShowTerjemahan: (v: boolean) => void;
  };
}

export default function HeaderDetail({ data, allSurat, settings }: HeaderProps) {
  const [selectedQori, setSelectedQori] = useState("05");
  const audioUrl = data.audioFull[selectedQori] || Object.values(data.audioFull)[0];
  const prevNomor = data.nomor - 1;
  const nextNomor = data.nomor + 1;

  const handleScrollToAyat = (nomorAyat: string) => { const element = document.getElementById(`ayat-${nomorAyat}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const listAyat = Array.from({ length: data.jumlahAyat }, (_, i) => i + 1);

  return (
    <div className="text-center mb-6 bg-green-50/90 p-2 rounded-xl border border-green-100 sticky top-0 z-20 shadow-sm backdrop-blur-xl supports-[backdrop-filter]:bg-green-50/60">
      
      <div className="flex items-center justify-between mb-2">
        <div className="w-12 text-left">
          {data.nomor > 1 && (
            <Link href={`/surat/${prevNomor}`}>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-green-100">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>

        <div className="flex-1">
          <h1 className="text-xl md:text-3xl font-bold text-green-900">{data.namaLatin}</h1>
          <p className="text-sm md:text-lg font-serif text-gray-600 -mt-1">{data.nama}</p>
        </div>

        <div className="w-12 text-right">
          {data.nomor < 114 && (
            <Link href={`/surat/${nextNomor}`}>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-green-100">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2 text-xs md:text-sm text-gray-500 mb-4 border-b border-green-200 pb-3">
        <span>{data.arti}</span>
        <span>•</span>
        <span>{data.jumlahAyat} Ayat</span>
        <span>•</span>
        <span>{data.tempatTurun}</span>
      </div>

      <div className="flex flex-col gap-3 max-w-3xl mx-auto">    

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6"> 
          <div className="w-full md:w-auto flex flex-wrap gap-2 items-center justify-cente"> 
            <div className="flex items-center gap-2">
               <span className="text-xs font-semibold text-gray-500 md:hidden">Ayat:</span>
               <Select onValueChange={handleScrollToAyat}>
                <SelectTrigger className="w-[80px] md:w-[100px] bg-white h-9 text-xs">
                  <SelectValue placeholder="Ayat" />
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
              <span className="text-xs font-semibold text-gray-500 md:hidden ml-1">Qori:</span>
              <Select value={selectedQori} onValueChange={setSelectedQori}>
                <SelectTrigger className="w-full md:w-[200px] bg-white h-9 text-xs truncate">
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
          </div>

          <div className="flex items-center gap-4 bg-white/60 p-1.5 rounded-lg border border-green-100 md:border-none md:bg-transparent">
            <div className="flex items-center gap-2">
              <Switch 
                id="latin-mode" 
                checked={settings.showLatin} 
                onCheckedChange={settings.setShowLatin} 
                className="scale-75 md:scale-90 data-[state=checked]:bg-green-600"
              />
              <Label htmlFor="latin-mode" className="text-xs md:text-sm cursor-pointer font-medium text-gray-700">
                  Latin
              </Label>
            </div>

            <div className="w-[1px] h-4 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <Switch 
                id="terjemahan-mode" 
                checked={settings.showTerjemahan} 
                onCheckedChange={settings.setShowTerjemahan} 
                className="scale-75 md:scale-90 data-[state=checked]:bg-green-600"
              />
              <Label htmlFor="terjemahan-mode" className="text-xs md:text-sm cursor-pointer font-medium text-gray-700">
                  Arti
              </Label>
            </div>
          </div>
        </div>

        <audio controls className="w-full h-8 mt-1" key={audioUrl}>
          <source src={audioUrl} type="audio/mpeg" />
          Browser tidak support audio.
        </audio>

        <div className="md:hidden mt-2">
            <SurahPickerDialog allSurat={allSurat}>
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50 h-12 rounded-xl shadow-sm">
                  <List className="w-5 h-5 mr-2" />
                    Pilih Surat Lain
                </Button>
            </SurahPickerDialog>
        </div>
        
      </div>
    </div>
  );
}