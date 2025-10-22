import { motion } from 'motion/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={`bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white rounded-2xl px-6 py-4 flex items-center justify-center hover:shadow-xl hover:shadow-[#FF6B00]/30 transition-shadow disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
