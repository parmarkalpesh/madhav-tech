import Image from 'next/image';
import { servicesData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { SectionHeading } from './section-heading';

const Services = () => {
  return (
    <SectionWrapper id="services" className="bg-muted/30">
      <SectionHeading title="My Services" subtitle="What I Offer" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <Card key={index} className="flex flex-col text-center group overflow-hidden hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-primary/20">
            <CardHeader className="p-0">
               <div className="relative aspect-video overflow-hidden">
                <Image
                  src={service.image.src}
                  alt={service.title}
                  width={service.image.width}
                  height={service.image.height}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={service.image.hint}
                />
              </div>
            </CardHeader>
            <CardContent className="p-6 flex-1 flex flex-col">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20 group-hover:bg-primary/20 transition-colors -mt-12 bg-background z-10">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl font-semibold mb-2">{service.title}</CardTitle>
              <p className="text-foreground/80 flex-1">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;