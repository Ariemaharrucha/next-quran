export default function SurahListSkeleton() {
  return (
    <div className="pb-20">
      <div className="relative max-w-xl mx-auto mb-10">
        <div className="w-full h-[52px] md:h-[58px] bg-slate-200 rounded-lg animate-pulse" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm animate-pulse"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 w-full">
                <div className="h-10 w-10 bg-slate-200 rounded-full shrink-0" />
                <div className="space-y-2 w-full">
                  <div className="h-5 bg-slate-200 rounded w-1/2" />
                  <div className="h-3 bg-slate-200 rounded w-1/3" />
                </div>
              </div>

              <div className="h-8 w-16 bg-slate-200 rounded shrink-0 ml-4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}