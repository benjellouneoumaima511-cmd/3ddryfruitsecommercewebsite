import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, Leaf, Truck, Users } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Carefully selected from the finest sources'
  },
  {
    icon: Leaf,
    title: '100% Natural',
    description: 'No artificial additives or preservatives'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Fresh products delivered to your doorstep'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Passionate about healthy living'
  }
];

export function About() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F7F0E8] relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-[60%_40%_70%_30%] bg-gradient-to-br from-[#D6A75C]/10 to-transparent blur-3xl animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-[40%_60%_50%_70%] bg-gradient-to-br from-[#3C7A4A]/10 to-transparent blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image collage with natural shapes */}
          <div className="relative h-[600px]">
            {/* Main large image */}
            <div className="absolute top-0 left-0 w-4/5 h-3/5 rounded-[40%_60%_50%_70%] overflow-hidden shadow-3d">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NTM3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium nuts collection"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Secondary image - bottom right */}
            <div className="absolute bottom-0 right-0 w-3/5 h-2/5 rounded-[50%_60%_40%_60%] overflow-hidden shadow-3d border-8 border-white">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1674066253665-4d2553a3bcb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlcyUyMGRyaWVkJTIwZnJ1aXR8ZW58MXx8fHwxNzY0NTM3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dates"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative floating card */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 glassmorphism rounded-3xl p-6 shadow-3d max-w-[200px]">
              <div className="text-[#D6A75C] mb-2">5 Years</div>
              <p className="text-sm text-[#6B4F36]">of Excellence in Quality</p>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-shadow-soft mb-6 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
                Crafting Nature's Perfection Since 2020
              </h2>
              <p className="text-lg text-[#6B4F36]/80 mb-6">
                We believe in bringing you the finest dry fruits and nuts, 
                sourced directly from nature's bounty. Each product is carefully 
                selected, processed, and packaged to preserve its natural goodness 
                and deliver maximum nutrition to your table.
              </p>
              <p className="text-lg text-[#6B4F36]/80">
                Our commitment to quality and sustainability drives everything we do. 
                From farm to your family, we ensure every step maintains the highest 
                standards of excellence.
              </p>
            </div>
            
            {/* Features grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="group space-y-3"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="text-[#6B4F36] mb-1">{feature.title}</h4>
                      <p className="text-sm text-[#6B4F36]/60">{feature.description}</p>
                    </div>
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
