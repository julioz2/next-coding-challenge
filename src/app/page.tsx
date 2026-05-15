import StorePageLayout from './storePageLayout';
import ProductList from './features/productsList/productsList';
import { fetchProducts } from './api/products/fetchProducts';

export default async function Home() {
  const initialProducts = await fetchProducts();

  return (
    <StorePageLayout products={initialProducts}>
      <ProductList products={initialProducts} />
    </StorePageLayout>
  );
}
