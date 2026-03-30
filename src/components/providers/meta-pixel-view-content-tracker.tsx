"use client";

import { useEffect } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

interface MetaPixelViewContentTrackerProps {
  product: {
    slug: string;
    title: string;
    category: string;
    price: number;
  };
}

export function MetaPixelViewContentTracker({ product }: MetaPixelViewContentTrackerProps) {
  useEffect(() => {
    trackMetaEvent("ViewContent", {
      content_ids: [product.slug],
      content_name: product.title,
      content_category: product.category,
      content_type: "product",
      value: product.price,
      currency: "IDR",
    });
  }, [product]);

  return null;
}
