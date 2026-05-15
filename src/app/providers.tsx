"use client"

import { LoadMoreProductsOnMount } from "./features/productsList/loadMoreProducts";
import { Product } from "./lib/types";
import { BasketProvider } from "./providers/basketProvider";
import { ProductsProvider } from "./providers/productsProvider";

export const Providers = ({ children, initialProducts }: { children: React.ReactNode, initialProducts: Product[] }) => {
    return (
        <ProductsProvider initialProducts={initialProducts}>
            <BasketProvider>
                {children}
            </BasketProvider>
            <LoadMoreProductsOnMount />
        </ProductsProvider>
    );
};