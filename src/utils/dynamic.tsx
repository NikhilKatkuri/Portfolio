import { ReactNode } from "react";
 
export function formatDynamicText(str: string): ReactNode[] {
  return str.split("*").map((part, index) =>
    index % 2 === 0 ? part : <strong key={index} className="text-primary">{part}</strong>
  );
}