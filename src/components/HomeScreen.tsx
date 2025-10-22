import { useState } from 'react';
import { motion } from 'motion/react';
import { Search, SlidersHorizontal, Navigation } from 'lucide-react';
import { Station } from '../App';
import StationCard from './StationCard';
import { Input } from './ui/input';

interface HomeScreenProps {
  onStationSelect: (station: Station) => void;
}

const mockStations: Station[] = [
  {
    id: '1',
    name: 'Posto Shell Express',
    logo: '🛢️',
    price: 5.89,
    rating: 4.5,
    distance: 0.3,
    lat: 37.7749,
    lng: -122.4194,
    address: 'Rua Principal, 123 - São Paulo, SP',
    amenities: ['Lava-Rápido', 'Loja de Conveniência', 'Calibragem'],
    prices: { regular: 5.89, premium: 6.29, diesel: 6.09 },
    reviews: [
      {
        id: 'r1',
        userId: 'u1',
        userName: 'Sarah Johnson',
        userAvatar: '👩',
        rating: 5,
        comment: 'Ótimos preços e instalações limpas!',
        date: 'há 2 dias'
      },
      {
        id: 'r2',
        userId: 'u2',
        userName: 'Mike Chen',
        userAvatar: '👨',
        rating: 4,
        comment: 'Boa localização, equipe simpática.',
        date: 'há 1 semana'
      }
    ]
  },
  {
    id: '2',
    name: 'Posto Ipiranga',
    logo: '⛽',
    price: 5.95,
    rating: 4.2,
    distance: 0.5,
    lat: 37.7849,
    lng: -122.4094,
    address: 'Av. Paulista, 456 - São Paulo, SP',
    amenities: ['Caixa Eletrônico', 'Banheiros'],
    prices: { regular: 5.95, premium: 6.35, diesel: 6.15 },
    reviews: [
      {
        id: 'r3',
        userId: 'u3',
        userName: 'Emma Davis',
        userAvatar: '👩‍🦰',
        rating: 4,
        comment: 'Preços razoáveis, fácil acesso pela rodovia.',
        date: 'há 3 dias'
      }
    ]
  },
  {
    id: '3',
    name: 'Posto BR',
    logo: '🔴',
    price: 6.02,
    rating: 3.8,
    distance: 0.8,
    lat: 37.7649,
    lng: -122.4294,
    address: 'Rua do Parque, 789 - São Paulo, SP',
    amenities: ['Loja de Conveniência'],
    prices: { regular: 6.02, premium: 6.42, diesel: 6.22 },
    reviews: [
      {
        id: 'r4',
        userId: 'u4',
        userName: 'John Smith',
        userAvatar: '👨‍💼',
        rating: 4,
        comment: 'Posto confiável, aberto 24 horas.',
        date: 'há 5 dias'
      }
    ]
  },
  {
    id: '4',
    name: 'Posto Ale',
    logo: '🟢',
    price: 5.79,
    rating: 4.7,
    distance: 1.2,
    lat: 37.7549,
    lng: -122.4394,
    address: 'Rua do Vale, 321 - São Paulo, SP',
    amenities: ['Lava-Rápido', 'Caixa Eletrônico', 'Loja de Conveniência'],
    prices: { regular: 5.79, premium: 6.19, diesel: 5.99 },
    reviews: [
      {
        id: 'r5',
        userId: 'u5',
        userName: 'Lisa Wong',
        userAvatar: '👩‍💻',
        rating: 5,
        comment: 'Melhores preços da região! Sempre limpo.',
        date: 'há 1 dia'
      }
    ]
  }
];

export default function HomeScreen({ onStationSelect }: HomeScreenProps) {
  const [selectedMapStation, setSelectedMapStation] = useState<Station>(mockStations[0]);

  return (
    <div className="h-screen bg-[#0B1B2B] flex flex-col pb-20">
      {/* Search Bar */}
      <div className="p-4 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
          <Input
            placeholder="Buscar postos ou tipo de combustível"
            className="pl-12 pr-12 h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-2xl"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#FF6B00] hover:bg-[#FF8C00] p-2 rounded-xl transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Location indicator */}
        <div className="flex items-center gap-2 text-white/60">
          <Navigation className="w-4 h-4" />
          <span>San Francisco, CA</span>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-[#1a2838] mx-4 rounded-3xl overflow-hidden">
        {/* Mock Map with Markers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2838] to-[#0B1B2B]">
          {/* Grid pattern to simulate map */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(#FF6B00 1px, transparent 1px), linear-gradient(90deg, #FF6B00 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
          
          {/* Mock markers */}
          {mockStations.map((station, index) => (
            <motion.button
              key={station.id}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setSelectedMapStation(station);
                onStationSelect(station);
              }}
              className={`absolute ${
                station.id === selectedMapStation.id
                  ? 'bg-[#FF6B00] scale-110'
                  : 'bg-white/90'
              } rounded-full p-3 shadow-lg transition-all hover:scale-110`}
              style={{
                left: `${20 + index * 20}%`,
                top: `${30 + (index % 2) * 20}%`
              }}
            >
              <span className="text-2xl">{station.logo}</span>
              {station.id === selectedMapStation.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap"
                >
                  <div className="text-xs text-[#0B1B2B]">${station.price}</div>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>

        {/* My Location Button */}
        <button className="absolute bottom-4 right-4 bg-white p-4 rounded-full shadow-xl hover:bg-gray-100 transition-colors">
          <Navigation className="w-5 h-5 text-[#0B1B2B]" fill="currentColor" />
        </button>
      </div>

      {/* Bottom Sheet - Nearest Station */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', damping: 20 }}
        className="absolute bottom-20 left-0 right-0 px-4"
      >
        <StationCard
          station={selectedMapStation}
          onClick={() => onStationSelect(selectedMapStation)}
        />
      </motion.div>
    </div>
  );
}
