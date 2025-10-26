"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { LanguageSwitcher } from "@/components/shared/language-switcher";
import { CurrencySwitcher } from "@/components/shared/currency-switcher";
import { useApp } from "@/hooks/use-app";

export function Header() {
  const pathname = usePathname();
  const { t } = useApp();

  const navItems = NAV_LINKS.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === link.href ? "text-primary font-semibold" : "text-muted-foreground"
      )}
    >
      {t(link.label)}
    </Link>
  ));

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">{t('header.toggleMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="p-4">
                <Logo />
              </div>
              <nav className="grid gap-6 text-lg font-medium p-4">
                {navItems}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <nav className="hidden md:flex items-center gap-6 text-sm">
                {navItems}
            </nav>
          </div>
          <div className="flex items-center">
            <CurrencySwitcher />
            <LanguageSwitcher />
            <ThemeToggle />
            <Button asChild className="ml-2 hidden lg:inline-flex">
              <Link href="/portal">{t('header.portalLogin')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
