import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState, useRef } from 'react';

const products = [
  {
    id: 1,
    name: 'Premium Almond Mix',
    price: 24.99,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Best Seller',
    discount: 15
  },
  {
    id: 2,
    name: 'Roasted Pistachio',
    price: 32.99,
    rating: 5.0,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1734209181326-50c2b6763982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwbnV0cyUyMGNsb3NlfGVufDF8fHx8MTc2NDUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Premium',
    discount: null
  },
  {
    id: 3,
    name: 'Golden Apricot',
    price: 18.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Organic',
    discount: 10
  },
  {
    id: 4,
    name: 'Luxury Cashew',
    price: 28.99,
    rating: 4.9,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwcHJlbWl1bXxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'New',
    discount: null
  },
  {
    id: 5,
    name: 'Organic Walnuts',
    price: 26.99,
    rating: 4.7,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1763220633240-83bc578103f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXRzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Premium',
    discount: 20
  },
  {
    id: 6,
    name: 'Medjool Dates',
    price: 22.99,
    rating: 4.9,
    reviews: 198,
    image: 'https://images.unsplash.com/photo-1674066253665-4d2553a3bcb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlcyUyMGRyaWVkJTIwZnJ1aXR8ZW58MXx8fHwxNzY0NTM3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Best Seller',
    discount: null
  }
];

interface ProductCardProps {
  product: typeof products[0];
  onAddToCart: (product: typeof products[0], element: HTMLElement) => void;
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isLiked, setIsLiked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = (y - centerY) / 10;
    const tiltY = -(x - centerX) / 10;
    setTilt({ x: tiltX, y: tiltY });
  };
  
  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };
  
  const handleAddToCart = () => {
    if (buttonRef.current) {
      onAddToCart(product, buttonRef.current);
    }
  };
  
  return (
    <div 
      ref={cardRef}
      className="group relative preserve-3d"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      {/* 3D Card */}
      <div className="relative bg-white rounded-[32px] overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-500">
        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
          <div className="px-3 py-1 rounded-full glassmorphism text-sm text-[#6B4F36]">
            {product.badge}
          </div>
          {product.discount && (
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#67375D] to-[#4a2643] text-white text-sm shadow-3d">
              -{product.discount}%
            </div>
          )}
        </div>
        
        {/* Quick actions */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shadow-3d hover:scale-110 transition-transform duration-300"
          >
            <Heart 
              className={`w-5 h-5 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-[#6B4F36]'
              }`}
            />
          </button>
          <button className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shadow-3d hover:scale-110 transition-transform duration-300">
            <Eye className="w-5 h-5 text-[#6B4F36]" />
          </button>
        </div>
        
        {/* Image container with hover effect */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F7F0E8] to-white">
          <div 
            className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
            style={{
              transform: `translateZ(20px) scale(${1 + Math.abs(tilt.x + tilt.y) / 100})`
            }}
          >
            <ImageWithFallback 
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
          
          {/* Shine effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)`,
              transform: 'translateX(-100%)',
              animation: 'shine 1.5s ease-in-out infinite'
            }}
          />
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h4 className="mb-2 group-hover:text-[#D6A75C] transition-colors duration-300">
              {product.name}
            </h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-[#D6A75C] text-[#D6A75C]' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-[#6B4F36]/60">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t border-[#6B4F36]/10">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#6B4F36]">
                ${product.price.toFixed(2)}
              </span>
              {product.discount && (
                <span className="text-sm text-[#6B4F36]/40 line-through">
                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                </span>
              )}
            </div>
            <button
              ref={buttonRef}
              onClick={handleAddToCart}
              className="group/btn relative p-3 rounded-full bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white shadow-3d hover:shadow-3d-hover transform hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              {/* Glowing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              <ShoppingCart className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* 3D shadow base */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B4F36]/10 rounded-[32px] transform translate-y-2 translate-z-[-10px] -z-10"></div>
    </div>
  );
}

export function AnimatedProductCards() {
  const [flyingProducts, setFlyingProducts] = useState<Array<{
    id: number;
    startX: number;
    startY: number;
  }>>([]);
  
  const cartRef = useRef<HTMLDivElement>(null);
  
  const handleAddToCart = (product: typeof products[0], element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    const cartRect = cartRef.current?.getBoundingClientRect();
    
    if (cartRect) {
      setFlyingProducts(prev => [...prev, {
        id: Date.now(),
        startX: rect.left,
        startY: rect.top
      }]);
      
      setTimeout(() => {
        setFlyingProducts(prev => prev.slice(1));
      }, 1000);
    }
  };
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F7F0E8] to-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Featured Products
          </h2>
          <p className="text-xl text-[#6B4F36]/70">
            Hover to experience 3D magic ✨
          </p>
        </div>
        
        {/* Floating cart indicator */}
        <div 
          ref={cartRef}
          className="fixed top-24 right-6 z-50 animate-bounce-subtle"
        >
          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d flex items-center justify-center">
            <ShoppingCart className="w-6 h-6 text-white" />
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-[#D6A75C] rounded-full text-white text-xs flex items-center justify-center shadow-3d animate-pulse">
              {flyingProducts.length}
            </span>
          </div>
        </div>
        
        {/* Flying products animation */}
        {flyingProducts.map(fp => (
          <div
            key={fp.id}
            className="fixed w-12 h-12 rounded-full bg-[#D6A75C] shadow-3d flex items-center justify-center z-50 animate-fly-to-cart pointer-events-none"
            style={{
              left: fp.startX,
              top: fp.startY
            }}
          >
            <ShoppingCart className="w-6 h-6 text-white" />
          </div>
        ))}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} onAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
