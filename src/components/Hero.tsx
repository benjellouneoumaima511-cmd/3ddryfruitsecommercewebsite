import { ImageWithFallback } from './figma/ImageWithFallback';
import { ShoppingBag } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F7F0E8] via-[#F7F0E8] to-[#D6A75C]/10">
      {/* Floating 3D elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Almond */}
        <div className="absolute top-[20%] left-[10%] animate-float">
          <div className="relative w-24 h-24 rounded-[40%_50%_60%_50%] bg-gradient-to-br from-[#D6A75C] to-[#6B4F36] shadow-3d transform rotate-12 hover:rotate-0 transition-transform duration-700">
            <div className="absolute inset-2 rounded-[40%_50%_60%_50%] bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Pistachio */}
        <div className="absolute top-[60%] left-[15%] animate-float-delayed">
          <div className="relative w-20 h-20 rounded-[50%_40%_50%_60%] bg-gradient-to-br from-[#3C7A4A] to-[#2a5535] shadow-3d transform -rotate-6 hover:rotate-6 transition-transform duration-700">
            <div className="absolute inset-2 rounded-[50%_40%_50%_60%] bg-gradient-to-br from-white/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Dried Apricot */}
        <div className="absolute top-[35%] right-[12%] animate-float-slow">
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-[#D6A75C] via-[#c9953d] to-[#8B6F47] shadow-3d hover:scale-110 transition-transform duration-700">
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
          </div>
        </div>
        
        {/* Additional floating elements */}
        <div className="absolute bottom-[25%] right-[20%] animate-float">
          <div className="w-16 h-16 rounded-[60%_40%_50%_50%] bg-gradient-to-br from-[#67375D] to-[#4a2643] shadow-3d"></div>
        </div>
        
        <div className="absolute top-[15%] right-[25%] animate-float-delayed">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D6A75C]/40 to-[#6B4F36]/40 blur-sm"></div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-[#3C7A4A]/10 border border-[#3C7A4A]/20">
              <span className="text-[#3C7A4A]">✨ Premium Quality Since 2020</span>
            </div>
            
            <h1 className="text-shadow-soft bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
              Nature's Finest Dry Fruits & Nuts
            </h1>
            
            <p className="text-xl text-[#6B4F36]/80 max-w-xl">
              Experience the perfect blend of taste and health with our carefully sourced, 
              premium quality dry fruits. Each piece is a testament to nature's luxury.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-300 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Shop Collection
              </button>
              <button className="px-8 py-4 glassmorphism rounded-full text-[#6B4F36] hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-[#D6A75C]">500+</div>
                <div className="text-sm text-[#6B4F36]/60">Happy Customers</div>
              </div>
              <div>
                <div className="text-[#D6A75C]">100%</div>
                <div className="text-sm text-[#6B4F36]/60">Natural Products</div>
              </div>
              <div>
                <div className="text-[#D6A75C]">50+</div>
                <div className="text-sm text-[#6B4F36]/60">Premium Varieties</div>
              </div>
            </div>
          </div>
          
          {/* Right content - Product showcase */}
          <div className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Main product image with 3D effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[400px] h-[400px] rounded-[40%] bg-gradient-to-br from-white/40 to-transparent backdrop-blur-sm shadow-3d transform hover:scale-105 transition-transform duration-700 overflow-hidden border border-white/20">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NTM3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Premium Mixed Nuts"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6B4F36]/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Orbiting mini elements */}
              <div className="absolute top-0 left-0 animate-orbit">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-3d border-4 border-white/50">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Almonds"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute bottom-0 right-0 animate-orbit-reverse">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-3d border-4 border-white/50">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dried Apricots"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Volumetric lighting effect */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-[#D6A75C]/20 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#3C7A4A]/10 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}
