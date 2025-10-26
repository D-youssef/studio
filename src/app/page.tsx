import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Languages, Palette, DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    title: 'Inscription & FAQ',
    description: 'A streamlined school registration system with an integrated, intelligent FAQ module.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
    ),
  },
  {
    title: 'Parent Portal',
    description: 'Keep parents informed with real-time updates on attendance, notes, and school announcements.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
    ),
  },
  {
    title: 'Dentist Booking',
    description: 'Effortless appointment scheduling for dental clinics with Google Calendar integration.',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
    )
  },
];

const features = [
  {
    name: 'Multilingual Support',
    description: 'Engage with a global audience with seamless translations in English, French, and Arabic.',
    icon: Languages,
  },
  {
    name: 'Dark & Light Modes',
    description: 'A comfortable viewing experience, day or night, with a user-friendly theme toggle.',
    icon: Palette,
  },
  {
    name: 'Currency Switcher',
    description: 'Display pricing in USD, MAD, or EUR to cater to your international client base.',
    icon: DollarSign,
  },
  {
    name: 'Fully Customizable',
    description: 'Tailor every aspect of our solutions to fit the unique needs of your organization.',
    icon: CheckCircle2,
  },
];

const heroImage = PlaceHolderImages.find(img => img.id === "1");

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tighter">
                Infynia: Limitless Possibilities,
                <span className="block text-primary">Intelligently Delivered.</span>
              </h1>
              <p className="max-w-xl mx-auto md:mx-0 text-muted-foreground md:text-xl">
                Modern, multilingual, and user-friendly solutions designed to scale with your ambitions. From school administration to practice management, Infynia is your partner in growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="font-bold">
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-bold">
                  <Link href="/pricing">See Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
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
          </div>
        </div>
      </section>
      
      <section id="products" className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Our Flagship Products</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Powerful, intuitive, and ready to integrate into your workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.title} className="flex flex-col transition-transform transform hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-2xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-lg">
              <Link href="/products">Explore All Products &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Designed for a Global Audience</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              We build with flexibility and user experience at the core of everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.name} className="text-center p-4">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-headline font-bold mb-2">{feature.name}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
