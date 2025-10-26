"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS, UPCOMING_PRODUCTS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useApp } from "@/hooks/use-app";

export default function ProductsPage() {
  const futureBlueprintImage = PlaceHolderImages.find(img => img.id === '6');
  const { t } = useApp();

  return (
    <div className="bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">{t('productsPage.title')}</h1>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
              {t('productsPage.subtitle')}
            </p>
          </div>

          <div className="space-y-20">
            {PRODUCTS.map((product, index) => (
              <div key={product.slug} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`relative h-80 rounded-xl overflow-hidden shadow-lg ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                  {product.image && (
                    <Image
                      src={product.image.imageUrl}
                      alt={product.image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={product.image.imageHint}
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-headline font-bold text-primary">{t(product.title)}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(product.description)}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button asChild>
                      <Link href="/pricing">{t('productsPage.viewPricing')}</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://wa.me/212680546540" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2 h-5 w-5 text-[#25D366]" />
                        {t('productsPage.contactOnWhatsApp')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-headline font-bold">{t('productsPage.comingSoon.title')}</h2>
              <p className="text-muted-foreground">
                {t('productsPage.comingSoon.description')}
              </p>
              <div className="space-y-6 pt-4">
                {UPCOMING_PRODUCTS.map((product) => (
                  <div key={product.title}>
                    <h3 className="font-semibold text-lg font-headline">{t(product.title)}</h3>
                    <p className="text-sm text-muted-foreground">{t(product.description)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                {futureBlueprintImage && (
                  <Image
                    src={futureBlueprintImage.imageUrl}
                    alt={futureBlueprintImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={futureBlueprintImage.imageHint}
                  />
                )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
