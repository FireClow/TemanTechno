"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/types/product";
import { formatIDR } from "@/data/products";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group glass relative overflow-hidden rounded-3xl"
    >
      <div className="pointer-events-none absolute -top-24 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-blue-400/24 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
      <Link href={`/products/${product.slug}`} className="block p-4 md:p-5">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-white/60 dark:bg-slate-900/45">
          <Image
            src={product.image}
            alt={product.title}
            width={900}
            height={700}
            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>
        <div className="mt-4 space-y-2">
          <Badge variant="secondary" className="capitalize">
            {product.category}
          </Badge>
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold leading-tight md:text-xl">{product.title}</h3>
            <ArrowUpRight className="mt-1 h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
          <p className="pt-2 text-base font-semibold text-primary md:text-lg">{formatIDR(product.price)}</p>
        </div>
      </Link>
    </motion.article>
  );
}
