'use client';

import { useState } from 'react';
import styles from './page.module.css';

function ItemCount({ count, name }: { count: number; name: string }) {
  return (
    <li>
      {name} count: {count}
    </li>
  );
}

const products = [
  { name: 'Item 1', quantity: 1, id: '1' },
  { name: 'Item 2', quantity: 1, id: '2' },
  { name: 'Item 3', quantity: 1, id: '3' },
  { name: 'Item 4', quantity: 1, id: '4' },
];

interface Item {
  name: string;
  quantity: number;
  id: string;
}

interface BasketItem {
  id: string;
  quantity: number;
}

export default function Home() {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  const lineCount = basket.length;
  const lineWord = lineCount === 1 ? 'item' : 'items';
  const basketSummary = `Basket: ${lineCount} ${lineWord}`;

  const addToCart = (productId: string) => {
    setBasket((prevBasket: BasketItem[]) => {
      const itemInBasket = prevBasket.find((item) => item.id === productId);

      if (!itemInBasket) {
        return [{ id: productId, quantity: 1 }, ...prevBasket];
      }

      return prevBasket.map((i) =>
        i.id === productId
          ? { ...i, quantity: itemInBasket.quantity + 1 }
          : i,
      );
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p id="store-heading" role="heading" aria-level={1}>
          Michael&apos;s Amazing Web Store
        </p>

        <section aria-label="Basket">
          <button type="button" className={styles.basket}>
            <span aria-live="polite" aria-atomic="true">
              {basketSummary}
            </span>
          </button>
          {lineCount > 0 ? (
            <ul aria-label="Basket items">
              {basket.map((basketItem: BasketItem) => {
                const item = products.find((i) => i.id === basketItem.id);

                return (
                  <ItemCount
                    key={basketItem.id}
                    name={item?.name || ''}
                    count={basketItem.quantity}
                  />
                );
              })}
            </ul>
          ) : null}
        </section>
      </div>

      <section aria-label="Products">
        <div className={styles.grid}>
          {products.map((item: Item) => (
            <button
              type="button"
              className={styles.card}
              onClick={() => addToCart(item.id)}
              key={item.id}
              aria-label={`Add to basket, ${item.name}`}
            >
              <h2>
                {item.name}{' '}
                <span aria-hidden="true">-&gt;</span>
              </h2>
              <p>{item.quantity}</p>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
