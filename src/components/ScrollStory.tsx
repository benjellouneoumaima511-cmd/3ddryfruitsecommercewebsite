import { useEffect, useState, useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Heart, Sun, Award } from 'lucide-react';

const storySteps = [
  {
    icon: Sun,
    title: 'Sourced from Nature',
    description: 'Handpicked from the finest orchards under perfect sun conditions',
    image: 'https://images.unsplash.com/photo-1621926037410-5c727521e695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXhlZCUyMG51dHMlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NTM3NzQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#D6A75C] to-[#c9953d]'
  },
  {
    icon: Leaf,
    title: 'Organically Grown',
    description: 'Cultivated with sustainable practices and zero harmful chemicals',
    image: 'https://images.unsplash.com/photo-1615485737651-580c9159c89a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYWxtb25kcyUyMGx1eHVyeXxlbnwxfHx8fDE3NjQ1Mzc3NDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#3C7A4A] to-[#2a5535]'
  },
  {
    icon: Award,
    title: 'Quality Tested',
    description: 'Each batch undergoes rigorous testing for purity and nutrition',
    image: 'https://images.unsplash.com/photo-1734209181326-50c2b6763982?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXN0YWNoaW9zJTIwbnV0cyUyMGNsb3NlfGVufDF8fHx8MTc2NDUzNzc0MHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#67375D] to-[#4a2643]'
  },
  {
    icon: Heart,
    title: 'Delivered with Love',
    description: 'Carefully packaged to preserve freshness from our family to yours',
    image: 'https://images.unsplash.com/photo-1594900689460-fdad3599342c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXNoZXclMjBudXRzJTIwcHJlbWl1bXxlbnwxfHx8fDE3NjQ1Mzc3NDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-[#D6A75C] to-[#6B4F36]'
  }
];

export function ScrollStory() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrolled = -rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / (sectionHeight - window.innerHeight)));
        const step = Math.floor(progress * storySteps.length);
        setActiveStep(Math.min(step, storySteps.length - 1));
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section ref={sectionRef} className="relative py-32 px-6 bg-gradient-to-b from-white to-[#F7F0E8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up sticky top-32 z-10 pointer-events-none">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Our Journey to Your Table
          </h2>
          <p className="text-xl text-[#6B4F36]/70">
            Every product tells a story of quality and care
          </p>
        </div>
        
        {/* Scrolling story steps */}
        <div className="space-y-96">
          {storySteps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep >= index;
            const progress = activeStep === index ? 1 : (activeStep > index ? 1 : 0);
            
            return (
              <div 
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Image side - alternating */}
                <div 
                  className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} transition-all duration-1000 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  <div className="relative">
                    {/* Main image with parallax effect */}
                    <div 
                      className="relative h-[500px] rounded-[48px] overflow-hidden shadow-3d"
                      style={{
                        transform: `scale(${0.9 + progress * 0.1})`,
                        transition: 'transform 0.6s ease-out'
                      }}
                    >
                      <ImageWithFallback 
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${step.color} opacity-40`}></div>
                      
                      {/* Step number */}
                      <div className="absolute top-6 right-6 w-16 h-16 rounded-full glassmorphism shadow-3d flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">{index + 1}</span>
                      </div>
                    </div>
                    
                    {/* Decorative elements */}
                    <div 
                      className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br ${step.color} blur-2xl transition-opacity duration-1000`}
                      style={{ opacity: progress }}
                    ></div>
                  </div>
                </div>
                
                {/* Content side */}
                <div 
                  className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} transition-all duration-1000 ${
                    isActive ? 'opacity-100 translate-x-0' : `opacity-0 ${index % 2 === 0 ? 'translate-x-20' : '-translate-x-20'}`
                  }`}
                  style={{ transitionDelay: '400ms' }}
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div 
                      className={`inline-flex w-20 h-20 rounded-[24px] bg-gradient-to-br ${step.color} shadow-3d items-center justify-center transition-transform duration-700`}
                      style={{
                        transform: `rotate(${progress * 360}deg) scale(${0.8 + progress * 0.2})`
                      }}
                    >
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-[#6B4F36]">{step.title}</h3>
                    
                    {/* Description */}
                    <p className="text-xl text-[#6B4F36]/80 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Progress bar */}
                    <div className="pt-6">
                      <div className="h-2 bg-[#6B4F36]/10 rounded-full overflow-hidden">
                        <div 
                          className={`h-full bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${progress * 100}%` }}
                        />
                      </div>
                    </div>
                    
                    {/* Features list */}
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {['Premium Quality', 'Certified Organic', 'Fresh Delivery', 'Expert Tested'].map((feature, i) => (
                        <div 
                          key={i}
                          className={`flex items-center gap-2 transition-all duration-500`}
                          style={{
                            opacity: progress,
                            transform: `translateY(${(1 - progress) * 20}px)`,
                            transitionDelay: `${600 + i * 100}ms`
                          }}
                        >
                          <div className="w-2 h-2 rounded-full bg-[#3C7A4A]"></div>
                          <span className="text-sm text-[#6B4F36]/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Progress indicator */}
        <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col gap-4">
          {storySteps.map((step, index) => (
            <button
              key={index}
              onClick={() => {
                const element = sectionRef.current;
                if (element) {
                  const offset = (index / storySteps.length) * element.scrollHeight;
                  window.scrollTo({ top: element.offsetTop + offset, behavior: 'smooth' });
                }
              }}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeStep >= index 
                  ? 'bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] scale-125' 
                  : 'bg-[#6B4F36]/20 hover:bg-[#6B4F36]/40'
              }`}
            >
              <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                <div className="glassmorphism px-3 py-1 rounded-lg shadow-3d text-sm text-[#6B4F36]">
                  {step.title}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
