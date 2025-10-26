import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ExternalLink, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function PortalPage() {
    const portalImage = PlaceHolderImages.find(img => img.id === '7');

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
                    <CardTitle className="text-3xl font-headline">Parent Portal</CardTitle>
                    <CardDescription>Secure access to your child&apos;s information.</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                    <p className="text-muted-foreground">
                        You are being redirected to our secure parent portal. Please use your provided credentials to log in.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="#">
                            Proceed to Secure Login
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
