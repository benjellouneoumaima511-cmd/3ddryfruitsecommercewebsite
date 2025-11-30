import { ShoppingBag, Menu, Search, Sun, Moon, Globe } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';

export function EnhancedNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { itemCount } = useCart();
  const { theme, toggleTheme } = useTheme();

  const isRTL = i18n.language === 'ar';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    setIsLangOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
              <span className="text-white text-xl font-bold">F</span>
            </div>
            <h3 className="text-[#6B4F36] dark:text-white">{t('nav.brand')}</h3>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['shop', 'categories', 'about', 'benefits', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[#6B4F36] dark:text-white hover:text-[#D6A75C] transition-colors duration-300"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 dark:hover:bg-white/5 flex items-center justify-center transition-all duration-300"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-[#6B4F36] dark:text-white" />
              ) : (
                <Sun className="w-5 h-5 text-[#6B4F36] dark:text-white" />
              )}
            </button>

            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 dark:hover:bg-white/5 flex items-center justify-center transition-all duration-300"
              >
                <Globe className="w-5 h-5 text-[#6B4F36] dark:text-white" />
              </button>

              {isLangOpen && (
                <div className="absolute top-12 right-0 glassmorphism rounded-2xl p-2 shadow-3d min-w-[120px] animate-scale-in">
                  <button
                    onClick={() => changeLanguage('fr')}
                    className={`w-full px-4 py-2 rounded-xl text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors ${
                      i18n.language === 'fr' ? 'bg-white/50 dark:bg-white/10' : ''
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full px-4 py-2 rounded-xl text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors ${
                      i18n.language === 'en' ? 'bg-white/50 dark:bg-white/10' : ''
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage('ar')}
                    className={`w-full px-4 py-2 rounded-xl text-left hover:bg-white/50 dark:hover:bg-white/10 transition-colors ${
                      i18n.language === 'ar' ? 'bg-white/50 dark:bg-white/10' : ''
                    }`}
                  >
                    العربية
                  </button>
                </div>
              )}
            </div>

            <button className="w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 dark:hover:bg-white/5 flex items-center justify-center transition-colors duration-300">
              <Search className="w-5 h-5 text-[#6B4F36] dark:text-white" />
            </button>

            <button
              onClick={() => scrollToSection('cart')}
              className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d hover:shadow-3d-hover flex items-center justify-center transform hover:scale-110 transition-all duration-300"
            >
              <ShoppingBag className="w-5 h-5 text-white" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D6A75C] rounded-full text-white text-xs flex items-center justify-center shadow-3d animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              className="md:hidden w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 dark:hover:bg-white/5 flex items-center justify-center transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-[#6B4F36] dark:text-white" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#6B4F36]/10 space-y-3 animate-slide-in-left">
            {['shop', 'categories', 'about', 'benefits', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 text-[#6B4F36] dark:text-white hover:text-[#D6A75C] transition-colors duration-300"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
