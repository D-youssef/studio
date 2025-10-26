"use client";

import { useApp } from "@/hooks/use-app";
import { PRICING_PLANS, CURRENCY_RATES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const currencySymbols = {
  USD: "$",
  MAD: "DH",
  EUR: "€",
};

export default function PricingPage() {
  const { currency } = useApp();
  const [isMounted, setIsMounted] = useState(false);
  const rate = CURRENCY_RATES[currency];
  const symbol = currencySymbols[currency];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const formatPrice = (price: number) => {
    const formattedPrice = (price * rate).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    return currency === "MAD" ? `${formattedPrice} ${symbol}` : `${symbol}${formattedPrice}`;
  };

  const formatRange = (range: { min: number; max: number }) => {
    if (range.min === range.max) {
      return formatPrice(range.min);
    }
    return `${formatPrice(range.min)} - ${formatPrice(range.max)}`;
  };

  return (
    <div className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Flexible Pricing for Every Need</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            Choose the plan that's right for you. All prices are shown in {currency}.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {Object.values(PRICING_PLANS).map((plan, index) => (
            <Card 
              key={plan.name} 
              className={cn(
                "flex flex-col rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2", 
                index === 2 ? "border-2 border-primary shadow-xl" : "border"
              )}
            >
              {index === 2 && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                  Best Value
                </div>
              )}
              <CardHeader className="text-center pt-8 pb-4">
                <CardTitle className="font-headline text-3xl">{plan.name}</CardTitle>
                <CardDescription className="px-6">
                  {plan.name === "School Bundle" ? "The complete solution for educational institutions." : `Perfect for starting with our ${plan.name.toLowerCase()} solution.`}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between px-8 space-y-8">
                <div className="space-y-4 text-center">
                  {plan.setup && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-primary">{isMounted ? formatRange(plan.setup) : '...'}</p>
                      <p className="text-sm text-muted-foreground">one-time setup</p>
                    </div>
                  )}
                  {plan.yearly && (
                     <div className="p-4 bg-muted/50 rounded-lg">
                      <p className="text-lg font-bold text-primary">{isMounted ? formatRange(plan.yearly) : '...'}</p>
                      <p className="text-sm text-muted-foreground">per year</p>
                    </div>
                  )}
                   <div className="p-4 bg-muted/50 rounded-lg">
                    <p className="text-lg font-bold text-primary">{isMounted ? formatRange(plan.monthly) : '...'}</p>
                    <p className="text-sm text-muted-foreground">per month</p>
                  </div>
                </div>
                <ul className="space-y-3 pt-4 border-t">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button asChild className="w-full text-lg py-6" size="lg" variant={index === 2 ? "default" : "outline"}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-20 max-w-2xl mx-auto bg-card p-8 rounded-xl shadow-sm border">
            <h3 className="font-headline text-2xl font-semibold">Need a custom plan?</h3>
            <p className="text-muted-foreground mt-2 mb-6">We can create a tailored package to fit your unique requirements. Contact us for a personalized quote.</p>
            <Button asChild size="lg">
                <Link href="/contact">Contact Sales</Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
