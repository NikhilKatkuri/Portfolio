"use client";

import { db } from "@/lib/db";
import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

interface ThemeProviderTypes<T> {
  mode: ThemeMode;
  changeMode: (mode: T) => void;
}

const ThemeContext = createContext<ThemeProviderTypes<ThemeMode> | null>(null);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  
  const [mode, setMode] = useState<ThemeMode>("light");

  function applyThemeToDom(Theme: Omit<ThemeMode, "system"> & string) {
    document.documentElement.setAttribute("data-theme", Theme);
  }

  function resloveThemeAndApplyToDom(targetMode: ThemeMode) {
    if (targetMode === "system") {
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      applyThemeToDom(isDarkMode ? "dark" : "light");
      return;
    }
    applyThemeToDom(targetMode);
  }

  async function changeMode(Theme: ThemeMode) {
    setMode(Theme);
    resloveThemeAndApplyToDom(Theme);
    await db.themeConfig.put({
      key: "current-theme",
      value: Theme,
    });
  }

  useEffect(() => {
    async function loadTheme() {
      try {
        const storedTheme = await db.themeConfig.get("current-theme");
        const themeval = (storedTheme?.value as ThemeMode) ?? "system";
        setMode(themeval);
        resloveThemeAndApplyToDom(themeval);
      } catch (e) {
        setMode("system");
        resloveThemeAndApplyToDom("system");
      }
    }
    loadTheme();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleSystemThemeChange(e: MediaQueryListEvent) {
      if (mode === "system") {
        applyThemeToDom(e.matches ? "dark" : "light");
      }
    }
    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
