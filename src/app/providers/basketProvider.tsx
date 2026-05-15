import { createContext, useContext, useEffect, useState } from "react";
import { BasketItem } from "@/app/lib/types";
import { usePathname } from "next/navigation";

interface BasketContextType {
    basket: BasketItem[];
    addToBasket: (productId: string) => void;
    toggleBasket: () => void;
    closeBasket: () => void;
    openBasket: boolean;
}

export const BasketContext = createContext<BasketContextType>({
    basket: [],
    addToBasket: () => { },
    toggleBasket: () => { },
    closeBasket: () => { },
    openBasket: false,
});

export const BasketProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [basket, setBasket] = useState<BasketItem[]>([]);
    const [openBasket, setOpenBasket] = useState(false);

    const toggleBasket = () => {
        setOpenBasket(!openBasket);
    };

    const closeBasket = () => {
        setOpenBasket(false);
    };

    const addToBasket = (productId: string) => {
        setBasket((prevBasket: BasketItem[]) => {
            const itemInBasket = prevBasket.find((item) => item.id === productId);

            if (!itemInBasket) {
                return [{ id: productId, quantity: 1 }, ...prevBasket];
            }

            return prevBasket.map((i) =>
                i.id === productId
                    ? { ...i, quantity: itemInBasket.quantity + 1 }
                    : i,
            );
        });
    };

    useEffect(() => {
        setOpenBasket(false);
    }, [pathname]);

    return (
        <BasketContext.Provider value={{ basket, addToBasket, toggleBasket, closeBasket, openBasket }}>
            {children}
        </BasketContext.Provider>
    );
};

export const useBasket = () => {
    return useContext(BasketContext);
};