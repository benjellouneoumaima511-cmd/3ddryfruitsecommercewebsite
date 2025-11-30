import { useState } from 'react';
import { Send, MapPin, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';

export function InteractiveContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };
  
  const contactCards = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Organic Lane, Nature Valley',
      color: 'from-[#3C7A4A] to-[#2a5535]'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      color: 'from-[#D6A75C] to-[#c9953d]'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@nutrilux.com',
      color: 'from-[#67375D] to-[#4a2643]'
    }
  ];
  
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#F7F0E8] relative overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#D6A75C]/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#3C7A4A]/10 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-[#6B4F36]/70">
            We'd love to hear from you
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Moving contact cards */}
          <div className="space-y-6">
            {contactCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div 
                  key={index}
                  className="group animate-slide-in-left"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative p-8 rounded-[32px] glassmorphism shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:-translate-y-2 hover:translate-x-2 cursor-pointer">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#D6A75C] via-[#3C7A4A] to-[#67375D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                    
                    <div className="flex items-center gap-6">
                      <div className={`w-20 h-20 rounded-[24px] bg-gradient-to-br ${card.color} shadow-3d flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        <h4 className="text-[#6B4F36] mb-2">{card.title}</h4>
                        <p className="text-[#6B4F36]/70">{card.content}</p>
                      </div>
                    </div>
                    
                    {/* Hover particles */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <Sparkles className="w-5 h-5 text-[#D6A75C] animate-pulse" />
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Fun fact card */}
            <div className="p-8 rounded-[32px] bg-gradient-to-br from-[#D6A75C]/20 to-[#3C7A4A]/20 border border-white/40 animate-slide-in-left animation-delay-600">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <h4 className="text-[#6B4F36] mb-2">Did you know?</h4>
                  <p className="text-sm text-[#6B4F36]/70">
                    We respond to all inquiries within 24 hours and offer personalized 
                    recommendations based on your health goals!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Animated form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="relative p-8 lg:p-12 rounded-[48px] bg-white shadow-3d">
              {/* Success animation overlay */}
              {showSuccess && (
                <div className="absolute inset-0 bg-white rounded-[48px] flex flex-col items-center justify-center z-20 animate-fade-in">
                  <div className="animate-scale-in">
                    <CheckCircle2 className="w-24 h-24 text-[#3C7A4A] mb-4 animate-bounce-in" />
                  </div>
                  <h3 className="text-[#6B4F36] mb-2">Message Sent! 🎉</h3>
                  <p className="text-[#6B4F36]/70">We'll get back to you soon</p>
                  
                  {/* Confetti particles */}
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full animate-confetti"
                      style={{
                        backgroundColor: ['#D6A75C', '#3C7A4A', '#67375D'][i % 3],
                        left: `${50 + (Math.random() - 0.5) * 100}%`,
                        top: `${50 + (Math.random() - 0.5) * 100}%`,
                        animationDelay: `${Math.random() * 0.5}s`
                      }}
                    />
                  ))}
                </div>
              )}
              
              <div className="space-y-6">
                {/* Name field */}
                <div className="relative">
                  <label 
                    className={`block text-sm text-[#6B4F36]/70 mb-2 transition-all duration-300 ${
                      focusedField === 'name' ? 'text-[#D6A75C]' : ''
                    }`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F7F0E8] border-2 border-transparent focus:border-[#D6A75C] text-[#6B4F36] transition-all duration-300 outline-none"
                      placeholder="John Doe"
                      required
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 transition-opacity duration-300 -z-10 blur-sm ${
                      focusedField === 'name' ? 'opacity-30' : ''
                    }`}></div>
                  </div>
                </div>
                
                {/* Email field */}
                <div className="relative">
                  <label 
                    className={`block text-sm text-[#6B4F36]/70 mb-2 transition-all duration-300 ${
                      focusedField === 'email' ? 'text-[#D6A75C]' : ''
                    }`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F7F0E8] border-2 border-transparent focus:border-[#D6A75C] text-[#6B4F36] transition-all duration-300 outline-none"
                      placeholder="john@example.com"
                      required
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#3C7A4A] to-[#67375D] opacity-0 transition-opacity duration-300 -z-10 blur-sm ${
                      focusedField === 'email' ? 'opacity-30' : ''
                    }`}></div>
                  </div>
                </div>
                
                {/* Message field */}
                <div className="relative">
                  <label 
                    className={`block text-sm text-[#6B4F36]/70 mb-2 transition-all duration-300 ${
                      focusedField === 'message' ? 'text-[#D6A75C]' : ''
                    }`}
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows={5}
                      className="w-full px-6 py-4 rounded-2xl bg-[#F7F0E8] border-2 border-transparent focus:border-[#D6A75C] text-[#6B4F36] transition-all duration-300 outline-none resize-none"
                      placeholder="Tell us what you're looking for..."
                      required
                    />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-[#67375D] to-[#D6A75C] opacity-0 transition-opacity duration-300 -z-10 blur-sm ${
                      focusedField === 'message' ? 'opacity-30' : ''
                    }`}></div>
                  </div>
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  className="group w-full px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-2xl shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Send Message</span>
                  <Send className="w-5 h-5 relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
