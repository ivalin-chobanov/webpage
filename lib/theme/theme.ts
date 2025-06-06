"use client";

import { createContext } from "react";

export interface ThemeContextValue {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);