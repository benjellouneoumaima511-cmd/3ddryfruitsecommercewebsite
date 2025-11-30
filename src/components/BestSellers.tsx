import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    name: 'Premium Almond Mix',
    price: '$24.99',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Best Seller'
  },
  {
    name: 'Roasted Pistachio',
    price: '$32.99',
    rating: 5.0,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1734209181326-50c2b6763982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwbnV0cyUyMGNsb3NlfGVufDF8fHx8MTc2NDUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Premium'
  },
  {
    name: 'Golden Apricot',
    price: '$18.99',
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Organic'
  },
  {
    name: 'Luxury Cashew',
    price: '$28.99',
    rating: 4.9,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwcHJlbWl1bXxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'New'
  }
];

export function BestSellers() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F7F0E8] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Best Sellers
          </h2>
          <p className="text-xl text-[#6B4F36]/70">
            Our most loved premium selections
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* 3D Card */}
              <div className="relative bg-white rounded-[32px] overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:-translate-y-2">
                {/* Badge */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full glassmorphism text-sm text-[#6B4F36]">
                  {product.badge}
                </div>
                
                {/* Image container with 3D effect */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-[#F7F0E8] to-white">
                  <div className="absolute inset-0 transform group-hover:scale-110 transition-transform duration-700">
                    <ImageWithFallback 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60"></div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="mb-2">{product.name}</h4>
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
                    <span className="text-[#6B4F36]">{product.price}</span>
                    <button className="p-3 rounded-full bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white shadow-3d hover:shadow-3d-hover transform hover:scale-110 transition-all duration-300">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* 3D shadow base */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B4F36]/5 rounded-[32px] transform translate-y-2 -z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
