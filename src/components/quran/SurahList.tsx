"use client";

import { Surat } from "@/types/quran";
import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import VerseBadge from "./VerseBadge";

export default function SurahList({ dataSurat }: { dataSurat: Surat[] }) {
  const [search, setSearch] = useState("");

  const filteredSurat = dataSurat.filter((surat) =>
      surat.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
      surat.arti.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="pb-20">
      
      <div className="my-8 text-center space-y-2">
        <h1 className="text-3xl font-bold text-gold-ornament-600">Daftar Surat</h1>
        <p className="text-slate-500">Pilih surat yang ingin kamu baca hari ini</p>
      </div>

      <div className="relative max-w-xl mx-auto mb-10">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gold-ornament-300" />
        </div>
        <input
          type="text"
          placeholder="Cari surat..."
          className="w-full pl-11 pr-4 py-3 md:py-4 bg-white border border-slate-200 rounded-lg shadow-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-4 focus:ring-gold-ornament-50 focus:border-gold-ornament-300 transition-all"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSurat.map((surat) => (
          <Link
            href={`/surat/${surat.nomor}`}
            key={surat.nomor}
            className="group relative bg-white p-5 rounded-2xl border border-slate-100 hover:border-gold-ornament-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-gold-ornament-500/10 transition-all duration-300 shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <VerseBadge number={surat.nomor}/>
                <div>
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-gold-ornament-700 transition-colors">
                    {surat.namaLatin}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 group-hover:text-gold-ornament-500 transition-colors">
                    {surat.arti} • {surat.jumlahAyat} Ayat
                  </p>
                </div>
              </div>
              
              <div className="text-xl font-serif text-slate-800 group-hover:text-gold-ornament-800 transition-colors">
                {surat.nama}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredSurat.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-block p-4 rounded-full bg-gold-ornament-50 text-gold-ornament-400 mb-3">
            <Search className="h-6 w-6" />
          </div>
          <p className="text-slate-500 font-medium">Surat tidak ditemukan...</p>
        </div>
      )}
    </div>
  );
}