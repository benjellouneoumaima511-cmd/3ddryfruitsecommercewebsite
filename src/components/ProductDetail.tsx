import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';
import { Star, ShoppingCart, Heart, Share2, Plus, Minus, Shield, Truck, RotateCcw } from 'lucide-react';

const nutritionData = [
  { name: 'Protein', value: 85, color: '#3C7A4A' },
  { name: 'Fiber', value: 70, color: '#D6A75C' },
  { name: 'Vitamin E', value: 90, color: '#67375D' },
  { name: 'Iron', value: 65, color: '#6B4F36' },
  { name: 'Magnesium', value: 75, color: '#3C7A4A' }
];

export function ProductDetail() {
  const [rotation, setRotation] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const images = [
    'https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NTM3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwcHJlbWl1bXxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080'
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / sectionHeight));
        setScrollProgress(progress);
        setRotation(progress * 360);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-[#F7F0E8] to-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - 3D Rotating Product */}
          <div className="sticky top-24">
            <div className="relative">
              {/* Main rotating image */}
              <div 
                className="relative w-full aspect-square rounded-[48px] overflow-hidden shadow-3d bg-gradient-to-br from-white to-[#F7F0E8] mb-6"
                style={{
                  transform: `perspective(1000px) rotateY(${rotation}deg)`,
                  transition: 'transform 0.1s ease-out'
                }}
              >
                <ImageWithFallback 
                  src={images[selectedImage]}
                  alt="Premium Product"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating badge */}
                <div className="absolute top-6 left-6 glassmorphism rounded-2xl px-4 py-2 shadow-3d animate-float">
                  <div className="text-sm text-[#6B4F36]">⭐ Premium Quality</div>
                </div>
                
                {/* 360° indicator */}
                <div className="absolute bottom-6 right-6 glassmorphism rounded-full w-16 h-16 flex items-center justify-center shadow-3d">
                  <RotateCcw className="w-6 h-6 text-[#D6A75C] animate-spin-slow" />
                </div>
              </div>
              
              {/* Thumbnail selector */}
              <div className="flex gap-4 justify-center">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden transition-all duration-300 ${
                      selectedImage === index 
                        ? 'ring-4 ring-[#D6A75C] shadow-3d scale-110' 
                        : 'opacity-60 hover:opacity-100 shadow-3d'
                    }`}
                  >
                    <ImageWithFallback 
                      src={img}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
              
              {/* Scroll progress indicator */}
              <div className="mt-6 p-4 rounded-2xl glassmorphism">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-[#6B4F36]/70">Scroll to rotate 360°</span>
                  <span className="text-sm font-bold text-[#D6A75C]">{Math.round(scrollProgress * 100)}%</span>
                </div>
                <div className="h-2 bg-[#6B4F36]/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] transition-all duration-300 rounded-full"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-4 py-1 rounded-full bg-[#3C7A4A]/10 text-[#3C7A4A] text-sm">
                  In Stock
                </span>
                <span className="px-4 py-1 rounded-full bg-[#D6A75C]/10 text-[#D6A75C] text-sm">
                  Best Seller
                </span>
              </div>
              
              <h1 className="text-shadow-soft mb-4 text-[#6B4F36]">
                Premium Almond Mix
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D6A75C] text-[#D6A75C]" />
                  ))}
                </div>
                <span className="text-[#6B4F36]/70">4.9 (234 reviews)</span>
              </div>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-4xl font-bold text-[#6B4F36]">$24.99</span>
                <span className="text-xl text-[#6B4F36]/40 line-through">$32.99</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#67375D] to-[#4a2643] text-white text-sm">
                  Save 24%
                </span>
              </div>
              
              <p className="text-lg text-[#6B4F36]/80 leading-relaxed">
                Handpicked premium almonds from California's finest orchards. Rich in protein, 
                vitamin E, and healthy fats. Perfect for snacking, baking, or adding to your 
                favorite recipes.
              </p>
            </div>
            
            {/* Animated Nutrition Bars */}
            <div className="p-6 rounded-[32px] bg-gradient-to-br from-white to-[#F7F0E8] shadow-3d animate-fade-in-up animation-delay-200">
              <h3 className="text-[#6B4F36] mb-6">Nutritional Highlights</h3>
              <div className="space-y-4">
                {nutritionData.map((nutrient, index) => (
                  <div 
                    key={index}
                    className="animate-slide-in-left"
                    style={{ animationDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#6B4F36]">{nutrient.name}</span>
                      <span className="text-[#6B4F36] font-bold">{nutrient.value}%</span>
                    </div>
                    <div className="h-3 bg-[#6B4F36]/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out shadow-glow"
                        style={{ 
                          width: `${nutrient.value}%`,
                          backgroundColor: nutrient.color,
                          animation: `expandBar 1s ease-out ${0.4 + index * 0.1}s forwards`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-3 p-2 rounded-2xl glassmorphism shadow-3d">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-xl bg-white hover:bg-[#F7F0E8] flex items-center justify-center transition-colors duration-300"
                >
                  <Minus className="w-5 h-5 text-[#6B4F36]" />
                </button>
                <span className="text-xl font-bold text-[#6B4F36] min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-xl bg-white hover:bg-[#F7F0E8] flex items-center justify-center transition-colors duration-300"
                >
                  <Plus className="w-5 h-5 text-[#6B4F36]" />
                </button>
              </div>
              
              <button className="flex-1 group px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-2xl shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <ShoppingCart className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                <span className="relative z-10">Add to Cart</span>
              </button>
              
              <button className="w-14 h-14 rounded-2xl glassmorphism shadow-3d hover:shadow-3d-hover flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Heart className="w-6 h-6 text-[#6B4F36]" />
              </button>
              
              <button className="w-14 h-14 rounded-2xl glassmorphism shadow-3d hover:shadow-3d-hover flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Share2 className="w-6 h-6 text-[#6B4F36]" />
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-3 gap-4 animate-fade-in-up animation-delay-600">
              {[
                { icon: Shield, text: 'Quality Guaranteed' },
                { icon: Truck, text: 'Free Shipping' },
                { icon: RotateCcw, text: '30-Day Returns' }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 rounded-2xl glassmorphism shadow-3d hover:shadow-3d-hover transition-all duration-300 hover:-translate-y-1 text-center"
                  >
                    <Icon className="w-8 h-8 text-[#D6A75C] mx-auto mb-2" />
                    <div className="text-sm text-[#6B4F36]">{feature.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
