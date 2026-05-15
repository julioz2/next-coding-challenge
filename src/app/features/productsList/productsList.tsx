"use client";

import styles from '@/app/page.module.css';
import ProductWrapper from '@/app/features/productsList/productWrapper';
import { useProducts } from '@/app/providers/productsProvider';

export default function ProductList() {
    const { products } = useProducts();

    return (
        <section aria-labelledby="products-heading" className={styles.productsList}>
            <h2 id="products-heading" className={styles.productsHeading}>
                Products
            </h2>
            <ul className={styles.grid}>
                {products?.length > 0 && products.map((p) => (
                    <li key={p.id} className={styles.gridCell}>
                        <ProductWrapper product={p} />
                    </li>
                ))}
            </ul>
        </section>
    );
}
