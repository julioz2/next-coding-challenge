import { BasketItemsList } from '@/app/features/basket/itemsList';
import StorePageLayout from '@/app/storePageLayout';
import { BasketSummary } from '@/app/features/basket/basketSummary';
import { RegionProvider } from '@/app/providers/regionProvider';

export default async function Checkout() {
    return (
        <RegionProvider>
            <StorePageLayout>
                <h1>Checkout</h1>
                <BasketItemsList />
                <BasketSummary />
            </StorePageLayout>
        </RegionProvider>
    );
}