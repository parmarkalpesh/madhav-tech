import { contactData } from '@/lib/data';
import { SectionWrapper } from './section-wrapper';
import { SectionHeading } from './section-heading';
import ContactForm from './contact-form';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <SectionWrapper id="contact" className="bg-muted/30">
      <SectionHeading title="Contact Me" subtitle="Get in Touch" />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="font-headline text-2xl font-semibold">Let's connect</h3>
          <p className="text-foreground/80">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="space-y-4">
            {contactData.map((info) => (
              <a key={info.title} href={info.href} className="flex items-start gap-4 group p-4 rounded-lg hover:bg-card transition-colors">
                <div className="flex-shrink-0">
                  <info.icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{info.title}</h4>
                  <p className="text-foreground/80 group-hover:text-primary transition-colors">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
