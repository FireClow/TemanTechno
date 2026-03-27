"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import { ProductCard } from "@/components/molecules/product-card";
import { Button } from "@/components/ui/button";

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Home", value: "home" },
  { label: "Wellness", value: "wellness" },
  { label: "Laundry", value: "laundry" },
] as const;

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof FILTERS)[number]["value"]>("all");

  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") {
      return products;
    }

    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter, products]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {FILTERS.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "secondary"}
            onClick={() => setActiveFilter(filter.value)}
            className="rounded-full"
          >
            {filter.label}
          </Button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
