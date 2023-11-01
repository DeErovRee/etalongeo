"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const YandexMetrika = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = `${pathname}?${searchParams}`;
        ym(95364381, "hit", url);
    }, [pathname, searchParams]);

    return null;
};
