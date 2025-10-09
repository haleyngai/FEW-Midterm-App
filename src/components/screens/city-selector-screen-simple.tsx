import React from 'react';
import { Button } from '../ui/button-simple';
import { Card, CardContent } from '../ui/card-simple';
import { useApp } from '../../lib/context-simple';
import { MapPin, Users, Calendar, Star, ArrowRight } from 'lucide-react';

export const CitySelectorScreen: React.FC = () => {
  const { setCurrentScreen, setSelectedCity } = useApp();

  const cities = [
    {
      id: 'nyc',
      name: 'New York',
      state: 'NY',
      events: 247,
      venues: 89,
      rating: 4.8,
      featured: true,
    },
    {
      id: 'la',
      name: 'Los Angeles',
      state: 'CA',
      events: 189,
      venues: 67,
      rating: 4.7,
      featured: true,
    },
    {
      id: 'chicago',
      name: 'Chicago',
      state: 'IL',
      events: 156,
      venues: 54,
      rating: 4.6,
      featured: false,
    },
    {
      id: 'miami',
      name: 'Miami',
      state: 'FL',
      events: 134,
      venues: 43,
      rating: 4.5,
      featured: false,
    },
  ];

  const handleCitySelect = (cityId: string, cityName: string) => {
    setSelectedCity(cityName);
    setTimeout(() => {
      setCurrentScreen('main-app');
    }, 500);
  };

  return (
    <div className="h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white overflow-hidden relative">
      {/* Header */}
      <div className="pt-16 px-6 pb-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Choose Your City</h1>
          <p className="text-white/70 text-lg">Where's the party tonight?</p>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="px-6 pb-8">
        <div className="grid grid-cols-2 gap-4">
          {cities.map((city, index) => (
            <div
              key={city.id}
              className="cursor-pointer"
              onClick={() => handleCitySelect(city.id, city.name)}
            >
              <Card className={`border-0 overflow-hidden transition-all duration-300 hover:scale-105 ${
                city.featured 
                  ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20' 
                  : 'bg-gradient-to-br from-white/10 to-white/5'
              }`}>
                <CardContent className="p-0">
                  <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-white mx-auto mb-2" />
                      <h3 className="font-bold text-white text-lg">{city.name}</h3>
                      <p className="text-white/70">{city.state}</p>
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
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-white/70">{city.rating}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-white/50" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-6">
          <p className="text-white/60 text-sm">
            More cities coming soon! 🎉
          </p>
        </div>
      </div>
    </div>
  );
};
