import { Heart, Brain, Zap, Shield, Bone, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Rich in omega-3 fatty acids and antioxidants that support cardiovascular wellness',
    color: 'from-[#67375D] to-[#4a2643]'
  },
  {
    icon: Brain,
    title: 'Brain Function',
    description: 'Boost cognitive performance with natural nutrients and healthy fats',
    color: 'from-[#3C7A4A] to-[#2a5535]'
  },
  {
    icon: Zap,
    title: 'Energy Boost',
    description: 'Natural sugars and proteins provide sustained energy throughout the day',
    color: 'from-[#D6A75C] to-[#c9953d]'
  },
  {
    icon: Shield,
    title: 'Immunity',
    description: 'Packed with vitamins and minerals to strengthen your immune system',
    color: 'from-[#6B4F36] to-[#4a3424]'
  },
  {
    icon: Bone,
    title: 'Bone Strength',
    description: 'High calcium and magnesium content supports healthy bones',
    color: 'from-[#D6A75C] to-[#8B6F47]'
  },
  {
    icon: Sparkles,
    title: 'Skin Glow',
    description: 'Vitamin E and antioxidants promote radiant, youthful skin',
    color: 'from-[#67375D] to-[#3C7A4A]'
  }
];

export function HealthBenefits() {
  return (
    <section className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#D6A75C]/5 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-[#3C7A4A]/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Health Benefits
          </h2>
          <p className="text-xl text-[#6B4F36]/70 max-w-2xl mx-auto">
            Nature's gift to your wellness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* 3D Card with glassmorphism */}
                <div className="relative h-full p-8 rounded-[32px] bg-gradient-to-br from-white to-[#F7F0E8] shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:-translate-y-2">
                  {/* 3D Icon container */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 rounded-[24px] bg-gradient-to-br ${benefit.color} shadow-3d flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-[24px] bg-gradient-to-br ${benefit.color} opacity-20 blur-xl`}></div>
                  </div>
                  
                  <h4 className="mb-3 text-[#6B4F36]">{benefit.title}</h4>
                  <p className="text-[#6B4F36]/70">{benefit.description}</p>
                  
                  {/* Decorative corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#D6A75C] opacity-50"></div>
                </div>
                
                {/* Hover shadow effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B4F36]/5 rounded-[32px] transform translate-y-2 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
