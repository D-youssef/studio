"use client";

import { DollarSign } from "lucide-react";
import { useApp } from "@/hooks/use-app";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function CurrencySwitcher() {
  const { currency, setCurrency } = useApp();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <DollarSign className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change currency</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setCurrency("USD")}>
          USD ($)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrency("MAD")}>
          MAD (DH)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrency("EUR")}>
          EUR (€)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
