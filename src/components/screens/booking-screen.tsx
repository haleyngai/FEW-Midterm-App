import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Minus, 
  Plus, 
  Ticket, 
  Shield, 
  CreditCard,
  Clock,
  Users,
  MapPin,
  Star,
  Info
} from 'lucide-react';

export const BookingScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedTicketType, setSelectedTicketType] = useState('general');
  const [addInsurance, setAddInsurance] = useState(false);

  const event = {
    id: '1',
    title: 'Neon Nights',
    venue: 'Electric Lounge',
    date: new Date('2024-02-15'),
    time: '10:00 PM',
    price: 45,
    image: 'https://images.unsplash.com/photo-1571266028243-e68fdfcfd0a6?w=400&h=300&fit=crop',
    rating: 4.8,
    capacity: 200,
    sold: 156,
  };

  const ticketTypes = [
    {
      id: 'general',
      name: 'General Admission',
      price: 45,
      description: 'Standard entry to the event',
      available: 44,
    },
    {
      id: 'vip',
      name: 'VIP Access',
      price: 85,
      description: 'Premium seating, complimentary drinks',
      available: 12,
    },
    {
      id: 'group',
      name: 'Group Package (4+)',
      price: 40,
      description: 'Discounted rate for groups of 4 or more',
      available: 20,
    },
  ];

  const fees = {
    serviceFee: 3.50,
    processingFee: 2.00,
    insurance: 5.00,
  };

  const subtotal = ticketTypes.find(t => t.id === selectedTicketType)?.price || 45;
  const total = (subtotal * ticketCount) + fees.serviceFee + fees.processingFee + (addInsurance ? fees.insurance : 0);

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
            onClick={() => setCurrentScreen('event-detail')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-glow">Book Tickets</h1>
            <p className="text-white/70 text-sm">Secure your spot</p>
          </div>
        </div>
      </motion.div>

      {/* Event Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <img
                src={event.image}
                alt={event.title}
                className="w-16 h-16 rounded-xl object-cover"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                <p className="text-white/70 text-sm mb-2">{event.venue}</p>
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    NYC
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                    {event.rating}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Ticket Type Selection */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Select Ticket Type</h2>
        <div className="space-y-3">
          {ticketTypes.map((ticketType) => (
            <Card
              key={ticketType.id}
              className={`cursor-pointer transition-all duration-300 ${
                selectedTicketType === ticketType.id
                  ? 'bg-gold-500/20 border-gold-500/50'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
              onClick={() => setSelectedTicketType(ticketType.id)}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-white">{ticketType.name}</h3>
                      {ticketType.id === 'group' && (
                        <div className="bg-neon-pink text-white text-xs px-2 py-1 rounded-full">
                          Save 11%
                        </div>
                      )}
                    </div>
                    <p className="text-white/70 text-sm mb-2">{ticketType.description}</p>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {ticketType.available} available
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-xl font-bold text-gold-400">${ticketType.price}</div>
                    <div className="text-xs text-white/60">per ticket</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Ticket Quantity */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Number of Tickets</h2>
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white mb-1">Tickets</h3>
                <p className="text-white/70 text-sm">How many tickets do you need?</p>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10"
                  onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                  disabled={ticketCount <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-2xl font-bold text-white w-8 text-center">{ticketCount}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10"
                  onClick={() => setTicketCount(Math.min(8, ticketCount + 1))}
                  disabled={ticketCount >= 8}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Add-ons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Add-ons</h2>
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-gold-400" />
                <div>
                  <h3 className="font-semibold text-white">Event Insurance</h3>
                  <p className="text-white/70 text-sm">Get a full refund if you can't attend</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gold-400 font-semibold">${fees.insurance}</span>
                <Button
                  variant={addInsurance ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setAddInsurance(!addInsurance)}
                >
                  {addInsurance ? 'Added' : 'Add'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Price Breakdown */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Price Breakdown</h2>
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-white/80">Tickets ({ticketCount}x)</span>
              <span className="text-white">${(subtotal * ticketCount).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">Service Fee</span>
              <span className="text-white">${fees.serviceFee.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-white/80">Processing Fee</span>
              <span className="text-white">${fees.processingFee.toFixed(2)}</span>
            </div>
            {addInsurance && (
              <div className="flex items-center justify-between">
                <span className="text-white/80">Event Insurance</span>
                <span className="text-white">${fees.insurance.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-white/20 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-white">Total</span>
                <span className="text-xl font-bold text-gold-400">${total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Continue Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 px-6 pb-8"
      >
        <Button 
          className="w-full h-14 text-lg font-semibold"
          onClick={() => setCurrentScreen('checkout')}
        >
          <CreditCard className="w-5 h-5 mr-2" />
          Continue to Payment
        </Button>
        
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-white/60">
          <Shield className="w-4 h-4" />
          <span>Secure payment powered by Stripe</span>
        </div>
      </motion.div>
    </div>
  );
};
