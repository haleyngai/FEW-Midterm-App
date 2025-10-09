import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Share2, 
  Heart, 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Calendar,
  Ticket,
  Phone,
  Globe,
  Instagram,
  Music,
  Shield,
  Zap,
  Camera
} from 'lucide-react';

export const EventDetailScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [isLiked, setIsLiked] = useState(false);
  const [selectedTab, setSelectedTab] = useState<'details' | 'reviews' | 'similar'>('details');

  const event = {
    id: '1',
    title: 'Neon Nights',
    venue: 'Electric Lounge',
    date: new Date('2024-02-15'),
    time: '10:00 PM',
    price: 45,
    originalPrice: 60,
    image: 'https://images.unsplash.com/photo-1571266028243-e68fdfcfd0a6?w=800&h=600&fit=crop',
    genre: 'Electronic',
    rating: 4.8,
    reviews: 234,
    distance: '0.3 mi',
    capacity: 200,
    sold: 156,
    description: 'Experience the ultimate electronic music night at Electric Lounge. Featuring world-class DJs, immersive lighting, and an unforgettable atmosphere.',
    features: ['Live DJ Performance', 'Premium Sound System', 'Full Bar', 'Dance Floor', 'VIP Sections'],
    venueDetails: {
      address: '123 Electric Ave, New York, NY 10001',
      phone: '(555) 123-4567',
      website: 'electriclounge.com',
      instagram: '@electriclounge',
      rating: 4.7,
    },
    artist: {
      name: 'DJ Neon',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
      followers: '12.5K',
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      comment: 'Amazing night! The DJ was incredible and the atmosphere was electric.',
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      name: 'Mike T.',
      rating: 4,
      comment: 'Great venue and music, but drinks were a bit pricey.',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    },
  ];

  const similarEvents = [
    {
      id: '2',
      title: 'Electric Dreams',
      venue: 'Neon Club',
      date: new Date('2024-02-16'),
      price: 50,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop',
      rating: 4.6,
    },
    {
      id: '3',
      title: 'Underground Bass',
      venue: 'Bass Station',
      date: new Date('2024-02-17'),
      price: 40,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      rating: 4.7,
    },
  ];

  const getGenreIcon = (genre: string) => {
    switch (genre.toLowerCase()) {
      case 'electronic':
        return <Zap className="w-5 h-5" />;
      case 'jazz':
        return <Music className="w-5 h-5" />;
      case 'comedy':
        return <Camera className="w-5 h-5" />;
      default:
        return <Music className="w-5 h-5" />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Header Image */}
      <div className="relative h-80">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Header Actions */}
        <div className="absolute top-16 left-0 right-0 px-6 flex items-center justify-between z-10">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/80 hover:text-white bg-black/20 backdrop-blur-md"
            onClick={() => setCurrentScreen('main-app')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/80 hover:text-white bg-black/20 backdrop-blur-md"
            >
              <Share2 className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className={`bg-black/20 backdrop-blur-md ${
                isLiked ? 'text-neon-pink' : 'text-white/80 hover:text-white'
              }`}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
            </Button>
          </div>
        </div>

        {/* Event Info Overlay */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center gap-2 mb-2">
            {getGenreIcon(event.genre)}
            <span className="text-sm text-white/80">{event.genre}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event.venue}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {event.time}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-8 overflow-y-auto" style={{ height: 'calc(100% - 20rem)' }}>
        {/* Price and Action */}
        <div className="flex items-center justify-between py-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-gold-400">${event.price}</span>
              <span className="text-lg text-white/60 line-through">${event.originalPrice}</span>
            </div>
            <p className="text-sm text-white/70">25% off early bird</p>
          </div>
          <Button 
            className="px-8 h-12 text-lg font-semibold"
            onClick={() => setCurrentScreen('booking')}
          >
            <Ticket className="w-5 h-5 mr-2" />
            Book Now
          </Button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 fill-gold-400 text-gold-400" />
            <span className="font-semibold">{event.rating}</span>
            <span className="text-white/60">({event.reviews} reviews)</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-white/60" />
            <span className="text-white/60">{event.sold}/{event.capacity} sold</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 py-4 border-b border-white/10">
          {[
            { id: 'details', label: 'Details' },
            { id: 'reviews', label: 'Reviews' },
            { id: 'similar', label: 'Similar' },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTab === tab.id
                  ? 'bg-gold-500 text-black'
                  : 'text-white/70 hover:text-white'
              }`}
              onClick={() => setSelectedTab(tab.id as any)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-6">
          {selectedTab === 'details' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold mb-3">About This Event</h3>
                <p className="text-white/80 leading-relaxed">{event.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">What's Included</h3>
                <div className="grid grid-cols-2 gap-3">
                  {event.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-white/80">
                      <Shield className="w-4 h-4 text-gold-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Venue Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-white/80">
                    <MapPin className="w-5 h-5 text-gold-400" />
                    {event.venueDetails.address}
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Phone className="w-5 h-5 text-gold-400" />
                    {event.venueDetails.phone}
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Globe className="w-5 h-5 text-gold-400" />
                    {event.venueDetails.website}
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Instagram className="w-5 h-5 text-gold-400" />
                    {event.venueDetails.instagram}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {selectedTab === 'reviews' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {reviews.map((review) => (
                <Card key={review.id} className="bg-white/5 border-white/10">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white">{review.name}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? 'fill-gold-400 text-gold-400'
                                    : 'text-white/20'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-white/80 text-sm mb-2">{review.comment}</p>
                        <span className="text-white/60 text-xs">{review.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}

          {selectedTab === 'similar' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {similarEvents.map((similarEvent) => (
                <Card key={similarEvent.id} className="bg-white/5 border-white/10 cursor-pointer card-hover">
                  <CardContent className="p-0">
                    <div className="flex">
                      <img
                        src={similarEvent.image}
                        alt={similarEvent.title}
                        className="w-20 h-20 object-cover rounded-l-xl"
                      />
                      <div className="flex-1 p-4">
                        <h4 className="font-semibold text-white mb-1">{similarEvent.title}</h4>
                        <p className="text-white/70 text-sm mb-2">{similarEvent.venue}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                            <span className="text-sm text-white/80">{similarEvent.rating}</span>
                          </div>
                          <span className="text-gold-400 font-semibold">${similarEvent.price}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
