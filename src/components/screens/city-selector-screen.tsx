import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { MapPin, Users, Calendar, Star, ArrowRight } from 'lucide-react';

export const CitySelectorScreen: React.FC = () => {
  const { setCurrentScreen, setSelectedCity } = useApp();
  const [selectedCity, setSelectedCityState] = useState<string>('');

  const cities = [
    {
      id: 'nyc',
      name: 'New York',
      state: 'NY',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop',
      events: 247,
      venues: 89,
      rating: 4.8,
      featured: true,
    },
    {
      id: 'la',
      name: 'Los Angeles',
      state: 'CA',
      image: 'https://images.unsplash.com/photo-1515894202840-0c2c0b7d3e3a?w=800&h=600&fit=crop',
      events: 189,
      venues: 67,
      rating: 4.7,
      featured: true,
    },
    {
      id: 'chicago',
      name: 'Chicago',
      state: 'IL',
      image: 'https://images.unsplash.com/photo-1513642624406-6d6a7b5b5b5b?w=800&h=600&fit=crop',
      events: 156,
      venues: 54,
      rating: 4.6,
      featured: false,
    },
    {
      id: 'miami',
      name: 'Miami',
      state: 'FL',
      image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop',
      events: 134,
      venues: 43,
      rating: 4.5,
      featured: false,
    },
    {
      id: 'austin',
      name: 'Austin',
      state: 'TX',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      events: 98,
      venues: 32,
      rating: 4.4,
      featured: false,
    },
    {
      id: 'seattle',
      name: 'Seattle',
      state: 'WA',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      events: 87,
      venues: 28,
      rating: 4.3,
      featured: false,
    },
  ];

  const handleCitySelect = (cityId: string, cityName: string) => {
    setSelectedCityState(cityId);
    setSelectedCity(cityName);
    // Simulate loading
    setTimeout(() => {
      setCurrentScreen('main-app');
    }, 500);
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 -right-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-16 px-6 pb-6"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-glow mb-2">Choose Your City</h1>
          <p className="text-white/70 text-lg">Where's the party tonight?</p>
        </div>
      </motion.div>

      {/* Cities Grid */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 pb-8"
      >
        <div className="grid grid-cols-2 gap-4">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="cursor-pointer"
              onClick={() => handleCitySelect(city.id, city.name)}
            >
              <Card className={`card-hover border-0 overflow-hidden relative ${
                selectedCity === city.id 
                  ? 'ring-2 ring-gold-500 bg-gradient-to-br from-gold-500/20 to-gold-600/20' 
                  : 'bg-gradient-to-br from-white/10 to-white/5'
              }`}>
                <CardContent className="p-0">
                  <div className="relative h-32">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    
                    {/* Featured Badge */}
                    {city.featured && (
                      <div className="absolute top-2 left-2">
                        <div className="bg-gold-500 text-black text-xs px-2 py-1 rounded-full font-semibold">
                          Featured
                        </div>
                      </div>
                    )}
                    
                    {/* City Name */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="font-bold text-white text-lg">{city.name}</h3>
                      <p className="text-white/70 text-sm">{city.state}</p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between text-xs text-white/70">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {city.events} events
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {city.venues} venues
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                        <span className="text-xs text-white/70">{city.rating}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-6"
        >
          <p className="text-white/60 text-sm">
            More cities coming soon! 🎉
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
