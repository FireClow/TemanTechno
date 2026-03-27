"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/molecules/section-heading";

interface CounterProps {
  target: number;
  suffix?: string;
  label: string;
}

function AnimatedCounter({ target, suffix = "", label }: CounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let current = 0;
    const duration = 1000;
    const steps = 30;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setValue(target);
        window.clearInterval(timer);
        return;
      }
      setValue(Math.round(current));
    }, interval);

    return () => window.clearInterval(timer);
  }, [target]);

  return (
    <div className="glass rounded-3xl p-6 text-center">
      <p className="text-3xl font-semibold tracking-tight md:text-4xl">
        {value}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export function StorySection() {
  return (
    <section className="site-shell section-space">
      <SectionHeading
        eyebrow="Brand Story"
        title="Teknologi yang menyatu dengan ritme hidup modern"
        description="Kami percaya produk rumah tangga harus cerdas, elegan, dan mudah digunakan. Dari desain hingga pengalaman, setiap detail dirancang agar hidup terasa lebih ringan."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="grid gap-4 md:grid-cols-3"
      >
        <AnimatedCounter target={1200} suffix="+" label="Happy households" />
        <AnimatedCounter target={98} suffix="%" label="Customer satisfaction" />
        <AnimatedCounter target={24} suffix="h" label="Fast response support" />
      </motion.div>
    </section>
  );
}
