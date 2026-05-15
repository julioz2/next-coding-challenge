import { BasketItemsList } from '@/app/features/basket/itemsList';
import StorePageLayout from '@/app/storePageLayout';
import { products } from '@/app/page';
import { BasketSummary } from '@/app/features/basket/basketSummary';

export default async function Checkout() {
    return (
        <StorePageLayout products={products}>
            <h1>Checkout</h1>
            <BasketItemsList products={products} />
            <BasketSummary products={products} />
        </StorePageLayout>
    );
}