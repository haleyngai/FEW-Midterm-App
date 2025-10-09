import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Filter,
  List,
  Navigation,
  Zap,
  Music,
  Camera
} from 'lucide-react';

export const MapScreen: React.FC = () => {
  const { setCurrentScreen, selectedCity } = useApp();
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const events = [
    {
      id: '1',
      title: 'Neon Nights',
      venue: 'Electric Lounge',
      time: '10:00 PM',
      price: 45,
      image: 'https://images.unsplash.com/photo-1571266028243-e68fdfcfd0a6?w=800&h=600&fit=crop',
      genre: 'Electronic',
      rating: 4.8,
      reviews: 234,
      coordinates: { lat: 40.7589, lng: -73.9851 },
      distance: '0.3 mi',
      capacity: 200,
      sold: 156,
    },
    {
      id: '2',
      title: 'Jazz Underground',
      venue: 'Blue Note NYC',
      time: '8:30 PM',
      price: 65,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      genre: 'Jazz',
      rating: 4.9,
      reviews: 189,
      coordinates: { lat: 40.7614, lng: -73.9776 },
      distance: '0.8 mi',
      capacity: 150,
      sold: 142,
    },
    {
      id: '3',
      title: 'Rooftop Rhythms',
      venue: 'Sky High Bar',
      time: '9:00 PM',
      price: 55,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
      genre: 'Hip-Hop',
      rating: 4.7,
      reviews: 156,
      coordinates: { lat: 40.7505, lng: -73.9934 },
      distance: '1.2 mi',
      capacity: 300,
      sold: 203,
    },
    {
      id: '4',
      title: 'Comedy Cellar',
      venue: 'Underground Comedy',
      time: '9:30 PM',
      price: 35,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      genre: 'Comedy',
      rating: 4.6,
      reviews: 98,
      coordinates: { lat: 40.7282, lng: -74.0776 },
      distance: '0.5 mi',
      capacity: 80,
      sold: 67,
    },
  ];

  const getGenreIcon = (genre: string) => {
    switch (genre.toLowerCase()) {
      case 'electronic':
        return <Zap className="w-4 h-4" />;
      case 'jazz':
        return <Music className="w-4 h-4" />;
      case 'comedy':
        return <Camera className="w-4 h-4" />;
      default:
        return <Music className="w-4 h-4" />;
    }
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-20 pt-16 px-6 pb-4"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white mr-4"
              onClick={() => setCurrentScreen('main-app')}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-glow">{selectedCity} Map</h1>
              <p className="text-white/70 text-sm">Live events near you</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="text-white/70 hover:text-white"
            >
              <Filter className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-white/70 hover:text-white"
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Map Container */}
      <div className="relative z-10 h-full px-6 pb-32">
        {/* Simulated Map Background */}
        <div className="relative h-full bg-gradient-to-br from-night-800 to-night-900 rounded-2xl overflow-hidden">
          {/* Map Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-[radial-gradient(circle_at_25%_25%,_rgba(255,255,255,0.1)_0%,_transparent_50%)] bg-[length:50px_50px]" />
          </div>
          
          {/* Event Markers */}
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className={`absolute cursor-pointer transition-all duration-300 ${
                selectedEvent === event.id ? 'z-30' : 'z-10'
              }`}
              style={{
                left: `${20 + (index * 20) % 60}%`,
                top: `${30 + (index * 15) % 40}%`,
              }}
              onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
            >
              <div className={`relative ${
                selectedEvent === event.id ? 'scale-125' : 'hover:scale-110'
              } transition-transform duration-300`}>
                <div className="w-8 h-8 bg-gold-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                  {getGenreIcon(event.genre)}
                </div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gold-500" />
              </div>
            </motion.div>
          ))}

          {/* User Location */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            <div className="w-4 h-4 bg-neon-blue rounded-full border-2 border-white shadow-lg animate-pulse" />
            <div className="absolute inset-0 w-4 h-4 bg-neon-blue/30 rounded-full animate-ping" />
          </motion.div>

          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-[linear-gradient(to_right,_rgba(255,255,255,0.1)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:50px_50px]" />
          </div>
        </div>
      </div>

      {/* Bottom Sheet - Event Details */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: selectedEvent ? 0 : 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 rounded-t-2xl z-30"
      >
        {selectedEvent && (
          <div className="p-6">
            {(() => {
              const event = events.find(e => e.id === selectedEvent);
              if (!event) return null;
              
              return (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{event.title}</h3>
                      <p className="text-white/70">{event.venue}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gold-400">${event.price}</div>
                      <div className="text-sm text-white/60">per ticket</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.distance}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                      {event.rating}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-white/70">
                      <Users className="w-4 h-4" />
                      {event.sold}/{event.capacity} tickets sold
                    </div>
                    <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gold-500 transition-all duration-300"
                        style={{ width: `${(event.sold / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full h-12"
                    onClick={() => setCurrentScreen('event-detail')}
                  >
                    View Details
                  </Button>
                </motion.div>
              );
            })()}
          </div>
        )}
        
        {/* Default Bottom Bar */}
        {!selectedEvent && (
          <div className="p-6">
            <div className="text-center">
              <Navigation className="w-8 h-8 text-white/40 mx-auto mb-2" />
              <p className="text-white/60 text-sm">Tap on a marker to see event details</p>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
