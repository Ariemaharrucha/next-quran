import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-bold text-lg">Quran Digital</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              Platform baca Al-Quran digital yang dibuat untuk memudahkan umat muslim membaca kalam Illahi di mana saja.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Navigasi</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-green-600">Beranda</Link></li>
              <li><Link href="/surat/36" className="hover:text-green-600">Surat Yasin</Link></li>
              <li><Link href="/surat/18" className="hover:text-green-600">Surat Al-Kahfi</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold">Credits</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>API by <a href="https://equran.id/" target="_blank" className="underline decoration-green-500">EQuran.id</a></li>
              <li>Built with Next.js</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Quran Digital Indonesia.</p>
          <div className="flex items-center gap-1 mt-2 md:mt-0">
            Dibuat oleh 
            <a href="https://github.com/Ariemaharrucha" className="font-medium text-gray-600">ArieMaharrucha</a>
          </div>
        </div>
      </div>
    </footer>
  );
}