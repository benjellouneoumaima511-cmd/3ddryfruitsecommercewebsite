import './i18n';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { EnhancedNavigation } from './components/EnhancedNavigation';
import { VideoHero } from './components/VideoHero';
import { ProductCategories } from './components/ProductCategories';
import { EnhancedProductCards } from './components/EnhancedProductCards';
import { HealthBenefits } from './components/HealthBenefits';
import { About } from './components/About';
import { ShoppingCart } from './components/ShoppingCart';
import { Testimonials } from './components/Testimonials';
import { InteractiveContact } from './components/InteractiveContact';
import { EnhancedFooter } from './components/EnhancedFooter';
import { Chatbot } from './components/Chatbot';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <div className="min-h-screen bg-[#F7F0E8] dark:bg-gray-900 transition-colors duration-300">
          <EnhancedNavigation />
          <VideoHero />
          <ProductCategories />
          <EnhancedProductCards />
          <HealthBenefits />
          <About />
          <ShoppingCart />
          <Testimonials />
          <InteractiveContact />
          <EnhancedFooter />
          <Chatbot />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}