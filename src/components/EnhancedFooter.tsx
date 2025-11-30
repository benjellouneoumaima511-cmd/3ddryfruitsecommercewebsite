import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function EnhancedFooter() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-white to-[#F7F0E8] dark:from-gray-800 dark:to-gray-900 border-t border-[#6B4F36]/10 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-[#6B4F36] dark:text-white">{t('nav.brand')}</h3>
            <p className="text-[#6B4F36]/70 dark:text-white/70">
              Des fruits secs premium livrés avec amour et soin à votre porte.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d hover:shadow-3d-hover text-white flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#6B4F36] dark:text-white mb-4">Liens Rapides</h4>
            <ul className="space-y-3">
              {['Boutique', 'Meilleures Ventes', 'Nouveautés', 'Coffrets', 'Grossiste'].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#6B4F36]/70 dark:text-white/70 hover:text-[#D6A75C] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#6B4F36] dark:text-white mb-4">Informations</h4>
            <ul className="space-y-3">
              {['À Propos', 'Bienfaits', 'Qualité', 'Livraison', 'Retours'].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#6B4F36]/70 dark:text-white/70 hover:text-[#D6A75C] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#6B4F36] dark:text-white mb-4">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#6B4F36]/70 dark:text-white/70">
                <MapPin className="w-5 h-5 text-[#D6A75C] flex-shrink-0 mt-0.5" />
                <span>123 Avenue Bio, Casablanca, Maroc</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B4F36]/70 dark:text-white/70">
                <Phone className="w-5 h-5 text-[#D6A75C]" />
                <span>+212 5XX-XXXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B4F36]/70 dark:text-white/70">
                <Mail className="w-5 h-5 text-[#D6A75C]" />
                <span>contact@fruitsec.ma</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12 p-8 rounded-[32px] glassmorphism shadow-3d">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h4 className="text-[#6B4F36] dark:text-white">Restez Informé</h4>
            <p className="text-[#6B4F36]/70 dark:text-white/70">
              Inscrivez-vous à notre newsletter pour des offres exclusives
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-6 py-3 rounded-full bg-white dark:bg-gray-800 border border-[#6B4F36]/10 dark:border-white/10 text-[#6B4F36] dark:text-white placeholder:text-[#6B4F36]/40 dark:placeholder:text-white/40 focus:outline-none focus:border-[#D6A75C] transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-full shadow-3d hover:shadow-3d-hover transform hover:scale-105 transition-all duration-300">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#6B4F36]/10 dark:border-white/10 space-y-4">
          <div className="text-center text-[#6B4F36]/60 dark:text-white/60 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
          <div className="text-center">
            <p className="text-[#D6A75C] font-semibold">
              {t('footer.madeBy')}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-[#6B4F36]/60 dark:text-white/60 hover:text-[#D6A75C] transition-colors duration-300">Politique de Confidentialité</a>
            <a href="#" className="text-[#6B4F36]/60 dark:text-white/60 hover:text-[#D6A75C] transition-colors duration-300">Conditions d'Utilisation</a>
            <a href="#" className="text-[#6B4F36]/60 dark:text-white/60 hover:text-[#D6A75C] transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
