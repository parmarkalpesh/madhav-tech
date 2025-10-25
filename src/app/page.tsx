import Header from '@/components/site/header';
import Hero from '@/components/site/hero';
import About from '@/components/site/about';
import Services from '@/components/site/services';
import Projects from '@/components/site/projects';
import Contact from '@/components/site/contact';
import Footer from '@/components/site/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MadhavTech | Global IT Solutions & Web Development',
  description: "MadhavTech provides top-tier global IT solutions, including web and app development, and UI/UX design. We partner with international clients to deliver innovative and scalable technology services.",
  keywords: ['IT solutions', 'web development', 'app development', 'UI/UX design', 'international clients', 'global software company', 'technology services', 'offshore development', 'custom software development', 'IT consulting', 'nearshore outsourcing', 'dedicated development team'],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MadhavTech",
  "url": "https://www.madhav.tech", // Replace with your actual domain
  "logo": "https://www.madhav.tech/logo.png", // Replace with a link to your logo
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7016223029",
    "contactType": "Customer Service"
  },
  "sameAs": [
    "https://www.linkedin.com/company/madhav-tech/",
    "https://www.instagram.com/madhav.tech_/"
  ]
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <div className='bg-background'>
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
