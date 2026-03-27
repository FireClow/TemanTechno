import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="site-shell mt-20 pb-10">
      <div className="glass rounded-3xl px-6 py-8 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] text-muted-foreground">TEMAN TECHNO</p>
            <p className="mt-2 text-sm text-muted-foreground">Smart living essentials designed for modern homes.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
