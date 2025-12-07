export default function Loading() {
  return (
    <div className="p-4 container mx-auto max-w-4xl">
      <div className="space-y-6 animate-pulse">
        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm text-center space-y-4">
          <div className="h-8 bg-slate-200 rounded-lg w-1/3 mx-auto" />
          <div className="h-4 bg-slate-200 rounded w-1/4 mx-auto" />
          <div className="h-10 bg-slate-200 rounded w-1/2 mx-auto mt-6" />
          <div className="flex justify-center gap-4 mt-4">
            <div className="h-8 w-24 bg-slate-200 rounded-full" />
            <div className="h-8 w-24 bg-slate-200 rounded-full" />
          </div>
        </div>

        <div className="space-y-4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="bg-white border-l-4 border-slate-200 shadow-sm rounded-r-xl p-6"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="h-10 w-10 bg-slate-200 rounded-full shrink-0" />

                <div className="w-full pl-4 flex flex-col items-end gap-2">
                  <div className="h-8 bg-slate-200 rounded w-3/4" />
                  <div className="h-8 bg-slate-200 rounded w-1/2" />
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <div className="h-4 bg-slate-200 rounded w-full" />
                <div className="h-4 bg-slate-200 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
