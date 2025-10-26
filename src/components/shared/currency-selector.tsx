"use client";

import { useApp } from "@/hooks/use-app";
import { Button } from "@/components/ui/button";
import type { Currency } from "@/types";
import { cn } from "@/lib/utils";

const currencies: { id: Currency; label: string }[] = [
  { id: "USD", label: "USD ($)" },
  { id: "MAD", label: "MAD (DH)" },
  { id: "EUR", label: "EUR (€)" },
];

export function CurrencySelector() {
  const { currency, setCurrency } = useApp();

  return (
    <div className="inline-flex items-center rounded-lg bg-muted p-1">
      {currencies.map((c) => (
        <Button
          key={c.id}
          variant="ghost"
          size="sm"
          onClick={() => setCurrency(c.id)}
          className={cn(
            "rounded-md px-3 py-1",
            currency === c.id
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {c.label}
        </Button>
      ))}
    </div>
  );
}
