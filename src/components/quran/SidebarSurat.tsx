"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Surat } from "@/types/quran";
import { cn } from "@/lib/utils";

export default function SidebarSurat({ data }: { data: Surat[] }) {
  const pathname = usePathname();

  return (
    <div className="w-64 border-r h-[calc(100vh)] sticky hidden md:block bg-background">
      <div className="p-4 border-b">
        <h2 className="font-semibold mb-1">Daftar Surat</h2>
        <p className="text-xs text-gray-500">Pilih surat untuk dibaca</p>
      </div>

      <ScrollArea className="h-[calc(100vh-9rem)]">
        <div className="p-2 space-y-1">
          {data.map((surat) => {
            const isActive = pathname === `/surat/${surat.nomor}`;

            return (
              <Link key={surat.nomor} href={`/surat/${surat.nomor}`} className={cn(
                  "block px-4 py-3 rounded-lg text-sm transition-colors",
                  isActive
                    ? "bg-green-100 text-green-700 font-medium border border-green-200"
                    : "hover:bg-gray-100 text-gray-600"
                )}
              >
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="text-xs font-mono opacity-50 w-5">
                      {surat.nomor}.
                    </span>
                    {surat.namaLatin}
                  </span>
                  <span className="font-serif text-xs opacity-40">
                    {surat.nama}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
}
