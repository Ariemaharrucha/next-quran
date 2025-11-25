"use client";

import { Surat } from "@/types/quran";
import Link from "next/link";
import { useState } from "react";

export default function SurahList({ dataSurat }: { dataSurat: Surat[] }) {
  const [search, setSearch] = useState("");

  const filteredSurat = dataSurat.filter((surat) =>
      surat.namaLatin.toLowerCase().includes(search.toLowerCase()) ||
      surat.arti.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="my-6">
        <input
          type="text"
          placeholder="Cari surat... (contoh: Yasin)"
          className="w-full p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSurat.map((surat) => (
          <Link
            href={`/surat/${surat.nomor}`}
            key={surat.nomor}
            className="group p-5 border rounded-xl hover:border-green-500 hover:shadow-md transition bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Nomor Surat */}
                <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full font-bold text-gray-600 group-hover:bg-green-100 group-hover:text-green-600 transition">
                  {surat.nomor}
                </div>
                {/* Nama Surat */}
                <div>
                  <h3 className="font-bold text-lg">{surat.namaLatin}</h3>
                  <p className="text-xs text-gray-500">
                    {surat.arti} • {surat.jumlahAyat} Ayat
                  </p>
                </div>
              </div>
              {/* Tulisan Arab */}
              <div className="text-xl font-serif text-gray-800">
                {surat.nama}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Handling jika tidak ketemu */}
      {filteredSurat.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          Surat tidak ditemukan...
        </div>
      )}
    </div>
  );
}
