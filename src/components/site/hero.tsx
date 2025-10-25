'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { heroData, socialLinks } from '@/lib/data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay"
import { useRef } from 'react';

const Hero = () => {
  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <section id="home" className="relative w-full h-[75vh] md:h-[85vh] text-white overflow-hidden">
      <Carousel 
        className="w-full h-full" 
        opts={{ loop: true }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="w-full h-full">
          {heroData.heroImages.map((image, index) => (
            <CarouselItem key={index} className="w-full h-full relative">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="w-full h-full object-cover"
                data-ai-hint={image.hint}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 bg-black/60" />
      </Carousel>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="space-y-2">
              <p className="text-xl md:text-2xl font-medium text-primary">Hello, we are</p>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
                {heroData.name}
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-white/90">
                {heroData.title}
              </h2>
            </div>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {heroData.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#contact">
                  <Button size="lg" className="rounded-full font-bold w-full sm:w-auto">
                    Contact Us
                  </Button>
              </a>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    <Button variant="outline" size="icon" className="rounded-full bg-transparent border-white/50 hover:bg-white/10">
                      <link.icon className="h-5 w-5" />
                    </Button>
                  </a>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
