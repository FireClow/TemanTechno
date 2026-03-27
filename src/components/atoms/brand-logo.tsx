import Link from "next/link";
import Image from "next/image";

export function BrandLogo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Teman Techno Home">
      <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-border bg-white/90 shadow-[0_10px_25px_rgb(21_93_252_/_20%)] dark:bg-slate-900/80">
        <Image src="/logo.jpg" alt="Teman Techno Logo" fill className="object-cover" sizes="36px" priority />
      </span>
      <span className="text-sm font-semibold tracking-[0.16em] text-foreground">TEMAN TECHNO</span>
    </Link>
  );
}
