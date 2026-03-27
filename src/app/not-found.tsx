import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="site-shell section-space pt-24 md:pt-28">
      <div className="glass mx-auto max-w-2xl rounded-3xl p-8 text-center md:p-12">
        <p className="text-sm tracking-[0.2em] text-muted-foreground">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Halaman tidak ditemukan</h1>
        <p className="mt-3 text-muted-foreground">Halaman yang kamu cari mungkin sudah dipindah atau belum tersedia.</p>
        <Button asChild className="mt-8">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
