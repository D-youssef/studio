"use client";

import { Languages } from "lucide-react";
import { useApp } from "@/hooks/use-app";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languageNames = {
  en: "English",
  fr: "Français",
  ar: "العربية",
};

export function LanguageSwitcher() {
  const { language, setLanguage } = useApp();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          {languageNames.en}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          {languageNames.fr}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("ar")}>
          {languageNames.ar}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
