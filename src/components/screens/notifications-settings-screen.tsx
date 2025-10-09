import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { useApp } from '../../lib/context';
import { 
  ArrowLeft, 
  Bell, 
  BellOff, 
  Settings,
  Calendar,
  MapPin,
  Star,
  Users,
  Music,
  Zap,
  Camera,
  Shield,
  Clock
} from 'lucide-react';

export const NotificationsSettingsScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [notifications, setNotifications] = useState({
    push: true,
    email: true,
    sms: false,
    newEvents: true,
    priceDrops: true,
    eventReminders: true,
    venueUpdates: false,
    recommendations: true,
    promotions: false,
    socialUpdates: false,
  });

  const notificationCategories = [
    {
      id: 'newEvents',
      title: 'New Events',
      description: 'Get notified about new events in your area',
      icon: Calendar,
      color: 'text-blue-400',
    },
    {
      id: 'priceDrops',
      title: 'Price Drops',
      description: 'Alerts when ticket prices decrease',
      icon: Zap,
      color: 'text-green-400',
    },
    {
      id: 'eventReminders',
      title: 'Event Reminders',
      description: 'Reminders before your booked events',
      icon: Clock,
      color: 'text-orange-400',
    },
    {
      id: 'venueUpdates',
      title: 'Venue Updates',
      description: 'Updates from venues you follow',
      icon: MapPin,
      color: 'text-purple-400',
    },
    {
      id: 'recommendations',
      title: 'Recommendations',
      description: 'Personalized event suggestions',
      icon: Star,
      color: 'text-gold-400',
    },
    {
      id: 'promotions',
      title: 'Promotions',
      description: 'Special offers and discounts',
      icon: Music,
      color: 'text-neon-pink',
    },
    {
      id: 'socialUpdates',
      title: 'Social Updates',
      description: 'Updates from friends and artists',
      icon: Users,
      color: 'text-cyan-400',
    },
  ];

  const toggleNotification = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleAllNotifications = (enabled: boolean) => {
    setNotifications(prev => ({
      ...prev,
      push: enabled,
      email: enabled,
      sms: enabled,
    }));
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-neon-blue/5 rounded-full blur-3xl animate-pulse-slow" />
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
          <div>
            <h1 className="text-2xl font-bold text-glow">Notifications</h1>
            <p className="text-white/70 text-sm">Customize your notification preferences</p>
          </div>
        </div>
      </motion.div>

      {/* Master Controls */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gold-500/20 rounded-xl flex items-center justify-center">
                  <Bell className="w-6 h-6 text-gold-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">All Notifications</h2>
                  <p className="text-white/70 text-sm">Enable or disable all notifications</p>
                </div>
              </div>
              <Button
                variant={notifications.push ? 'default' : 'outline'}
                size="sm"
                onClick={() => toggleAllNotifications(!notifications.push)}
              >
                {notifications.push ? 'Enabled' : 'Disabled'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Notification Channels */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Notification Channels</h2>
        <div className="space-y-3">
          {[
            { key: 'push', title: 'Push Notifications', description: 'Receive notifications on your device' },
            { key: 'email', title: 'Email Notifications', description: 'Get updates via email' },
            { key: 'sms', title: 'SMS Notifications', description: 'Text message alerts' },
          ].map((channel) => (
            <Card key={channel.key} className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{channel.title}</h3>
                    <p className="text-white/70 text-sm">{channel.description}</p>
                  </div>
                  <Button
                    variant={notifications[channel.key as keyof typeof notifications] ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleNotification(channel.key)}
                  >
                    {notifications[channel.key as keyof typeof notifications] ? 'On' : 'Off'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Notification Categories */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 px-6 mb-6"
      >
        <h2 className="text-lg font-semibold mb-4">Notification Types</h2>
        <div className="space-y-3">
          {notificationCategories.map((category) => (
            <Card key={category.id} className="bg-white/5 border-white/10">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                      <category.icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{category.title}</h3>
                      <p className="text-white/70 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <Button
                    variant={notifications[category.id as keyof typeof notifications] ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => toggleNotification(category.id)}
                  >
                    {notifications[category.id as keyof typeof notifications] ? 'On' : 'Off'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      {/* Quiet Hours */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 px-6 mb-6"
      >
        <Card className="bg-white/5 border-white/10">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Quiet Hours</h3>
                <p className="text-white/70 text-sm">Automatically disable notifications during sleep hours</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70 mb-2 block">From</label>
                <select className="w-full h-10 bg-white/5 border border-white/20 rounded-xl px-3 text-white text-sm focus:outline-none focus:border-gold-500/50">
                  <option value="22:00" className="bg-night-900">10:00 PM</option>
                  <option value="23:00" className="bg-night-900">11:00 PM</option>
                  <option value="00:00" className="bg-night-900">12:00 AM</option>
                </select>
              </div>
              <div>
                <label className="text-sm text-white/70 mb-2 block">To</label>
                <select className="w-full h-10 bg-white/5 border border-white/20 rounded-xl px-3 text-white text-sm focus:outline-none focus:border-gold-500/50">
                  <option value="08:00" className="bg-night-900">8:00 AM</option>
                  <option value="09:00" className="bg-night-900">9:00 AM</option>
                  <option value="10:00" className="bg-night-900">10:00 AM</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Save Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="relative z-10 px-6 pb-8"
      >
        <Button className="w-full h-12">
          <Settings className="w-5 h-5 mr-2" />
          Save Preferences
        </Button>
      </motion.div>
    </div>
  );
};
