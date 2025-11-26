import Link from "next/link";
import { BookOpen, Github, Menu } from "lucide-react"; // Icon bawaan Shadcn
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between mx-auto max-w-7xl px-4">
        
        {/* LOGO KIRI */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="bg-green-600 text-white p-1 rounded-lg">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="hidden sm:inline-block">Quran Digital</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Beranda
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="text-left flex items-center gap-2">
                   <BookOpen className="h-5 w-5 text-green-600" />
                   Quran Digital
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 p-4 mt-4">
                <Link href="/" className="text-sm font-medium hover:text-green-600">
                  Beranda
                </Link>
                <Link href="/surat/1" className="text-sm font-medium hover:text-green-600">
                  Baca Al-Fatihah
                </Link>
                <div className="border-t my-2"></div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}