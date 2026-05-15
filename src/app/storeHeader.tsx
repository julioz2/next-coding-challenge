import styles from '@/app/page.module.css';
import type { Product } from '@/app/lib/types';
import { Basket } from '@/app/features/basket/basket';
import Link from 'next/link';

export default function StoreHeader({ products }: { products: Product[] }) {
    return (
        <header className={styles.header}>
            <Link href="/" id="store-heading" role="heading" aria-level={1}>
                Giulio&apos;s Amazing Web Store
            </Link>
            <Basket products={products} />
        </header>
    );
}
