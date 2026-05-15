import { Product } from "./types";

export type RegionId = "uk" | "us";

export const REGIONS = {
    uk: {
        pathPrefix: "",
        currency: "GBP",
        locale: "en-GB",
        labels: {
            productsHeading: "Products",
            addToBasket: "Add to basket",
            checkout: "Checkout",
            inStock: "In stock",
        },
        productName: (p: Product) => p.name.uk,
        productPrice: (p: Product) => p.price.gbp,
    },
    us: {
        pathPrefix: "/us",
        currency: "USD",
        locale: "en-US",
        labels: {
            productsHeading: "Products",
            addToBasket: "Add to cart",
            checkout: "Checkout",
            inStock: "In stock",
        },
        productName: (p: Product) => p.name.us,
        productPrice: (p: Product) => p.price.usd,
    },
};