#!/bin/bash

echo "🎭 Restoring Speakeasy Full Version..."

# Restore original files
echo "📦 Restoring full version files..."
mv package-full.json package.json 2>/dev/null || true
mv src/App-full.tsx src/App.tsx 2>/dev/null || true
mv src/main-full.tsx src/main.tsx 2>/dev/null || true
mv src/index-full.css src/index.css 2>/dev/null || true
mv tailwind-full.config.js tailwind.config.js 2>/dev/null || true
mv index-full.html index.html 2>/dev/null || true

echo "✅ Full version restored!"
echo ""
echo "🚀 To run the app:"
echo "   npm install"
echo "   npm run dev"
echo ""
echo "📱 The full version includes:"
echo "   • All 14+ screens and features"
echo "   • Complete booking flow"
echo "   • Advanced animations (Framer Motion)"
echo "   • Comprehensive UI components"
echo "   • Venue dashboard"
echo "   • All premium features"
