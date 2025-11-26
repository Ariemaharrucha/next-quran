import SidebarSurat from "@/components/quran/SidebarSurat";
import { getAllSurat } from "@/lib/api";

export default async function SuratLayout({ children}: { children: React.ReactNode;}) {
  const allSurat = await getAllSurat();

  return (
    <div className="flex container mx-auto max-w-7xl h-[calc(100vh-4rem)] overflow-hidden">
      <aside className="w-64 boreder-r hidden md:block">
        <div className="h-full">
          <SidebarSurat data={allSurat} />
        </div>
      </aside>
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="p-2">
          {children}
        </div>
      </main>
    </div>
  );
}