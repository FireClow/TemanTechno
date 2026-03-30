"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackMetaEvent } from "@/lib/meta-pixel";

type TrackedLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    eventName?: string;
    eventParams?: Record<string, unknown>;
  };

export function TrackedLink({
  eventName,
  eventParams,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (event.defaultPrevented || !eventName) {
      return;
    }

    trackMetaEvent(eventName, eventParams);
  };

  return <Link {...props} onClick={handleClick} />;
}
