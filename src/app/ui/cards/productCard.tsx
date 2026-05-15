import styles from '@/app/page.module.css';
import { Product } from '@/app/lib/types';
import { formatPrice } from '@/app/lib/utils';
import { useRegion } from '@/app/providers/regionProvider';

interface ProductCardProps {
    product: Product;
    addToCart: (id: string) => void;
}

export const ProductCard = ({ product, addToCart }: ProductCardProps) => {
    const region = useRegion();
    const titleId = `product-title-${product?.id}`;
    const formattedPrice = formatPrice(region.productPrice(product), region.locale, region.currency);

    return (
        <article className={styles.card}>
            <h3 id={product?.id} className={styles.cardTitle}>
                {product.name.uk}
            </h3>
            <p className={styles.cardMeta}>In stock: {product.stock}</p>
            <p className={styles.cardMeta}>{formattedPrice}</p>
            <button
                type="button"
                className={styles.addButton}
                onClick={() => addToCart(product.id)}
                aria-describedby={titleId}
            >
                {region.labels.addToBasket}
            </button>
        </article>
    )
}