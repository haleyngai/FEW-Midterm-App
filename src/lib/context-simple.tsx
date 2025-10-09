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
  | 'confirmation';

interface AppContextType {
  currentScreen: Screen;
  setCurrentScreen: (screen: Screen) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedCity, setSelectedCity] = useState<string>('New York');

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        setCurrentScreen,
        selectedCity,
        setSelectedCity,
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
