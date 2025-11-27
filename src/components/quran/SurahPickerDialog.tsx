"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Surat } from "@/types/quran";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

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
      
      <DialogContent className="sm:max-w-md h-[80vh] flex flex-col p-0 gap-0 bg-white">
        
        <div className="p-4 border-b">
          <DialogHeader className="mb-4">
            <DialogTitle className="flex items-center gap-2 text-xl">
              <span className="text-green-600">📖</span> Pilih Surat ({allSurat.length})
            </DialogTitle>
          </DialogHeader>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Cari surat..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-gray-50 border-gray-200 rounded-lg"
            />
          </div>
        </div>

        <div className="flex-1 p-0 overflow-y-auto">
          <div className="flex flex-col">
            {filteredSurat.length === 0 ? (
               <div className="p-8 text-center text-gray-500">Surat tidak ditemukan</div>
            ) : (
              filteredSurat.map((surat) => (
                <Link key={surat.nomor} href={`/surat/${surat.nomor}`} onClick={() => setIsOpen(false)}>
                  <div className="flex items-center gap-4 p-3.5 border-b border-gray-50 cursor-pointer group">
                    
                    <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
                      {surat.nomor}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-0.5">
                        <h4 className="font-bold text-gray-900 truncate pr-2">
                            {surat.namaLatin} 
                            <span className="font-normal text-gray-400 ml-1 text-xs">({surat.nama})</span>
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500 truncate">
                        {surat.arti} • {surat.jumlahAyat} ayat
                      </p>
                    </div>

                    <div className="text-xs text-gray-400 font-medium flex items-center gap-1">
                        {surat.tempatTurun}
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