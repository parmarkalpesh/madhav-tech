import Header from '@/components/site/header';
import Hero from '@/components/site/hero';
import About from '@/components/site/about';
import Services from '@/components/site/services';
import Projects from '@/components/site/projects';
import Contact from '@/components/site/contact';
import Footer from '@/components/site/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
