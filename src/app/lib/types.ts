export interface Product {
    id: string;
    price: number;
    category: string;
    title: string;
    availableQuantity?: number;
}

export interface Item {
    name: string;
    quantity: number;
    id: string;
}

export interface BasketItem {
    id: string;
    quantity: number;
}