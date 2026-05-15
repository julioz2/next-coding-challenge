import styles from '@/app/page.module.css';
import { Product } from '@/app/lib/types';
import ProductWrapper from '@/app/features/productsList/productWrapper';

export default function ProductList({ products }: { products: Product[] }) {
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
