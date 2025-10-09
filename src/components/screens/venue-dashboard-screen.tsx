import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Plus, 
  TrendingUp, 
  Users, 
  Calendar,
  DollarSign,
  Star,
  Eye,
  Edit,
  BarChart3,
  Settings,
  Bell,
  MapPin,
  Clock,
  Music,
  Camera,
  Zap,
  MoreHorizontal,
  Download,
  Share2
} from 'lucide-react';

export const VenueDashboardScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [selectedTab, setSelectedTab] = useState<'overview' | 'events' | 'analytics' | 'settings'>('overview');

  const venueStats = {
    totalEvents: 47,
    totalRevenue: 125430,
    totalTickets: 2847,
    averageRating: 4.7,
    monthlyGrowth: 23,
    activeEvents: 8,
    upcomingEvents: 12,
  };

  const recentEvents = [
    {
      id: '1',
      title: 'Neon Nights',
      date: new Date('2024-02-15'),
      ticketsSold: 156,
      capacity: 200,
      revenue: 7020,
      status: 'active',
      genre: 'Electronic',
    },
    {
      id: '2',
      title: 'Jazz Underground',
      date: new Date('2024-02-16'),
      ticketsSold: 142,
      capacity: 150,
      revenue: 9230,
      status: 'upcoming',
      genre: 'Jazz',
    },
    {
      id: '3',
      title: 'Comedy Cellar',
      date: new Date('2024-02-18'),
      ticketsSold: 67,
      capacity: 80,
      revenue: 2345,
      status: 'upcoming',
      genre: 'Comedy',
    },
  ];

  const upcomingEvents = [
    {
      id: '4',
      title: 'Rooftop Rhythms',
      date: new Date('2024-02-20'),
      time: '9:00 PM',
      ticketsSold: 203,
      capacity: 300,
      revenue: 11165,
      genre: 'Hip-Hop',
    },
    {
      id: '5',
      title: 'Electronic Dreams',
      date: new Date('2024-02-22'),
      time: '10:00 PM',
      ticketsSold: 89,
      capacity: 200,
      revenue: 4450,
      genre: 'Electronic',
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
      case 'hip-hop':
        return <Music className="w-4 h-4" />;
      default:
        return <Music className="w-4 h-4" />;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-gold-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-neon-pink/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-16 px-6 pb-4"
      >
        <div className="flex items-center justify-between mb-6">
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
              <h1 className="text-2xl font-bold text-glow">Venue Dashboard</h1>
              <p className="text-white/70 text-sm">Electric Lounge</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon" className="text-white/70 hover:text-white">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="text-white/70 hover:text-white">
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Overview */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <div className="grid grid-cols-2 gap-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Total Revenue</p>
                  <p className="text-xl font-bold text-white">{formatCurrency(venueStats.totalRevenue)}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-green-400 text-sm">
                <TrendingUp className="w-4 h-4" />
                +{venueStats.monthlyGrowth}% this month
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Total Tickets</p>
                  <p className="text-xl font-bold text-white">{venueStats.totalTickets.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-blue-400 text-sm">
                <Calendar className="w-4 h-4" />
                {venueStats.activeEvents} active events
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gold-500/20 rounded-xl flex items-center justify-center">
                  <Star className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Avg Rating</p>
                  <p className="text-xl font-bold text-white">{venueStats.averageRating}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gold-400 text-sm">
                <Eye className="w-4 h-4" />
                Based on 1,247 reviews
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Total Events</p>
                  <p className="text-xl font-bold text-white">{venueStats.totalEvents}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-purple-400 text-sm">
                <Clock className="w-4 h-4" />
                {venueStats.upcomingEvents} upcoming
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 mb-6"
      >
        <div className="flex gap-3">
          <Button className="flex-1">
            <Plus className="w-5 h-5 mr-2" />
            Create Event
          </Button>
          <Button variant="outline" className="flex-1">
            <BarChart3 className="w-5 h-5 mr-2" />
            View Analytics
          </Button>
        </div>
      </motion.div>

      {/* Recent Events */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Events</h2>
          <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300">
            View All
          </Button>
        </div>
        <div className="space-y-3">
          {recentEvents.map((event) => (
            <Card key={event.id} className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                      {getGenreIcon(event.genre)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{event.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {event.date.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.ticketsSold}/{event.capacity}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold-400 font-bold">{formatCurrency(event.revenue)}</div>
                    <div className={`text-xs px-2 py-1 rounded-full ${
                      event.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {event.status}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Upcoming Events */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 px-6 pb-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Upcoming Events</h2>
          <Button variant="ghost" size="sm" className="text-gold-400 hover:text-gold-300">
            View All
          </Button>
        </div>
        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-neon-pink/20 rounded-xl flex items-center justify-center">
                      {getGenreIcon(event.genre)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{event.title}</h3>
                      <div className="flex items-center gap-4 text-xs text-white/60">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {event.date.toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {event.ticketsSold}/{event.capacity}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-gold-400 font-bold">{formatCurrency(event.revenue)}</div>
                      <div className="text-xs text-white/60">Revenue</div>
                    </div>
                    <Button variant="ghost" size="icon" className="text-white/40 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
