// src/components/LanguageSwitcher.tsx
"use client";

import { useLanguage } from "./LanguageProvider";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

// Language options with their flags
const languageOptions = [
  {
    locale: "en",
    name: "English",
    flag: "/images/flags/en.svg", // Make sure to add these flag SVGs to your public folder
  },
  {
    locale: "fr",
    name: "Français",
    flag: "/images/flags/fr.svg",
  },
  // Add more languages here in the future
];

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  // Find current language details
  const currentLang = languageOptions.find((lang) => lang.locale === locale) || languageOptions[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          {currentLang.flag ? (
            <Image
              src={currentLang.flag}
              alt={currentLang.name}
              width={24}
              height={24}
              className="rounded-sm"
            />
          ) : (
            <Globe size={18} />
          )}
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map((lang) => (
          <DropdownMenuItem
            key={lang.locale}
            onClick={() => setLocale(lang.locale)}
            className={locale === lang.locale ? "bg-primary/10" : ""}
          >
            <div className="flex items-center gap-2">
              {lang.flag && (
                <Image
                  src={lang.flag}
                  alt={lang.name}
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              )}
              <span>{lang.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}