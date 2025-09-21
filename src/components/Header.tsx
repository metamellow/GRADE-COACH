import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
              🎓
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 transition-colors duration-300">
                Grade.Coach
              </span>
              <span className="text-xs font-medium text-gray-600 transition-colors duration-300">
                AI-Powered Grading
              </span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#features" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300 scroll-smooth"
            >
              Features
            </a>
            <a 
              href="#problem-solution" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300 scroll-smooth"
            >
              How It Works
            </a>
            <a 
              href="#social-proof" 
              className="font-medium text-gray-700 hover:text-primary-600 transition-colors duration-300 scroll-smooth"
            >
              Testimonials
            </a>
            <a 
              href="#waitlist" 
              className="btn-primary text-sm px-6 py-2 scroll-smooth"
            >
              Join Waitlist
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <a 
                href="#features" 
                className="block font-medium text-gray-700 hover:text-primary-600 transition-colors scroll-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#problem-solution" 
                className="block font-medium text-gray-700 hover:text-primary-600 transition-colors scroll-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#social-proof" 
                className="block font-medium text-gray-700 hover:text-primary-600 transition-colors scroll-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a 
                href="#waitlist" 
                className="block btn-primary text-center scroll-smooth"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Join Waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
