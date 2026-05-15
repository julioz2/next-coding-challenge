import styles from '@/app/page.module.css';
import type { Product } from '@/app/lib/types';
import StoreHeader from './storeHeader';

export default function StorePageLayout({
    products,
    children,
}: {
    products: Product[];
    children: React.ReactNode;
}) {
    return (
        <div className={styles.storePage}>
            <StoreHeader products={products} />

            <main className={styles.storeMain}>{children}</main>
        </div>
    );
}
