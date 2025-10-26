import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS, UPCOMING_PRODUCTS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 11.96c0-5.52-4.48-10-10-10S2 6.44 2 11.96c0 4.16 2.54 7.74 6.18 9.22l-1.64 4.82 5.08-2.62c1.1.28 2.26.44 3.44.44h.02c5.52 0 10-4.48 10-10z" />
        <path
            stroke="white"
            strokeWidth="2.5"
            d="M17.65 14.88c-.29-.14-1.69-.83-1.95-.93-.26-.09-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.17.19-.34.22-.63.07-.29-.14-1.24-.46-2.36-1.45-.87-.78-1.46-1.74-1.63-2.03-.18-.29-.02-.45.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.09-.19.05-.37-.02-.52s-.64-1.53-.87-2.08c-.23-.55-.47-.48-.64-.48-.17 0-.36-.02-.55-.02-.19 0-.48.07-.73.35-.25.29-.98.95-1.2 2.33-.22 1.38.1 2.71.22 2.9.12.19 1.22 1.86 3 2.6.43.18.77.29 1.04.37.52.16.98.14 1.35.09.42-.07 1.25-.51 1.42-1 .18-.48.18-.88.12-.98-.06-.1-.2-.14-.4-.24z"
        />
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
