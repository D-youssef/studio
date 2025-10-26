import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

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
              <SocialIcon href="https://wa.me/212680546540">
                 <FaWhatsapp size={24} />
                 <span className="sr-only">WhatsApp</span>
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
