import type { Metadata } from "next";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Hubungi tim Teman Techno untuk konsultasi produk smart living.",
};

export default function ContactPage() {
  return (
    <section className="site-shell section-space pt-24 md:pt-28">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        <article className="glass rounded-3xl p-6 md:p-8">
          <p className="text-sm tracking-[0.18em] text-muted-foreground">CONTACT</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">Let&apos;s build your smarter home.</h1>
          <p className="mt-4 text-muted-foreground">
            Konsultasi langsung dengan tim kami untuk rekomendasi produk sesuai kebutuhan kamu.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href={buildWhatsAppUrl("Halo Teman Techno, saya ingin konsultasi produk.")}>Chat via WhatsApp</Link>
          </Button>
        </article>
        <article className="glass rounded-3xl p-6 md:p-8">
          <h2 className="text-xl font-semibold">Quick Inquiry</h2>
          <div className="mt-4 space-y-3">
            <Input placeholder="Nama" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Produk yang diminati" />
            <Button asChild className="w-full">
              <Link href={buildWhatsAppUrl("Halo Teman Techno, saya ingin info detail produk.")}>Send via WhatsApp</Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
