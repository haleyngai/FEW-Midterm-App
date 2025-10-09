import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  CheckCircle, 
  Download, 
  Share2, 
  Calendar,
  MapPin,
  Users,
  Star,
  QrCode,
  Ticket,
  Clock,
  Phone,
  Globe
} from 'lucide-react';

export const ConfirmationScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [showQRCode, setShowQRCode] = useState(false);

  const booking = {
    id: 'BK-2024-0215-001',
    event: 'Neon Nights',
    venue: 'Electric Lounge',
    date: new Date('2024-02-15'),
    time: '10:00 PM',
    tickets: 2,
    ticketType: 'General Admission',
    total: 100.50,
    qrCode: 'QR-CODE-DATA-HERE',
    confirmationCode: 'CONF-789123',
  };

  const eventDetails = {
    address: '123 Electric Ave, New York, NY 10001',
    phone: '(555) 123-4567',
    website: 'electriclounge.com',
    rating: 4.8,
    reviews: 234,
    doors: '9:30 PM',
    ageRestriction: '21+',
  };

  const handleShare = () => {
    // Simulate sharing functionality
    console.log('Sharing booking details...');
  };

  const handleDownload = () => {
    // Simulate download functionality
    console.log('Downloading tickets...');
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-16 px-6 pb-4"
      >
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", damping: 10 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-3xl font-bold text-glow mb-2">Booking Confirmed!</h1>
          <p className="text-white/70 text-lg">You're all set for an amazing night</p>
        </div>
      </motion.div>

      {/* Booking Details */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{booking.event}</h2>
              <p className="text-white/70">{booking.venue}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/70">Booking ID</span>
                <span className="font-mono text-sm text-white">{booking.bookingId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Confirmation Code</span>
                <span className="font-mono text-sm text-gold-400">{booking.confirmationCode}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Tickets</span>
                <span className="text-white">{booking.tickets}x {booking.ticketType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/70">Total Paid</span>
                <span className="text-gold-400 font-bold">${booking.total.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Event Information */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Event Details</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">February 15, 2024</p>
                  <p className="text-white/70 text-sm">{booking.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">Doors Open</p>
                  <p className="text-white/70 text-sm">{eventDetails.doors}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">{eventDetails.address}</p>
                  <div className="flex items-center gap-4 text-xs text-white/60 mt-1">
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {eventDetails.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-3 h-3" />
                      {eventDetails.website}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-gold-400" />
                <div>
                  <p className="text-white font-medium">Age Restriction</p>
                  <p className="text-white/70 text-sm">{eventDetails.ageRestriction}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* QR Code */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-4">Your QR Code</h3>
              <div className="w-48 h-48 bg-white rounded-xl mx-auto mb-4 flex items-center justify-center">
                {showQRCode ? (
                  <div className="w-40 h-40 bg-black rounded-lg flex items-center justify-center">
                    <QrCode className="w-32 h-32 text-white" />
                  </div>
                ) : (
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-night-600 mx-auto mb-2" />
                    <p className="text-night-600 text-sm">QR Code will appear here</p>
                  </div>
                )}
              </div>
              <Button
                variant="outline"
                onClick={() => setShowQRCode(!showQRCode)}
                className="mb-4"
              >
                {showQRCode ? 'Hide' : 'Show'} QR Code
              </Button>
              <p className="text-white/70 text-sm">
                Show this QR code at the venue for entry
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="relative z-10 px-6 pb-8"
      >
        <div className="space-y-3">
          <Button 
            className="w-full h-12"
            onClick={() => setCurrentScreen('ticket-detail')}
          >
            <Ticket className="w-5 h-5 mr-2" />
            View Tickets
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleDownload}
            >
              <Download className="w-5 h-5 mr-2" />
              Download
            </Button>
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleShare}
            >
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </Button>
          </div>
          <Button 
            variant="ghost" 
            className="w-full text-white/70 hover:text-white"
            onClick={() => setCurrentScreen('main-app')}
          >
            Back to Events
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
