"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, BookOpen } from "lucide-react";
import { Surat } from "@/types/quran";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import VerseBadge from "./VerseBadge";

interface SurahPickerDialogProps {
  allSurat: Surat[];
  children: React.ReactNode;
}

export default function SurahPickerDialog({ allSurat, children }: SurahPickerDialogProps) {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false); 

  const filteredSurat = allSurat.filter((surat) =>
    surat.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
    surat.arti.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md h-[80vh] flex flex-col p-0 gap-0 bg-white border-none shadow-2xl">
        
        <div className="p-4 border-b border-slate-100">
          <DialogHeader className="mb-4">
            <DialogTitle className="flex items-center gap-2 text-lg text-gold-ornament-600">
              <span className="bg-gold-ornament-100 p-1.5 rounded-lg text-gold-ornament-600">
                  <BookOpen className="w-4 h-4" />
              </span> 
              Pilih Surat
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Cari nama surat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-slate-50 border-slate-200 focus-visible:ring-gold-ornament-500 rounded-lg ring-0"
            />
          </div>
        </div>

        <div className="flex-1 p-0 overflow-y-auto">
          <div className="flex flex-col">
            {filteredSurat.length === 0 ? (
               <div className="p-10 text-center text-slate-400 flex flex-col items-center gap-2">
                  <Search className="w-8 h-8 opacity-20" />
                  <p>Surat tidak ditemukan</p>
               </div>
            ) : (
              filteredSurat.map((surat) => (
                <Link key={surat.nomor} href={`/surat/${surat.nomor}`} onClick={() => setIsOpen(false)}>
                  <div className="flex items-center gap-4 p-4 border-b border-slate-50 cursor-pointer group hover:bg-gold-ornament-50/50 transition-colors">
                    
                    <VerseBadge number={surat.nomor}/>

                    <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-0.5">
                          <h4 className="font-bold text-slate-800 truncate pr-2 group-hover:text-gold-ornament-700">
                              {surat.namaLatin} 
                          </h4>
                        </div>
                        <p className="text-xs text-slate-500 truncate">
                          {surat.arti} • {surat.jumlahAyat} ayat
                        </p>
                      </div>

                      <div className="flex flex-col uppercase font-bold tracking-wider text-slate-300 group-hover:text-gold-ornament-300">
                        <span className="font-serif text-slate-400 group-hover:text-gold-ornament-400">{surat.nama}</span>
                        <span className="text-[10px]">{surat.tempatTurun}</span>
                      </div>
                    </div>

                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
}