import StorePageLayout from './storePageLayout';
import ProductList from './features/productsList/productsList';

export const products = [
  { name: 'Item 1', price: 10, category: 'Category 1', title: 'Item 1', availableQuantity: 1, id: '1' },
  { name: 'Item 2', price: 20, category: 'Category 2', title: 'Item 2', availableQuantity: 1, id: '2' },
  { name: 'Item 3', price: 30, category: 'Category 3', title: 'Item 3', availableQuantity: 1, id: '3' },
  { name: 'Item 4', price: 40, category: 'Category 4', title: 'Item 4', availableQuantity: 1, id: '4' },
];

export default function Home() {
  return (
    <StorePageLayout products={products}>
      <ProductList products={products} />
    </StorePageLayout>
  );
}
