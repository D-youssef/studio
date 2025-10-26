import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
    {children}
  </a>
);

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">Limitless Possibilities, Intelligently Delivered.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Quick Links</h4>
            <ul className="space-y-1">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Legal</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">Connect With Us</h4>
            <div className="flex space-x-4">
              <SocialIcon href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                <span className="sr-only">LinkedIn</span>
              </SocialIcon>
              <SocialIcon href="#">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                 <span className="sr-only">Facebook</span>
              </SocialIcon>
              <SocialIcon href="#">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 2.8 3.2 3 5.2-1.4 1.2-3.1 2-4.9 2.2-2.1 6.4-10.3 10.3-17.1 7.8C.5 18.1-2.1 9.7 2.7 4.1c2.9-3.2 7.7-4.1 11.3-2.3 1.1.5 2.1 1.2 3.1 2.1 1-.2 2.1-.6 3.1-1.1.2 1.2-.3 2.5-1.2 3.4-1.3 1.1-2.8 1.9-4.3 2.4.9.2 1.8.3 2.7.3z"/></svg>
                 <span className="sr-only">X (Twitter)</span>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {year} Infynia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
