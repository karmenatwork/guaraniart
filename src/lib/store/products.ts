import { create } from "zustand";
import type { Product } from "@/lib/db/schema";

type State = {
  products: Product[];
  loading: boolean;
  error: string | null;
};

type Actions = {
  setProducts: (p: Product[]) => void;
  setLoading: (v: boolean) => void;
  setError: (m: string | null) => void;
};

export const useProductStore = create<State & Actions>((set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (p) => set({ products: p }),
  setLoading: (v) => set({ loading: v }),
  setError: (m) => set({ error: m }),
}));
