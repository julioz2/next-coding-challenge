import StorePageLayout from './storePageLayout';
import ProductList from './features/productsList/productsList';

export default async function Home() {
  return (
    <StorePageLayout>
      <ProductList />
    </StorePageLayout>
  );
}
