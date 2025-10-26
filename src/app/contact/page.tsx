"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";

import { submitContactForm } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, User, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export default function ContactPage() {
  const { toast } = useToast();
  const [state, formAction] = useFormState(submitContactForm, null);
  
  const { register, formState: { errors } } = useForm<ContactFormValues>({
      resolver: zodResolver(contactSchema),
      mode: 'onChange'
  });

  useEffect(() => {
    if (state?.type === 'success') {
      toast({
        title: "Success!",
        description: state.message,
      });
    } else if (state?.type === 'error' && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const getError = (field: keyof ContactFormValues) => {
    return errors[field]?.message || (state?.type === 'error' && state.errors?.[field]?.[0]);
  }

  return (
    <div className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="space-y-6 pt-4">
            <h1 className="text-4xl md:text-5xl font-headline font-bold">Get in Touch</h1>
            <p className="text-muted-foreground md:text-xl">
              Have a question or want to work together? Fill out the form, and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>contact@infynia.com</span>
                </div>
                 <div className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <span>+1 (555) 123-4567</span>
                </div>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">Send us a message</CardTitle>
              <CardDescription>We typically respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form action={formAction} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input {...register("name")} placeholder="Your Name" className="pl-10" />
                  {getError('name') && <p className="text-destructive text-sm mt-1">{getError('name')}</p>}
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input {...register("email")} type="email" placeholder="Your Email" className="pl-10" />
                  {getError('email') && <p className="text-destructive text-sm mt-1">{getError('email')}</p>}
                </div>
                
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input {...register("subject")} placeholder="Subject" className="pl-10" />
                  {getError('subject') && <p className="text-destructive text-sm mt-1">{getError('subject')}</p>}
                </div>

                <div>
                  <Textarea {...register("message")} placeholder="Your Message" rows={5} />
                  {getError('message') && <p className="text-destructive text-sm mt-1">{getError('message')}</p>}
                </div>
                
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
