"use client";

import { useState, useRef } from "react"; // Tambah useRef
import Link from "next/link";
import { Surat } from "@/types/quran";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch"; 
import { Label } from "@/components/ui/label";   
import { ChevronLeft, ChevronRight, List, Play, Pause } from "lucide-react"; // Tambah Icon Play & Pause
import { Button } from "@/components/ui/button"; 
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
  // State untuk status audio
  const [isPlaying, setIsPlaying] = useState(false);
  // Ref untuk mengontrol elemen audio HTML
  const audioRef = useRef<HTMLAudioElement>(null);

  const audioUrl = data.audioFull[selectedQori] || Object.values(data.audioFull)[0];
  const prevNomor = data.nomor - 1;
  const nextNomor = data.nomor + 1;

  const handleScrollToAyat = (nomorAyat: string) => { const element = document.getElementById(`ayat-${nomorAyat}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Fungsi Toggle Play/Pause
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const listAyat = Array.from({ length: data.jumlahAyat }, (_, i) => i + 1);

  return (
    <div className="text-center mb-6 bg-white/90 p-2 rounded-2xl border border-blue-100 sticky top-0 z-20 shadow-sm backdrop-blur-xl supports-backdrop-filter:bg-white/60">
       
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 text-left">
          {data.nomor > 1 && (
            <Link href={`/surat/${prevNomor}`}>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>

        <div className="flex-1 text-center">
          <h1 className="text-xl md:text-3xl font-bold text-slate-500">{data.namaLatin}</h1>
        </div>

        <div className="w-12 text-right">
          {data.nomor < 114 && (
            <Link href={`/surat/${nextNomor}`}>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-full">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-2 text-xs md:text-sm text-slate-500 mb-6 border-b border-slate-100 pb-4">
        <span className="bg-slate-50 px-2 py-1 rounded-md">{data.arti}</span>
        <span className="py-1">•</span>
        <span className="bg-slate-50 px-2 py-1 rounded-md">{data.jumlahAyat} Ayat</span>
        <span className="py-1">•</span>
        <span className="bg-slate-50 px-2 py-1 rounded-md">{data.tempatTurun}</span>
      </div>

      <div className="flex flex-col gap-4 max-w-3xl mx-auto">    

        <div className="flex flex-col md:flex-row items-center justify-center gap-4"> 
          <div className="w-full md:w-auto flex flex-wrap gap-3 items-center justify-center"> 
            
            <div className="flex items-center gap-2">
               <span className="text-xs font-semibold text-slate-400 md:hidden">Ayat:</span>
               <Select onValueChange={handleScrollToAyat}>
                <SelectTrigger className="w-[90px] md:w-[100px] text-blue-700 border-blue-300 h-9 text-xs focus:ring-blue-200">
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
              <span className="text-xs font-semibold text-slate-400 md:hidden ml-1">Qori:</span>
              <Select value={selectedQori} onValueChange={(val) => {
                  setSelectedQori(val);
                  setIsPlaying(false); // Reset play state saat ganti Qori
              }}>
                <SelectTrigger className="w-full md:w-[200px] text-blue-700 border-blue-300 h-9 text-xs truncate focus:ring-blue-200">
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

          <div className="flex items-center gap-4 bg-slate-50/80 p-1.5 rounded-lg border border-slate-100 md:border-none md:bg-transparent">
            <div className="flex items-center gap-2">
              <Switch 
                id="latin-mode" 
                checked={settings.showLatin} 
                onCheckedChange={settings.setShowLatin} 
                className="scale-75 md:scale-90 data-[state=checked]:bg-blue-600"
              />
              <Label htmlFor="latin-mode" className="text-xs md:text-sm cursor-pointer font-medium text-slate-600">
                  Latin
              </Label>
            </div>

            <div className="w-px h-4 bg-slate-300"></div>

            <div className="flex items-center gap-2">
              <Switch 
                id="terjemahan-mode" 
                checked={settings.showTerjemahan} 
                onCheckedChange={settings.setShowTerjemahan} 
                className="scale-75 md:scale-90 data-[state=checked]:bg-blue-600"
              />
              <Label htmlFor="terjemahan-mode" className="text-xs md:text-sm cursor-pointer font-medium text-slate-600">
                  Arti
              </Label>
            </div>

              {/* --- CUSTOM AUDIO PLAYER --- */}
            <div className="w-full">
                <audio 
                    ref={audioRef}
                    src={audioUrl} 
                    key={audioUrl} 
                    onEnded={() => setIsPlaying(false)} 
                    onPlay={() => setIsPlaying(true)} 
                    onPause={() => setIsPlaying(false)}
                    className="hidden" 
                />

                <Button
                    onClick={toggleAudio}
                    variant="outline"
                    className={`w-full rounded-lg border transition-all duration-300 ${
                        isPlaying 
                        ? "bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200" 
                        : "bg-white text-slate-600 border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
                    }`}
                >
                    {isPlaying ? (
                        <>
                            <Pause className="w-5 h-5 mr-2 fill-current" />
                            <span className="font-semibold">Jeda Murottal</span>
                        </>
                    ) : (<>
                            <Play className="w-5 h-5 mr-2 fill-current ml-1" />
                            <span className="font-semibold">Putar Murottal</span>
                        </>
                    )}
                </Button>
            </div>

          </div>
        </div>



        <div className="md:hidden mt-0">
            <SurahPickerDialog allSurat={allSurat}>
                <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50 h-12 rounded-xl shadow-sm">
                  <List className="w-5 h-5 mr-2" />
                    Pilih Surat Lain
                </Button>
            </SurahPickerDialog>
        </div>
        
      </div>
    </div>
  );
}