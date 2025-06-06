"use client";

import { useEffect, useState } from "react";

export const useThemeDetector = () => {
    const getCurrentTheme = () => (typeof window !== 'undefined') ? window.matchMedia("(prefers-color-scheme: dark)").matches : false;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e: MediaQueryListEvent) => {
        setIsDarkTheme(e.matches);
    };

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        darkThemeMq.addEventListener("change", mqListener);
        return () => darkThemeMq.removeEventListener("change", mqListener);
    }, []);

    return isDarkTheme;
};