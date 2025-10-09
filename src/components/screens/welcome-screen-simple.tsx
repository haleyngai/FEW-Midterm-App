import React from 'react';
import { Button } from '../ui/button-simple';
import { Card, CardContent } from '../ui/card-simple';
import { useApp } from '../../lib/context-simple';
import { MapPin, Star, Clock, Users, ArrowRight, Music, Camera, Zap, Play } from 'lucide-react';

export const WelcomeScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();

  const featuredEvents = [
    {
      id: '1',
      title: 'Neon Nights',
      venue: 'Electric Lounge',
      time: '10:00 PM',
      price: 45,
      genre: 'Electronic',
      rating: 4.8,
      reviews: 234,
    },
    {
      id: '2',
      title: 'Jazz Underground',
      venue: 'Blue Note NYC',
      time: '8:30 PM',
      price: 65,
      genre: 'Jazz',
      rating: 4.9,
      reviews: 189,
    },
  ];

  const categories = [
    { name: 'Live Music', icon: Music },
    { name: 'Comedy Shows', icon: Camera },
    { name: 'DJ Sets', icon: Zap },
    { name: 'Immersive', icon: Play },
  ];

  return (
    <div className="h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Header */}
      <div className="pt-16 px-6 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">Speakeasy</h1>
            <p className="text-white/70 text-lg">Discover NYC's hidden nightlife</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white"
            onClick={() => setCurrentScreen('main-app')}
          >
            <MapPin className="w-5 h-5" />
          </Button>
        </div>

        {/* Quick stats */}
        <div className="flex gap-4 mb-6">
          <div className="bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 text-center flex-1">
            <div className="text-2xl font-bold text-yellow-400">247</div>
            <div className="text-xs text-white/60">Events Tonight</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 text-center flex-1">
            <div className="text-2xl font-bold text-yellow-400">89</div>
            <div className="text-xs text-white/60">Venues</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-xl px-4 py-2 text-center flex-1">
            <div className="text-2xl font-bold text-yellow-400">4.8</div>
            <div className="text-xs text-white/60">Avg Rating</div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="px-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {categories.map((category, index) => (
            <Card key={category.name} className="w-24 h-24 cursor-pointer border-0 bg-gradient-to-br from-white/10 to-white/5">
              <CardContent className="p-3 h-full flex flex-col items-center justify-center">
                <category.icon className="w-8 h-8 text-yellow-400 mb-2" />
                <span className="text-xs text-center text-white/80">{category.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Events */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Featured Tonight</h2>
          <Button variant="ghost" size="sm" className="text-yellow-400 hover:text-yellow-300">
            See All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        <div className="space-y-4">
          {featuredEvents.map((event) => (
            <Card key={event.id} className="cursor-pointer border-0 bg-gradient-to-r from-white/10 to-white/5">
              <CardContent className="p-0">
                <div className="flex">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0 flex items-center justify-center">
                    <Music className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-white mb-1">{event.title}</h3>
                        <p className="text-sm text-white/70">{event.venue}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-bold">${event.price}</div>
                        <div className="text-xs text-white/60">per ticket</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-white/60">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
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
          ))}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="px-6 pb-8">
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
              className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500"
              onClick={() => setCurrentScreen('signup')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
