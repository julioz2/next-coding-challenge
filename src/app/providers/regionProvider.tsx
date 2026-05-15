"use client";

import { usePathname } from "next/navigation";
import { REGIONS } from "@/app/lib/regions";
import { createContext, useContext } from "react";
import { getRegionFromPath } from "../lib/utils";

const RegionContext = createContext(REGIONS.uk);

export function RegionProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const region = getRegionFromPath(pathname);

    return (
        <RegionContext.Provider value={REGIONS[region]}>
            {children}
        </RegionContext.Provider>
    );
}

export const useRegion = () => useContext(RegionContext);