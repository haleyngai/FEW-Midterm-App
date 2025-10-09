import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    default: 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-yellow-500',
    outline: 'bg-white/5 backdrop-blur-md text-white border border-white/20 hover:border-yellow-500/50 focus:ring-yellow-500',
    ghost: 'text-white/70 hover:text-white hover:bg-white/10 focus:ring-white/50'
  };
  
  const sizeClasses = {
    default: 'h-12 px-6 py-3',
    sm: 'h-9 rounded-lg px-3',
    lg: 'h-14 rounded-xl px-8 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
