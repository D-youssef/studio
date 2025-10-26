import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function AboutPage() {
  const teamImage = PlaceHolderImages.find(img => img.id === '5');
  
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">About Infynia</h1>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
            We are a team of innovators dedicated to building intelligent, user-centric software for a global audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To empower organizations with scalable, intuitive, and multilingual digital tools that streamline complex processes and foster growth. We believe that technology should be an accessible asset, enabling our clients to focus on what they do best.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be a global leader in specialized software solutions, known for our commitment to innovation, quality, and customer success. We envision a future where our products create limitless possibilities for businesses and institutions worldwide.
              </p>
            </div>
             <div>
              <h2 className="text-3xl font-headline font-bold text-primary mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li><span className="font-semibold text-foreground">Customer-Centric:</span> We succeed when our customers succeed.</li>
                <li><span className="font-semibold text-foreground">Innovation:</span> We continuously explore new technologies to solve old problems.</li>
                <li><span className="font-semibold text-foreground">Integrity:</span> We build trust through transparency and quality.</li>
                <li><span className="font-semibold text-foreground">Global-Mindset:</span> We design for a diverse, interconnected world.</li>
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
