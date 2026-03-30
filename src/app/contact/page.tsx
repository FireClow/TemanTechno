import type { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/atoms/tracked-link";
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
            <TrackedLink
              href={buildWhatsAppUrl("Halo Teman Techno, saya ingin konsultasi produk.")}
              eventName="Contact"
              eventParams={{ method: "whatsapp", content_name: "Contact Hero CTA", source_page: "contact" }}
            >
              Chat via WhatsApp
            </TrackedLink>
          </Button>
        </article>
        <article className="glass rounded-3xl p-6 md:p-8">
          <h2 className="text-xl font-semibold">Quick Inquiry</h2>
          <div className="mt-4 space-y-3">
            <Input placeholder="Nama" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Produk yang diminati" />
            <Button asChild className="w-full">
              <TrackedLink
                href={buildWhatsAppUrl("Halo Teman Techno, saya ingin info detail produk.")}
                eventName="Contact"
                eventParams={{ method: "whatsapp", content_name: "Quick Inquiry CTA", source_page: "contact" }}
              >
                Send via WhatsApp
              </TrackedLink>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
}
