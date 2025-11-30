import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        shop: 'Shop',
        categories: 'Categories',
        about: 'About',
        benefits: 'Benefits',
        contact: 'Contact',
        brand: 'Fruit Sec'
      },
      hero: {
        subtitle: 'Premium Quality Since 2020',
        title1: 'The Art of',
        title2: 'Natural Luxury',
        description: 'Discover handpicked dry fruits from around the world. Each piece tells a story of quality, taste, and wellness.',
        shopBtn: 'Explore Collection',
        learnBtn: 'View Lookbook',
        stats: {
          customers: 'Happy Customers',
          organic: 'Organic',
          rating: 'Rating'
        }
      },
      categories: {
        title: 'Explore Our Collection',
        subtitle: 'Handpicked varieties from the finest sources around the world'
      },
      products: {
        title: 'Featured Products',
        subtitle: 'Hover to experience 3D magic',
        addToCart: 'Add to Cart',
        inStock: 'In Stock',
        bestSeller: 'Best Seller',
        premium: 'Premium',
        organic: 'Organic',
        new: 'New',
        save: 'Save'
      },
      cart: {
        title: 'Shopping Cart',
        subtotal: 'Subtotal',
        shipping: 'Shipping',
        total: 'Total',
        checkout: 'Proceed to Checkout',
        empty: 'Your cart is empty',
        continueShopping: 'Continue Shopping'
      },
      checkout: {
        title: 'Checkout',
        paymentMethod: 'Select Payment Method',
        creditCard: 'Credit Card',
        cashOnDelivery: 'Cash on Delivery',
        bankTransfer: 'Bank Transfer',
        placeOrder: 'Place Order',
        processing: 'Processing...',
        success: 'Thank You!',
        successMessage: 'Your order has been placed successfully',
        orderNumber: 'Order Number'
      },
      footer: {
        madeBy: 'Website made by Anass Naji Designs',
        copyright: '© 2024 Fruit Sec. All rights reserved.'
      },
      chat: {
        title: 'Chat with us',
        placeholder: 'Type your message...',
        send: 'Send'
      },
      theme: {
        light: 'Light',
        dark: 'Dark'
      }
    }
  },
  fr: {
    translation: {
      nav: {
        shop: 'Boutique',
        categories: 'Catégories',
        about: 'À Propos',
        benefits: 'Avantages',
        contact: 'Contact',
        brand: 'Fruit Sec'
      },
      hero: {
        subtitle: 'Qualité Premium Depuis 2020',
        title1: "L'Art du",
        title2: 'Luxe Naturel',
        description: 'Découvrez des fruits secs sélectionnés du monde entier. Chaque pièce raconte une histoire de qualité, de goût et de bien-être.',
        shopBtn: 'Explorer la Collection',
        learnBtn: 'Voir le Catalogue',
        stats: {
          customers: 'Clients Satisfaits',
          organic: 'Biologique',
          rating: 'Note'
        }
      },
      categories: {
        title: 'Explorez Notre Collection',
        subtitle: 'Variétés sélectionnées des meilleures sources du monde'
      },
      products: {
        title: 'Produits Vedettes',
        subtitle: 'Survolez pour vivre la magie 3D',
        addToCart: 'Ajouter au Panier',
        inStock: 'En Stock',
        bestSeller: 'Meilleure Vente',
        premium: 'Premium',
        organic: 'Biologique',
        new: 'Nouveau',
        save: 'Économisez'
      },
      cart: {
        title: 'Panier',
        subtotal: 'Sous-total',
        shipping: 'Livraison',
        total: 'Total',
        checkout: 'Passer la Commande',
        empty: 'Votre panier est vide',
        continueShopping: 'Continuer les Achats'
      },
      checkout: {
        title: 'Paiement',
        paymentMethod: 'Sélectionnez le Mode de Paiement',
        creditCard: 'Carte Bancaire',
        cashOnDelivery: 'Paiement à la Livraison',
        bankTransfer: 'Virement Bancaire',
        placeOrder: 'Passer la Commande',
        processing: 'Traitement en cours...',
        success: 'Merci!',
        successMessage: 'Votre commande a été passée avec succès',
        orderNumber: 'Numéro de Commande'
      },
      footer: {
        madeBy: 'Site Web créé par Anass Naji Designs',
        copyright: '© 2024 Fruit Sec. Tous droits réservés.'
      },
      chat: {
        title: 'Discutez avec nous',
        placeholder: 'Tapez votre message...',
        send: 'Envoyer'
      },
      theme: {
        light: 'Clair',
        dark: 'Sombre'
      }
    }
  },
  ar: {
    translation: {
      nav: {
        shop: 'متجر',
        categories: 'الفئات',
        about: 'حول',
        benefits: 'الفوائد',
        contact: 'اتصل',
        brand: 'فروت سيك'
      },
      hero: {
        subtitle: 'جودة ممتازة منذ 2020',
        title1: 'فن',
        title2: 'الفخامة الطبيعية',
        description: 'اكتشف الفواكه المجففة المختارة بعناية من جميع أنحاء العالم. كل قطعة تحكي قصة الجودة والذوق والعافية.',
        shopBtn: 'استكشف المجموعة',
        learnBtn: 'عرض الكتالوج',
        stats: {
          customers: 'عملاء سعداء',
          organic: 'عضوي',
          rating: 'التقييم'
        }
      },
      categories: {
        title: 'استكشف مجموعتنا',
        subtitle: 'أصناف مختارة بعناية من أفضل المصادر حول العالم'
      },
      products: {
        title: 'المنتجات المميزة',
        subtitle: 'مرر للحصول على تجربة ثلاثية الأبعاد',
        addToCart: 'أضف إلى السلة',
        inStock: 'متوفر',
        bestSeller: 'الأكثر مبيعاً',
        premium: 'ممتاز',
        organic: 'عضوي',
        new: 'جديد',
        save: 'وفر'
      },
      cart: {
        title: 'سلة التسوق',
        subtotal: 'المجموع الفرعي',
        shipping: 'الشحن',
        total: 'الإجمالي',
        checkout: 'إتمام الشراء',
        empty: 'سلتك فارغة',
        continueShopping: 'متابعة التسوق'
      },
      checkout: {
        title: 'الدفع',
        paymentMethod: 'اختر طريقة الدفع',
        creditCard: 'بطاقة ائتمان',
        cashOnDelivery: 'الدفع عند الاستلام',
        bankTransfer: 'تحويل بنكي',
        placeOrder: 'تأكيد الطلب',
        processing: 'جاري المعالجة...',
        success: 'شكراً لك!',
        successMessage: 'تم تقديم طلبك بنجاح',
        orderNumber: 'رقم الطلب'
      },
      footer: {
        madeBy: 'تصميم الموقع: أنس ناجي للتصاميم',
        copyright: '© 2024 فروت سيك. جميع الحقوق محفوظة.'
      },
      chat: {
        title: 'تحدث معنا',
        placeholder: 'اكتب رسالتك...',
        send: 'إرسال'
      },
      theme: {
        light: 'فاتح',
        dark: 'داكن'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fr',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
