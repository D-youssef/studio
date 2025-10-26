import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FAQ_CATEGORIES } from "@/lib/constants";

export default function FAQPage() {
  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Frequently Asked Questions</h1>
          <p className="text-muted-foreground md:text-xl">
            Find answers to common questions about our products and services.
          </p>
        </div>

        <Tabs defaultValue="General" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            {Object.keys(FAQ_CATEGORIES).map((category) => (
              <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
            ))}
          </TabsList>
          
          {Object.entries(FAQ_CATEGORIES).map(([category, faqs]) => (
            <TabsContent key={category} value={category}>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
