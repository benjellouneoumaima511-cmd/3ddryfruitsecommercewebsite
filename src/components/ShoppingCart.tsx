import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { CheckoutModal } from './CheckoutModal';

export function ShoppingCart() {
  const { t } = useTranslation();
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const shipping = 30;
  const finalTotal = total + shipping;

  return (
    <>
      <section id="cart" className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-shadow-soft mb-12 text-center bg-gradient-to-r from-[#6B4F36] to-[#67375D] bg-clip-text text-transparent">
            {t('cart.title')}
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-20 glassmorphism rounded-[48px] shadow-3d">
              <ShoppingBag className="w-20 h-20 text-[#6B4F36]/30 dark:text-white/30 mx-auto mb-6" />
              <p className="text-xl text-[#6B4F36]/60 dark:text-white/60 mb-6">{t('cart.empty')}</p>
              <button
                onClick={() => {
                  const element = document.getElementById('categories');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-full shadow-3d hover:shadow-3d-hover transition-all duration-300"
              >
                {t('cart.continueShopping')}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="glassmorphism rounded-[32px] p-6 shadow-3d hover:shadow-3d-hover transition-all duration-300 flex items-center gap-6"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <h4 className="text-[#6B4F36] dark:text-white mb-2">{item.name}</h4>
                    <p className="text-2xl font-bold text-[#D6A75C]">{item.price.toFixed(2)} MAD</p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-10 h-10 rounded-xl glassmorphism shadow-3d hover:shadow-3d-hover flex items-center justify-center transition-all duration-300"
                    >
                      <Minus className="w-5 h-5 text-[#6B4F36] dark:text-white" />
                    </button>
                    <span className="text-xl font-bold text-[#6B4F36] dark:text-white min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-10 h-10 rounded-xl glassmorphism shadow-3d hover:shadow-3d-hover flex items-center justify-center transition-all duration-300"
                    >
                      <Plus className="w-5 h-5 text-[#6B4F36] dark:text-white" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-10 h-10 rounded-xl bg-red-500/10 hover:bg-red-500/20 flex items-center justify-center transition-all duration-300"
                  >
                    <X className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              ))}

              <div className="glassmorphism rounded-[32px] p-8 shadow-3d space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-[#6B4F36]/70 dark:text-white/70">{t('cart.subtotal')}</span>
                  <span className="font-bold text-[#6B4F36] dark:text-white">{total.toFixed(2)} MAD</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-[#6B4F36]/70 dark:text-white/70">{t('cart.shipping')}</span>
                  <span className="font-bold text-[#6B4F36] dark:text-white">{shipping.toFixed(2)} MAD</span>
                </div>
                <div className="border-t border-[#6B4F36]/10 dark:border-white/10 pt-4 flex justify-between text-2xl">
                  <span className="font-bold text-[#6B4F36] dark:text-white">{t('cart.total')}</span>
                  <span className="font-bold bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] bg-clip-text text-transparent">
                    {finalTotal.toFixed(2)} MAD
                  </span>
                </div>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-2xl shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105"
                >
                  {t('cart.checkout')}
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {showCheckout && (
        <CheckoutModal
          total={finalTotal}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
}
