import { motion } from 'framer-motion'
import { HeartIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4">Grade.Coach</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              AI-powered intelligent grading and feedback that saves teachers time while improving student outcomes.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#problem-solution" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#social-proof" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Contact
                </a>
              </li>
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#waitlist" className="text-gray-300 hover:text-white transition-colors scroll-smooth">
                  Get Started
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>© {currentYear} Grade.Coach. Made with</span>
              <HeartIcon className="w-4 h-4 mx-1 text-red-500" />
              <span>for educators.</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a 
                href="#cookies" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
