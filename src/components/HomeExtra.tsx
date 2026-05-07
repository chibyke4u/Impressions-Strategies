import { FeatureSplit, Marquee, PortfolioGrid, Testimonials, VideoBanner, AccordionStats, ClientLogos, ContactSplit } from './HomeBlocks';

// Encapsulates the features created in prompt 1
export default function HomePage() {
  return (
    <>
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
