export default function GridBackground() {
  return (
    <div className="fixed left-0 top-0 -z-50 h-full w-full bg-white">
      {/* 1. LAYER GRID KOTAK-KOTAK */}
      <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f8e7bf_1.4px,transparent_1.4px),linear-gradient(to_bottom,#f8e7bf_1.4px,transparent_1.4px)] bg-size-[50px_50px]"></div>

      {/* 2. LAYER MASK (Vignette Putih) */}
      {/* Supaya grid-nya agak memudar di bagian bawah/tengah agar konten tetap terbaca jelas */}
      <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-full w-full rounded-full bg-white opacity-40 blur-[100px]"></div>
    </div>
  );
}