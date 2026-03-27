import Link from "next/link";
import { Cpu } from "lucide-react";

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Teman Techno Home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 text-white shadow-[0_10px_25px_rgb(21_93_252_/_40%)]">
        <Cpu className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold tracking-[0.16em] text-foreground">TEMAN TECHNO</span>
    </Link>
  );
}
