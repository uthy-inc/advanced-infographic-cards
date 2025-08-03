# Advanced Infographic Cards

An interactive React UI component featuring advanced scroll animations and card hover effects, inspired by modern infographic designs.

## 🚀 Features

### 🎨 Visual Design
- **Hero Section**: Gradient background with animated floating elements
- **Stepped Cards**: 3D perspective transforms with numbered badges
- **Option Cards**: Clean design with gradient color bars and icons
- **Puzzle Cards**: Interconnected elements with connection lines

### ✨ Animations
- **Scroll Animations**: Smooth entrance animations triggered by scroll position
- **Hover Effects**: Scale, rotation, and elevation effects on card hover
- **3D Transforms**: Perspective-based animations for depth
- **Staggered Animations**: Sequential entrance animations for multiple elements
- **Floating Elements**: Continuous background animations

### 📱 Responsive Design
- Mobile-first responsive grid layouts
- Adaptive typography scaling
- Touch-friendly hover states
- Flexible card arrangements

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Framer Motion** - Advanced animations and gestures
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and development server

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/uthy-inc/advanced-infographic-cards.git
   cd advanced-infographic-cards
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📁 Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components (shadcn/ui)
├── assets/           # Static assets and images
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── App.jsx           # Main application component
├── App.css           # Global styles and Tailwind imports
└── main.jsx          # Application entry point
```

## 🎯 Component Sections

### 1. Hero Section
- Animated gradient background
- Floating geometric elements
- Smooth fade-in animations
- Responsive typography

### 2. Stepped Cards (Infographics Elements)
```jsx
// Features:
- Four themed cards (User Analytics, Email Marketing, Data Analysis, Revenue Growth)
- Numbered step badges with rotation animations
- Icon animations with scale effects
- 3D perspective transforms on hover
- Staggered entrance animations
```

### 3. Option Cards (Interactive Options)
```jsx
// Features:
- Four option cards with different color schemes
- Gradient color bars at the top
- Icon animations with rotation
- Animated dots indicators
- Smooth hover transitions
```

### 4. Puzzle Cards (Connected Elements)
```jsx
// Features:
- Three interconnected cards
- Unique puzzle piece shapes
- Connection lines between cards
- Number badges with animations
- Slide-in entrance effects
```

## 🎨 Customization

### Colors
The component uses a modern color palette with gradients:
- **Pink**: `from-pink-400 to-pink-600`
- **Orange**: `from-orange-400 to-orange-600`
- **Teal**: `from-teal-400 to-teal-600`
- **Blue**: `from-blue-400 to-blue-600`
- **Purple**: `from-purple-400 to-purple-600`
- **Indigo**: `from-indigo-400 to-indigo-600`
- **Green**: `from-green-400 to-green-600`

### Animation Timing
```jsx
// Entrance animations
transition: { delay: index * 0.2, duration: 0.8 }

// Hover effects
whileHover: { scale: 1.05, rotateY: 5 }

// Scroll animations
useInView(ref, { once: true, margin: "-100px" })
```

## 🔧 Development

### Available Scripts
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

### Code Style
- ESLint configuration included
- Prettier recommended for formatting
- Component-based architecture
- Custom hooks for reusable logic

## 📱 Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspiration from modern infographic templates
- Framer Motion for powerful animation capabilities
- Tailwind CSS for rapid styling
- shadcn/ui for beautiful component primitives

## 📸 Screenshots

The component features three main sections with smooth animations:

1. **Stepped Cards** - Numbered infographic elements with 3D effects
2. **Option Cards** - Clean option selection with gradient accents
3. **Puzzle Cards** - Interconnected elements with connection lines

---

**Built with ❤️ using React and Framer Motion**

