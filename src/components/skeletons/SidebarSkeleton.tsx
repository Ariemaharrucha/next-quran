export function SidebarSuratSkeleton() {
  return (
    <div className="h-full bg-white border-r border-slate-100 flex flex-col animate-pulse">
      <div className="p-4 border-b border-slate-100">
        <div className="h-6 w-32 bg-slate-200 rounded mb-1"></div>
        <div className="h-4 w-48 bg-slate-200 rounded mb-3"></div>
        
        <div className="relative">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 bg-slate-200 rounded"></div>
          <div className="w-full h-9 bg-slate-100 rounded-lg"></div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="p-3 rounded-lg bg-slate-50">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-slate-200 rounded-md"></div>
                  <div className="h-4 bg-slate-200 rounded w-32"></div>
                </div>
                <div className="h-3 bg-slate-200 rounded w-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}