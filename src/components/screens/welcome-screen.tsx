import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { MapPin, Star, Clock, Users, ArrowRight, Play, Music, Camera, Zap } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const featuredEvents = [
    {
      id: '1',
      title: 'Neon Nights',
      venue: 'Electric Lounge',
      date: new Date('2024-02-15'),
      time: '10:00 PM',
      price: 45,
      image: 'https://images.unsplash.com/photo-1571266028243-e68fdfcfd0a6?w=800&h=600&fit=crop',
      genre: 'Electronic',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: '2',
      title: 'Jazz Underground',
      venue: 'Blue Note NYC',
      date: new Date('2024-02-16'),
      time: '8:30 PM',
      price: 65,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop',
      genre: 'Jazz',
      rating: 4.9,
      reviews: 189,
    },
    {
      id: '3',
      title: 'Rooftop Rhythms',
      venue: 'Sky High Bar',
      date: new Date('2024-02-17'),
      time: '9:00 PM',
      price: 55,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
      genre: 'Hip-Hop',
      rating: 4.7,
      reviews: 156,
    },
  ];

  const categories = [
    { name: 'Live Music', icon: Music, color: 'from-purple-500 to-pink-500' },
    { name: 'Comedy Shows', icon: Camera, color: 'from-blue-500 to-cyan-500' },
    { name: 'DJ Sets', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { name: 'Immersive', icon: Play, color: 'from-green-500 to-emerald-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % featuredEvents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-16 px-6 pb-4"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold text-glow mb-2">Speakeasy</h1>
            <p className="text-white/70 text-lg">Discover NYC's hidden nightlife</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white"
            onClick={() => setCurrentScreen('search')}
          >
            <MapPin className="w-6 h-6" />
          </Button>
        </div>

        {/* Quick stats */}
        <div className="flex gap-4 mb-6">
          <div className="glass-effect rounded-xl px-4 py-2 text-center flex-1">
            <div className="text-2xl font-bold text-gold-400">247</div>
            <div className="text-xs text-white/60">Events Tonight</div>
          </div>
          <div className="glass-effect rounded-xl px-4 py-2 text-center flex-1">
            <div className="text-2xl font-bold text-gold-400">89</div>
            <div className="text-xs text-white/60">Venues</div>
          </div>
          <div className="glass-effect rounded-xl px-4 py-2 text-center flex-1">
            <div className="text-2xl font-bold text-gold-400">4.8</div>
            <div className="text-xs text-white/60">Avg Rating</div>
          </div>
        </div>
      </motion.div>

      {/* Categories */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex-shrink-0"
            >
              <Card className="w-24 h-24 cursor-pointer card-hover border-0 bg-gradient-to-br from-white/10 to-white/5">
                <CardContent className="p-3 h-full flex flex-col items-center justify-center">
                  <category.icon className="w-8 h-8 text-gold-400 mb-2" />
                  <span className="text-xs text-center text-white/80">{category.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Featured Events */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Tonight</h2>
          <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300">
            See All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="space-y-4">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setCurrentScreen('event-detail')}
            >
              <Card className="card-hover border-0 bg-gradient-to-r from-white/10 to-white/5 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                          <p className="text-sm text-white/70">{event.venue}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-gold-400 font-bold">${event.price}</div>
                          <div className="text-xs text-white/60">per ticket</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-white/60">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                          {event.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.reviews}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 px-6 pb-8"
      >
        <div className="space-y-3">
          <Button 
            className="w-full h-14 text-lg font-semibold"
            onClick={() => setCurrentScreen('main-app')}
          >
            Explore Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => setCurrentScreen('login')}
            >
              Sign In
            </Button>
            <Button 
              variant="neon" 
              className="flex-1"
              onClick={() => setCurrentScreen('signup')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
