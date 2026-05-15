import { formatPrice } from "@/app/lib/utils";
import styles from "@/app/page.module.css";

interface ItemListCardProps {
    count: number;
    name: string;
    price: number;
}

export const ItemListCard = ({ count, name, price }: ItemListCardProps) => {
    const formattedPrice = formatPrice(price);

    return (
        <li className={styles.itemListCard}>
            <div className={styles.itemListCardBody}>
                <p className={styles.itemListCardName}>{name}</p>

                <dl className={styles.itemListCardMeta}>
                    <div className={styles.itemListCardMetaRow}>
                        <dt>Price</dt>
                        <dd>{formattedPrice}</dd>
                    </div>
                    <div className={styles.itemListCardMetaRow}>
                        <dt>Qty</dt>
                        <dd>{count}</dd>
                    </div>
                </dl>
            </div>
        </li>
    );
}