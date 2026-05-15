import styles from '@/app/page.module.css';
import { Product } from '@/app/lib/types';

interface ProductCardProps {
    product: Product;
    addToCart: (id: string) => void;
}

export const ProductCard = ({ product, addToCart }: ProductCardProps) => {
    const titleId = `product-title-${product.id}`;

    return (
        <article className={styles.card}>
            <h3 id={titleId} className={styles.cardTitle}>
                {product.title}
            </h3>
            <p className={styles.cardMeta}>In stock: {product.availableQuantity}</p>
            <button
                type="button"
                className={styles.addButton}
                onClick={() => addToCart(product.id)}
                aria-describedby={titleId}
            >
                Add to basket
            </button>
        </article>
    )
}