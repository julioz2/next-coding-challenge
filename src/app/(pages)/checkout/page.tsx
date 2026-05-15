import { BasketItemsList } from '@/app/features/basket/itemsList';
import StorePageLayout from '@/app/storePageLayout';
import { BasketSummary } from '@/app/features/basket/basketSummary';

export default async function Checkout() {
    return (
        <StorePageLayout>
            <h1>Checkout</h1>
            <BasketItemsList />
            <BasketSummary />
        </StorePageLayout>
    );
}