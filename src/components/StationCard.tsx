import { motion } from 'motion/react';
import { Star, MapPin, Navigation2 } from 'lucide-react';
import { Station } from '../App';

interface StationCardProps {
  station: Station;
  onClick: () => void;
}

export default function StationCard({ station, onClick }: StationCardProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full bg-white rounded-3xl p-5 shadow-2xl hover:shadow-3xl transition-shadow"
    >
      <div className="flex items-start gap-4">
        {/* Station Logo */}
        <div className="text-5xl">{station.logo}</div>

        {/* Station Info */}
        <div className="flex-1 text-left">
          <h3 className="text-[#0e0e0e] text-xl mb-1">{station.name}</h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(station.rating)
                    ? 'text-[#FF6B00] fill-[#FF6B00]'
                    : 'text-gray-300'
                  }`}
              />
            ))}
            <span className="text-gray-600 text-sm ml-1">{station.rating}</span>
          </div>

          {/* Distance */}
          <div className="flex items-center gap-1 text-gray-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{station.distance} mi away</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-right">
          <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] text-white rounded-2xl px-4 py-3">
            <div className="text-2xl">${station.price}</div>
            <div className="text-xs text-white/80">/gal</div>
          </div>
        </div>
      </div>

      {/* Navigate Button */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center gap-2 text-[#FF6B00]">
          <Navigation2 className="w-5 h-5" />
          <span>Get Directions</span>
        </div>
      </div>
    </motion.button>
  );
}
