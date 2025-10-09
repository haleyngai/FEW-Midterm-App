import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useApp } from '../../lib/context';
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, Apple, Chrome } from 'lucide-react';

export const SignupScreen: React.FC = () => {
  const { setCurrentScreen } = useApp();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate signup
    setCurrentScreen('city-selector');
  };

  const handleSocialSignup = (provider: string) => {
    // Simulate social signup
    setCurrentScreen('city-selector');
  };

  return (
    <div className="h-full bg-gradient-to-br from-night-950 via-night-900 to-night-800 text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-60 h-60 bg-neon-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
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
            <h1 className="text-3xl font-bold text-glow">Join Speakeasy</h1>
            <p className="text-white/70">Create your account to get started</p>
          </div>
        </div>
      </motion.div>

      {/* Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative z-10 px-6 pb-8"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Enter your full name"
                className="pl-12"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          </div>

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
                placeholder="Create a password"
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

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirm your password"
                className="pl-12 pr-12"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/60"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Terms */}
          <div className="text-sm text-white/60">
            By signing up, you agree to our{' '}
            <button className="text-gold-400 hover:text-gold-300">Terms of Service</button>
            {' '}and{' '}
            <button className="text-gold-400 hover:text-gold-300">Privacy Policy</button>
          </div>

          {/* Sign Up Button */}
          <Button type="submit" className="w-full h-14 text-lg font-semibold">
            Create Account
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/20" />
          <span className="px-4 text-sm text-white/60">or continue with</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Social Signup */}
        <div className="space-y-3">
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={() => handleSocialSignup('apple')}
          >
            <Apple className="w-5 h-5 mr-3" />
            Continue with Apple
          </Button>
          <Button
            variant="outline"
            className="w-full h-12"
            onClick={() => handleSocialSignup('google')}
          >
            <Chrome className="w-5 h-5 mr-3" />
            Continue with Google
          </Button>
        </div>

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <p className="text-white/70">
            Already have an account?{' '}
            <button
              className="text-gold-400 hover:text-gold-300 font-semibold transition-colors"
              onClick={() => setCurrentScreen('login')}
            >
              Sign In
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
