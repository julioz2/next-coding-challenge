"use client";

import { useBasket } from "@/app/providers/basketProvider";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { BasketItemsList } from "@/app/features/basket/itemsList";
import { BasketSummary } from "./basketSummary";
import { useParams } from "next/navigation";
import { localizedPath } from "@/app/lib/utils";
import { RegionId } from "@/app/lib/regions";

export const Basket = () => {
    const { lang } = useParams();
    const { basket, toggleBasket, closeBasket, openBasket } = useBasket();
    const totalQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);
    const summary = `Basket: ${totalQuantity} items`;

    return (
        <section aria-label="Basket">
            <button
                type="button"
                className={styles.basketButton}
                onClick={toggleBasket}
                aria-expanded={openBasket}
                aria-controls="basket-drawer"
            >
                <span aria-live="polite" aria-atomic="true">
                    {summary}
                </span>
            </button>

            {openBasket ? (
                <>
                    <div
                        className={styles.basketDrawerBackdrop}
                        aria-hidden
                        onClick={closeBasket}
                    />
                    <div
                        id="basket-drawer"
                        className={styles.basketDrawer}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="basket-drawer-title"
                    >
                        <div className={styles.basketDrawerHeader}>
                            <h2 id="basket-drawer-title" className={styles.basketDrawerTitle}>
                                Basket
                            </h2>
                            <button
                                type="button"
                                className={styles.basketDrawerClose}
                                onClick={closeBasket}
                            >
                                Close
                            </button>
                        </div>
                        <BasketItemsList />
                        <BasketSummary />
                        <Link
                            href={localizedPath(lang as RegionId, "/checkout")}
                            className={styles.primaryButton}
                        >
                            Checkout
                        </Link>
                    </div>
                </>
            ) : null}
        </section>
    );
};
