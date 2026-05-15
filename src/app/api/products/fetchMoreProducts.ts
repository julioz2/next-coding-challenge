import { Product } from "@/app/lib/types";
import { normalizeMoreProduct } from "@/app/lib/utils";

const URL = "https://v0-api-endpoint-request.vercel.app/api/more-products"

export const fetchMoreProducts = async (): Promise<Product[]> => {
    const response = await fetch(URL, {
        cache: "no-store",
    })

    if (!response.ok) {
        throw Error("Fail to fetch more products");
    }

    const data = await response.json()

    return data.products.map(normalizeMoreProduct);
}