"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "@/hooks/use-app";

export default function PortalPage() {
    const portalImage = PlaceHolderImages.find(img => img.id === '7');
    const { t } = useApp();

    return (
        <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center p-4">
             {portalImage && (
                <Image
                    src={portalImage.imageUrl}
                    alt={portalImage.description}
                    fill
                    className="object-cover -z-10 brightness-50"
                    data-ai-hint={portalImage.imageHint}
                />
             )}
            <Card className="w-full max-w-md bg-background/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                        <Lock className="w-12 h-12 text-primary"/>
                    </div>
                    <CardTitle className="text-3xl font-headline">{t('portal.title')}</CardTitle>
                    <CardDescription>{t('portal.description')}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                        {t('portal.message')}
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://example.com/login" target="_blank" rel="noopener noreferrer">
                            {t('portal.button')}
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
