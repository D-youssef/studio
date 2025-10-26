"use client";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { useApp } from "@/hooks/use-app";

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find(img => img.id === '5');
  const { t } = useApp();
  
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">{t('about.title')}</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
             <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">{t('about.values.title')}</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><span className="font-semibold text-foreground">{t('about.values.customerCentric.title')}:</span> {t('about.values.customerCentric.text')}</li>
                <li><span className="font-semibold text-foreground">{t('about.values.innovation.title')}:</span> {t('about.values.innovation.text')}</li>
                <li><span className="font-semibold text-foreground">{t('about.values.integrity.title')}:</span> {t('about.values.integrity.text')}</li>
                <li><span className="font-semibold text-foreground">{t('about.values.globalMindset.title')}:</span> {t('about.values.globalMindset.text')}</li>
              </ul>
            </div>
          </div>
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
        </div>
      </div>
    </div>
  );
}
