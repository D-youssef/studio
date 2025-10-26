import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS, UPCOMING_PRODUCTS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);


export default function ProductsPage() {
  const futureBlueprintImage = PlaceHolderImages.find(img => img.id === '6');

  return (
    <div className="bg-background">
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Our Solutions</h1>
            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
              Discover our suite of intelligent, scalable, and user-centric products designed to solve real-world challenges.
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
                  <h2 className="text-3xl font-headline font-bold text-primary">{product.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex gap-4 pt-4">
                    <Button asChild>
                      <Link href="/pricing">View Pricing</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="https://wa.me/212680546540" target="_blank" rel="noopener noreferrer">
                        <WhatsAppIcon className="mr-2 h-5 w-5" />
                        Contact on WhatsApp
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
              <h2 className="text-3xl font-headline font-bold">Coming Soon</h2>
              <p className="text-muted-foreground">
                Innovation never stops at Infynia. We are constantly developing new tools to empower our clients. Here&apos;s a sneak peek at what&apos;s next.
              </p>
              <div className="space-y-6 pt-4">
                {UPCOMING_PRODUCTS.map((product) => (
                  <div key={product.title}>
                    <h3 className="font-semibold text-lg font-headline">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
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
