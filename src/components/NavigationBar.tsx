import { motion } from 'motion/react';
import { MapPin, MessageSquare, Heart, User } from 'lucide-react';
import { Screen } from '../App';

interface NavigationBarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  isDarkMode: boolean;
}

export default function NavigationBar({ currentScreen, onNavigate, isDarkMode }: NavigationBarProps) {
  const navItems = [
    { id: 'home', icon: MapPin, label: 'Map' },
    { id: 'community', icon: MessageSquare, label: 'Feed' },
    { id: 'favorites', icon: Heart, label: 'Favorites' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${isDarkMode ? 'bg-[#0B1B2B]' : 'bg-white'} border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'} z-50`}>
      <div className="max-w-md mx-auto px-4">
        <nav className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="relative flex flex-col items-center gap-1 py-2 px-4 transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FF6B00]/10 rounded-2xl"
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                  />
                )}
                <Icon
                  className={`w-6 h-6 transition-colors relative z-10 ${
                    isActive
                      ? 'text-[#FF6B00]'
                      : isDarkMode
                      ? 'text-white/60'
                      : 'text-gray-400'
                  }`}
                  fill={isActive ? 'currentColor' : 'none'}
                />
                <span
                  className={`text-xs relative z-10 ${
                    isActive
                      ? 'text-[#FF6B00]'
                      : isDarkMode
                      ? 'text-white/60'
                      : 'text-gray-400'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
