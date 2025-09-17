import React from "react";
import Image from "next/image";
import type { Product } from "@/lib/db/schema";

export default function ProductList({ products }: { products: Product[] }) {
  if (!products.length) return <div className="text-center py-8">No products found.</div>;
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
      {products.map((p) => (
        <div key={p.id} className="rounded-lg border p-4 bg-white dark:bg-neutral-900">
          <div className="aspect-square relative mb-3 overflow-hidden rounded">
            <Image
              src={p.imageUrl}
              alt={p.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.category}</p>
            </div>
            <div className="font-medium">${Number(p.price).toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
