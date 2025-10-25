'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, socialLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileMenuOpen(false)}
          className="font-medium text-foreground/80 hover:text-primary transition-colors py-2"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border' : ''
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="font-headline text-2xl font-bold text-primary transition-transform hover:scale-105">
            MadhvTech<span className="text-foreground">.</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6 text-base">
            <NavLinks />
          </nav>

          <div className="flex items-center gap-2">
             <a href="#contact">
                <Button className="hidden sm:inline-flex rounded-full font-bold">
                  Let's Talk
                </Button>
            </a>
            
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-xs bg-background">
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                         <Link href="/" className="font-headline text-2xl font-bold text-primary">
                            MadhvTech<span className="text-foreground">.</span>
                        </Link>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetTrigger>
                    </div>
                  <nav className="flex flex-col items-center space-y-6 text-xl">
                    <NavLinks />
                  </nav>
                  <div className="mt-auto flex justify-center space-x-4">
                    {socialLinks.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <link.icon className="h-6 w-6" />
                            </Button>
                        </a>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
