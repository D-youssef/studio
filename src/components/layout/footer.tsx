"use client";

import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { useApp } from "@/hooks/use-app";

const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
    {children}
  </a>
);

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useApp();

  return (
    <footer className="bg-card border-t relative overflow-hidden">
        <div className="area">
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
      <div className="container relative z-10 py-12 px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">{t('footer.tagline')}</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">{t('footer.quickLinks')}</h4>
            <ul className="space-y-1">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">{t(link.label)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">{t('footer.legal')}</h4>
            <ul className="space-y-1">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('footer.privacyPolicy')}</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">{t('footer.termsOfService')}</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold font-headline">{t('footer.connectWithUs')}</h4>
            <div className="flex space-x-4">
              <SocialIcon href="https://wa.me/212680546540">
                 <FaWhatsapp size={24} />
                 <span className="sr-only">WhatsApp</span>
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          &copy; {year} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
}
