import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Screen = 
  | 'welcome'
  | 'login'
  | 'signup'
  | 'city-selector'
  | 'main-app'
  | 'map'
  | 'event-detail'
  | 'booking'
  | 'checkout'
  | 'confirmation'
  | 'ticket-detail'
  | 'search'
  | 'notifications-settings'
  | 'help'
  | 'venue-dashboard';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  city: string;
  preferences: {
    genres: string[];
    priceRange: [number, number];
    notifications: boolean;
  };
}

export interface Event {
  id: string;
  title: string;
  venue: string;
  date: Date;
  time: string;
  price: number;
  image: string;
  description: string;
  genre: string;
  city: string;
  address: string;
  capacity: number;
  sold: number;
  rating: number;
  reviews: number;
  features: string[];
}

export interface Booking {
  id: string;
  eventId: string;
  userId: string;
  tickets: number;
  totalPrice: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: Date;
  qrCode: string;
}

interface AppContextType {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  selectedEvent: Event | null;
  setSelectedEvent: (event: Event | null) => void;
  currentBooking: Booking | null;
  setCurrentBooking: (booking: Booking | null) => void;
  events: Event[];
  setEvents: (events: Event[]) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>('New York');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        user,
        setUser,
        selectedCity,
        setSelectedCity,
        selectedEvent,
        setSelectedEvent,
        currentBooking,
        setCurrentBooking,
        events,
        setEvents,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
