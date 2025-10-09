import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Search, 
  Filter, 
  SlidersHorizontal,
  MapPin, 
  Star, 
  Clock, 
  Users, 
  Calendar,
  Music,
  Camera,
  Zap,
  X
} from 'lucide-react';

export const SearchScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');

  const searchResults = [
    {
      id: '1',
      title: 'Neon Nights',
      venue: 'Electric Lounge',
      date: new Date('2024-02-15'),
      time: '10:00 PM',
      price: 45,
      image: 'https://images.unsplash.com/photo-1571266028243-e68fdfcfd0a6?w=400&h=300&fit=crop',
      genre: 'Electronic',
      rating: 4.8,
      reviews: 234,
      distance: '0.3 mi',
    },
    {
      id: '2',
      title: 'Jazz Underground',
      venue: 'Blue Note NYC',
      date: new Date('2024-02-16'),
      time: '8:30 PM',
      price: 65,
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
      genre: 'Jazz',
      rating: 4.9,
      reviews: 189,
      distance: '0.8 mi',
    },
    {
      id: '3',
      title: 'Comedy Cellar',
      venue: 'Underground Comedy',
      date: new Date('2024-02-18'),
      time: '9:30 PM',
      price: 35,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
      genre: 'Comedy',
      rating: 4.6,
      reviews: 98,
      distance: '0.5 mi',
    },
  ];

  const popularSearches = [
    'Live Music',
    'Comedy Shows',
    'DJ Sets',
    'Jazz Clubs',
    'Rooftop Bars',
    'Underground Events',
  ];

  const filterOptions = [
    { id: 'price-low', name: 'Under $30', type: 'price' },
    { id: 'price-mid', name: '$30-$60', type: 'price' },
    { id: 'price-high', name: 'Over $60', type: 'price' },
    { id: 'tonight', name: 'Tonight', type: 'date' },
    { id: 'weekend', name: 'This Weekend', type: 'date' },
    { id: 'electronic', name: 'Electronic', type: 'genre' },
    { id: 'jazz', name: 'Jazz', type: 'genre' },
    { id: 'comedy', name: 'Comedy', type: 'genre' },
    { id: 'hip-hop', name: 'Hip-Hop', type: 'genre' },
    { id: 'nearby', name: 'Within 1 mile', type: 'location' },
  ];

  const sortOptions = [
    { id: 'relevance', name: 'Most Relevant' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'date', name: 'Date' },
    { id: 'distance', name: 'Distance' },
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

  const toggleFilter = (filterId: string) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
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
            onClick={() => setCurrentScreen('main-app')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-glow">Search Events</h1>
            <p className="text-white/70 text-sm">Find your perfect night out</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input
            type="text"
            placeholder="Search events, venues, artists..."
            className="pl-12 pr-20"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
              onClick={() => setSearchQuery('')}
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Sort and Filter */}
        <div className="flex items-center gap-3">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="flex-1 h-10 bg-white/5 border border-white/20 rounded-xl px-4 text-white text-sm focus:outline-none focus:border-gold-500/50"
          >
            {sortOptions.map((option) => (
              <option key={option.id} value={option.id} className="bg-night-900">
                {option.name}
              </option>
            ))}
          </select>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowFilters(!showFilters)}
            className={selectedFilters.length > 0 ? 'border-gold-500/50' : ''}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {selectedFilters.length > 0 && (
              <span className="ml-2 bg-gold-500 text-black text-xs px-2 py-1 rounded-full">
                {selectedFilters.length}
              </span>
            )}
          </Button>
        </div>
      </motion.div>

      {/* Filters Panel */}
      {showFilters && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="relative z-10 px-6 mb-6"
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFilters([])}
                  className="text-gold-400 hover:text-gold-300"
                >
                  Clear All
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {filterOptions.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={selectedFilters.includes(filter.id) ? 'default' : 'outline'}
                    size="sm"
                    className="text-xs"
                    onClick={() => toggleFilter(filter.id)}
                  >
                    {filter.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      )}

      {/* Popular Searches */}
      {!searchQuery && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 px-6 mb-6"
        >
          <h2 className="text-lg font-semibold mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search) => (
              <Button
                key={search}
                variant="outline"
                size="sm"
                className="text-white/70 hover:text-white"
                onClick={() => setSearchQuery(search)}
              >
                {search}
              </Button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Search Results */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 pb-8 overflow-y-auto"
        style={{ height: searchQuery ? 'calc(100% - 12rem)' : 'calc(100% - 20rem)' }}
      >
        {searchQuery ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                {searchResults.length} results for "{searchQuery}"
              </h2>
            </div>
            
            {searchResults.map((event, index) => (
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
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-2 right-2">
                          <div className="bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            {getGenreIcon(event.genre)}
                            {event.genre}
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-white mb-1 line-clamp-1">{event.title}</h3>
                            <p className="text-sm text-white/70 mb-1">{event.venue}</p>
                            <div className="flex items-center gap-3 text-xs text-white/60">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                Feb 15
                              </div>
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
                              {event.reviews} reviews
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white/60 mb-2">Start Searching</h3>
            <p className="text-white/40">Enter keywords to find events, venues, or artists</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};
