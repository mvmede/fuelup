import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, MapPin, Star, Navigation2, Phone, Clock } from 'lucide-react';
import { Station } from '../App';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import ReviewCard from './ReviewCard';
import PrimaryButton from './PrimaryButton';
import { Badge } from './ui/badge';

interface StationDetailsProps {
  station: Station;
  onBack: () => void;
}

export default function StationDetails({ station, onBack }: StationDetailsProps) {
  const [activeTab, setActiveTab] = useState('prices');

  return (
    <div className="min-h-screen bg-[#0B1B2B] pb-8">
      {/* Header */}
      <div className="relative bg-gradient-to-b from-[#FF6B00] to-[#FF8C00] rounded-b-3xl pb-8">
        <button
          onClick={onBack}
          className="absolute top-6 left-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div className="pt-20 px-6 text-center text-white">
          <div className="text-6xl mb-4">{station.logo}</div>
          <h1 className="text-3xl mb-2">{station.name}</h1>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <MapPin className="w-4 h-4" />
            <span>{station.distance} km de distância</span>
          </div>
        </div>

        {/* Price Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-6 py-4 shadow-2xl"
        >
          <div className="text-center">
            <div className="text-gray-500 text-sm mb-1">Comum</div>
            <div className="text-4xl text-[#0B1B2B]">R$ {station.price}</div>
            <div className="text-gray-500 text-sm">/litro</div>
          </div>
        </motion.div>
      </div>

      {/* Rating and Address */}
      <div className="px-6 mt-16 mb-6">
        <div className="flex items-center justify-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(station.rating)
                  ? 'text-[#FF6B00] fill-[#FF6B00]'
                  : 'text-gray-600'
              }`}
            />
          ))}
          <span className="text-white ml-2">
            {station.rating} ({station.reviews.length} avaliações)
          </span>
        </div>

        <div className="flex items-start gap-2 text-white/70 justify-center mb-6">
          <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
          <p className="text-center">{station.address}</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl p-4 flex items-center justify-center gap-2 transition-colors">
            <Navigation2 className="w-5 h-5" />
            <span>Rotas</span>
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-2xl p-4 flex items-center justify-center gap-2 transition-colors">
            <Phone className="w-5 h-5" />
            <span>Ligar</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full bg-white/10 p-1 rounded-2xl mb-6">
            <TabsTrigger value="prices" className="flex-1 rounded-xl data-[state=active]:bg-[#FF6B00]">
              Preços
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 rounded-xl data-[state=active]:bg-[#FF6B00]">
              Avaliações
            </TabsTrigger>
            <TabsTrigger value="details" className="flex-1 rounded-xl data-[state=active]:bg-[#FF6B00]">
              Detalhes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="prices" className="space-y-4">
            {/* Fuel Types */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white">Comum</span>
                <span className="text-2xl text-[#FF6B00]">R$ {station.prices.regular}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between items-center">
                <span className="text-white">Aditivada</span>
                <span className="text-2xl text-white">R$ {station.prices.premium}</span>
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex justify-between items-center">
                <span className="text-white">Diesel</span>
                <span className="text-2xl text-white">R$ {station.prices.diesel}</span>
              </div>
            </div>

            <div className="text-white/60 text-sm text-center">
              Última atualização: há 2 horas
            </div>
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            {station.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}

            <PrimaryButton className="w-full">Adicionar Avaliação</PrimaryButton>
          </TabsContent>

          <TabsContent value="details" className="space-y-4">
            {/* Amenities */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="text-white mb-3">Comodidades</h3>
              <div className="flex flex-wrap gap-2">
                {station.amenities.map((amenity) => (
                  <Badge key={amenity} variant="secondary" className="bg-[#FF6B00]/20 text-[#FF6B00] border-[#FF6B00]/30">
                    {amenity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5" />
                <span>Aberto 24 horas</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="text-white mb-3">Formas de Pagamento</h3>
              <div className="text-white/70">
                Dinheiro, Cartão de Crédito, Cartão de Débito, Pagamento por App
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
