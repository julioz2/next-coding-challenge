import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const DEFAULT_LANG = "uk";
/** Locales that appear in the URL */
const PREFIXED_LANGS = ["us"] as const;

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Skip API, Next assets, static files
    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        /\.[^/]+$/.test(pathname)
    ) {
        return NextResponse.next();
    }

    const segments = pathname.split("/").filter(Boolean);
    const first = segments[0];

    // /uk or /uk/checkout → / or /checkout (hide UK prefix)
    if (first === DEFAULT_LANG) {
        const url = request.nextUrl.clone();
        const rest = segments.slice(1).join("/");
        url.pathname = rest ? `/${rest}` : "/";
        return NextResponse.redirect(url);
    }

    // /us, /us/checkout — URL stays as-is; [lang] = us
    if (PREFIXED_LANGS.includes(first as (typeof PREFIXED_LANGS)[number])) {
        return NextResponse.next();
    }

    // Everything else (/, /checkout) → internal /uk, /uk/checkout
    const url = request.nextUrl.clone();
    url.pathname =
        pathname === "/"
            ? `/${DEFAULT_LANG}`
            : `/${DEFAULT_LANG}${pathname}`;

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};