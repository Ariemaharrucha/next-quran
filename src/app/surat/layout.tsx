import SidebarSurat from "@/components/quran/SidebarSurat";
import { getAllSurat } from "@/lib/api";

export default async function SuratLayout({ children}: { children: React.ReactNode;}) {
  const allSurat = await getAllSurat();

  return (
    <div className="flex container mx-auto max-w-7xl">
      <aside>
        <SidebarSurat data={allSurat} />
      </aside>
      <main className="flex-1 min-w-0">
        <div className="p-6">
            {children}
        </div>
      </main>
    </div>
  );
}