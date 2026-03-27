import type { Metadata } from "next";
import { HeroSection } from "@/components/organisms/hero-section";
import { StorySection } from "@/components/organisms/story-section";
import { FeaturedProductsSection } from "@/components/organisms/featured-products-section";
import { CtaSection } from "@/components/organisms/cta-section";

export const metadata: Metadata = {
  title: "Home",
  description: "Teman Techno: smart living essentials dengan desain modern dan premium.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <FeaturedProductsSection />
      <CtaSection />
    </>
  );
}
