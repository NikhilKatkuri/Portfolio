import "./globals.css";
import "../constants/Theme.css"; 
import type { Metadata } from "next";
import { homeMetadata } from "@/constants/meta";
import { getUnifiedSchema } from "@/constants/schema";

export const metadata: Metadata = homeMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          id="schema-graph"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getUnifiedSchema()),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col relative scroll-smooth bg-white text-black dark:bg-neutral-950 dark:text-white">
        {children}
      </body>
    </html>
  );
}
