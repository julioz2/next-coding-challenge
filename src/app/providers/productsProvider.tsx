"use client";

import { createContext, useContext, useState, useCallback } from "react";
import type { Product } from "@/app/lib/types";

type MoreStatus = "idle" | "loading" | "done" | "error";

type ProductsContextValue = {
    products: Product[];
    moreStatus: MoreStatus;
    appendProducts: (more: Product[]) => void;
};

const ProductsContext = createContext<ProductsContextValue | null>(null);

export function ProductsProvider({
    initialProducts,
    children,
}: {
    initialProducts: Product[];
    children: React.ReactNode;
}) {
    const [products, setProducts] = useState(initialProducts);
    const [moreStatus, setMoreStatus] = useState<MoreStatus>("idle");

    const appendProducts = useCallback((more: Product[]) => {
        setProducts((prev) => {
            const ids = new Set(prev.map((p) => p.id));
            const merged = [...prev];
            for (const p of more) {
                if (!ids.has(p.id)) {
                    ids.add(p.id);
                    merged.push(p);
                }
            }
            return merged;
        });
        setMoreStatus("done");
    }, []);

    return (
        <ProductsContext.Provider
            value={{ products, moreStatus, appendProducts }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export function useProducts() {
    const ctx = useContext(ProductsContext);
    if (!ctx) throw new Error("useProducts must be used within ProductsProvider");
    return ctx;
}