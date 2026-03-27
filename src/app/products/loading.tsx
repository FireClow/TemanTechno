import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsLoading() {
  return (
    <section className="site-shell section-space pt-24 md:pt-28">
      <Skeleton className="mx-auto h-10 w-56" />
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
        <Skeleton className="h-72" />
      </div>
    </section>
  );
}
