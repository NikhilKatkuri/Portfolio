export type AccentColor = "blue" | "green" | "amber" | "purple";

interface AccentStyles {
  chip: string;
  icon: string;
  border: string;
  shadow: string;
  gradient: string;
  dot: string;
  badge: string;
}

const accentStyles: Record<AccentColor, AccentStyles> = {
  blue: {
    chip: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    icon: "text-blue-500",
    border: "border-blue-500/20",
    shadow: "hover:shadow-blue-500/10",
    gradient: "from-blue-500/5 to-transparent",
    dot: "bg-blue-500",
    badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  green: {
    chip: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    icon: "text-emerald-500",
    border: "border-emerald-500/20",
    shadow: "hover:shadow-emerald-500/10",
    gradient: "from-emerald-500/5 to-transparent",
    dot: "bg-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    chip: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    icon: "text-amber-500",
    border: "border-amber-500/20",
    shadow: "hover:shadow-amber-500/10",
    gradient: "from-amber-500/5 to-transparent",
    dot: "bg-amber-500",
    badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  purple: {
    chip: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    icon: "text-purple-500",
    border: "border-purple-500/20",
    shadow: "hover:shadow-purple-500/10",
    gradient: "from-purple-500/5 to-transparent",
    dot: "bg-purple-500",
    badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
};

export function getAccentStyles(accent: AccentColor): AccentStyles {
  return accentStyles[accent];
}
