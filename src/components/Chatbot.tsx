import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: i18n.language === 'fr'
        ? 'Bonjour! Comment puis-je vous aider aujourd\'hui?'
        : i18n.language === 'ar'
        ? 'مرحباً! كيف يمكنني مساعدتك اليوم؟'
        : 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    const lang = i18n.language;

    const responses = {
      fr: {
        greeting: 'Bonjour! Je suis ravi de vous aider.',
        products: 'Nous avons une grande variété de fruits secs: amandes, pistaches, abricots, cajous, noix et dattes. Tous biologiques et de qualité premium!',
        price: 'Nos prix commencent à partir de 249 MAD. Tous nos produits sont de qualité premium.',
        delivery: 'Nous livrons partout au Maroc. Livraison gratuite pour les commandes de plus de 500 MAD.',
        payment: 'Nous acceptons les cartes bancaires, le paiement à la livraison et les virements bancaires.',
        organic: 'Oui! Tous nos produits sont 100% biologiques et naturels, sans additifs artificiels.',
        default: 'Je suis là pour vous aider avec des informations sur nos produits, les prix, la livraison et plus encore!'
      },
      ar: {
        greeting: 'مرحباً! يسعدني مساعدتك.',
        products: 'لدينا مجموعة كبيرة من الفواكه المجففة: اللوز، الفستق، المشمش، الكاجو، الجوز والتمر. جميعها عضوية وذات جودة ممتازة!',
        price: 'تبدأ أسعارنا من 249 درهم. جميع منتجاتنا ذات جودة ممتازة.',
        delivery: 'نقوم بالتوصيل في جميع أنحاء المغرب. التوصيل مجاني للطلبات التي تزيد عن 500 درهم.',
        payment: 'نقبل البطاقات البنكية، الدفع عند الاستلام والتحويلات البنكية.',
        organic: 'نعم! جميع منتجاتنا عضوية 100% وطبيعية، بدون إضافات صناعية.',
        default: 'أنا هنا لمساعدتك بمعلومات عن منتجاتنا، الأسعار، التوصيل والمزيد!'
      },
      en: {
        greeting: 'Hello! I\'m happy to help you.',
        products: 'We have a great variety of dry fruits: almonds, pistachios, apricots, cashews, walnuts and dates. All organic and premium quality!',
        price: 'Our prices start from 249 MAD. All our products are premium quality.',
        delivery: 'We deliver throughout Morocco. Free delivery for orders over 500 MAD.',
        payment: 'We accept credit cards, cash on delivery and bank transfers.',
        organic: 'Yes! All our products are 100% organic and natural, without artificial additives.',
        default: 'I\'m here to help you with information about our products, prices, delivery and more!'
      }
    };

    const currentLang = responses[lang as keyof typeof responses] || responses.en;

    if (lowerMessage.includes('bonjour') || lowerMessage.includes('hello') || lowerMessage.includes('مرحبا') || lowerMessage.includes('salut') || lowerMessage.includes('hi')) {
      return currentLang.greeting;
    } else if (lowerMessage.includes('produit') || lowerMessage.includes('product') || lowerMessage.includes('منتج') || lowerMessage.includes('fruit')) {
      return currentLang.products;
    } else if (lowerMessage.includes('prix') || lowerMessage.includes('price') || lowerMessage.includes('سعر') || lowerMessage.includes('cost')) {
      return currentLang.price;
    } else if (lowerMessage.includes('livraison') || lowerMessage.includes('delivery') || lowerMessage.includes('توصيل') || lowerMessage.includes('shipping')) {
      return currentLang.delivery;
    } else if (lowerMessage.includes('paiement') || lowerMessage.includes('payment') || lowerMessage.includes('دفع') || lowerMessage.includes('pay')) {
      return currentLang.payment;
    } else if (lowerMessage.includes('bio') || lowerMessage.includes('organic') || lowerMessage.includes('عضوي') || lowerMessage.includes('naturel')) {
      return currentLang.organic;
    }

    return currentLang.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-[#6B4F36] to-[#67375D] shadow-3d hover:shadow-3d-hover flex items-center justify-center transform hover:scale-110 transition-all duration-300 animate-bounce-subtle"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-[500px] glassmorphism rounded-[32px] shadow-3d flex flex-col overflow-hidden animate-scale-in">
          <div className="bg-gradient-to-r from-[#6B4F36] to-[#67375D] p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center animate-pulse">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold">{t('chat.title')}</h3>
              <p className="text-white/70 text-sm">Fruit Sec Assistant</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-in-left`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#6B4F36] to-[#67375D] text-white'
                      : 'glassmorphism text-[#6B4F36] dark:text-white'
                  } shadow-3d`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glassmorphism p-4 rounded-2xl shadow-3d">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#6B4F36] dark:bg-white animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-[#6B4F36] dark:bg-white animate-bounce animation-delay-200"></div>
                    <div className="w-2 h-2 rounded-full bg-[#6B4F36] dark:bg-white animate-bounce animation-delay-400"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-[#6B4F36]/10 dark:border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('chat.placeholder')}
                className="flex-1 px-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-[#6B4F36]/10 dark:border-white/10 text-[#6B4F36] dark:text-white placeholder:text-[#6B4F36]/40 dark:placeholder:text-white/40 focus:outline-none focus:border-[#D6A75C] transition-colors duration-300"
              />
              <button
                onClick={handleSend}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-[#6B4F36] to-[#67375D] shadow-3d hover:shadow-3d-hover flex items-center justify-center transform hover:scale-110 transition-all duration-300"
              >
                <Send className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
