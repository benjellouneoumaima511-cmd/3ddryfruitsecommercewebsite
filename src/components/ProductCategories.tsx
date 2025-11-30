import { ImageWithFallback } from './figma/ImageWithFallback';

const categories = [
  {
    name: 'Premium Almonds',
    image: 'https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#D6A75C] to-[#6B4F36]'
  },
  {
    name: 'Roasted Pistachios',
    image: 'https://images.unsplash.com/photo-1734209181326-50c2b6763982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwbnV0cyUyMGNsb3NlfGVufDF8fHx8MTc2NDUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#3C7A4A] to-[#2a5535]'
  },
  {
    name: 'Dried Apricots',
    image: 'https://images.unsplash.com/photo-1601368135477-472a330882a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGFwcmljb3RzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#D6A75C] to-[#c9953d]'
  },
  {
    name: 'Premium Cashews',
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwcHJlbWl1bXxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#D6A75C] to-[#8B6F47]'
  },
  {
    name: 'Organic Walnuts',
    image: 'https://images.unsplash.com/photo-1763220633240-83bc578103f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXRzJTIwbmF0dXJhbHxlbnwxfHx8fDE3NjQ1Mzc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#6B4F36] to-[#4a3424]'
  },
  {
    name: 'Golden Raisins',
    image: 'https://images.unsplash.com/photo-1598111388756-b2285cca0458?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlzaW5zJTIwb3JnYW5pY3xlbnwxfHx8fDE3NjQ1Mzc3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#67375D] to-[#4a2643]'
  }
];

export function ProductCategories() {
  return (
    <section className="py-20 px-6 bg-[#F7F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Explore Our Collection
          </h2>
          <p className="text-xl text-[#6B4F36]/70 max-w-2xl mx-auto">
            Handpicked varieties from the finest sources around the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-[32px] h-80 cursor-pointer transform hover:scale-105 transition-all duration-500"
            >
              {/* Background image */}
              <ImageWithFallback 
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-end p-8">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-white mb-2">{category.name}</h3>
                  <div className="w-12 h-1 bg-white rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
              
              {/* 3D border effect */}
              <div className="absolute inset-0 rounded-[32px] border-2 border-white/20 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
