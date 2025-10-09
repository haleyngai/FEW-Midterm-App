import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Share2, 
  Download, 
  QrCode, 
  Calendar,
  MapPin,
  Users,
  Clock,
  Phone,
  Globe,
  Ticket,
  Star,
  Shield,
  RefreshCw
} from 'lucide-react';

export const TicketDetailScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [isRotated, setIsRotated] = useState(false);

  const ticket = {
    id: 'TKT-2024-0215-001',
    event: 'Neon Nights',
    venue: 'Electric Lounge',
    date: new Date('2024-02-15'),
    time: '10:00 PM',
    doors: '9:30 PM',
    ticketType: 'General Admission',
    price: 45.00,
    qrCode: 'QR-CODE-DATA-HERE',
    seat: null, // General admission
    ageRestriction: '21+',
    venueDetails: {
      address: '123 Electric Ave, New York, NY 10001',
      phone: '(555) 123-4567',
      website: 'electriclounge.com',
    },
    booking: {
      id: 'BK-2024-0215-001',
      confirmationCode: 'CONF-789123',
      purchaseDate: new Date('2024-01-15'),
    }
  };

  const handleShare = () => {
    // Simulate sharing functionality
    console.log('Sharing ticket...');
  };

  const handleDownload = () => {
    // Simulate download functionality
    console.log('Downloading ticket...');
  };

  const handleRefreshQR = () => {
    setIsRotated(true);
    setTimeout(() => setIsRotated(false), 1000);
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-slow" />
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
            onClick={() => setCurrentScreen('confirmation')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold text-glow">Your Ticket</h1>
            <p className="text-white/70 text-sm">Keep this safe for entry</p>
          </div>
        </div>
      </motion.div>

      {/* Ticket Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-gradient-to-br from-gold-500/20 to-gold-600/20 border-gold-500/30 overflow-hidden">
          <CardContent className="p-0">
            {/* Ticket Header */}
            <div className="p-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gold-500 rounded-xl flex items-center justify-center">
                    <Ticket className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">{ticket.event}</h2>
                    <p className="text-white/70 text-sm">{ticket.venue}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gold-400">${ticket.price.toFixed(2)}</div>
                  <div className="text-xs text-white/60">{ticket.ticketType}</div>
                </div>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gold-400" />
                  <div>
                    <p className="text-white font-medium text-sm">Feb 15, 2024</p>
                    <p className="text-white/70 text-xs">{ticket.time}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gold-400" />
                  <div>
                    <p className="text-white font-medium text-sm">Doors Open</p>
                    <p className="text-white/70 text-xs">{ticket.doors}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-black/20 p-6 pt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Entry QR Code</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRefreshQR}
                  className="text-white/70 hover:text-white"
                >
                  <RefreshCw className={`w-4 h-4 ${isRotated ? 'animate-spin' : ''}`} />
                </Button>
              </div>
              <div className="w-32 h-32 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
                <QrCode className="w-28 h-28 text-black" />
              </div>
              <p className="text-center text-white/70 text-xs mb-4">
                Show this QR code at the venue for entry
              </p>
            </div>

            {/* Ticket ID */}
            <div className="p-6 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/70 text-xs">Ticket ID</p>
                  <p className="font-mono text-sm text-white">{ticket.id}</p>
                </div>
                <div>
                  <p className="text-white/70 text-xs">Booking Ref</p>
                  <p className="font-mono text-sm text-gold-400">{ticket.booking.confirmationCode}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Venue Information */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Venue Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">{ticket.venueDetails.address}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">{ticket.venueDetails.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">{ticket.venueDetails.website}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">Age Restriction</p>
                  <p className="text-white/70 text-sm">{ticket.ageRestriction}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Important Information */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-blue-500/10 border-blue-500/20">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Important Information</h3>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Arrive 30 minutes before doors open for best experience</li>
                  <li>• Valid ID required for age verification</li>
                  <li>• Tickets are non-refundable but transferable</li>
                  <li>• No outside food or beverages allowed</li>
                  <li>• Dress code: Smart casual</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 px-6 pb-8"
      >
        <div className="space-y-3">
          <Button 
            className="w-full h-12"
            onClick={handleDownload}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Ticket
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setCurrentScreen('main-app')}
            >
              Back to Events
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
