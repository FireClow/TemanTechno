"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixelPageViewTracker() {
  const pathname = usePathname();
  const hasMounted = useRef(false);

  useEffect(() => {
    // Skip initial render because first PageView is already sent in the base pixel snippet.
    if (!hasMounted.current) {
      hasMounted.current = true;
      return;
    }

    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "PageView");
    }
  }, [pathname]);

  return null;
}
