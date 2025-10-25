import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils';
import { Poppins, Open_Sans } from 'next/font/google';

const fontHeadline = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-headline',
});

const fontBody = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'MadhavTech | Global IT Solutions & Web Development',
  description: "MadhavTech provides top-tier global IT solutions, including web and app development, and UI/UX design. We partner with international clients to deliver innovative and scalable technology services.",
  keywords: ['IT solutions', 'web development', 'app development', 'UI/UX design', 'international clients', 'global software company', 'technology services', 'offshore development'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(fontBody.variable, fontHeadline.variable, "font-body antialiased", "min-h-screen bg-background")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
