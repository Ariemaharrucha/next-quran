import Image from "next/image";

export default function VerseBadge({ number }: { number: number }) {
  return (
    <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
      <Image 
        src="/images/verse-border.png" 
        width={48}
        height={48}
        className="absolute inset-0 w-full h-full object-contain"
        alt="border-ayat"
      />
      <span className="relative z-10 text-xs font-bold text-slate-800">
        {number}
      </span>
    </div>
  );
}