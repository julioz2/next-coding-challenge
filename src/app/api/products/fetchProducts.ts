import { Product } from "@/app/lib/types";

const URL = "https://v0-api-endpoint-request.vercel.app/api/products"

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await fetch(URL, {
        next: { revalidate: 300 },
    })

    if (!response.ok) {
        throw Error("Fail to fetch products");
    }

    const data = await response.json()

    return data.products
}