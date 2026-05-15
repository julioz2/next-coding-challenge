"use client"

import { BasketProvider } from "./providers/basketProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <BasketProvider>
            {children}
        </BasketProvider>
    );
};