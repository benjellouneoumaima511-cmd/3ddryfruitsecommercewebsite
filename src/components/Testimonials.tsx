import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Wellness Coach',
    rating: 5,
    text: 'The quality is exceptional! These are by far the best dry fruits I\'ve ever tasted. The freshness and natural flavors are unmatched.',
    avatar: 'SM'
  },
  {
    name: 'David Chen',
    role: 'Food Blogger',
    rating: 5,
    text: 'I recommend these to all my followers. The premium almonds and pistachios are a game-changer for my healthy snacking routine.',
    avatar: 'DC'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Nutritionist',
    rating: 5,
    text: 'As a nutritionist, I\'m impressed by the quality standards. Perfect for my clients who demand the best for their health.',
    avatar: 'ER'
  },
  {
    name: 'Michael Thompson',
    role: 'Fitness Enthusiast',
    rating: 5,
    text: 'These nuts give me the energy I need for my workouts. The taste is incredible and they\'re packed with nutrients.',
    avatar: 'MT'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#F7F0E8] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-[#D6A75C]/10 to-[#67375D]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#3C7A4A]/10 to-[#D6A75C]/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-shadow-soft mb-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#6B4F36]/70">
            Join thousands of happy customers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative h-full p-8 rounded-[32px] glassmorphism shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:-translate-y-2 border border-white/40">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#D6A75C]/20 to-[#6B4F36]/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#6B4F36]/40" fill="currentColor" />
                </div>
                
                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i}
                      className="w-5 h-5 fill-[#D6A75C] text-[#D6A75C]"
                    />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-lg text-[#6B4F36]/80 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-[#6B4F36]/10">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                    <span>{testimonial.avatar}</span>
                  </div>
                  
                  {/* Name and role */}
                  <div>
                    <div className="text-[#6B4F36]">{testimonial.name}</div>
                    <div className="text-sm text-[#6B4F36]/60">{testimonial.role}</div>
                  </div>
                </div>
                
                {/* Decorative gradient accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D6A75C] via-[#3C7A4A] to-[#67375D] rounded-b-[32px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              {/* 3D shadow layer */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#6B4F36]/5 rounded-[32px] transform translate-y-2 -z-10"></div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <div className="inline-block glassmorphism rounded-2xl px-8 py-4 shadow-3d">
            <div className="flex items-center gap-4 text-[#6B4F36]">
              <div className="flex -space-x-3">
                {['#D6A75C', '#3C7A4A', '#67375D', '#6B4F36'].map((color, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white shadow-3d flex items-center justify-center text-white text-xs"
                    style={{ backgroundColor: color }}
                  >
                    {i + 1}K
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div>Join 500+ Happy Customers</div>
                <div className="text-sm text-[#6B4F36]/60">⭐ 4.9 Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
