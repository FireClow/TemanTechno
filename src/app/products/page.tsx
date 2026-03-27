import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/organisms/product-grid";
import { SectionHeading } from "@/components/molecules/section-heading";

export const metadata: Metadata = {
  title: "Products",
  description: "Koleksi lengkap produk smart living Teman Techno.",
};

export default function ProductsPage() {
  return (
    <section className="site-shell section-space pt-24 md:pt-28">
      <SectionHeading
        eyebrow="Product Catalog"
        title="Temukan solusi smart lifestyle yang paling cocok untuk rumah kamu"
        description="Jelajahi produk Teman Techno dengan filter kategori untuk menemukan opsi terbaik sesuai kebutuhan harian."
      />
      <ProductGrid products={products} />
    </section>
  );
}
