import { motion } from 'motion/react';
import { Droplet } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="h-screen bg-[#0B1B2B] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-6 rounded-3xl shadow-2xl"
            >
              <Droplet className="w-16 h-16 text-white" fill="white" />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white text-5xl mb-2"
        >
          FuelUp
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/70 text-lg"
        >
          Encontre os melhores preços de combustível
        </motion.p>
      </div>
    </div>
  );
}
