import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center md:mb-14">
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-balance text-sm leading-relaxed text-muted-foreground md:text-base">{description}</p>
    </div>
  );
}
