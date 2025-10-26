

"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Target, Eye, Sparkles, HandHeart, ShieldCheck, Combine, BrainCircuit } from 'lucide-react';
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

const coreValues = [
  {
    nameKey: 'home.values.innovation.name',
    descriptionKey: 'home.values.innovation.description',
    icon: Sparkles,
  },
  {
    nameKey: 'home.values.humanCentered.name',
    descriptionKey: 'home.values.humanCentered.description',
    icon: HandHeart,
  },
  {
    nameKey: 'home.values.trust.name',
    descriptionKey: 'home.values.trust.description',
    icon: ShieldCheck,
  },
  {
    nameKey: 'home.values.integration.name',
    descriptionKey: 'home.values.integration.description',
    icon: Combine,
  },
];

const InfinityHeroAnimation = () => (
  <div className="relative w-[200px] h-[120px] flex justify-center items-center md:w-[300px] md:h-[180px] lg:w-[400px] lg:h-[240px] mx-auto">
    <svg width="100%" height="100%" viewBox="0 0 200 120" className="infinity-animation" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M50 60C50 40 65 25 85 25C105 25 120 40 120 60C120 80 105 95 85 95C65 95 50 80 50 60Z" fill="url(#heroGradient1)" opacity="0.8"></path>
      <path d="M80 60C80 40 95 25 115 25C135 25 150 40 150 60C150 80 135 95 115 95C95 95 80 80 80 60Z" fill="url(#heroGradient2)" opacity="0.6"></path>
      <defs>
        <linearGradient id="heroGradient1" x1="50" y1="25" x2="120" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--primary))"></stop>
          <stop offset="1" stopColor="hsl(var(--accent))"></stop>
        </linearGradient>
        <linearGradient id="heroGradient2" x1="80" y1="25" x2="150" y2="95" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--accent))"></stop>
          <stop offset="1" stopColor="hsl(var(--primary))"></stop>
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export default function Home() {
  const { t } = useApp();
  const productsBgImage = PlaceHolderImages.find(img => img.id === '8');
  const missionBgImage = PlaceHolderImages.find(img => img.id === '1');
  const visionBgImage = PlaceHolderImages.find(img => img.id === '9');

  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-card/50">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <AnimatedOnScroll animationName="animate__fadeInLeft">
              <div className="space-y-6 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
                  <div className="flex items-center justify-center md:justify-start mb-4 gap-2">
                    <span className="animate-text-shimmer bg-[linear-gradient(110deg,hsl(var(--primary)),45%,hsl(var(--accent)),55%,hsl(var(--primary)))] bg-[length:250%_100%] bg-clip-text text-transparent">
                      Infynia
                    </span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-spin-float"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4z" /></svg>
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
              <InfinityHeroAnimation />
            </AnimatedOnScroll>
          </div>
        </div>
      </section>
      
      <section id="products" className="py-20 md:py-28 relative">
        {productsBgImage && (
          <Image
            src={productsBgImage.imageUrl}
            alt={productsBgImage.description}
            fill
            className="object-cover"
            data-ai-hint={productsBgImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 md:px-6 relative">
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
                <Card className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl h-full bg-card/80">
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
      
        <section id="mission-vision" className="py-20 md:py-28 grid md:grid-cols-2">
            <AnimatedOnScroll animationName="animate__fadeInLeft" className="relative p-8 md:p-12 flex flex-col justify-center">
                {missionBgImage && (
                    <Image
                        src={missionBgImage.imageUrl}
                        alt={missionBgImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={missionBgImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-card/90"></div>
                <div className="relative space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            <Target className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-headline font-bold mb-2">{t('home.mission.title')}</h3>
                            <p className="text-muted-foreground">{t('home.mission.description')}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-accent/10 p-3 rounded-full mt-1">
                            <BrainCircuit className="w-8 h-8 text-accent" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-headline font-bold mb-2">{t('home.belief.title')}</h3>
                            <p className="text-muted-foreground">{t('home.belief.description')}</p>
                        </div>
                    </div>
                </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationName="animate__fadeInRight" className="relative p-8 md:p-12 flex flex-col justify-center">
                {visionBgImage && (
                    <Image
                        src={visionBgImage.imageUrl}
                        alt={visionBgImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={visionBgImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-card/90"></div>
                <div className="relative">
                    <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-full mt-1">
                            <Eye className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-headline font-bold mb-2">{t('home.vision.title')}</h3>
                            <p className="text-muted-foreground">{t('home.vision.description')}</p>
                        </div>
                    </div>
                </div>
            </AnimatedOnScroll>
        </section>

        <section id="values" className="py-20 md:py-28 bg-transparent">
          <div className="container mx-auto px-4 md:px-6 relative">
            <AnimatedOnScroll animationName="animate__fadeInUp">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold">{t('home.values.title')}</h2>
                    <p className="max-w-2xl mx-auto text-muted-foreground">
                        {t('home.values.subtitle')}
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {coreValues.map((value, index) => (
                        <AnimatedOnScroll key={value.nameKey} animationName="animate__zoomIn" delay={`animate__delay-${index * 1}s`}>
                            <div className="text-center p-4">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-primary/10 p-4 rounded-full">
                                        <value.icon className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-headline font-bold mb-2">{t(value.nameKey)}</h3>
                                <p className="text-muted-foreground">{t(value.descriptionKey)}</p>
                            </div>
                        </AnimatedOnScroll>
                    ))}
                </div>
            </AnimatedOnScroll>
          </div>
        </section>
    </div>
  );
}

    