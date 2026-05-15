import styles from '@/app/page.module.css';
import type { Product } from '@/app/lib/types';
import StoreHeader from './storeHeader';

export default function StorePageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.storePage}>
            <StoreHeader />

            <main className={styles.storeMain}>{children}</main>
        </div>
    );
}
