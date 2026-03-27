import type { Metadata } from "next";
import { SectionHeading } from "@/components/molecules/section-heading";
import { CtaSection } from "@/components/organisms/cta-section";

export const metadata: Metadata = {
  title: "About",
  description: "Cerita dan filosofi Teman Techno dalam menghadirkan smart living products premium.",
};

export default function AboutPage() {
  return (
    <>
      <section className="site-shell section-space pt-24 md:pt-28">
        <SectionHeading
          eyebrow="About Us"
          title="Kami merancang pengalaman rumah yang lebih cerdas, bukan sekadar produk"
          description="Teman Techno dibangun untuk menjembatani kebutuhan sehari-hari dengan teknologi yang intuitif, estetis, dan tahan lama."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="glass rounded-3xl p-7 md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">Filosofi Brand</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Kami percaya teknologi harus terasa natural. Karena itu, setiap produk Teman Techno menyeimbangkan fungsi, desain, dan kenyamanan dalam satu pengalaman premium.
            </p>
          </article>
          <article className="glass rounded-3xl p-7 md:p-8">
            <h3 className="text-2xl font-semibold tracking-tight">Misi Kami</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Membantu lebih banyak rumah Indonesia mengadopsi smart living secara sederhana dan terjangkau, dengan standar kualitas modern yang konsisten.
            </p>
          </article>
        </div>
      </section>
      <CtaSection />
    </>
  );
}
