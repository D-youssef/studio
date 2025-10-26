"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useApp } from "@/hooks/use-app";
import { AnimatedOnScroll } from "@/components/shared/animated-on-scroll";
import { BrainCircuit, Zap, Globe, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find(img => img.id === '5');
  const { t } = useApp();
  
  return (
    <AnimatedOnScroll animationName="animate__fadeIn">
      <div className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <AnimatedOnScroll animationName="animate__fadeInDown">
            <div className="text-center space-y-4 mb-16">
              <h1 className="text-4xl md:text-5xl font-headline font-bold">{t('about.title')}</h1>
              <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                {t('about.subtitle')}
              </p>
            </div>
          </AnimatedOnScroll>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedOnScroll animationName="animate__fadeInLeft">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-headline font-bold text-primary mb-4">{t('about.mission.title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.mission.text')}
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-headline font-bold text-primary mb-4">{t('about.vision.title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('about.vision.text')}
                  </p>
                </div>
              </div>
            </AnimatedOnScroll>
            <AnimatedOnScroll animationName="animate__fadeInRight">
              <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
                {teamImage && (
                  <Image
                    src={teamImage.imageUrl}
                    alt={teamImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={teamImage.imageHint}
                  />
                )}
              </div>
            </AnimatedOnScroll>
          </div>
          
          <AnimatedOnScroll animationName="animate__fadeInUp" className="mt-20">
             <div className="text-center space-y-4 my-16">
              <h2 className="text-3xl md:text-4xl font-headline font-bold">{t('about.values.title')}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full"><BrainCircuit className="w-8 h-8 text-primary" /></div>
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{t('about.values.intelligence.title')}</h3>
                <p className="text-muted-foreground">{t('about.values.intelligence.text')}</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full"><Zap className="w-8 h-8 text-primary" /></div>
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{t('about.values.efficiency.title')}</h3>
                <p className="text-muted-foreground">{t('about.values.efficiency.text')}</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full"><ShieldCheck className="w-8 h-8 text-primary" /></div>
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{t('about.values.reliability.title')}</h3>
                <p className="text-muted-foreground">{t('about.values.reliability.text')}</p>
              </div>
              <div className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full"><Globe className="w-8 h-8 text-primary" /></div>
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{t('about.values.scalability.title')}</h3>
                <p className="text-muted-foreground">{t('about.values.scalability.text')}</p>
              </div>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </AnimatedOnScroll>
  );
}
