import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Product } from "@/types/product";
import { formatIDR } from "@/data/products";
import { buildWhatsAppUrl } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrackedLink } from "@/components/atoms/tracked-link";
import { MetaPixelViewContentTracker } from "@/components/providers/meta-pixel-view-content-tracker";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const message = `Halo Teman Techno, saya ingin order ${product.title}.`;

  return (
    <section className="site-shell section-space pt-24 md:pt-28">
      <MetaPixelViewContentTracker product={product} />
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="glass overflow-hidden rounded-3xl p-4 md:p-6">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-white/60 dark:bg-slate-900/45">
            <Image
              src={product.image}
              alt={product.title}
              width={1200}
              height={920}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
        <div className="glass rounded-3xl p-6 md:p-8">
          <Badge variant="secondary" className="capitalize">
            {product.category}
          </Badge>
          <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-5xl">{product.title}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{product.description}</p>
          <p className="mt-6 text-3xl font-semibold text-primary md:text-4xl">{formatIDR(product.price)}</p>
          <ul className="mt-8 space-y-3">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground md:text-base">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <TrackedLink
                href={buildWhatsAppUrl(message)}
                eventName="Lead"
                eventParams={{
                  content_name: product.title,
                  content_ids: [product.slug],
                  source_page: "product_detail",
                }}
              >
                Order via WhatsApp
              </TrackedLink>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <TrackedLink href="/products">Back to Products</TrackedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
