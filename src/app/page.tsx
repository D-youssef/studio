

"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Languages, Palette, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/hooks/use-app';
import { AnimatedOnScroll } from '@/components/shared/animated-on-scroll';

const products = [
  {
    titleKey: 'products.inscription.title',
    descriptionKey: 'products.inscription.description',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
    ),
  },
  {
    titleKey: 'products.parentPortal.title',
    descriptionKey: 'products.parentPortal.description',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
    ),
  },
  {
    titleKey: 'products.dentistBooking.title',
    descriptionKey: 'products.dentistBooking.description',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
    )
  },
];

const features = [
  {
    nameKey: 'features.multilingual.name',
    descriptionKey: 'features.multilingual.description',
    icon: Languages,
  },
  {
    nameKey: 'features.darkLight.name',
    descriptionKey: 'features.darkLight.description',
    icon: Palette,
  },
  {
    nameKey: 'features.currency.name',
    descriptionKey: 'features.currency.description',
    icon: DollarSign,
  },
  {
    nameKey: 'features.customizable.name',
    descriptionKey: 'features.customizable.description',
    icon: CheckCircle2,
  },
];

const heroImage = PlaceHolderImages.find(img => img.id === "1");

export default function Home() {
  const { t } = useApp();
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedOnScroll animationName="animate__fadeInLeft">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
                  <div className="flex flex-col items-center justify-center md:items-start mb-4">
                    <span className="animate-text-shimmer bg-[linear-gradient(110deg,#334155,45%,#93c5fd,55%,#334155)] bg-[length:250%_100%] bg-clip-text text-transparent">
                      Infynia
                    </span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-spin-float md:hidden"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" /></svg>
                  </div>
                  {t('home.hero.title.part1')}<span className="block text-primary">{t('home.hero.title.part2')}</span>
                </h1>
                <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground md:text-xl">
                  {t('home.hero.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="font-bold">
                    <Link href="/contact">{t('home.hero.getStarted')}</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="font-bold">
                    <Link href="/pricing">{t('home.hero.seePricing')}</Link>
                  </Button>
                </div>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationName="animate__fadeInRight">
              <div className="relative h-64 md:h-auto md:aspect-video">
                {heroImage && 
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                    data-ai-hint={heroImage.imageHint}
                  />
                }
              </div>
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
      
      <section id="products" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animationName="animate__fadeInDown">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">{t('home.products.title')}</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                {t('home.products.subtitle')}
              </p>
            </div>
          </AnimatedOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedOnScroll key={product.titleKey} animationName="animate__fadeInUp" delay={`animate__delay-${index * 1}s`}>
                <Card className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl h-full">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <product.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-2xl">{t(product.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{t(product.descriptionKey)}</p>
                  </CardContent>
                </Card>
              </AnimatedOnScroll>
            ))}
          </div>
          <AnimatedOnScroll animationName="animate__fadeInUp">
            <div className="text-center mt-12">
              <Button asChild variant="link" className="text-lg">
                <Link href="/products">{t('home.products.exploreAll')}</Link>
              </Button>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animationName="animate__fadeInDown">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">{t('home.features.title')}</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
              {t('home.features.subtitle')}
              </p>
            </div>
          </AnimatedOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedOnScroll key={feature.nameKey} animationName="animate__zoomIn" delay={`animate__delay-${index * 1}s`}>
                <div className="text-center p-4">
                  <div className="flex justify-center mb-4">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-headline font-bold mb-2">{t(feature.nameKey)}</h3>
                  <p className="text-muted-foreground">{t(feature.descriptionKey)}</p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

    
    

    