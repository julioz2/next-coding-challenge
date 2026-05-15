"use client"

import { ProductCard } from '@/app/ui/cards/productCard';
import { useBasket } from '@/app/providers/basketProvider';
import { Product } from '@/app/lib/types';

export default function ProductWrapper({ product }: { product: Product }) {
    const { addToBasket } = useBasket();

    return (
        <ProductCard product={product} addToCart={() => addToBasket(product.id)} />
    );
}
