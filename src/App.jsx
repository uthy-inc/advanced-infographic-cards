import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { User, Mail, PieChart, DollarSign, TrendingUp, BarChart3, Target, Zap } from 'lucide-react'
import './App.css'

function App() {
  const [activeCard, setActiveCard] = useState(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Card data inspired by the provided designs
  const cardData = [
    {
      id: 1,
      title: "FIRST",
      subtitle: "User Analytics",
      icon: User,
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      step: "01"
    },
    {
      id: 2,
      title: "SECOND",
      subtitle: "Email Marketing",
      icon: Mail,
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      step: "02"
    },
    {
      id: 3,
      title: "THIRD",
      subtitle: "Data Analysis",
      icon: PieChart,
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      step: "03"
    },
    {
      id: 4,
      title: "FOURTH",
      subtitle: "Revenue Growth",
      icon: DollarSign,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      step: "04"
    }
  ]

  const optionCards = [
    {
      id: 'A',
      title: "OPTION A",
      icon: TrendingUp,
      color: "from-orange-400 to-orange-600",
      description: "Infographic elements with advanced animations and interactive features."
    },
    {
      id: 'B',
      title: "OPTION B",
      icon: BarChart3,
      color: "from-purple-400 to-purple-600",
      description: "Infographic elements with advanced animations and interactive features."
    },
    {
      id: 'C',
      title: "OPTION C",
      icon: Target,
      color: "from-indigo-400 to-indigo-600",
      description: "Infographic elements with advanced animations and interactive features."
    },
    {
      id: 'E',
      title: "OPTION E",
      icon: Zap,
      color: "from-green-400 to-green-600",
      description: "Infographic elements with advanced animations and interactive features."
    }
  ]

  const puzzleCards = [
    {
      id: 1,
      title: "TITLE 01",
      number: "1",
      color: "from-red-400 to-red-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 2,
      title: "TITLE 02",
      number: "2",
      color: "from-blue-400 to-blue-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    },
    {
      id: 3,
      title: "TITLE 03",
      number: "3",
      color: "from-indigo-400 to-indigo-600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Advanced UI Components
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Interactive infographic cards with scroll animations and hover effects
          </motion.p>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Main Content */}
      <div ref={containerRef} className="container mx-auto px-6 py-20">
        
        {/* Stepped Cards Section */}
        <motion.div 
          className="mb-32"
          style={{ y, opacity }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Infographics Elements
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {cardData.map((card, index) => (
              <SteppedCard 
                key={card.id} 
                card={card} 
                index={index}
                isActive={activeCard === card.id}
                onHover={() => setActiveCard(card.id)}
                onLeave={() => setActiveCard(null)}
              />
            ))}
          </div>
        </motion.div>

        {/* Option Cards Section */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Interactive Options
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {optionCards.map((card, index) => (
              <OptionCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Puzzle Cards Section */}
        <motion.div 
          className="mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-gray-800"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Connected Elements
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 max-w-4xl mx-auto">
            {puzzleCards.map((card, index) => (
              <PuzzleCard key={card.id} card={card} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Stepped Card Component
function SteppedCard({ card, index, isActive, onHover, onLeave }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotateY: 0,
        transition: { 
          delay: index * 0.2,
          duration: 0.8,
          ease: "easeOut"
        }
      } : {}}
      whileHover={{ 
        scale: 1.05,
        rotateY: 5,
        z: 50
      }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      style={{ perspective: "1000px" }}
    >
      {/* Step Number Banner */}
      <motion.div 
        className="absolute -top-4 -right-4 z-20 bg-white shadow-lg rounded-full w-16 h-16 flex items-center justify-center font-bold text-gray-700 border-4 border-gray-100"
        whileHover={{ 
          scale: 1.2,
          rotate: 360
        }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-lg">{card.step}</span>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        className={`relative h-96 rounded-3xl overflow-hidden shadow-xl ${card.bgColor} group-hover:shadow-2xl transition-all duration-500`}
        whileHover={{ 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
        }}
      >
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Diagonal Banner */}
        <motion.div 
          className={`absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br ${card.color} transform rotate-45 opacity-20 group-hover:opacity-30 transition-all duration-500`}
          whileHover={{ 
            scale: 1.2,
            rotate: 50
          }}
        />

        <div className="relative z-10 p-6 h-full flex flex-col">
          {/* Icon */}
          <motion.div 
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg`}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>

          {/* Content */}
          <div className="flex-1">
            <motion.h3 
              className={`text-2xl font-bold ${card.textColor} mb-2`}
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.3 }}
            >
              {card.title}
            </motion.h3>
            
            <motion.h4 
              className="text-lg font-semibold text-gray-600 mb-4"
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.4 }}
            >
              {card.subtitle}
            </motion.h4>
            
            <motion.p 
              className="text-gray-500 text-sm leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.5 }}
            >
              {card.description}
            </motion.p>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="mt-6 pt-4 border-t border-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.6 }}
          >
            <div className={`text-xs font-semibold ${card.textColor} uppercase tracking-wider`}>
              DATA
            </div>
          </motion.div>
        </div>

        {/* Hover Effect Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
      </motion.div>
    </motion.div>
  )
}

// Option Card Component
function OptionCard({ card, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1, 
        rotateX: 0,
        transition: { 
          delay: index * 0.15,
          duration: 0.7,
          ease: "easeOut"
        }
      } : {}}
      whileHover={{ 
        scale: 1.05,
        y: -10
      }}
      style={{ perspective: "1000px" }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
        whileHover={{ 
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
        }}
      >
        {/* Gradient Background */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
          initial={false}
        />

        {/* Color Bar */}
        <motion.div 
          className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${card.color}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div 
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4 shadow-md`}
            whileHover={{ 
              scale: 1.2,
              rotate: 360
            }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="text-lg font-bold text-gray-800 mb-3"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3 }}
          >
            {card.title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.4 }}
          >
            {card.description}
          </motion.p>
        </div>

        {/* Dots Indicator */}
        <motion.div 
          className="flex justify-center mt-6 space-x-1"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.15 + 0.6 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div 
              key={i}
              className="w-1 h-1 bg-gray-300 rounded-full"
              whileHover={{ 
                scale: 1.5,
                backgroundColor: "#6366f1"
              }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

// Puzzle Card Component
function PuzzleCard({ card, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      className="group cursor-pointer relative"
      initial={{ opacity: 0, x: index === 0 ? -100 : index === 2 ? 100 : 0, y: 50 }}
      animate={isInView ? { 
        opacity: 1, 
        x: 0, 
        y: 0,
        transition: { 
          delay: index * 0.2,
          duration: 0.8,
          ease: "easeOut"
        }
      } : {}}
      whileHover={{ 
        scale: 1.05,
        zIndex: 10
      }}
    >
      <motion.div 
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden min-h-[300px] w-80"
        whileHover={{ 
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
        }}
      >
        {/* Number Circle */}
        <motion.div 
          className={`absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
          whileHover={{ 
            scale: 1.2,
            rotate: 360
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-2xl font-bold text-white">{card.number}</span>
        </motion.div>

        {/* Puzzle Piece Shape */}
        <motion.div 
          className={`absolute top-0 right-0 w-8 h-8 bg-gradient-to-br ${card.color} opacity-20`}
          style={{
            clipPath: index === 0 ? 
              "polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0 100%)" :
              index === 1 ?
              "polygon(30% 0, 100% 0, 100% 100%, 0 100%, 0 30%)" :
              "polygon(0 0, 100% 0, 70% 100%, 0 100%)"
          }}
          whileHover={{ 
            scale: 1.1,
            opacity: 0.3
          }}
        />

        <div className="relative z-10 pt-6">
          {/* Title */}
          <motion.h3 
            className="text-xl font-bold text-gray-800 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {card.title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="text-gray-600 text-sm leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {card.description}
          </motion.p>

          {/* Bottom Label */}
          <motion.div 
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            <div className="text-lg font-bold text-gray-400 uppercase tracking-wider">
              Infographics
            </div>
            <div className="text-sm text-gray-500 mt-1">
              - Elements -
            </div>
          </motion.div>
        </div>

        {/* Connection Lines */}
        {index < 2 && (
          <motion.div 
            className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 z-20"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
          />
        )}
      </motion.div>
    </motion.div>
  )
}

export default App

