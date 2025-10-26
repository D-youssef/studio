import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PRODUCTS, UPCOMING_PRODUCTS } from "@/lib/constants";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg 
        {...props}
        role="img" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path 
            d="M12.04 2.5c-5.46 0-9.91 4.45-9.91 9.91 0 5.46 4.45 9.91 9.91 9.91 1.7 0 3.32-.42 4.77-1.21l3.43.9-1.12-3.32a9.8 9.8 0 0 0 1.74-5.28c0-5.46-4.45-9.91-9.91-9.91zM17.29 14.48c-.28-.14-1.66-.82-1.92-.91s-.45-.14-.64.14c-.19.28-.73.91-.89 1.1s-.33.21-.62.07c-1.12-.54-2.1-1.13-2.88-1.91-.78-.78-1.37-1.74-1.54-2.03-.17-.29-.02-.44.13-.58.13-.13.28-.33.42-.5.14-.17.19-.28.28-.47s.04-.36-.02-.51c-.06-.15-.63-1.51-.86-2.06s-.46-.46-.63-.46c-.17 0-.36 0-.55 0s-.48.07-.73.35c-.25.28-.98.96-1.2 2.33s.1 2.71.22 2.9c.12.19 1.21 1.86 2.96 2.6.43.18.77.29 1.04.37.52.16.98.14 1.35.09.42-.07 1.25-.51 1.42-1 .17-.48.17-.88.12-.98s-.19-.14-.4-.24z"
            fill="currentColor"
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
                        <WhatsAppIcon className="mr-2 h-5 w-5 text-[#25D366]" />
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
