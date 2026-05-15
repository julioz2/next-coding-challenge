import { Product } from "./types";

export const formatPrice = (amount: number) =>
    new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    }).format(amount);

export function normalizeMoreProduct(raw: Product): Product {
    return {
        id: `more-${raw.id}`,
        name: raw.name,
        price: raw.price,
        category: raw.category,
        stock: raw.stock,
    };
}