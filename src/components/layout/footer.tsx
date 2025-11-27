import Link from "next/link";
import { Heart } from "lucide-react"; // Opsional: Tambah icon love biar manis

export default function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-blue-950">Quran Digital</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Platform baca Al-Quran digital modern. Memudahkan umat muslim membaca kalam Illahi dengan nyaman di mana saja.
            </p>
          </div>

          {/* Navigasi */}
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-900">Navigasi</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><Link href="/" className="hover:text-blue-600 transition-colors">Beranda</Link></li>
              <li><Link href="/surat/36" className="hover:text-blue-600 transition-colors">Surat Yasin</Link></li>
              <li><Link href="/surat/18" className="hover:text-blue-600 transition-colors">Surat Al-Kahfi</Link></li>
            </ul>
          </div>

          {/* Credits */}
          <div className="space-y-4">
            <h3 className="font-semibold text-blue-900">Credits</h3>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>API provided by <a href="https://equran.id/" target="_blank" className="text-blue-600 hover:underline">EQuran.id</a></li>
              <li>Built with Next.js 15 & Tailwind</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Quran Digital Indonesia.</p>
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            Dibuat dengan <Heart className="h-3 w-3 text-red-400 fill-red-400" /> oleh 
            <a href="https://github.com/Ariemaharrucha" className="font-medium text-blue-600 hover:text-blue-800 transition-colors">ArieMaharrucha</a>
          </div>
        </div>
      </div>
    </footer>
  );
}