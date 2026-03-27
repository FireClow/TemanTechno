"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MagneticButton } from "@/components/atoms/magnetic-button";
import { buildWhatsAppUrl } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="site-shell relative section-space overflow-hidden pt-24 md:pt-28">
      <div className="hero-glow" />
      <motion.div
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <Badge className="gap-2">
          <Sparkles className="h-3.5 w-3.5" />
          Smart Living Reimagined
        </Badge>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Home technology that feels
          <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent"> elegant, calm, and intelligent.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          TEMAN TECHNO menghadirkan perangkat smart lifestyle premium dengan desain minimalis untuk membantu rumah bekerja lebih cerdas.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <MagneticButton>
            <Button asChild size="lg">
              <Link href="/products">Explore Products</Link>
            </Button>
          </MagneticButton>
          <Button asChild variant="secondary" size="lg">
            <Link href={buildWhatsAppUrl("Halo Teman Techno, saya tertarik dengan produk smart living.")}>Talk via WhatsApp</Link>
          </Button>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute left-0 top-36 h-32 w-32 rounded-full bg-blue-500/25 blur-3xl float-soft" />
      <div className="pointer-events-none absolute right-6 top-44 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl float-slow" />
    </section>
  );
}
