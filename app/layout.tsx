"use client";

import { useThemeDetector } from "@/lib/theme/use-theme-detector";
import "./globals.scss";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from "react";
import { ThemeContext } from "@/lib/theme/theme";
config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDarkTheme = useThemeDetector();
  const [theme, setTheme] = useState(isDarkTheme ? 'dark' : 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <html lang="en" className="has-navbar-fixed-top">
        <body >
          {children}
        </body>
      </html>
    </ThemeContext.Provider>
  );
}
