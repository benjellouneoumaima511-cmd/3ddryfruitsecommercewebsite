import { Navigation } from './components/Navigation';
import { MagazineHero } from './components/MagazineHero';
import { ProductCategories } from './components/ProductCategories';
import { AnimatedProductCards } from './components/AnimatedProductCards';
import { ProductDetail } from './components/ProductDetail';
import { HealthBenefits } from './components/HealthBenefits';
import { About } from './components/About';
import { ScrollStory } from './components/ScrollStory';
import { PaymentMethods } from './components/PaymentMethods';
import { Testimonials } from './components/Testimonials';
import { InteractiveContact } from './components/InteractiveContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <MagazineHero />
      <ProductCategories />
      <AnimatedProductCards />
      <ProductDetail />
      <ScrollStory />
      <HealthBenefits />
      <About />
      <PaymentMethods />
      <Testimonials />
      <InteractiveContact />
      <Footer />
    </div>
  );
}