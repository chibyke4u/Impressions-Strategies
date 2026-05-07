import Hero from './Hero';
import Services from './Services';
import { FeatureSplit, Marquee, PortfolioGrid, Testimonials, VideoBanner, AccordionStats, ClientLogos, ContactSplit } from './HomeBlocks';
import { ThemeToggle } from './ThemeToggle';

export default function HomePage() {
  return (
    <>
      {/* Floating Theme Toggle specific to the Home Page */}
      <div className="fixed bottom-10 right-10 z-50">
        <ThemeToggle />
      </div>
      <Hero />
      <Services />
      <FeatureSplit />
      <Marquee />
      <PortfolioGrid />
      <Testimonials />
      <VideoBanner />
      <AccordionStats />
      <ClientLogos />
      <ContactSplit />
    </>
  );
}
