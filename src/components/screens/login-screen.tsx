import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useApp } from '../../lib/context';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, Apple, Chrome } from 'lucide-react';

export const LoginScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    setCurrentScreen('main-app');
  };

  const handleSocialLogin = (provider: string) => {
    // Simulate social login
    setCurrentScreen('main-app');
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-16 px-6 pb-6"
      >
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            className="text-white/70 hover:text-white mr-4"
            onClick={() => setCurrentScreen('welcome')}
          >
            <ArrowLeft className="w-6 h-6" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-glow">Welcome Back</h1>
            <p className="text-white/70">Sign in to your account</p>
          </div>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="email"
                placeholder="Enter your email"
                className="pl-12"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="pl-12 pr-12"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In Button */}
          <Button type="submit" className="w-full h-14 text-lg font-semibold">
            Sign In
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-white/20" />
          <span className="px-4 text-sm text-white/60">or continue with</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={() => handleSocialLogin('apple')}
          >
            <Apple className="w-5 h-5 mr-3" />
            Continue with Apple
          </Button>
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={() => handleSocialLogin('google')}
          >
            <Chrome className="w-5 h-5 mr-3" />
            Continue with Google
          </Button>
        </div>

        {/* Sign Up Link */}
        <div className="text-center mt-8">
          <p className="text-white/70">
            Don't have an account?{' '}
            <button
              className="text-gold-400 hover:text-gold-300 font-semibold transition-colors"
              onClick={() => setCurrentScreen('signup')}
            >
              Sign Up
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
