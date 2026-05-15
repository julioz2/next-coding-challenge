export interface Product {
    id: string;
    price: Price;
    category: string;
    name: Name;
    stock: number;
}

export interface Price {
    gbp: number;
    usd: number;
}

export interface Name {
    uk: string;
    us: string;
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