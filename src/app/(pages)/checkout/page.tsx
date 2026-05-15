import { BasketItemsList } from '@/app/features/basket/itemsList';
import StorePageLayout from '@/app/storePageLayout';
import { BasketSummary } from '@/app/features/basket/basketSummary';
import { fetchProducts } from '@/app/api/products/fetchProducts';

export default async function Checkout() {
    const initialProducts = await fetchProducts();

    return (
        <StorePageLayout products={initialProducts}>
            <h1>Checkout</h1>
            <BasketItemsList products={initialProducts} />
            <BasketSummary products={initialProducts} />
        </StorePageLayout>
    );
}