"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Surat } from "@/types/quran";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Search } from "lucide-react";

export default function SidebarSurat({ dataSurat }: { dataSurat: Surat[] }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  
  const filteredSurat = dataSurat.filter((surat) =>
    surat.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
    surat.arti.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-full bg-white border-r border-slate-100 flex flex-col">
      <div className="p-4 border-b border-slate-100">
        <h2 className="font-bold text-slate-800 mb-1">Daftar Surat</h2>
        <p className="text-xs text-slate-500 mb-3">Pilih surat untuk dibaca</p>
        
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari surat..."
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar">
        <div className="p-2 space-y-1">
          {filteredSurat.map((surat) => {
            const isActive = pathname === `/surat/${surat.nomor}`;

            return (
              <Link key={surat.nomor} href={`/surat/${surat.nomor}`} className={cn(
                  "block px-3 py-3 rounded-lg text-sm transition-all duration-200 group",
                  isActive
                    ? "bg-blue-50 text-blue-700 font-semibold shadow-sm ring-1 ring-blue-100"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-3">
                    <span className={cn("text-xs font-mono w-6 h-6 flex items-center justify-center rounded-md transition-colors",
                        isActive ? "bg-blue-200/50 text-blue-700" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                    )}>
                      {surat.nomor}
                    </span>
                    {surat.namaLatin}
                  </span>
                  <span className="font-serif text-xs opacity-40 group-hover:opacity-70 transition-opacity">
                    {surat.nama}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}