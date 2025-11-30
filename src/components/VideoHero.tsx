import { useTranslation } from 'react-i18next';
import { ShoppingBag, ArrowRight, Sparkles, Play } from 'lucide-react';
import { useState } from 'react';

export function VideoHero() {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F0E8] dark:bg-gray-900 pt-20 transition-colors duration-300">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#D6A75C]/20 dark:bg-[#D6A75C]/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          <div className="space-y-8 order-2 lg:order-1">
            <div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glassmorphism shadow-3d animate-slide-in-left"
            >
              <Sparkles className="w-5 h-5 text-[#D6A75C] animate-pulse" />
              <span className="text-[#6B4F36] dark:text-white">{t('hero.subtitle')}</span>
            </div>

            <div className="space-y-4 animate-slide-in-left animation-delay-200">
              <h1
                className="text-shadow-soft leading-tight text-[#6B4F36] dark:text-white"
              >
                <span className="block">{t('hero.title1')}</span>
                <span className="block bg-gradient-to-r from-[#D6A75C] via-[#3C7A4A] to-[#67375D] bg-clip-text text-transparent">
                  {t('hero.title2')}
                </span>
              </h1>

              <p className="text-xl text-[#6B4F36]/80 dark:text-white/70 max-w-lg leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-in-left animation-delay-400">
              <button
                onClick={() => scrollToSection('categories')}
                className="group px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105 flex items-center gap-3 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ShoppingBag className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">{t('hero.shopBtn')}</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>

              <button
                onClick={() => scrollToSection('categories')}
                className="px-8 py-4 glassmorphism rounded-full text-[#6B4F36] dark:text-white hover:scale-105 transition-all duration-300 shadow-3d"
              >
                {t('hero.learnBtn')}
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-in-left animation-delay-600">
              {[
                { value: '10K+', label: t('hero.stats.customers') },
                { value: '100%', label: t('hero.stats.organic') },
                { value: '4.9★', label: t('hero.stats.rating') }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                >
                  <div className="p-4 rounded-2xl glassmorphism shadow-3d hover:shadow-3d-hover transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#6B4F36]/60 dark:text-white/60 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative h-[600px] lg:h-[700px]">
              <div className="absolute top-0 right-0 w-full lg:w-[85%] h-[70%] rounded-[48px] overflow-hidden shadow-3d animate-slide-in-right">
                <div className="relative w-full h-full bg-gradient-to-br from-[#6B4F36]/20 to-[#67375D]/20 flex items-center justify-center">
                  {!isPlaying ? (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-3d flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                    >
                      <Play className="w-8 h-8 text-[#6B4F36] ml-1" fill="currentColor" />
                    </button>
                  ) : (
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F36]/40 via-transparent to-transparent"></div>

                  <div className="absolute bottom-6 left-6 glassmorphism rounded-2xl px-6 py-4 shadow-3d animate-float">
                    <div className="text-sm text-white/80 mb-1">{t('hero.subtitle')}</div>
                    <div className="text-2xl font-bold text-white">249 MAD</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-[45%] h-[35%] rounded-[32px] overflow-hidden shadow-3d border-4 border-white dark:border-gray-800 animate-slide-in-right animation-delay-300">
                <img
                  src="https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dried Apricots"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="absolute top-[45%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-[#D6A75C] to-[#6B4F36] shadow-3d flex items-center justify-center animate-spin-slow">
                <div className="text-white text-center">
                  <div className="text-xs">NEW</div>
                  <div className="text-lg font-bold">2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#6B4F36]/30 dark:border-white/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#D6A75C] rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
