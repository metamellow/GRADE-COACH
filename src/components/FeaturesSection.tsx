import { motion } from 'framer-motion'
import { 
  DocumentTextIcon, 
  ClockIcon, 
  UserGroupIcon, 
  ChartBarIcon, 
  AcademicCapIcon, 
  LightBulbIcon 
} from '@heroicons/react/24/outline'

const FeaturesSection = () => {
  const features = [
    {
      icon: DocumentTextIcon,
      title: "Works with Existing Materials",
      description: "Backward compatible with any worksheet - no need to change your teaching approach",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ClockIcon,
      title: "Instant Grading",
      description: "Auto-grade student responses with AI accuracy in seconds, not hours",
      color: "from-green-500 to-green-600"
    },
    {
      icon: UserGroupIcon,
      title: "Personalized Feedback",
      description: "Specific recommendations and insights tailored to each student's needs",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: ChartBarIcon,
      title: "Progress Tracking",
      description: "Long-term learning analytics and performance trends for data-driven decisions",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: AcademicCapIcon,
      title: "Time Savings",
      description: "Reduce teacher workload by 70% while maintaining assessment quality",
      color: "from-red-500 to-red-600"
    },
    {
      icon: LightBulbIcon,
      title: "Better Outcomes",
      description: "Data-driven student improvement with measurable learning progress",
      color: "from-yellow-500 to-yellow-600"
    }
  ]

  return (
    <section id="features" className="section-padding section-large-height bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-200/50 text-green-700 text-sm font-semibold mb-8">
            Powerful Features
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
            Everything You Need to Transform Assessment
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Powerful features designed specifically for modern educators who want to save time while improving student outcomes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer h-full"
            >
              <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover effect indicator */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-2xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Classroom?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of educators who are already saving time and improving student outcomes with Grade.Coach
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#waitlist" className="btn-primary text-lg px-8 py-4 scroll-smooth">
                Join the Waitlist
              </a>
              <a href="#social-proof" className="btn-secondary text-lg px-8 py-4 scroll-smooth">
                See Testimonials
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
