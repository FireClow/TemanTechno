"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { BrandLogo } from "@/components/atoms/brand-logo";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, buildWhatsAppUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(
  () => import("@/components/atoms/theme-toggle").then((mod) => mod.ThemeToggle),
  { ssr: false }
);

export function SiteNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8">
      <div className="site-shell glass flex items-center justify-between rounded-2xl px-4 py-3 md:px-5">
        <BrandLogo />
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-2 text-sm transition-colors",
                  active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="default" className="hidden md:inline-flex">
            <Link href={buildWhatsAppUrl("Halo Teman Techno, saya ingin konsultasi produk.")}>WhatsApp</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
