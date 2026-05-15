import type { Product } from '@/app/lib/types';

export const mockCatalogProducts: Product[] = [
    {
        id: '1',
        name: { uk: 'Item 1', us: 'Item 1' },
        price: { gbp: 10, usd: 12 },
        category: 'Test',
        stock: 10,
    },
    {
        id: '2',
        name: { uk: 'Item 2', us: 'Item 2' },
        price: { gbp: 12, usd: 14 },
        category: 'Test',
        stock: 10,
    },
    {
        id: '3',
        name: { uk: 'Item 3', us: 'Item 3' },
        price: { gbp: 14, usd: 16 },
        category: 'Test',
        stock: 10,
    },
    {
        id: '4',
        name: { uk: 'Item 4', us: 'Item 4' },
        price: { gbp: 16, usd: 18 },
        category: 'Test',
        stock: 10,
    },
];
