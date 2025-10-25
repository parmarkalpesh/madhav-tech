import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <Link href="/" className="font-headline text-2xl font-bold text-primary transition-transform hover:scale-105 inline-block">
              MadhavTech<span className="text-foreground">.</span>
            </Link>
            <p className="mt-2 text-foreground/80">Global IT Solutions</p>
          </div>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-medium text-foreground/80 hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                <link.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} MadhavTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
