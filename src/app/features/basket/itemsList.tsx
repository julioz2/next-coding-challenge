"use client";

import { BasketItem, Product } from "@/app/lib/types";
import { useBasket } from "@/app/providers/basketProvider";
import { ItemListCard } from "@/app/ui/cards/itemListCard";
import styles from "@/app/page.module.css";

export const BasketItemsList = ({ products }: { products: Product[] }) => {
    const { basket } = useBasket();

    return (
        <ul className={styles.itemsList} aria-label="Basket items">
            {basket.length === 0 ? (
                <li className={styles.itemsListEmpty}>The basket is empty.</li>
            ) : (
                basket.map((basketItem: BasketItem) => {
                    const item = products.find((i) => i.id === basketItem.id);

                    if (!item) return null;
                    return (
                        <ItemListCard
                            key={basketItem.id}
                            name={item.name.uk}
                            count={basketItem.quantity}
                            price={item.price.gbp}
                        />
                    );
                })
            )}
        </ul>
    );
};
