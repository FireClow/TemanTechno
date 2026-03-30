import { MessageCircleMore } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrackedLink } from "@/components/atoms/tracked-link";
import { buildWhatsAppUrl } from "@/lib/constants";

export function CtaSection() {
  return (
    <section className="site-shell section-space">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-blue-600 to-sky-500 px-6 py-12 text-white shadow-[0_24px_65px_rgb(21_93_252_/_38%)] md:px-10">
        <div className="absolute inset-y-0 right-0 w-2/5 bg-[radial-gradient(circle,_rgb(255_255_255_/_24%),_transparent_72%)]" />
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm tracking-[0.2em] text-blue-100">LET&apos;S CONNECT</p>
          <h3 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            Upgrade rumah kamu dengan smart products yang benar-benar berguna.
          </h3>
          <p className="mt-4 text-blue-50/90 md:text-lg">
            Tim Teman Techno siap membantu kamu memilih produk paling cocok sesuai kebutuhan dan budget.
          </p>
          <Button asChild size="lg" variant="secondary" className="mt-8 bg-white text-blue-700 hover:bg-blue-50">
            <TrackedLink
              href={buildWhatsAppUrl("Halo Tim Teman Techno, saya ingin rekomendasi produk terbaik.")}
              eventName="Lead"
              eventParams={{ content_name: "Bottom CTA WhatsApp", source_page: "home" }}
            >
              <MessageCircleMore className="h-4 w-4" />
              Konsultasi via WhatsApp
            </TrackedLink>
          </Button>
        </div>
      </div>
    </section>
  );
}
