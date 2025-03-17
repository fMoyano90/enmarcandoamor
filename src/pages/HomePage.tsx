import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ServicesSection } from '../components/ServicesSection';
import { GallerySection } from '../components/GallerySection';
import { BenefitsSection } from '../components/BenefitsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';

export const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <BenefitsSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
};
