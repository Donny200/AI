// app/layout.tsx
import type { Metadata } from "next";
import { LanguageProvider } from "./i18n/LanguageContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI500 Hackathon",
  description: "Create tomorrow with cutting-edge AI solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="theme-color" content="#00ff00" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}