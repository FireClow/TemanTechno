import { getHomepageProducts } from "@/data/products";
import { ProductCard } from "@/components/molecules/product-card";
import { SectionHeading } from "@/components/molecules/section-heading";

export function FeaturedProductsSection() {
  const homepageProducts = getHomepageProducts();

  return (
    <section className="site-shell section-space">
      <SectionHeading
        eyebrow="Featured"
        title="Pilihan favorit untuk rumah yang lebih cerdas"
        description="Koleksi kurasi kami menggabungkan utility, desain premium, dan performa agar setiap sudut rumah terasa lebih efisien."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {homepageProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
