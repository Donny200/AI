// components/LanguageSwitcher.tsx
"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/app/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "uz" : "en")}
      className="fixed top-6 right-20 z-50 flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-lg hover:bg-secondary transition-all hover:scale-105 text-primary font-medium"
    >
      <Globe className="w-5 h-5" />
      {language.toUpperCase()}
    </button>
  );
}