import React from 'react';
import { AppProvider, useApp } from './lib/context-simple';

// Import simple screens
import { WelcomeScreen } from './components/screens/welcome-screen-simple';
import { LoginScreen } from './components/screens/login-screen-simple';
import { CitySelectorScreen } from './components/screens/city-selector-screen-simple';

function AppContent() {
  const { currentScreen } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'login':
        return <LoginScreen />;
      case 'signup':
        return <LoginScreen />; // Reuse login for simplicity
      case 'city-selector':
        return <CitySelectorScreen />;
      case 'main-app':
        return (
          <div className="h-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Main App</h1>
              <p className="text-white/70 mb-6">Event discovery and booking</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-600 transition-colors"
              >
                Back to Welcome
              </button>
            </div>
          </div>
        );
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="size-full bg-gray-900 flex items-center justify-center p-4">
      {/* Mobile App Container */}
      <div className="relative w-full max-w-[430px] h-[932px] max-h-[95vh] bg-gray-900 rounded-[3rem] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-gray-900/95 backdrop-blur-sm z-50 px-8 flex items-center justify-between text-xs">
          <span>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-3xl" />
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-white/80 rounded-sm"></div>
            <div className="w-3 h-3 bg-white/60 rounded-sm"></div>
          </div>
        </div>
        
        {/* App Content */}
        <div className="w-full h-full overflow-hidden relative">
          {renderScreen()}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
