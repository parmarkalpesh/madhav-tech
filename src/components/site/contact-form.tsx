'use client';

import { useRef, useState, type FormEvent } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);

    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const whatsappMessage = `Hello MadhavTech,\n\nMy name is ${name} (${email}).\n\nI have a message for you:\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '917016223029';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
    
    // Reset form and button state
    setTimeout(() => {
        formRef.current?.reset();
        setIsSending(false);
    }, 1000);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" name="name" type="text" placeholder="John Doe" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Your Email</Label>
        <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required minLength={10} />
      </div>
      <Button type="submit" size="lg" className="w-full md:w-auto rounded-full font-bold" disabled={isSending}>
        {isSending ? (
          'Redirecting...'
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
