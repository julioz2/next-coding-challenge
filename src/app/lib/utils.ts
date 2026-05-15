import { RegionId } from "./regions";
import { Product } from "./types";

export function formatPrice(amount: number, locale: string, currency: string) {
    const safeLocale = locale || "en-GB";
    const safeCurrency = currency || "GBP";

    return new Intl.NumberFormat(safeLocale, { style: "currency", currency: safeCurrency }).format(amount);
}

export function normalizeMoreProduct(raw: Product): Product {
    return {
        id: `more-${raw.id}`,
        name: raw.name,
        price: raw.price,
        category: raw.category,
        stock: raw.stock,
    };
}

export function getRegionFromPath(pathname: string): RegionId {
    if (pathname.startsWith("/us")) return "us";
    return "uk";
}

export function localizedPath(lang: RegionId, path = ""): string {
    const suffix = path === "" ? "" : path.startsWith("/") ? path : `/${path}`;
    if (lang === "uk") {
        return suffix || "/";
    }
    return `/${lang}${suffix}`;
}