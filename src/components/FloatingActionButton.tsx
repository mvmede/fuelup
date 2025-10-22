import { motion } from 'motion/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface FloatingActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function FloatingActionButton({ children, className = '', ...props }: FloatingActionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`fixed bottom-24 right-6 bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] text-white w-16 h-16 rounded-full shadow-2xl shadow-[#FF6B00]/40 flex items-center justify-center z-40 ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
