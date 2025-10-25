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
          <Card key={index} className="flex flex-col text-center p-6 group hover:border-primary transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-primary/20">
            <CardHeader>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border-2 border-primary/20 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
