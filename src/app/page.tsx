import { Feather } from "lucide-react";
import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import ProductList from "@/components/ProductList";

export default async function Home() {
  const items = await db.select().from(products).orderBy(desc(products.createdAt));
  return (
    <main className="min-h-screen px-6 py-10 sm:px-10 max-w-6xl mx-auto">
      <header className="mb-10 flex items-center gap-3">
        <Feather className="h-8 w-8 text-foreground" aria-hidden />
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Guaraní Art & Goods</h1>
          <p className="text-muted-foreground mt-2">
            Premium leather goods and yerba mate accessories inspired by Guaraní art.
          </p>
        </div>
      </header>
      <ProductList products={items} />
    </main>
  );
}
