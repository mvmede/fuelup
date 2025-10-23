import { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import StationDetails from './components/StationDetails';
import CommunityFeed from './components/CommunityFeed';
import ProfileScreen from './components/ProfileScreen';
import NavigationBar from './components/NavigationBar';
import { Toaster } from './components/ui/sonner';

export type Screen = 'splash' | 'onboarding' | 'login' | 'home' | 'stationDetails' | 'community' | 'profile';

export interface Station {
  id: string;
  name: string;
  logo: string;
  price: number;
  rating: number;
  distance: number;
  lat: number;
  lng: number;
  address: string;
  amenities: string[];
  prices: {
    regular: number;
    premium: number;
    diesel: number;
  };
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked?: boolean;
}

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash');
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Show splash screen for 2 seconds
    if (currentScreen === 'splash') {
      const timer = setTimeout(() => {
        setCurrentScreen('onboarding');
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleStationSelect = (station: Station) => {
    setSelectedStation(station);
    setCurrentScreen('stationDetails');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedStation(null);
  };

  const handleLogout = () => {
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen />;
      case 'onboarding':
        return <OnboardingScreen onComplete={() => setCurrentScreen('login')} />;
      case 'login':
        return <LoginScreen onLogin={() => setCurrentScreen('home')} />;
      case 'home':
        return <HomeScreen onStationSelect={handleStationSelect} />;
      case 'stationDetails':
        return <StationDetails station={selectedStation!} onBack={handleBackToHome} />;
      case 'community':
        return <CommunityFeed />;
      case 'profile':
        return <ProfileScreen isDarkMode={isDarkMode} onToggleDarkMode={() => setIsDarkMode(!isDarkMode)} onLogout={handleLogout} />;
      default:
        return <HomeScreen onStationSelect={handleStationSelect} />;
    }
  };

  const showNavBar = ['home', 'community', 'profile'].includes(currentScreen);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0e0e0e]' : 'bg-white'}`}>
      <div className="max-w-md mx-auto relative min-h-screen">
        {renderScreen()}
        {showNavBar && (
          <NavigationBar
            currentScreen={currentScreen}
            onNavigate={(screen) => setCurrentScreen(screen as Screen)}
            isDarkMode={isDarkMode}
          />
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
