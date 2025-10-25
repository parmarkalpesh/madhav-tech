import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { heroData, socialLinks } from '@/lib/data';
import { SectionWrapper } from './section-wrapper';

const Hero = () => {
  return (
    <SectionWrapper id="home" className="pt-24 md:pt-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-xl font-medium">Hello, we are</p>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight">
              {heroData.name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary">
              {heroData.title}
            </h2>
          </div>
          <p className="text-lg text-foreground/80 max-w-lg mx-auto md:mx-0">
            {heroData.description}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-3 pt-4">
            <a href="#contact">
                <Button size="lg" className="rounded-full font-bold">
                  Contact Us
                </Button>
            </a>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <link.icon className="h-5 w-5" />
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-primary/20 relative group">
            <Image
              src={heroData.profileImage.src}
              alt={heroData.name}
              width={heroData.profileImage.width}
              height={heroData.profileImage.height}
              priority
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={heroData.profileImage.hint}
            />
            <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Hero;
