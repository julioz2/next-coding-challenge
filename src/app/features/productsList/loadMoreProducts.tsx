"use client";

import { useProducts } from "@/app/providers/productsProvider";
import { useEffect } from "react";

export function LoadMoreProductsOnMount() {
    const { appendProducts } = useProducts();

    useEffect(() => {
        let cancelled = false;

        (async () => {
            try {
                const res = await fetch("/api/products/more-products");
                if (!res.ok) throw new Error();
                const more = await res.json();
                if (!cancelled) appendProducts(more);
            } catch {
                throw new Error("Failed to load more products");
            }
        })();

        return () => { cancelled = true; };
    }, [appendProducts]);

    return null;
}