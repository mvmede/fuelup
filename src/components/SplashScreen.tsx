import { motion } from "motion/react";
import logo from "../assets/logoicon.svg";

export default function SplashScreen() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="flex flex-col items-center text-center">

        {/* Logo animado */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}

          >
            <img
              src={logo}
              alt="FuelUp logo"
              className="w-32 h-32 md:w-28 md:h-28 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            />
          </motion.div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white font-sans font-bold text-4xl md:text-5xl md:font-sans md:font-bold tracking-tight mb-3"
        >
          FuelUp
        </motion.h1>


        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-white/70 text-lg md:text-xl max-w-sm"
        >
          Encontre os melhores preços de combustível
        </motion.p>
      </div>
    </div>
  );
}
