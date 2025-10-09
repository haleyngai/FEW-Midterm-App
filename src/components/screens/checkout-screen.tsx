import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  CreditCard, 
  Lock, 
  Eye, 
  EyeOff,
  Check,
  Shield,
  Calendar,
  MapPin,
  Users
} from 'lucide-react';

export const CheckoutScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [showCVV, setShowCVV] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    phone: '',
    billingAddress: '',
    city: '',
    zipCode: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const orderSummary = {
    event: 'Neon Nights',
    venue: 'Electric Lounge',
    tickets: 2,
    ticketType: 'General Admission',
    subtotal: 90.00,
    serviceFee: 3.50,
    processingFee: 2.00,
    insurance: 5.00,
    total: 100.50,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setCurrentScreen('confirmation');
    }, 3000);
  };

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'apple', name: 'Apple Pay', icon: CreditCard },
    { id: 'google', name: 'Google Pay', icon: CreditCard },
  ];

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
            onClick={() => setCurrentScreen('booking')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-glow">Checkout</h1>
            <p className="text-white/70 text-sm">Complete your purchase</p>
          </div>
        </div>
      </motion.div>

      {/* Order Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-3">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-white">{orderSummary.event}</h3>
                  <p className="text-white/70 text-sm">{orderSummary.venue}</p>
                  <div className="flex items-center gap-4 text-xs text-white/60 mt-1">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Feb 15, 2024
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      NYC
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {orderSummary.tickets} tickets
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-gold-400 font-bold">${orderSummary.total.toFixed(2)}</div>
                  <div className="text-xs text-white/60">Total</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Payment Methods */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="space-y-3">
          {paymentMethods.map((method) => (
            <Card
              key={method.id}
              className={`cursor-pointer transition-all duration-300 ${
                paymentMethod === method.id
                  ? 'bg-gold-500/20 border-gold-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              onClick={() => setPaymentMethod(method.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <method.icon className="w-6 h-6 text-gold-400" />
                    <span className="font-semibold text-white">{method.name}</span>
                  </div>
                  {paymentMethod === method.id && (
                    <Check className="w-5 h-5 text-gold-400" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Payment Form */}
      {paymentMethod === 'card' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 px-6 mb-6"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Card Number */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <Input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="pl-12"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Expiry Date</label>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">CVV</label>
                <div className="relative">
                  <Input
                    type={showCVV ? 'text' : 'password'}
                    placeholder="123"
                    className="pr-12"
                    value={formData.cvv}
                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                    onClick={() => setShowCVV(!showCVV)}
                  >
                    {showCVV ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Cardholder Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Cardholder Name</label>
              <Input
                type="text"
                placeholder="John Doe"
                value={formData.cardName}
                onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email Address</label>
              <Input
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Phone Number</label>
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            {/* Billing Address */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Billing Address</h3>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Street Address</label>
                <Input
                  type="text"
                  placeholder="123 Main Street"
                  value={formData.billingAddress}
                  onChange={(e) => setFormData({ ...formData, billingAddress: e.target.value })}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">City</label>
                  <Input
                    type="text"
                    placeholder="New York"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">ZIP Code</label>
                  <Input
                    type="text"
                    placeholder="10001"
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <Shield className="w-6 h-6 text-green-400" />
              <div>
                <p className="text-sm font-medium text-green-400">Secure Payment</p>
                <p className="text-xs text-white/70">Your payment information is encrypted and secure</p>
              </div>
            </div>

            {/* Submit Button */}
            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-semibold"
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                <>
                  <Lock className="w-5 h-5 mr-2" />
                  Complete Purchase - ${orderSummary.total.toFixed(2)}
                </>
              )}
            </Button>
          </form>
        </motion.div>
      )}

      {/* Alternative Payment Methods */}
      {(paymentMethod === 'apple' || paymentMethod === 'google') && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative z-10 px-6 pb-8"
        >
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CreditCard className="w-10 h-10 text-gold-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pay with {paymentMethod === 'apple' ? 'Apple Pay' : 'Google Pay'}</h3>
            <p className="text-white/70 mb-6">Complete your purchase securely with biometric authentication</p>
            <Button 
              className="w-full h-14 text-lg font-semibold"
              onClick={() => {
                setIsProcessing(true);
                setTimeout(() => {
                  setIsProcessing(false);
                  setCurrentScreen('confirmation');
                }, 2000);
              }}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </div>
              ) : (
                `Pay $${orderSummary.total.toFixed(2)}`
              )}
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};
