import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useCart } from '../contexts/CartContext';
import { X, CreditCard, Banknote, Building2, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CheckoutModalProps {
  total: number;
  onClose: () => void;
}

export function CheckoutModal({ total, onClose }: CheckoutModalProps) {
  const { t } = useTranslation();
  const { cart, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('');
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');

  const paymentMethods = [
    {
      id: 'credit',
      icon: CreditCard,
      title: t('checkout.creditCard'),
      color: 'from-[#6B4F36] to-[#67375D]'
    },
    {
      id: 'cash',
      icon: Banknote,
      title: t('checkout.cashOnDelivery'),
      color: 'from-[#3C7A4A] to-[#2a5535]'
    },
    {
      id: 'bank',
      icon: Building2,
      title: t('checkout.bankTransfer'),
      color: 'from-[#D6A75C] to-[#c9953d]'
    }
  ];

  const handlePlaceOrder = async () => {
    if (!selectedPayment) return;

    setProcessing(true);

    try {
      const orderNum = `ORD-${Date.now()}`;

      const { error } = await supabase.from('orders').insert({
        order_number: orderNum,
        items: cart,
        total: total,
        payment_method: selectedPayment,
        status: 'pending',
        created_at: new Date().toISOString()
      });

      if (error) throw error;

      setOrderNumber(orderNum);
      setSuccess(true);
      clearCart();

      setTimeout(() => {
        onClose();
      }, 3000);
    } catch (error) {
      console.error('Order error:', error);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl glassmorphism rounded-[48px] p-8 shadow-3d animate-scale-in">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full hover:bg-[#6B4F36]/10 dark:hover:bg-white/10 flex items-center justify-center transition-colors"
        >
          <X className="w-6 h-6 text-[#6B4F36] dark:text-white" />
        </button>

        {!success ? (
          <>
            <h2 className="text-shadow-soft mb-8 text-[#6B4F36] dark:text-white">
              {t('checkout.title')}
            </h2>

            <div className="mb-8">
              <h3 className="text-lg font-semibold text-[#6B4F36] dark:text-white mb-4">
                {t('checkout.paymentMethod')}
              </h3>
              <div className="grid gap-4">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <button
                      key={method.id}
                      onClick={() => setSelectedPayment(method.id)}
                      className={`p-6 rounded-[28px] transition-all duration-300 ${
                        selectedPayment === method.id
                          ? 'bg-white dark:bg-gray-800 shadow-3d scale-105'
                          : 'glassmorphism hover:shadow-3d hover:scale-102'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} shadow-3d flex items-center justify-center`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="text-[#6B4F36] dark:text-white">{method.title}</h4>
                        </div>
                        {selectedPayment === method.id && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3C7A4A] to-[#2a5535] flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="glassmorphism rounded-[28px] p-6 mb-6">
              <div className="flex justify-between text-2xl font-bold">
                <span className="text-[#6B4F36] dark:text-white">{t('cart.total')}</span>
                <span className="bg-gradient-to-r from-[#D6A75C] to-[#3C7A4A] bg-clip-text text-transparent">
                  {total.toFixed(2)} MAD
                </span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={!selectedPayment || processing}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white rounded-2xl shadow-3d hover:shadow-3d-hover transition-all duration-500 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {processing ? t('checkout.processing') : t('checkout.placeOrder')}
            </button>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3C7A4A] to-[#2a5535] flex items-center justify-center mx-auto mb-6 animate-bounce-in">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-shadow-soft mb-4 text-[#6B4F36] dark:text-white">
              {t('checkout.success')}
            </h2>
            <p className="text-xl text-[#6B4F36]/70 dark:text-white/70 mb-4">
              {t('checkout.successMessage')}
            </p>
            <p className="text-lg text-[#D6A75C]">
              {t('checkout.orderNumber')}: {orderNumber}
            </p>

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
      </div>
    </div>
  );
}
