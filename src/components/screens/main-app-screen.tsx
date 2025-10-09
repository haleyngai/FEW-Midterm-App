import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  Map, 
  List, 
  Search, 
  Filter, 
  Bell, 
  User, 
  Star, 
  Clock, 
  Users, 
  MapPin,
  Music,
  Camera,
  Zap,
  ArrowRight
} from 'lucide-react';

export const MainAppScreen: React.FC = () => {
  const { setCurrentScreen, selectedCity } = useApp();
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
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
      distance: '0.3 mi',
      capacity: 200,
      sold: 156,
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
      distance: '0.8 mi',
      capacity: 150,
      sold: 142,
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
      distance: '1.2 mi',
      capacity: 300,
      sold: 203,
    },
    {
      id: '4',
      title: 'Comedy Cellar',
      venue: 'Underground Comedy',
      date: new Date('2024-02-18'),
      time: '9:30 PM',
      price: 35,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      genre: 'Comedy',
      rating: 4.6,
      reviews: 98,
      distance: '0.5 mi',
      capacity: 80,
      sold: 67,
    },
  ];

  const filters = [
    { id: 'all', name: 'All', icon: Music },
    { id: 'electronic', name: 'Electronic', icon: Zap },
    { id: 'jazz', name: 'Jazz', icon: Music },
    { id: 'comedy', name: 'Comedy', icon: Camera },
    { id: 'hip-hop', name: 'Hip-Hop', icon: Music },
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.genre.toLowerCase() === selectedFilter);

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
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-glow">{selectedCity}</h1>
            <p className="text-white/70 text-sm">Tonight's events</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white"
              onClick={() => setCurrentScreen('notifications-settings')}
            >
              <Bell className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white/70 hover:text-white"
              onClick={() => setCurrentScreen('search')}
            >
              <User className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <input
            type="text"
            placeholder="Search events, venues, artists..."
            className="w-full h-12 bg-white/5 border border-white/20 rounded-xl px-12 text-white placeholder:text-white/50 focus:outline-none focus:border-gold-500/50 transition-colors"
            onClick={() => setCurrentScreen('search')}
          />
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex bg-white/5 rounded-xl p-1">
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              className="px-4"
              onClick={() => setViewMode('list')}
            >
              <List className="w-4 h-4 mr-2" />
              List
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'ghost'}
              size="sm"
              className="px-4"
              onClick={() => setViewMode('map')}
            >
              <Map className="w-4 h-4 mr-2" />
              Map
            </Button>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-white/70 hover:text-white"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-4"
      >
        <div className="flex gap-3 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? 'default' : 'outline'}
              size="sm"
              className="flex-shrink-0"
              onClick={() => setSelectedFilter(filter.id)}
            >
              <filter.icon className="w-4 h-4 mr-2" />
              {filter.name}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Events List */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 pb-20 overflow-y-auto"
      >
        <div className="space-y-4">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setCurrentScreen('event-detail')}
            >
              <Card className="card-hover border-0 bg-gradient-to-r from-white/10 to-white/5 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-28 h-28 flex-shrink-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-2 right-2">
                        <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                          {event.genre}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1 line-clamp-1">{event.title}</h3>
                          <p className="text-sm text-white/70 mb-1">{event.venue}</p>
                          <div className="flex items-center gap-3 text-xs text-white/60">
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {event.time}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {event.distance}
                            </div>
                          </div>
                        </div>
                        <div className="text-right ml-2">
                          <div className="text-gold-400 font-bold">${event.price}</div>
                          <div className="text-xs text-white/60">per ticket</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-white/60">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-gold-400 text-gold-400" />
                            {event.rating}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {event.sold}/{event.capacity}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-white/50" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 p-4">
        <div className="flex justify-around">
          <Button variant="ghost" size="sm" className="text-gold-400">
            <List className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white/50">
            <Map className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white/50">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white/50">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};
