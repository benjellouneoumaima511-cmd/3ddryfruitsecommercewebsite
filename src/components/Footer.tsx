import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F7F0E8] border-t border-[#6B4F36]/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-[#6B4F36]">NutriLux</h3>
            <p className="text-[#6B4F36]/70">
              Premium dry fruits and nuts delivered with love and care to your doorstep.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <button 
                  key={index}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d hover:shadow-3d-hover text-white flex items-center justify-center transform hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-[#6B4F36] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Shop All', 'Best Sellers', 'New Arrivals', 'Gift Sets', 'Wholesale'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-[#6B4F36]/70 hover:text-[#D6A75C] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h4 className="text-[#6B4F36] mb-4">Information</h4>
            <ul className="space-y-3">
              {['About Us', 'Health Benefits', 'Quality Promise', 'Shipping Info', 'Returns'].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-[#6B4F36]/70 hover:text-[#D6A75C] transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-[#6B4F36] mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#6B4F36]/70">
                <MapPin className="w-5 h-5 text-[#D6A75C] flex-shrink-0 mt-0.5" />
                <span>123 Organic Lane, Nature Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B4F36]/70">
                <Phone className="w-5 h-5 text-[#D6A75C]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[#6B4F36]/70">
                <Mail className="w-5 h-5 text-[#D6A75C]" />
                <span>hello@nutrilux.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mb-12 p-8 rounded-[32px] glassmorphism shadow-3d">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h4 className="text-[#6B4F36]">Stay Updated</h4>
            <p className="text-[#6B4F36]/70">
              Subscribe to our newsletter for exclusive offers and health tips
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white border border-[#6B4F36]/10 text-[#6B4F36] placeholder:text-[#6B4F36]/40 focus:outline-none focus:border-[#D6A75C] transition-colors duration-300"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-full shadow-3d hover:shadow-3d-hover transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#6B4F36]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#6B4F36]/60 text-sm">
          <p>© 2024 NutriLux. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D6A75C] transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-[#D6A75C] transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-[#D6A75C] transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
