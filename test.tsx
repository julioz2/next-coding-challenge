import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { Providers } from '@/app/providers';
import { RegionProvider } from '@/app/providers/regionProvider';
import StorePageLayout from '@/app/storePageLayout';
import ProductList from '@/app/features/productsList/productsList';
import { mockCatalogProducts } from '@/app/testFixtures/mockProducts';

const mockUsePathname = jest.fn(() => "/");
const mockUseParams = jest.fn(() => ({ lang: "uk" }));

jest.mock("next/navigation", () => ({
    usePathname: () => mockUsePathname(),
    useRouter: () => ({ push: jest.fn(), replace: jest.fn() }),
    useParams: () => mockUseParams(),
}));

beforeEach(() => {
    mockUsePathname.mockReturnValue("/");
    mockUseParams.mockReturnValue({ lang: "uk" });
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: () => Promise.resolve([]),
    } as Response);
});

function renderHome(region: "uk" | "us" = "uk") {
    mockUsePathname.mockReturnValue(region === "us" ? "/us" : "/");
    mockUseParams.mockReturnValue({ lang: region });

    return render(
        <Providers initialProducts={mockCatalogProducts}>
            <RegionProvider>
                <StorePageLayout>
                    <ProductList />
                </StorePageLayout>
            </RegionProvider>
        </Providers>,
    );
}

describe('Home', () => {
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve([]),
        } as Response);
    });
    it('renders an empty basket', () => {
        renderHome();

        const basketButton = screen.getByRole('button', {
            name: /Basket:/i,
        });

        expect(basketButton).toHaveTextContent('Basket: 0 items');
    });

    it('shows total quantity in the basket header after one add', async () => {
        renderHome();

        const buttons = screen.getAllByRole('button', {
            name: /Add to basket/i,
        });

        fireEvent.click(buttons[0]);

        const basketButton = screen.getByRole('button', {
            name: /Basket:/i,
        });

        await waitFor(() => {
            expect(basketButton).toHaveTextContent('Basket: 1 items');
        });
    });

    it('shows total quantity in header and line quantities in the drawer', async () => {
        renderHome();

        const buttons = screen.getAllByRole('button', {
            name: /Add to basket/i,
        });

        fireEvent.click(buttons[0]);
        fireEvent.click(buttons[1]);
        fireEvent.click(buttons[1]);

        const basketButton = screen.getByRole('button', {
            name: /Basket:/i,
        });

        await waitFor(() => {
            expect(basketButton).toHaveTextContent('Basket: 3 items');
        });

        fireEvent.click(basketButton);

        const basketList = screen.getByRole('list', { name: 'Basket items' });
        const lines = within(basketList).getAllByRole('listitem');

        expect(lines).toHaveLength(2);

        const item1Line = lines.find((line) =>
            within(line).queryByText('Item 1'),
        );
        const item2Line = lines.find((line) =>
            within(line).queryByText('Item 2'),
        );

        expect(item1Line).toBeDefined();
        expect(item2Line).toBeDefined();
        expect(within(item1Line!).getByText('1')).toBeInTheDocument();
        expect(within(item2Line!).getByText('2')).toBeInTheDocument();
    });

    it('shows item count and total price in the basket summary', async () => {
        renderHome();

        fireEvent.click(
            screen.getAllByRole('button', { name: /Add to basket/i })[0],
        );

        const basketButton = screen.getByRole('button', { name: /Basket:/i });

        await waitFor(() => {
            expect(basketButton).toHaveTextContent('Basket: 1 items');
        });

        fireEvent.click(basketButton);

        const summary = screen.getByLabelText('Basket summary');

        expect(within(summary).getByText('Items')).toBeInTheDocument();
        expect(within(summary).getByText('1 item')).toBeInTheDocument();
        expect(within(summary).getByText('Total')).toBeInTheDocument();
        expect(within(summary).getByText('£10.00')).toBeInTheDocument();
    });

    it('shows US localized add button copy', () => {
        renderHome('us');

        const addButtons = screen.getAllByRole('button', { name: /Add to cart/i });

        expect(addButtons.length).toBeGreaterThan(0);
    });

    it('shows UK localized add button copy', () => {
        renderHome();

        const addButtons = screen.getAllByRole('button', { name: /Add to basket/i });

        expect(addButtons.length).toBeGreaterThan(0);
    });
});
