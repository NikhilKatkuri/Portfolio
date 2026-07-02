"use client";
import {
  SolarMoonBoldDuotone,
  SolarSunBoldDuotone,
  SolarTvBoldDuotone,
} from "@/icons";
import { useTheme } from "../Theme";
import cn from "@/utils/cn";

function ThemeButtons() {
  const { mode, changeMode } = useTheme();
  return (
    <div className="flex items-center gap-3">
      <button
        aria-label="System theme"
        onClick={() => changeMode("system")}
        className={cn(
          "w-10 aspect-square flex items-center justify-center rounded-full border border-button-secondary-border hover:bg-button-secondary cursor-pointer",
          mode === "system" && "bg-button-nav-hover",
        )}
      >
        <SolarTvBoldDuotone className="text-button-on-secondary" />
      </button>
      <button
        aria-label="Light theme"
        onClick={() => changeMode("light")}
        className={cn(
          "w-10 aspect-square flex items-center justify-center rounded-full border border-button-secondary-border hover:bg-button-secondary cursor-pointer",
          mode === "light" && "bg-button-nav-hover",
        )}
      >
        <SolarSunBoldDuotone className="text-button-on-secondary" />
      </button>
      <button
        aria-label="Dark theme"
        onClick={() => changeMode("dark")}
        className={cn(
          "w-10 aspect-square flex items-center justify-center rounded-full border border-button-secondary-border hover:bg-button-secondary cursor-pointer",
          mode === "dark" && "bg-button-nav-hover",
        )}
      >
        <SolarMoonBoldDuotone className="fill-button-on-secondary" />
      </button>
    </div>
  );
}
export default ThemeButtons;
