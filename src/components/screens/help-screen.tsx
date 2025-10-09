import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  HelpCircle,
  ChevronRight,
  ExternalLink,
  Clock,
  Shield,
  CreditCard,
  Ticket,
  MapPin,
  Users,
  Settings,
  Star
} from 'lucide-react';

export const HelpScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', name: 'All Topics', icon: HelpCircle },
    { id: 'booking', name: 'Booking', icon: Ticket },
    { id: 'payment', name: 'Payment', icon: CreditCard },
    { id: 'events', name: 'Events', icon: Calendar },
    { id: 'account', name: 'Account', icon: Users },
    { id: 'technical', name: 'Technical', icon: Settings },
  ];

  const faqItems = [
    {
      id: 1,
      category: 'booking',
      question: 'How do I book tickets for an event?',
      answer: 'To book tickets, simply find an event you like, select your ticket type and quantity, then proceed through our secure checkout process. You\'ll receive a confirmation email with your tickets.',
    },
    {
      id: 2,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), Apple Pay, Google Pay, and PayPal. All payments are processed securely through Stripe.',
    },
    {
      id: 3,
      category: 'booking',
      question: 'Can I cancel or refund my tickets?',
      answer: 'Tickets are generally non-refundable, but you can transfer them to another person. Some events may offer refunds up to 24 hours before the event. Check the event details for specific policies.',
    },
    {
      id: 4,
      category: 'events',
      question: 'How do I find events in my area?',
      answer: 'Use our location-based search to find events near you. You can also browse by category, date, or use filters to narrow down your search.',
    },
    {
      id: 5,
      category: 'technical',
      question: 'I can\'t see my QR code ticket',
      answer: 'Make sure you\'re logged into the correct account. Try refreshing the app or logging out and back in. If the issue persists, contact our support team.',
    },
    {
      id: 6,
      category: 'account',
      question: 'How do I update my profile information?',
      answer: 'Go to your profile settings and tap on the information you want to update. Changes are saved automatically.',
    },
    {
      id: 7,
      category: 'payment',
      question: 'Is my payment information secure?',
      answer: 'Yes, we use bank-level encryption and never store your full payment details. All transactions are processed through secure, PCI-compliant payment processors.',
    },
    {
      id: 8,
      category: 'events',
      question: 'What if an event is cancelled?',
      answer: 'If an event is cancelled, you\'ll be notified immediately and receive a full refund within 5-7 business days to your original payment method.',
    },
  ];

  const contactMethods = [
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      icon: MessageCircle,
      available: 'Available 24/7',
      action: 'Start Chat',
    },
    {
      id: 'email',
      title: 'Email Support',
      description: 'Send us a detailed message',
      icon: Mail,
      available: 'Response within 24 hours',
      action: 'Send Email',
    },
    {
      id: 'phone',
      title: 'Phone Support',
      description: 'Speak with our support team',
      icon: Phone,
      available: 'Mon-Fri 9AM-6PM EST',
      action: 'Call Now',
    },
  ];

  const filteredFAQs = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-16 px-6 pb-4"
      >
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white mr-4"
            onClick={() => setCurrentScreen('main-app')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-glow">Help & Support</h1>
            <p className="text-white/70 text-sm">Find answers and get help</p>
          </div>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full h-12 bg-white/5 border border-white/20 rounded-xl px-12 text-white placeholder:text-white/50 focus:outline-none focus:border-gold-500/50"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Quick Contact */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Get Help Fast</h2>
        <div className="space-y-3">
          {contactMethods.map((method) => (
            <Card key={method.id} className="bg-white/5 border-white/10 cursor-pointer card-hover">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                      <method.icon className="w-6 h-6 text-gold-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{method.title}</h3>
                      <p className="text-white/70 text-sm">{method.description}</p>
                      <p className="text-white/60 text-xs">{method.available}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold-400 text-sm font-medium">{method.action}</span>
                    <ChevronRight className="w-4 h-4 text-white/40" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* FAQ Categories */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-4"
      >
        <h2 className="text-lg font-semibold mb-4">Browse by Topic</h2>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {faqCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              className="flex-shrink-0"
              onClick={() => setSelectedCategory(category.id)}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* FAQ Items */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 px-6 pb-8 overflow-y-auto"
        style={{ height: 'calc(100% - 32rem)' }}
      >
        <h2 className="text-lg font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredFAQs.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/60 mb-2">No results found</h3>
            <p className="text-white/40">Try adjusting your search terms or browse different categories</p>
          </div>
        )}
      </motion.div>

      {/* Bottom Actions */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1">
            <Star className="w-4 h-4 mr-2" />
            Rate App
          </Button>
          <Button variant="outline" className="flex-1">
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Website
          </Button>
        </div>
      </div>
    </div>
  );
};
