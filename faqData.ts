import { FAQ } from '../types';

export const faqData: FAQ[] = [
  {
    id: '1',
    question: 'What is your return policy?',
    answer: 'We accept returns within 30 days of purchase. Items must be unworn, with tags attached, and in original packaging.',
    keywords: ['return', 'returns', 'return policy', 'exchange', 'refund'],
    category: 'returns'
  },
  {
    id: '2',
    question: 'How long does shipping take?',
    answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days within the continental US.',
    keywords: ['shipping', 'delivery', 'how long', 'when will', 'arrive'],
    category: 'shipping'
  },
  {
    id: '3',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship internationally to over 50 countries. International shipping typically takes 7-14 business days.',
    keywords: ['international', 'worldwide', 'global', 'outside us', 'abroad'],
    category: 'shipping'
  },
  {
    id: '4',
    question: 'How can I track my order?',
    answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order in your account dashboard.',
    keywords: ['track', 'tracking', 'order status', 'where is my order', 'shipment'],
    category: 'shipping'
  },
  {
    id: '5',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.',
    keywords: ['payment', 'pay', 'credit card', 'paypal', 'apple pay', 'google pay'],
    category: 'payment'
  },
  {
    id: '6',
    question: 'How do I find my size?',
    answer: 'Please refer to our size chart on each product page. We also offer detailed measurements for all items.',
    keywords: ['size', 'sizing', 'measurements', 'fit', 'how big', 'dimensions'],
    category: 'sizing'
  },
  {
    id: '7',
    question: 'Is my order secure?',
    answer: 'Yes, we use SSL encryption and secure payment processors to protect your personal and payment information.',
    keywords: ['secure', 'security', 'safe', 'protection', 'ssl', 'encryption'],
    category: 'security'
  },
  {
    id: '8',
    question: 'Can I cancel my order?',
    answer: 'Orders can be cancelled within 1 hour of placement. After that, please contact our support team for assistance.',
    keywords: ['cancel', 'cancellation', 'cancel order', 'stop order'],
    category: 'orders'
  },
  {
    id: '9',
    question: 'Do you have a physical store?',
    answer: 'We are currently an online-only boutique. We don\'t have physical retail locations at this time.',
    keywords: ['store', 'physical', 'location', 'address', 'visit', 'brick and mortar'],
    category: 'general'
  },
  {
    id: '10',
    question: 'How do I contact customer support?',
    answer: 'You can reach our customer support team at support@ak.com. We typically respond within 24 hours.',
    keywords: ['contact', 'support', 'help', 'customer service', 'email'],
    category: 'support'
  },
  {
    id: '11',
    question: 'What if an item is out of stock?',
    answer: 'If an item is out of stock, you can sign up for restock notifications on the product page. We\'ll email you when it\'s available again.',
    keywords: ['out of stock', 'sold out', 'unavailable', 'restock', 'back in stock'],
    category: 'inventory'
  },
  {
    id: '12',
    question: 'Do you offer gift cards?',
    answer: 'Yes, we offer digital gift cards in various denominations. They can be purchased on our website and are delivered via email.',
    keywords: ['gift card', 'gift certificate', 'present', 'voucher'],
    category: 'general'
  }
];