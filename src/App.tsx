import { AppProvider, useApp } from './lib/context';
import { Toaster } from './components/ui/sonner';

// Import all screens
import { WelcomeScreen } from './components/screens/welcome-screen';
import { LoginScreen } from './components/screens/login-screen';
import { SignupScreen } from './components/screens/signup-screen';
import { CitySelectorScreen } from './components/screens/city-selector-screen';
import { MainAppScreen } from './components/screens/main-app-screen';
import { MapScreen } from './components/screens/map-screen';
import { EventDetailScreen } from './components/screens/event-detail-screen';
import { BookingScreen } from './components/screens/booking-screen';
import { CheckoutScreen } from './components/screens/checkout-screen';
import { ConfirmationScreen } from './components/screens/confirmation-screen';
import { TicketDetailScreen } from './components/screens/ticket-detail-screen';
import { SearchScreen } from './components/screens/search-screen';
import { NotificationsSettingsScreen } from './components/screens/notifications-settings-screen';
import { HelpScreen } from './components/screens/help-screen';
import { VenueDashboardScreen } from './components/screens/venue-dashboard-screen';

function AppContent() {
  const { currentScreen } = useApp();

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'login':
        return <LoginScreen />;
      case 'signup':
        return <SignupScreen />;
      case 'city-selector':
        return <CitySelectorScreen />;
      case 'main-app':
        return <MainAppScreen />;
      case 'map':
        return <MapScreen />;
      case 'event-detail':
        return <EventDetailScreen />;
      case 'booking':
        return <BookingScreen />;
      case 'checkout':
        return <CheckoutScreen />;
      case 'confirmation':
        return <ConfirmationScreen />;
      case 'ticket-detail':
        return <TicketDetailScreen />;
      case 'search':
        return <SearchScreen />;
      case 'notifications-settings':
        return <NotificationsSettingsScreen />;
      case 'help':
        return <HelpScreen />;
      case 'venue-dashboard':
        return <VenueDashboardScreen />;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <div className="size-full bg-muted flex items-center justify-center p-4">
      {/* Mobile App Container */}
      <div className="relative w-full max-w-[430px] h-[932px] max-h-[95vh] bg-background rounded-[3rem] shadow-2xl overflow-hidden border-8 border-[#1a1a1a]">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-background/95 backdrop-blur-sm z-50 px-8 flex items-center justify-between text-xs">
          <span>{new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</span>
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-7 bg-background rounded-b-3xl" />
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>
            </svg>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.5 1a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h7zM1 5v4a1.5 1.5 0 0 0 1.5 1.5h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 1 0 9V5a2.5 2.5 0 0 1 2.5-2.5h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 1 5z"/>
            </svg>
          </div>
        </div>
        
        {/* App Content */}
        <div className="w-full h-full overflow-hidden relative">
          {renderScreen()}
        </div>
      </div>
      <Toaster />
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
