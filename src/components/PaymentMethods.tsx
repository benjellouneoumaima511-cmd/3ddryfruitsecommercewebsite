import { useState } from 'react';
import { CreditCard, Smartphone, Wallet, Shield, Check } from 'lucide-react';

const paymentMethods = [
  {
    id: 1,
    name: 'Credit Card',
    icon: CreditCard,
    description: 'Visa, Mastercard, Amex',
    color: 'from-[#6B4F36] to-[#67375D]',
    features: ['Instant Processing', '100% Secure', 'Refund Available']
  },
  {
    id: 2,
    name: 'Digital Wallet',
    icon: Smartphone,
    description: 'Apple Pay, Google Pay',
    color: 'from-[#3C7A4A] to-[#2a5535]',
    features: ['One-Tap Checkout', 'Encrypted', 'Fast & Easy']
  },
  {
    id: 3,
    name: 'PayPal',
    icon: Wallet,
    description: 'Secure online payment',
    color: 'from-[#D6A75C] to-[#c9953d]',
    features: ['Buyer Protection', 'Global Accepted', 'No Hidden Fees']
  }
];

export function PaymentMethods() {
  const [activeMethod, setActiveMethod] = useState(0);
  const [isRotating, setIsRotating] = useState(false);
  
  const handleMethodChange = (index: number) => {
    setIsRotating(true);
    setTimeout(() => {
      setActiveMethod(index);
      setIsRotating(false);
    }, 300);
  };
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F7F0E8] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D6A75C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3C7A4A]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Secure Payment Options
          </h2>
          <p className="text-xl text-[#6B4F36]/70">
            Choose your preferred payment method
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - 3D Rotating Card Display */}
          <div className="relative h-[500px] flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-md">
              {/* Main rotating card */}
              <div 
                className={`relative transition-all duration-500 ${
                  isRotating ? 'scale-95 opacity-50' : 'scale-100 opacity-100'
                }`}
                style={{
                  transform: isRotating ? 'rotateY(90deg)' : 'rotateY(0deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className={`relative w-full h-80 rounded-[32px] bg-gradient-to-br ${paymentMethods[activeMethod].color} shadow-3d p-8 flex flex-col justify-between overflow-hidden`}>
                  {/* Card pattern/texture */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-2xl"></div>
                  </div>
                  
                  {/* Card content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-3d">
                        {(() => {
                          const Icon = paymentMethods[activeMethod].icon;
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                        <div className="w-2 h-2 rounded-full bg-white/50"></div>
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-8">
                      <div className="flex gap-3">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className="flex gap-1">
                            {[...Array(4)].map((_, j) => (
                              <div key={j} className="w-2 h-2 rounded-full bg-white/60"></div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="text-sm text-white/70 mb-1">Payment Method</div>
                        <div className="text-xl font-bold text-white">
                          {paymentMethods[activeMethod].name}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-white/70 mb-1">Valid</div>
                        <div className="text-white">12/25</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chip simulation */}
                  <div className="absolute top-24 left-8 w-12 h-10 rounded bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-3d"></div>
                </div>
              </div>
              
              {/* Security badge */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 glassmorphism rounded-2xl px-6 py-3 shadow-3d flex items-center gap-3 animate-float">
                <Shield className="w-5 h-5 text-[#3C7A4A]" />
                <div>
                  <div className="text-sm font-bold text-[#6B4F36]">256-bit Encryption</div>
                  <div className="text-xs text-[#6B4F36]/60">PCI DSS Compliant</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Method Selection */}
          <div className="space-y-6">
            {paymentMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.id}
                  onClick={() => handleMethodChange(index)}
                  className={`group relative p-6 rounded-[28px] cursor-pointer transition-all duration-500 ${
                    activeMethod === index
                      ? 'bg-white shadow-3d scale-105'
                      : 'glassmorphism hover:shadow-3d hover:scale-102'
                  }`}
                >
                  {/* Active indicator */}
                  {activeMethod === index && (
                    <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gradient-to-br from-[#3C7A4A] to-[#2a5535] flex items-center justify-center shadow-3d animate-scale-in">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} shadow-3d flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-[#6B4F36] mb-1">{method.name}</h4>
                      <p className="text-sm text-[#6B4F36]/60 mb-3">{method.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {method.features.map((feature, i) => (
                          <div 
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F7F0E8] text-xs text-[#6B4F36]"
                          >
                            <div className="w-1 h-1 rounded-full bg-[#3C7A4A]"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover glow */}
                  <div className={`absolute inset-0 rounded-[28px] bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                </div>
              );
            })}
            
            {/* Trust badges */}
            <div className="pt-6 border-t border-[#6B4F36]/10">
              <div className="flex items-center justify-center gap-6 flex-wrap">
                {['SSL', 'PCI', 'Norton', 'McAfee'].map((badge, i) => (
                  <div 
                    key={i}
                    className="px-4 py-2 rounded-xl glassmorphism text-sm text-[#6B4F36]/60 hover:text-[#6B4F36] transition-colors duration-300"
                  >
                    🔒 {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
