import { motion } from 'motion/react';
import { ChevronRight, Award, Star, MessageSquare, Bell, Moon, Sun, LogOut, Edit2 } from 'lucide-react';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

interface ProfileScreenProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onLogout: () => void;
}

export default function ProfileScreen({ isDarkMode, onToggleDarkMode, onLogout }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] pb-24">
      {/* Header */}
      <div className="px-6 py-8">
        <h1 className="text-white text-3xl mb-8">Perfil</h1>

        {/* User Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] rounded-3xl p-6 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

          <div className="relative flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
              😊
            </div>
            <div className="flex-1">
              <h2 className="text-white text-2xl mb-1">Alex Morgan</h2>
              <p className="text-white/80">alex.morgan@email.com</p>
            </div>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-colors">
              <Edit2 className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="text-white text-2xl">47</div>
              <div className="text-white/70 text-sm">Avaliações</div>
            </div>
            <div className="text-center">
              <div className="text-white text-2xl">128</div>
              <div className="text-white/70 text-sm">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-white text-2xl">2.340</div>
              <div className="text-white/70 text-sm">Pontos</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Achievements */}
      <div className="px-6 mb-6">
        <h3 className="text-white mb-4">Conquistas</h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {['🏆', '⭐', '🎯', '💎', '🔥'].map((emoji, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center min-w-[80px]"
            >
              <div className="text-3xl mb-2">{emoji}</div>
              <div className="text-white/60 text-xs">Nível {i + 1}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 space-y-2">
        <h3 className="text-white mb-4">Configurações</h3>

        {/* My Reviews */}
        <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 transition-colors">
          <div className="bg-[#FF6B00]/20 p-2 rounded-xl">
            <Star className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <span className="text-white flex-1 text-left">Minhas Avaliações</span>
          <ChevronRight className="w-5 h-5 text-white/40" />
        </button>

        {/* My Posts */}
        <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 transition-colors">
          <div className="bg-[#FF6B00]/20 p-2 rounded-xl">
            <MessageSquare className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <span className="text-white flex-1 text-left">Meus Posts</span>
          <ChevronRight className="w-5 h-5 text-white/40" />
        </button>

        {/* Notifications */}
        <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 transition-colors">
          <div className="bg-[#FF6B00]/20 p-2 rounded-xl">
            <Bell className="w-5 h-5 text-[#FF6B00]" />
          </div>
          <span className="text-white flex-1 text-left">Notificações</span>
          <ChevronRight className="w-5 h-5 text-white/40" />
        </button>

        <Separator className="bg-white/10 my-4" />

        {/* Dark Mode Toggle */}
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
          <div className="bg-[#FF6B00]/20 p-2 rounded-xl">
            {isDarkMode ? (
              <Moon className="w-5 h-5 text-[#FF6B00]" />
            ) : (
              <Sun className="w-5 h-5 text-[#FF6B00]" />
            )}
          </div>
          <span className="text-white flex-1 text-left">Dark Mode</span>
          <Switch checked={isDarkMode} onCheckedChange={onToggleDarkMode} />
        </div>

        <Separator className="bg-white/10 my-4" />

        {/* Logout */}
        <button onClick={onLogout} className="w-full bg-red-500/10 hover:bg-red-500/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 transition-colors">
          <div className="bg-red-500/20 p-2 rounded-xl">
            <LogOut className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-red-500 flex-1 text-left">Sair</span>
        </button>
      </div>

      {/* App Version */}
      <div className="text-center text-white/40 text-sm mt-8">
        FuelUp v1.0.0
      </div>
    </div>
  );
}
