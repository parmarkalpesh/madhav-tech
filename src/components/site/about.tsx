import Image from 'next/image';
import { aboutData } from '@/lib/data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { SectionHeading } from './section-heading';

const About = () => {
  return (
    <SectionWrapper id="about">
      <SectionHeading title="About Me" subtitle="My Introduction" />
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative group flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]">
            <Image
              src={aboutData.aboutImage.src}
              alt="About me image"
              width={aboutData.aboutImage.width}
              height={aboutData.aboutImage.height}
              className="rounded-2xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={aboutData.aboutImage.hint}
            />
             <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {aboutData.stats.map((stat, index) => (
              <Card key={index} className="text-center p-4 bg-card/80 hover:bg-card transition-colors shadow-lg">
                <CardHeader className="p-2">
                  <stat.icon className="h-8 w-8 mx-auto text-primary" />
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-foreground/80 whitespace-nowrap">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-lg text-foreground/80 text-center md:text-left">
            {aboutData.description}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
