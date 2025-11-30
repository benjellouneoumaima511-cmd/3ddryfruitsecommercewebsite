import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';

interface ProductCardProps {
  product: typeof products[0];
}

function ProductCard({ product }: ProductCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isLiked, setIsLiked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { t, i18n } = useTranslation();
  const { addToCart } = useCart();

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
    addToCart({
      id: product.id,
      name: i18n.language === 'fr' ? product.name : i18n.language === 'ar' ? product.nameAr : product.nameEn,
      price: product.price,
      image: product.image
    });
  };

  const productName = i18n.language === 'fr' ? product.name : i18n.language === 'ar' ? product.nameAr : product.nameEn;

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
      <div className="relative bg-white dark:bg-gray-800 rounded-[32px] overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-500">
        <div className="absolute top-4 left-4 right-4 z-10 flex justify-between items-start">
          <div className="px-3 py-1 rounded-full glassmorphism text-sm text-[#6B4F36] dark:text-white">
            {t(`products.${product.badge.toLowerCase().replace(' ', '')}`)}
          </div>
          {product.discount && (
            <div className="px-3 py-1 rounded-full bg-gradient-to-r from-[#67375D] to-[#4a2643] text-white text-sm shadow-3d">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shadow-3d hover:scale-110 transition-transform duration-300"
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isLiked ? 'fill-red-500 text-red-500 scale-110' : 'text-[#6B4F36] dark:text-white'
              }`}
            />
          </button>
          <button className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shadow-3d hover:scale-110 transition-transform duration-300">
            <Eye className="w-5 h-5 text-[#6B4F36] dark:text-white" />
          </button>
        </div>

        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F7F0E8] to-white dark:from-gray-700 dark:to-gray-800">
          <div
            className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
            style={{
              transform: `translateZ(20px) scale(${1 + Math.abs(tilt.x + tilt.y) / 100})`
            }}
          >
            <ImageWithFallback
              src={product.image}
              alt={productName}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-800 via-transparent to-transparent opacity-60"></div>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <h4 className="mb-2 text-[#6B4F36] dark:text-white group-hover:text-[#D6A75C] transition-colors duration-300">
              {productName}
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
              <span className="text-sm text-[#6B4F36]/60 dark:text-white/60">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-[#6B4F36]/10 dark:border-white/10">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#6B4F36] dark:text-white">
                {product.price} MAD
              </span>
              {product.discount && (
                <span className="text-sm text-[#6B4F36]/40 dark:text-white/40 line-through">
                  {Math.round(product.price / (1 - product.discount / 100))} MAD
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="group/btn relative p-3 rounded-full bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white shadow-3d hover:shadow-3d-hover transform hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 animate-pulse-glow"></div>
              <ShoppingCart className="w-5 h-5 relative z-10 group-hover/btn:rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B4F36]/10 dark:to-white/5 rounded-[32px] transform translate-y-2 translate-z-[-10px] -z-10"></div>
    </div>
  );
}

export function EnhancedProductCards() {
  const { t } = useTranslation();

  return (
    <section id="shop" className="py-20 px-6 bg-gradient-to-b from-[#F7F0E8] to-white dark:from-gray-900 dark:to-gray-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            {t('products.title')}
          </h2>
          <p className="text-xl text-[#6B4F36]/70 dark:text-white/70">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
