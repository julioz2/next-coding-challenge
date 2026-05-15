import StorePageLayout from '../storePageLayout';
import ProductList from '../features/productsList/productsList';
import { RegionProvider } from '../providers/regionProvider';

export default async function Home() {
  return (
    <RegionProvider>
      <StorePageLayout>
        <ProductList />
      </StorePageLayout>
    </RegionProvider>
  );
}
