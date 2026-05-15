"use client";

import { useBasket } from "@/app/providers/basketProvider";
import { formatPrice } from "@/app/lib/utils";
import styles from "@/app/page.module.css";
import { useProducts } from "@/app/providers/productsProvider";
import { useRegion } from "@/app/providers/regionProvider";

export const BasketSummary = () => {
    const region = useRegion();
    const { basket } = useBasket();
    const { products } = useProducts();
    const totalQuantity = basket.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = basket.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.id);
        return sum + (product?.price.gbp ?? 0) * item.quantity;
    }, 0);

    const formattedPrice = formatPrice(totalPrice, region.locale, region.currency);
    const itemLabel = totalQuantity === 1 ? "item" : "items";

    return (
        <div className={styles.basketSummary} aria-live="polite" aria-label="Basket summary">
            <dl className={styles.basketSummaryRows}>
                <div className={styles.basketSummaryRow}>
                    <dt>Items</dt>
                    <dd>{totalQuantity} {itemLabel}</dd>
                </div>
                <div className={styles.basketSummaryRow}>
                    <dt>Total</dt>
                    <dd>{formattedPrice}</dd>
                </div>
            </dl>
        </div>
    );
};