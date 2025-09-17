import { db } from "./db";
import { products, NewProduct } from "./db/schema";
import { sql } from "drizzle-orm";

const sampleProducts: NewProduct[] = [
  {
    name: "Leather Mate Gourd Holder",
    description: "Handcrafted leather holder for yerba mate gourds with Guaraní motifs.",
    price: "39.99",
    imageUrl: "https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=800&auto=format&fit=crop",
    category: "Yerba Mate",
    stock: 25,
  },
  {
    name: "Guaraní Leather Satchel",
    description: "Premium full-grain leather satchel with traditional patterns.",
    price: "149.00",
    imageUrl: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?q=80&w=800&auto=format&fit=crop",
    category: "Leather Goods",
    stock: 12,
  },
  {
    name: "Bombilla Set",
    description: "Stainless steel bombilla set with etched designs inspired by Guaraní art.",
    price: "24.50",
    imageUrl: "https://images.unsplash.com/photo-1579783902775-d6165b485587?q=80&w=800&auto=format&fit=crop",
    category: "Yerba Mate",
    stock: 50,
  },
  {
    name: "Artisan Leather Wallet",
    description: "Slim leather wallet with hand-stitched detailing.",
    price: "59.00",
    imageUrl: "https://images.unsplash.com/photo-1593032457864-8c5864063a64?q=80&w=800&auto=format&fit=crop",
    category: "Leather Goods",
    stock: 30,
  },
];

async function seed() {
  await db.execute(sql`delete from ${products}`);
  await db.insert(products).values(sampleProducts);
  console.log("Seeded products:", sampleProducts.length);
}

seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
