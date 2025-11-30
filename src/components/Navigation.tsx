import { ShoppingBag, Menu, Search, User } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d flex items-center justify-center">
              <span className="text-white text-xl">N</span>
            </div>
            <h3 className="text-[#6B4F36]">NutriLux</h3>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Shop', 'Categories', 'About', 'Benefits', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-[#6B4F36] hover:text-[#D6A75C] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 flex items-center justify-center transition-colors duration-300">
              <Search className="w-5 h-5 text-[#6B4F36]" />
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 flex items-center justify-center transition-colors duration-300">
              <User className="w-5 h-5 text-[#6B4F36]" />
            </button>
            <button className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d hover:shadow-3d-hover flex items-center justify-center transform hover:scale-110 transition-all duration-300">
              <ShoppingBag className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D6A75C] rounded-full text-white text-xs flex items-center justify-center shadow-3d">
                3
              </span>
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden w-10 h-10 rounded-full hover:bg-[#6B4F36]/5 flex items-center justify-center transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5 text-[#6B4F36]" />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-[#6B4F36]/10 space-y-3">
            {['Shop', 'Categories', 'About', 'Benefits', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="block py-2 text-[#6B4F36] hover:text-[#D6A75C] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
