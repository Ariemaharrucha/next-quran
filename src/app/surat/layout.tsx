import SidebarContainer from "@/components/quran/SidebarContainer";
import { SidebarSuratSkeleton } from "@/components/skeletons/SidebarSkeleton";
import { Suspense } from "react";

export default function SuratLayout({ children}: { children: React.ReactNode;}) {

  return (
    <div className="flex container mx-auto max-w-7xl h-[calc(100vh-4rem)] overflow-hidden">
      <aside className="w-64 boreder-r hidden md:block">
        <div className="h-full">
          <Suspense fallback={<SidebarSuratSkeleton />}>
            <SidebarContainer />
          </Suspense>
        </div>
      </aside>
      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="">
          {children}
        </div>
      </main>
    </div>
  );
}