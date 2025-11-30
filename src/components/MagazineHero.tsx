import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export function MagazineHero() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  const heroImages = [
    'https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1734209181326-50c2b6763982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwbnV0cyUyMGNsb3NlfGVufDF8fHx8MTc2NDUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NTM3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];
  
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F7F0E8] pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#D6A75C]/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Magazine-style layout */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-5rem)]">
          {/* Left column - Main content */}
          <div className="lg:col-span-6 space-y-8 order-2 lg:order-1">
            {/* Issue badge */}
            <div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glassmorphism shadow-3d animate-slide-in-left"
              style={{ transform: `translateX(${scrollY * 0.1}px)` }}
            >
              <Sparkles className="w-5 h-5 text-[#D6A75C] animate-pulse" />
              <span className="text-[#6B4F36]">Winter Collection 2024</span>
            </div>
            
            {/* Magazine title */}
            <div className="space-y-4 animate-slide-in-left animation-delay-200">
              <div className="inline-block px-4 py-1 bg-[#3C7A4A]/10 rounded-full">
                <span className="text-sm text-[#3C7A4A] tracking-wider uppercase">Premium Selection</span>
              </div>
              
              <h1 
                className="text-shadow-soft leading-tight"
                style={{ transform: `translateY(${scrollY * 0.05}px)` }}
              >
                <span className="block text-[#6B4F36]">The Art of</span>
                <span className="block bg-gradient-to-r from-[#D6A75C] via-[#3C7A4A] to-[#67375D] bg-clip-text text-transparent">
                  Natural Luxury
                </span>
              </h1>
              
              <p className="text-xl text-[#6B4F36]/80 max-w-lg leading-relaxed">
                Discover handpicked dry fruits from around the world. Each piece tells 
                a story of quality, taste, and wellness.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-in-left animation-delay-400">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105 flex items-center gap-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ShoppingBag className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">Explore Collection</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
              </button>
              
              <button className="px-8 py-4 glassmorphism rounded-full text-[#6B4F36] hover:scale-105 transition-all duration-300 shadow-3d">
                View Lookbook
              </button>
            </div>
            
            {/* Stats with animation */}
            <div className="grid grid-cols-3 gap-6 pt-8 animate-slide-in-left animation-delay-600">
              {[
                { value: '10K+', label: 'Happy Customers' },
                { value: '100%', label: 'Organic' },
                { value: '4.9★', label: 'Rating' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="relative group cursor-pointer"
                >
                  <div className="p-4 rounded-2xl glassmorphism shadow-3d hover:shadow-3d-hover transition-all duration-300 transform hover:-translate-y-1">
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-[#6B4F36]/60 mt-1">{stat.label}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D6A75C]/20 to-[#3C7A4A]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right column - Magazine-style image grid */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-[600px] lg:h-[700px]">
              {/* Main featured image with slide effect */}
              <div className="absolute top-0 right-0 w-full lg:w-[85%] h-[70%] rounded-[48px] overflow-hidden shadow-3d animate-slide-in-right">
                <div className="relative w-full h-full">
                  {heroImages.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <ImageWithFallback 
                        src={img}
                        alt="Premium Dry Fruits"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F36]/40 via-transparent to-transparent"></div>
                  
                  {/* Floating price tag */}
                  <div className="absolute bottom-6 left-6 glassmorphism rounded-2xl px-6 py-4 shadow-3d animate-float">
                    <div className="text-sm text-white/80 mb-1">Starting from</div>
                    <div className="text-2xl font-bold text-white">$24.99</div>
                  </div>
                </div>
              </div>
              
              {/* Secondary smaller images */}
              <div className="absolute bottom-0 left-0 w-[45%] h-[35%] rounded-[32px] overflow-hidden shadow-3d border-4 border-white animate-slide-in-right animation-delay-300">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Dried Apricots"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Decorative badge */}
              <div className="absolute top-[45%] left-[10%] w-24 h-24 rounded-full bg-gradient-to-br from-[#D6A75C] to-[#6B4F36] shadow-3d flex items-center justify-center animate-spin-slow">
                <div className="text-white text-center">
                  <div className="text-xs">NEW</div>
                  <div className="text-lg font-bold">2024</div>
                </div>
              </div>
              
              {/* Slide indicators */}
              <div className="absolute bottom-[-40px] right-[10%] flex gap-3">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-12 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A]' 
                        : 'w-2 bg-[#6B4F36]/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#6B4F36]/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-[#D6A75C] rounded-full animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
