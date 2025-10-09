import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`flex h-12 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300 ${className}`}
      {...props}
    />
  );
};
