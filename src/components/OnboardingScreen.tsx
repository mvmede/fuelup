import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Star, Users, ChevronRight } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

interface OnboardingSlide {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const slides: OnboardingSlide[] = [
  {
    icon: <MapPin className="w-20 h-20" />,
    title: 'Encontre o combustível mais barato',
    description: 'Descubra postos com os melhores preços na sua região com atualizações em tempo real',
  },
  {
    icon: <Star className="w-20 h-20" />,
    title: 'Avalie e comente postos',
    description: 'Compartilhe sua experiência e ajude outros motoristas a tomar decisões informadas',
  },
  {
    icon: <Users className="w-20 h-20" />,
    title: 'Junte-se à comunidade FuelUp',
    description: 'Conecte-se com motoristas, compartilhe dicas e fique atualizado sobre promoções',
  },
];

interface OnboardingScreenProps {
  onComplete: () => void;
}

export default function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="h-screen bg-[#0B1B2B] flex flex-col">
      {/* Skip button */}
      <div className="flex justify-end p-6">
        <button
          onClick={handleSkip}
          className="text-white/60 hover:text-white transition-colors"
        >
          Pular
        </button>
      </div>

      {/* Slides */}
      <div className="flex-1 flex items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <div className="mb-12 flex justify-center">
              <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] p-8 rounded-full text-white">
                {slides[currentSlide].icon}
              </div>
            </div>
            
            <h2 className="text-white text-3xl mb-4 px-4">
              {slides[currentSlide].title}
            </h2>
            
            <p className="text-white/70 text-lg px-4">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mb-8">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-[#FF6B00]'
                : 'w-2 bg-white/30'
            }`}
          />
        ))}
      </div>

      {/* Next/Get Started button */}
      <div className="px-8 pb-12">
        <PrimaryButton onClick={handleNext} className="w-full">
          {currentSlide === slides.length - 1 ? 'Começar' : 'Próximo'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </PrimaryButton>
      </div>
    </div>
  );
}
