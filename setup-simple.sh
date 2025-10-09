#!/bin/bash

echo "🎭 Setting up Speakeasy Simple Version..."

# Backup original files
echo "📦 Backing up original files..."
mv package.json package-full.json 2>/dev/null || true
mv src/App.tsx src/App-full.tsx 2>/dev/null || true
mv src/main.tsx src/main-full.tsx 2>/dev/null || true
mv src/index.css src/index-full.css 2>/dev/null || true
mv tailwind.config.js tailwind-full.config.js 2>/dev/null || true
mv index.html index-full.html 2>/dev/null || true

# Copy simple files
echo "🔄 Installing simple version..."
cp package-simple.json package.json
cp src/App-simple.tsx src/App.tsx
cp src/main-simple.tsx src/main.tsx
cp src/index-simple.css src/index.css
cp tailwind-simple.config.js tailwind.config.js
cp index-simple.html index.html

# Copy simple UI components
cp src/components/ui/button-simple.tsx src/components/ui/button.tsx
cp src/components/ui/card-simple.tsx src/components/ui/card.tsx
cp src/components/ui/input-simple.tsx src/components/ui/input.tsx
cp src/lib/context-simple.tsx src/lib/context.tsx

# Copy simple screens
cp src/components/screens/welcome-screen-simple.tsx src/components/screens/welcome-screen.tsx
cp src/components/screens/login-screen-simple.tsx src/components/screens/login-screen.tsx
cp src/components/screens/city-selector-screen-simple.tsx src/components/screens/city-selector-screen.tsx

echo "✅ Simple version setup complete!"
echo ""
echo "🚀 To run the app:"
echo "   npm install"
echo "   npm run dev"
echo ""
echo "📱 The simplified version includes:"
echo "   • Welcome screen with featured events"
echo "   • Login/signup screens"
echo "   • City selector"
echo "   • Basic main app placeholder"
echo "   • Minimal dependencies (React, Tailwind, Lucide icons)"
echo ""
echo "🔄 To restore full version later:"
echo "   ./setup-full.sh"
