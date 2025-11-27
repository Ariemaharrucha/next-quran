import Link from "next/link";
import { BookOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gold-ornament-100 bg-white/80 backdrop-blur-md supports-backdrop-filter:bg-white/60">
      <div className="container flex h-16 items-center justify-between mx-auto max-w-7xl px-4">
        
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-800">
          <div className="bg-linear-to-tr from-gold-ornament-600 to-gold-ornament-500 text-white p-1.5 rounded-lg shadow-sm shadow-gold-ornament-200">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline-block">Quran Digital</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
          <Link href="/" className="hover:text-gold-ornament-600 transition-colors">
            Beranda
          </Link>
          <Link href="/" className="hover:text-gold-ornament-600 transition-colors">
            Doa
          </Link>
          <Link href="/" className="hover:text-gold-ornament-600 transition-colors">
            Tafsir
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-gold-ornament-50 hover:text-gold-ornament-600">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2 text-gold-ornament-900">
                   <BookOpen className="h-5 w-5 text-gold-ornament-600" />
                   Quran Digital
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 px-4 pb-4">
                <Link href="/" className="text-sm font-medium text-slate-600 hover:text-gold-ornament-600 hover:bg-gold-ornament-50 p-2 rounded-md transition-all">
                  Beranda
                </Link>
                <Link href="/doa" className="text-sm font-medium text-slate-600 hover:text-gold-ornament-600 hover:bg-gold-ornament-50 p-2 rounded-md transition-all">
                  Doa
                </Link>
                <Link href="/tafsir" className="text-sm font-medium text-slate-600 hover:text-gold-ornament-600 hover:bg-gold-ornament-50 p-2 rounded-md transition-all">
                  Tafsir
                </Link>
                <div className="border-t border-gold-ornament-100 my-2"></div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}