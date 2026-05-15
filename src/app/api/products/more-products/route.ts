import { fetchMoreProducts } from "@/app/api/products/fetchMoreProducts";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const products = await fetchMoreProducts();
        return Response.json(products);
    } catch {
        return Response.json({ error: "Failed" }, { status: 500 });
    }
}