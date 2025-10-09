# Speakeasy - Live Entertainment Discovery Platform

A premium, dark-themed mobile app for discovering and booking live entertainment experiences across major US cities. Built with React, TypeScript, and Tailwind CSS.

## 🌟 Features

### Core Functionality
- **Multi-City Support**: NYC, Chicago, LA, Miami, Austin, Seattle
- **Event Discovery**: Browse events by category, date, location, and price
- **Interactive Maps**: Location-based event discovery with venue markers
- **Seamless Booking**: Complete ticket purchasing flow with secure payments
- **Digital Tickets**: QR code-based entry with offline access
- **User Profiles**: Personalized recommendations and booking history

### Design System
- **Dark, Moody Theme**: Premium nightlife-oriented visual design
- **Neon Accents**: Strategic use of neon colors for highlights
- **Smooth Animations**: Framer Motion powered transitions
- **Glass Effects**: Modern glassmorphism UI components
- **Responsive Design**: Optimized for mobile-first experience

## 📱 Screens & User Flow

### 1. Welcome & Discovery
- **Welcome Screen**: Featured events, categories, quick stats
- **City Selector**: Choose from 6 major US cities
- **Main App**: List/Map view toggle with filters

### 2. Authentication
- **Login Screen**: Email/password with social login options
- **Sign Up Screen**: Account creation with terms acceptance

### 3. Event Experience
- **Event Detail**: Immersive event information with reviews
- **Booking Flow**: Ticket selection, add-ons, pricing breakdown
- **Checkout**: Secure payment processing with multiple methods
- **Confirmation**: Booking details with QR code generation

### 4. User Management
- **Ticket Details**: Digital ticket with QR code and venue info
- **Search & Filter**: Advanced event discovery with filters
- **Notifications**: Customizable notification preferences
- **Help & Support**: FAQ, contact options, live chat

### 5. Venue Dashboard (Optional)
- **Analytics**: Revenue, ticket sales, performance metrics
- **Event Management**: Create, edit, and monitor events
- **Venue Stats**: Ratings, reviews, and growth metrics

## 🎨 Design Language

### Color Palette
- **Primary**: Gold (#f59e0b) - Premium, warm, inviting
- **Background**: Night gradients (#0d1117 to #343a40)
- **Accent**: Neon pink (#ff0080), blue (#00ffff), purple (#8000ff)
- **Text**: White with opacity variations for hierarchy

### Typography
- **Font**: Inter - Modern, readable, premium feel
- **Weights**: 300-900 for comprehensive hierarchy
- **Sizing**: Responsive scale from 12px to 48px

### Components
- **Cards**: Glass effect with subtle borders
- **Buttons**: Gradient backgrounds with hover states
- **Inputs**: Transparent backgrounds with focus rings
- **Icons**: Lucide React for consistency

## 🛠 Technical Stack

### Frontend
- **React 18**: Modern React with hooks and context
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling with custom theme
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Consistent iconography

### UI Components
- **Radix UI**: Accessible, unstyled components
- **Class Variance Authority**: Component variant management
- **Tailwind Merge**: Optimized class merging
- **Sonner**: Toast notifications

### Development
- **Vite**: Fast build tool and dev server
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with autoprefixer

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd speakeasy-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run preview
```

## 📱 Mobile-First Design

The app is designed with a mobile-first approach, featuring:

- **iPhone-like Container**: 430px max width with rounded corners
- **Status Bar**: Simulated iOS status bar
- **Touch-Friendly**: 44px minimum touch targets
- **Swipe Gestures**: Natural mobile interactions
- **Responsive Typography**: Scales appropriately across devices

## 🎭 User Experience

### Onboarding Flow
1. Welcome screen with featured events
2. City selection for location-based content
3. Optional account creation or guest browsing

### Discovery Experience
- **Visual Hierarchy**: Clear event cards with essential info
- **Quick Filters**: Genre, price, date, location
- **Smart Search**: Real-time suggestions and results
- **Map Integration**: Geographic event discovery

### Booking Journey
- **Progressive Disclosure**: Step-by-step booking process
- **Price Transparency**: Clear pricing breakdown
- **Secure Payments**: Multiple payment options
- **Instant Confirmation**: Immediate ticket delivery

## 🔧 Customization

### Theme Configuration
Edit `tailwind.config.js` to customize:
- Color palette
- Typography scale
- Animation timings
- Component variants

### Content Management
Update event data in context files:
- Event listings
- Venue information
- City configurations
- User preferences

## 📊 Performance

### Optimizations
- **Code Splitting**: Lazy-loaded components
- **Image Optimization**: WebP format with fallbacks
- **Bundle Analysis**: Optimized dependency tree
- **Caching**: Strategic caching strategies

### Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## 🔒 Security

### Payment Security
- **PCI Compliance**: Secure payment processing
- **Tokenization**: No sensitive data storage
- **Encryption**: End-to-end data protection

### User Privacy
- **GDPR Compliance**: Data protection regulations
- **Cookie Management**: Minimal tracking
- **Data Minimization**: Only necessary data collection

## 🌐 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Progressive Enhancement**: Graceful degradation

## 📈 Future Enhancements

### Planned Features
- **Social Features**: Friend connections and event sharing
- **AR Integration**: Venue previews and navigation
- **AI Recommendations**: Personalized event suggestions
- **Live Streaming**: Virtual event experiences
- **Loyalty Program**: Rewards and exclusive access

### Technical Roadmap
- **PWA Support**: Offline functionality
- **Push Notifications**: Real-time updates
- **Analytics Integration**: User behavior tracking
- **A/B Testing**: Feature experimentation
- **Internationalization**: Multi-language support

## 📄 License

This project is created for educational purposes as part of a UI/UX design assignment.

## 🤝 Contributing

This is a design prototype created for academic purposes. For questions or feedback, please contact the development team.

---

**Speakeasy** - Where the night comes alive. 🌙✨
