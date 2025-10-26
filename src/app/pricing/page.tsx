"use client";

import { useApp } from "@/hooks/use-app";
import { PRICING_PLANS, CURRENCY_RATES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const currencySymbols = {
  USD: "$",
  MAD: "DH",
  EUR: "€",
};

export default function PricingPage() {
  const { currency } = useApp();
  const rate = CURRENCY_RATES[currency];
  const symbol = currencySymbols[currency];

  const formatPrice = (price: number) => {
    return `${symbol}${(price * rate).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
  };

  const formatRange = (range: { min: number; max: number }) => {
    if (range.min === range.max) {
      return formatPrice(range.min);
    }
    return `${formatPrice(range.min)} - ${formatPrice(range.max)}`;
  };

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Flexible Pricing for Every Need</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Choose the plan that's right for you. All prices are shown in {currency}.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {Object.values(PRICING_PLANS).map((plan, index) => (
            <Card key={plan.name} className={cn("flex flex-col", index === 2 ? "border-primary shadow-lg" : "")}>
              {index === 2 && (
                <div className="bg-primary text-primary-foreground text-center py-1.5 text-sm font-semibold rounded-t-lg">
                  Best Value
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription>
                  {plan.name === "School Bundle" ? "The complete solution for educational institutions." : `Perfect for starting with our ${plan.name.toLowerCase()} solution.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <div className="space-y-2">
                  {plan.setup && (
                    <div>
                      <span className="text-4xl font-bold">{formatRange(plan.setup)}</span>
                      <span className="text-muted-foreground"> / one-time setup</span>
                    </div>
                  )}
                  {plan.yearly && (
                     <div>
                      <span className="text-4xl font-bold">{formatRange(plan.yearly)}</span>
                      <span className="text-muted-foreground"> / year</span>
                    </div>
                  )}
                  <div>
                    <span className="text-4xl font-bold">{formatRange(plan.monthly)}</span>
                    <span className="text-muted-foreground"> / month</span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={index === 2 ? "default" : "outline"}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16 max-w-2xl mx-auto">
            <h3 className="font-headline text-xl font-semibold">Need a custom plan?</h3>
            <p className="text-muted-foreground mt-2 mb-4">We can create a tailored package to fit your unique requirements. Contact us for a personalized quote.</p>
            <Button asChild>
                <Link href="/contact">Contact Sales</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
